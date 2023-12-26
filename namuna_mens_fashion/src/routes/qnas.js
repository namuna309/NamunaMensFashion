// CSS
import './../css/qnas.css';

// Image
import banner from './../img/banner/collectionsBanner2_1.png'

// Library
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation  } from 'react-router-dom';

// Component
import QuestionList from '../components/qna/questionLIst';
import QuestionDetail from '../components/qna/questionDetail';
import QeustionWrite from '../components/qna/questionWrite';


function QnAs() {
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        let curPath = location.pathname;
        if(curPath == '/qnas' || curPath == '/qnas/') {
            navigate('./1');
        }
      }, [location]);

    return (
        <div className="qnas">
            <div className='qnas-banner'><img src={banner} /></div>
            <div style={{ width: '100%', height: '1px' }}></div>
            <div className='qnas-title'>
                <div><p>Q&A</p></div>
            </div>
            <div style={{ width: "100%", height: "1px" }}></div>
            <div className='qnas-containter'>
                <Routes>
                    <Route path=':curPage' element={<QuestionList/>} />
                    <Route path='detail/:qid/*' element={<QuestionDetail/>} />
                    <Route path='write' element={<QeustionWrite/>}/>
                </Routes>
                
            </div>
        </div>
    )
}


export default QnAs;