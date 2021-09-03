import React from "react";

function MemberTable({ columns, data }) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, member_id, nickname, address, email_address, phone_number, join_date, total_orders, member_point }) => (
          <tr key={id}>
            <td>{member_id}</td>
            <td>{nickname}</td>
            <td>{address}</td>
            <td>{email_address}</td>
            <td>{phone_number}</td>
            <td>{join_date}</td>
            <td>{total_orders}</td>
            <td>{member_point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MemberTable;