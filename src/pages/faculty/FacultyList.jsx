import React from 'react';
import './FacultyList.css'; 

export default function FacultyList(){

    const Button = ({ type}) =>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
      }
    return(
        <div className='widgetLg'>
        <h3 className="widgetLgTitle">Faculty Details</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Faculty</th>
            <th className="widgetLgTh">FacultyCode</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Course</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="" 
              className="widgetLgImg" 
              />
              <span className="widgetLgName">Suson Carul</span>
            </td>
            <td className="widgetLgDate">10023</td>
            <td className="widgetLgAmount">$65.00</td>
            <td className="widgetLgStatus">
              <Button type="JAVA"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg"
              alt="" 
              className="widgetLgImg" 
              />
              <span className="widgetLgName">Jhon Smith</span>
            </td>
            <td className="widgetLgDate">10033</td>
            <td className="widgetLgAmount">$42.00</td>
            <td className="widgetLgStatus">
              <Button type="PYTHON"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoVg4Cp8QAJo0qm_nbHF27s78I9x1SD6gUfNDrh9k&s" 
              alt="" 
              className="widgetLgImg" 
              />
              <span className="widgetLgName">Karal</span>
            </td>
            <td className="widgetLgDate">10023</td>
            <td className="widgetLgAmount">$22.00</td>
            <td className="widgetLgStatus">
              <Button type="MERN"/>
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0W5e7xWQTARUze-4XIhv-A-Qgi-_wCrIwd85PNs&s" 
              alt="" 
              className="widgetLgImg" 
              />
              <span className="widgetLgName">Neezam</span>
            </td>
            <td className="widgetLgDate">10045</td>
            <td className="widgetLgAmount">$17.00</td>
            <td className="widgetLgStatus">
              <Button type="JAVA"/>
            </td>
          </tr>
        </table>
      </div>
    )
}