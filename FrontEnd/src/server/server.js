import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';


const server = express();
server.use(express.static('dist'));

server.get('/', (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React App</title>
      </head>
      <body>
        <div id="mountNode">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `)
});

server.get('/findByCarReg', (req, res) => {
  const employeeProfile = [ 
    {firstName: "helen", lastName: "clarke", numPlate: "wk57 000", permitNum: 244, workPhone: 7800000000},
    {firstName: "hannah", lastName: "roby", numPlate: "B055 000", permitNum: 300, workPhone: 798000000},
    {firstName: "vanessa", lastName: "tsang", numPlate: "RO65 000", permitNum: 100, workPhone: 76000000}];
  res.send(JSON.stringify(employeeProfile));
});

server.listen(5500, () => console.log('Server is running...'));