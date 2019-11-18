const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) =>{
  if (req.url === '/') {
    res.end('this the home directory');
  }

  if (req.url === '/products') {
    res.end('this the products directory');
  }
} );

server.listen(PORT, () => {
  console.log(`am listening on port ${port}`);
});

//this is the express version of creating a createServer
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', ejs);
app.use('express-static', public);

app.get('/', (req,res,next) =>{

  res.send('THIS IS THE PLACE WE ARE TALKING ABOUT');

});

app.listen(port, () => {
  console.log(`am on the server at port ${port}`);
});
