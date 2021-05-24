const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(router);

app.listen(port, () =>  {
	console.log('Server online at http://localhost:3000!');
});