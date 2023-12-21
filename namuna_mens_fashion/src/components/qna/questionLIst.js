// Table
import Table from 'react-bootstrap/Table';

// Lirbrary
import { Link } from 'react-router-dom';


function QuestionList(props) {
  let questions = props.questionList;
  
  return ( 
    <>
    <Table className='table-bordered table-hover'>
        <colgroup>
        {/* 번호 */}
        <col style={{width: '10%'}}/>
        {/* 제목 */}
        <col/>
        {/* 작성자 */}
        <col style={{width: '10%'}}/>
        {/* 날짜 */}
        <col style={{width: '12%'}}/>
        {/* 조회수 */}
        <col style={{width: '8%'}}/>
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
          {
            questions == null ? null :
            questions.map((question, idx) => {
              return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td><Link className='quetion' to={`./${question._id}`}>{question.title}</Link></td>
                    <td>{question.author}</td>
                    <td>{question.date}</td>
                    <td>{question.views}</td>
                  </tr>
              )
            })
          }
        </tbody>
      </Table>
      <div style={{width: "100%", height: "15px"}}></div>
      <Link className="post-btn" to="./write"><button type="button" class="btn btn-dark">문의하기</button></Link>
      </>
  )
  }

  export default QuestionList