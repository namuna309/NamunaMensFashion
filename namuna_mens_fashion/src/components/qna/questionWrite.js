// Library
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import $ from 'jquery';


function QeustionWrite() {

    let [title, setTitle] = useState(' ');
    let [titleValid, setTValid] = useState('');
    let [author, setAuthor] = useState(' ');
    let [authorValid, setAValid] = useState('');
    let [content, setContent] = useState(' ');
    let [contentValid, setCValid] = useState('');
    let [submit, setSubmit] = useState(false);

    useEffect(() => {
        
        $('#question-title').on('blur', () => {
            let t = $('#question-title').val().trim();
            test_title(t);
            setTitle(t);
        });
        $('#question-author').on('blur', () => {
            let a = $('#question-author').val().trim();
            test_author(a);
            setAuthor(a);
        });
        $('#question-content').on('blur', () => {
            let c = $('#question-content').val().trim();
            test_content(c);
            setContent(c);
        });
            
        
        return () => {
            $('#question-title').off('blur');
            $('#question-author').off('blur');
            $('#question-content').off('blur');   
        }
    }, [title, author, content]);

    useEffect(() => {
        if (submit) {
            setSubmit(false);
        }
    }, [submit]);

    function test_title(title) {
        if (title.length < 1) {
            setTValid('is-invalid border-danger');
            return false;
        } else {
            if (titleValid == 'is-invalid border-danger') {
                setTValid('');
            }
            return true;
        }
    }

    function test_author(author) {
        if (author.length < 1) {
            setAValid('is-invalid border-danger');
            return false;
        } else {
            if (authorValid == 'is-invalid border-danger') {
                setAValid('');
            }
            return true;
        }
        
    }

    function test_content(content) {
        if (content.length < 1) {
            setCValid('is-invalid border-danger');
            return false;
        } else {
            if (contentValid == 'is-invalid border-danger') {
                setCValid('');
            }
            return true;
        }
    }

    function test_submit(e, title, author, content) {
        if (is_initial(title, author, content)) {
            e.preventDefault();
        }
        else if(!test_title(title) || !test_author(author) || !test_content(content)) {
            e.preventDefault();
        }
        else {
            alert('문의글을 게시하시겠습니까?');
            setSubmit(true);
        }
    }

    function is_initial(title, author, content) {
        if (title == ' ' && author == ' ' && content == ' ' && titleValid == '' && authorValid == '' && contentValid == '') {
            return true;
        }
        else {
            return false;
        }
    }

    return(
        <form className='qnas-write-form' method="POST" onSubmit={(e) => test_submit(e, title, author, content)} action={`http://localhost:${process.env.REACT_APP_SERVER_PORT}/qnas/write`}>
            <Table className='table-bordered'>
                <colgroup>
                <col style={{width: '20%'}}/>
                <col/>
                </colgroup>
                <tr>
                    <td>제목</td>
                    <td><input id='question-title' className={`form-control border ${titleValid}`} type='text' name='title' placeholder='제목을 입력해주세요'/></td>
                </tr>
                <tr>
                    <td>작성자</td>
                    <td><input id='question-author' className={`form-control border ${authorValid}`} type='text' name='author' placeholder='이름을 입력해주세요'/></td>
                </tr>
                <tr>
                    <td>내용</td>
                    <td><textarea id='question-content' className={`form-control border ${contentValid}`} name='content' rows="10" placeholder='내용을 입력해주세요'/></td>
                </tr>
            </Table>
            <div style={{width: "100%", height: "15px"}}></div>
            <div className="col-12">
            <button className="btn btn-dark" type="submit">등록</button>
            </div>
        </form>
    )
}

export default QeustionWrite;