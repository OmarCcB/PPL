import React from 'react';

function Dashboard() {
  const data = [
    {
      orderNumber: '12345',
      date: '01/12/2024',
      company: 'Empresa XYZ',
      guide: 'GR-6789',
      invoice: 'FAC-1234',
    },
  ];

  return (
    <div>
      <h2>Tabla de Datos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Número de Pedido</th>
            <th>Fecha</th>
            <th>Empresa</th>
            <th>Guía</th>
            <th>Factura</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.orderNumber}</td>
              <td>{row.date}</td>
              <td>{row.company}</td>
              <td>{row.guide}</td>
              <td>{row.invoice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
