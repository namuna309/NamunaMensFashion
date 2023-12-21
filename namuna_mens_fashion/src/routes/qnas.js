// CSS
import './../css/qnas.css';

// Image
import banner from './../img/banner/collectionsBanner2_1.png'

// Library
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Component
import QuestionList from '../components/questionLIst';
import QuestionDetail from '../components/questionDetail';
import { useQuery } from 'react-query';


function QnAs() {

    let questionList = useQuery(['question-list'], async () => {
        let qList = await axios.get('http://localhost:8081/qnas')
            .then((qs) => {console.log(qs.data);return qs.data;});
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
                    <Route path='/' element={questionList.isLoading ? null : <QuestionList questionList={questionList.data}/>} />
                    <Route path=':qid' element={<QuestionDetail/>} />
                </Routes>
                
            </div>
        </div>
    )
}


export default QnAs;
