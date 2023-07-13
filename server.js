const http = require('http');

const app = require('./backend/app'); 

// Port number
const PORT = 3000;

// Set Port number in the server
app.set('port',PORT);
const server = http.createServer(app);

server.listen(PORT);
