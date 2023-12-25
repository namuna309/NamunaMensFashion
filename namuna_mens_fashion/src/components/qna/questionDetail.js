// Library
import { useParams, Routes, Route, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

// Component
import QeustionModify from './questionModify';

function QuestionDetail() {
    let { qid } = useParams();
    let question = useQuery(['question'], async () => {
        let qData = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/qnas/${qid}`)
            .then((q) => { console.log(q.data); return q.data; });
        console.log(qData);
        return qData;
    })

    console.log(question.data);
    return (
        <Routes>
            <Route path='/' element={question.isLoading ? null : <QeustionTable question={question.data} />}/>
            <Route path='/modify' element={<QeustionModify question={question.data}/>}/>
        </Routes>
    )
}

function QeustionTable(props) {
    let question = props.question;
    return (
        <>
            <Table className='questionDetail-table'>
                <colgroup>
                    {/* 1 */}
                    <col style={{ width: '20%' }} />
                    {/* 2 */}
                    <col style={{ width: '20%' }} />
                    {/* 3 */}
                    <col style={{ width: '20%' }} />
                    {/* 4 */}
                    <col style={{ width: '20%' }} />
                    {/* 5 */}
                    <col style={{ width: '10%' }} />
                    {/* 6 */}
                    <col style={{ width: '10%' }} />
                </colgroup>
                <thead className='table-group-divider'>
                    <tr>
                        <td className='table-light' style={{ fontWeight: '700' }}>제목</td>
                        <td colSpan={5} style={{ fontWeight: '700' }}>{question.title}</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className='table-light' style={{ fontWeight: '700' }}>작성자</td>
                        <td>{question.author}</td>
                        <td className='table-light' style={{ fontWeight: '700' }}>작성일</td>
                        <td>{question.date}</td>
                        <td className='table-light' style={{ fontWeight: '700' }}>조회수</td>
                        <td>{question.views}</td>
                    </tr>
                    <tr>
                        <td className='table-light' style={{ fontWeight: '700' }}>내용</td>
                        <td colSpan={5}>{question.content}</td>
                    </tr>
                </tbody>
            </Table>
            <div style={{ width: "100%", height: "15px" }}></div>
            <div className='ctr-btn-container'>
            <div className='ctr-btn-box'>
            <div class="col-12">
                <Link className="question-modifying" to="./modify"><button class="btn btn-dark">수정</button></Link>
            </div>
            <div class="col-12">
                <Link className='question-deletion' to="./../"><button class="btn btn-dark" onClick={() => {
                    axios.delete(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/qnas/delete?id=${question._id}`).catch((err) => console.log(err));
                }}>삭제</button></Link>
            </div>
            </div>
            </div>
            
        </>
    )

}

export default QuestionDetail;