// Table
import Table from 'react-bootstrap/Table';

// Lirbrary
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// 총 페이지 수 및 페이지 그룹 추출
let totalPage = 1;
let totalPageGroup = 1;

axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/qnas/lists`)
  .then((lst) => {
    totalPage = Math.ceil(lst.data / 5);
    console.log(totalPage);
    totalPageGroup = Math.ceil(totalPage / 5); 
    console.log(totalPageGroup);
  }
)

function QuestionList() {
  // 현재 페이지 위치
  let { curPage } = useParams();
  // 현재 그룹 위치
  let [pageGroup, setGroup] = useState(1);
  // Q&A 게시판 요청 시 시작 페이지 번호 와 끝 페이지 번호
  let [startPage, setStart] = useState(1);
  let [endPage, setEnd] = useState(pageGroup * 5);

  // 화면에 표시될 페이지 번호 리스트
  let [pageArray, setArray] = useState([]);
  

  // Q&A 게시판 요청 시 시작 페이지 번호 와 끝 페이지 번호 추출 및 현재 페이지의 질문 글 호출
  let [questionList, setList] = useState();


  // 첫 페이지 및 마지막 페이지 state 변수 할당
  useEffect(() => {
    setStart(1);
    setEnd(totalPage);
  }, [])

  // 현재 페이지의 질문글 조회
  useEffect(() => {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/qnas/${curPage}/list`)
      .then((qs) => setList(qs.data));
  }, [curPage])

  // next, previous 버튼 누를 시 화면에 표시될 페이지 리스트 설정
  useEffect(() => {
    let start = (pageGroup - 1) * 5 + 1;
    let end = pageGroup * 5;
    if (end > totalPage) {
      end =totalPage;
    }

    let Arr = []
    
    for (let i = start; i <= end; i++) {
      Arr.push(i);
    }
    setArray(Arr);
    
  }, [pageGroup])

  return (
    <>
      <Table className='table-bordered table-hover'>
        <colgroup>
          {/* 번호 */}
          <col style={{ width: '10%' }} />
          {/* 제목 */}
          <col />
          {/* 작성자 */}
          <col style={{ width: '10%' }} />
          {/* 날짜 */}
          <col style={{ width: '12%' }} />
          {/* 조회수 */}
          <col style={{ width: '8%' }} />
        </colgroup>
        <thead>
          <tr className='table-light'>
            <th scope='col'>번호</th>
            <th scope='col'>제목</th>
            <th scope='col'>작성자</th>
            <th scope='col'>날짜</th>
            <th scope='col'>조회수</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {/* 질문글 */}
          {
            questionList == null ? null :
              questionList.map((question) => {
                return (
                  <tr>
                    <td>{question.questionId}</td>
                    <td><Link className='quetion' to={`./../detail/${question._id}`}>{question.title}</Link></td>
                    <td>{question.author}</td>
                    <td>{question.date}</td>
                    <td>{question.views}</td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
      <div style={{ width: "100%", height: "15px" }}></div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {/* previous 버튼 */}
          <li className={`page-item`}>
            <Link className='questions-previosPagination' to={curPage - 5 < 1 ? `./../${startPage}` :`./../${(pageGroup - 1) * 5}`} onClick={() => { if(pageGroup != 1) setGroup(pageGroup - 1);}}>
            <div className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </div>
            </Link>
          {/* 페이지 리스트 */}
          </li>
          {
            // 현재 페이지 표시
            pageArray.map((num) => {
              let active = '';
              console.log(`num: ${num}`);
              console.log(`curPage: ${curPage}`);
              if (num == curPage) active = 'active';
              return(
                <li className="page-item"><Link className={`questions-pagination ${active}`} to={`./../${num}`}><div className="page-link">{num}</div></Link></li>
              )
            })
          }
          {/* next 버튼 */}
          <li className='page-item'>
            <Link className='questions-nextPagination' to={curPage + 5 > totalPage ?`./../${endPage}` : `./../${(pageGroup - 1) * 5 + 1}`} onClick={
              () => { if(pageGroup != totalPageGroup ) setGroup(pageGroup + 1);
              }}>
            <div className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </div>
            </Link>
            
          </li>
        </ul>
      </nav>
      <div style={{ width: "100%", height: "15px" }}></div>
      <Link className="post-btn" to="./../write"><button type="button" className="btn btn-dark">문의하기</button></Link>
    </>
  )
}

export default QuestionList