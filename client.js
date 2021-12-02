
const net = require('net');
// establishes a connection with the game server

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
// interpret incoming data as text

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: TAK");
  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };


