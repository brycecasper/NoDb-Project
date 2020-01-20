const express = require('express');
const cors = require('cors');
const ctrl = require('./ctrl');

const app = express();

app.use(cors());
app.use(express.json());

//ENDPOINTS
app.post('/api/post', ctrl.create);
app.get('/api/post', ctrl.read);
app.put('/api/post/:id', ctrl.update);
app.delete('/api/post/:id', ctrl.delete);

const port = 8989;
app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
});