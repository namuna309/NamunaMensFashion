// CSS
import './../css/qnas.css';

// Image
import banner from './../img/banner/collectionsBanner2_1.png'

// Library
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useQuery } from 'react-query';

// Component
import QuestionList from '../components/qna/questionLIst';
import QuestionDetail from '../components/qna/questionDetail';
import QeustionWrite from '../components/qna/questionWrite';


function QnAs() {

    let questionList = useQuery(['question-list'], async () => {
        let qList = await axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/qnas`)
            .then((qs) => {return qs.data;});
        return qList;
    })

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
                    <Route path='/' element={questionList.isLoading ? null : <><QuestionList questionList={questionList.data}/></>} />
                    <Route path=':qid/*' element={<QuestionDetail/>} />
                    <Route path='write' element={<QeustionWrite/>}/>
                </Routes>
                
            </div>
        </div>
    )
}


export default QnAs;
