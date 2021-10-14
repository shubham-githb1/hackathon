import * as React from "react";
import Box from "@mui/material/Box";
import "./widgetLg.css";
import BasicModal from "../modal/Modal";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flexEnd",
          p: 1,
          m: 1,
        }}>
        <Box sx={{ p: 1, flexGrow: 1 }}>
          <h3 className='widgetLgTitle'>Latest transactions</h3>
        </Box>
        <Box sx={{ p: 1 }}>
          <BasicModal />
        </Box>
      </Box>

      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Order Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
              alt=''
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Susan Carol</span>
          </td>
          <td className='widgetLgDate'>2 Jun 2021</td>
          <td className='widgetLgAmount'>$122.00</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
      </table>
    </div>
  );
}
