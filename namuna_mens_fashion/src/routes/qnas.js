// CSS
import './../css/qnas.css';

// Image
import banner from './../img/banner/collectionsBanner2_1.png'

// Component
import QuestionList from '../components/questionLIst';

function QnAs() {
    return (
        <div className="qnas">
            <div className='qnas-banner'><img src={banner} /></div>
            <div style={{ width: '100%', height: '1px' }}></div>
            <div className='qnas-title'>
                <div><p>Q&A</p></div>
            </div>
            <div style={{ width: "100%", height: "1px" }}></div>
            <div className='qnas-containter'>
                <QuestionList/>
            </div>
        </div>
    )
}


export default QnAs;
