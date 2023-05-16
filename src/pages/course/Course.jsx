import React from 'react';
import './course.css';

export default function Course(){
    const Button = ({ type}) =>{
        return <button className={'widgetLgButton ' + type}>{type}</button>
      }
    return(
 
            <div className='widgetLg'>
            <h3 className="widgetLgTitle">Available Course</h3>
            <table className="widgetLgTable">
              <tr className="widgetLgTr">
                <th className="widgetLgTh">Duration</th>
                <th className="widgetLgTh">Amount</th>
                <th className="widgetLgTh">Course</th>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">8 month</td>
                <td className="widgetLgAmount">$65.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$42.00</td>
                <td className="widgetLgStatus">
                  <Button type="PYTHON"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">3 month</td>
                <td className="widgetLgAmount">$22.00</td>
                <td className="widgetLgStatus">
                  <Button type="MERN"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$17.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">8 month</td>
                <td className="widgetLgAmount">$65.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$42.00</td>
                <td className="widgetLgStatus">
                  <Button type="PYTHON"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">3 month</td>
                <td className="widgetLgAmount">$22.00</td>
                <td className="widgetLgStatus">
                  <Button type="MERN"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$17.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">8 month</td>
                <td className="widgetLgAmount">$65.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$42.00</td>
                <td className="widgetLgStatus">
                  <Button type="PYTHON"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">3 month</td>
                <td className="widgetLgAmount">$22.00</td>
                <td className="widgetLgStatus">
                  <Button type="MERN"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$17.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">8 month</td>
                <td className="widgetLgAmount">$65.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$42.00</td>
                <td className="widgetLgStatus">
                  <Button type="PYTHON"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">3 month</td>
                <td className="widgetLgAmount">$22.00</td>
                <td className="widgetLgStatus">
                  <Button type="MERN"/>
                </td>
              </tr>
              <tr className="widgetLgTr">
                <td className="widgetLgDate">6 month</td>
                <td className="widgetLgAmount">$17.00</td>
                <td className="widgetLgStatus">
                  <Button type="JAVA"/>
                </td>
              </tr>
            </table>
          </div>
    )
}