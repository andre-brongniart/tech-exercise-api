// required modules and app.js

const http = require('http');
const app = require('./app');

// define port to be used
const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port, () => {
    console.log("Server restarted successfully")
});
