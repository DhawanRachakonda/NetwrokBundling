import React from 'react';

function SimpleTable(props) {
  return (
    <table className='product-details'>
      <tr>
        <td>
          Item Name
        </td>
        <td>
          Item Price
        </td>
        <td>
          Quantity
        </td>
        <td>
          Days Required
        </td>
      </tr>
      <tr>
        <td>{props.itemName}</td>
        <td>{props.itemPrice}</td>
        <td>{props.itemQuantity}</td>
        <td>{props.daysRequired}</td>
      </tr>
    </table>
  );
}

export default (SimpleTable);