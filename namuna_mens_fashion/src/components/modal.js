// React
import { useState, useEffect } from 'react';

// Jquery
import $ from 'jquery';

function Modal() {
    let [modalDisp, setModal] = useState('show-modal');
    let [email, setEmail] = useState('a@a.a');
    let [emailValid, setEValid] = useState('');
    let [subject, setSubject] = useState(' ');
    let [subjectValid, setSValid] = useState('');
    let [message, setMessagee] = useState(' ');
    let [messageValid, setMValid] = useState('');

    useEffect(() => {
        $('#close').on('click', function() {
            setModal('');
        })
        
        // 검은색 배경 클릭시 모달창 닫음
        $('.modal').on('click', function(e) {
            if ($('.modal').is($(e.target))) {
                setModal('');
            }
        })

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

    return (
        <>
            <div className={`modal ${modalDisp}`}>
                <div className="white-bg">
                    <div className="form-container">
                        <h2>Contact Us</h2>
                        <form className="gform" method="POST" action="https://script.google.com/macros/s/AKfycbwXarJaqeQQmggDHDaY-BWR1muP5m03xfaSnXbgqalh5q8EJXtiCPqBChxPFH_7ZLvS/exec" target='blankifr'>
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
        </>
    )
}

export default Modal;