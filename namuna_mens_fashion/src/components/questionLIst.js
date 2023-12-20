// CSS
import './../css/qnas.css';

// Table
import Table from 'react-bootstrap/Table';

function QuestionList() {
    return (
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>11</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>11</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@twitter</td>
            <td>11</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  export default QuestionList