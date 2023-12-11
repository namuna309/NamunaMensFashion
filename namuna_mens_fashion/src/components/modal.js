// React
import { useState, useEffect } from 'react';

// Jquery
import $ from 'jquery';

function Modal() {
    let [modalDisp, setModal] = useState('');
    let [email, setEmail] = useState('a@a.a');
    let [emailValid, setEValid] = useState('');
    let [subject, setSubject] = useState(' ');
    let [subjectValid, setSValid] = useState('');
    let [message, setMessagee] = useState(' ');
    let [messageValid, setMValid] = useState('');
    let [submit, setSubmit] = useState(false);

    useEffect(() => {
        $('.contact').on('click', function() {
            setModal('show-modal');
        })

        $('#close').on('click', function() {
            reset_modal(email, subject, message);
            setModal('');
        });
        
        
        // 검은색 배경 클릭시 모달창 닫음
        $('.modal').on('click', function(e) {
            if ($('.modal').is($(e.target))) {
                reset_modal(email, subject, message);
                setModal('');
            }
        });

        if (modalDisp == 'show-modal') {
            $('#mail-address').on('blur', () => {
                setEmail($('#mail-address').val().trim());
            });
            $('#mail-subject').on('blur', () => {
                setSubject($('#mail-subject').val().trim());
            });
            $('#mail-message').on('blur', () => {
                setMessagee($('#mail-message').val().trim());
            });
            
        } 
    }, [modalDisp]);

    useEffect(() => {
        $('#send').on('click', function() {
            if (submit) {
                reset_modal();
                setModal('');
                setSubmit(false);
            }
        })
        console.log(submit);
    }, [submit]);


    useEffect(() => {
        test_email(email);
    }, [email]);
    useEffect(() => {
        test_subject(subject);
    }, [subject]);
    useEffect(() => {
        test_message(message);
    }, [message]);

    
    function test_email(email) {
        if (/\S+@\S+\.\S+/.test(email) == false) {
            setEValid('is-invalid');
            return false;
        } else {
            if (emailValid == 'is-invalid') {
                setEValid('');
            }
            return true;
        }
    }

    function test_subject(subject) {
        if (subject.length < 1) {
            setSValid('is-invalid');
            return false;
        } else {
            if (subjectValid == 'is-invalid') {
                setSValid('');
            }
            return true;
        }
    }

    function test_message(message) {
        if (message.length < 1) {
            setMValid('is-invalid');
            return false;
        } else {
            if (subjectValid == 'is-invalid') {
                setMValid('');
            }
            return true;
        }
    }

    function test_submit(e, email, subject, message) {
        if (is_initial(email, subject, message)) {
            e.preventDefault();
        }
        if(!test_email(email) || !test_subject(subject) || !test_message(message)) {
            e.preventDefault();
        }
        else {
            alert('메일을 보내시겠습니까?');
            setSubmit(true);
        }
    }

    function is_initial(email, subject, message) {
        if (email == 'a@a.a' && subject == ' ' && message == ' ' && emailValid == '' && subjectValid == '' && messageValid == '') {
            return true;
        }
        else {
            return false;
        }
    }

    function reset_modal() {
        if (emailValid == 'is-invalid') {
            setEValid('');
        }
        if (subjectValid == 'is-invalid') {
            setSValid('');
        }
        if (messageValid == 'is-invalid') {
            setMValid('');
        }

    }
    return (
        <>
            <div className={`modal ${modalDisp}`}>
                <div className="white-bg">
                    <div className="form-container">
                        <h2>Contact Us</h2>
                        <form className="gform" method="POST" onSubmit={(e) => test_submit(e, email, subject, message)} action="https://script.google.com/macros/s/AKfycbwXarJaqeQQmggDHDaY-BWR1muP5m03xfaSnXbgqalh5q8EJXtiCPqBChxPFH_7ZLvS/exec" target='blankifr'>
                            <div className="mb-3">
                                <input type="text" className={`form-control ${emailValid}`} id="mail-address" name="email"
                                    placeholder="Email Address - name@example.com"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className={`form-control ${subjectValid}`} id='mail-subject' name="subject" placeholder="Subject"/>
                            </div>
                            <div className="mb-3">
                                <textarea className={`form-control ${messageValid}`} id="mail-message" name="message" rows="8"
                                    placeholder="Content"></textarea>
                            </div>
                            <div style={{width:"100%", height: "1px"}}></div>
                            <div className="button-container">
                                <button type="submit" className="btn btn-primary" id="send">Submit</button>
                                <div style={{width: "8px"}}></div>
                                <button type="button" className="btn btn-danger" id="close">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <iframe name='blankifr' style={{display:'none'}}></iframe>
        </>
    )
}

export default Modal;