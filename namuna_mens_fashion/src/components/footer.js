function Footer() {
    return (
        <footer id="footer">
            <div className="footer_inner">
                <div className="company_info">
                    <p className="title">COMPANY INFO</p>
                    <div>
                        <span>사업자 등록번호 : 123-45-66777</span>
                        <span className="bar">통신판매업신고 : 제 2222-서울강서-00011호</span>
                    </div>
                    <div>
                        <span>대표전화 : 1223-4255</span>
                        <span className="bar">(유료)팩스 : 122-335-1177</span>
                    </div>
                    <div>
                        <span>서울 강남구 언다리 111</span>
                        <span className="bar">(주)MD 대표이사 김아름, 해바라기부문장 남윤아</span>
                    </div>
                    <div>
                        <span>COPYRIGHT © 2023 NAMUNA ALL RIGHTS RESERVED.</span>
                    </div>
                </div>
                <div className="customer_service">
                    <p className="title">C/S CENTER</p>
                    <div>
                        <span className="ph_num">1223-4255</span>
                    </div>
                    <div>
                        <span>MON - FRI AM 10:00 ~ PM 05:00</span>
                    </div>
                    <div>
                        <span>LUNCH TIME PM 01:00 ~ PM 02:00</span>
                    </div>
                    <div>
                        <span>SAT / SUN / HOLIDAY OFF</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;