const express = require('express');
const cors = require('cors');
const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        msg: "RunTest1: GET http://127.0.0.1:3000/user/mojeid",
        id
    });
});

app.get('/article/java/oop', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        msg: "RunTest2: GET http://127.0.0.1:3000/article/java/oop",
        id
    });
});

app.get('/comment/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send({
        msg: "RunTest3: GET http://127.0.0.1:3000/comment/ixd222",
        id
    });
});

app.post('/user', (req, res) => {
    const { payload } = req.body;
    res.status(201).send({
        msg: "RunTest4: POST http://127.0.0.1:3000/user -{ name: petr, age: 18}",
        payload
    });
});

app.post('/article', (req, res) => {
    const { payload } = req.body;
    res.status(201).send({
        msg: "RunTest5: POST http://127.0.0.1:3000/article -{ title: oop, category: java}",
        payload
    });
});

app.post('/category', (req, res) => {
    const { payload } = req.body;
    res.status(201).send({
        msg: "RunTest6: POST http://127.0.0.1:3000/article -{ name: java}",
        payload
    });
});

app.put('/user', (req, res) => {
    const { payload } = req.body;
    res.status(200).send({
        msg: "RunTest7: PUT http://127.0.0.1:3000/user -{ name: Radek, age: 20}",
        payload
    });
});

app.patch('/user', (req, res) => {
    const { payload } = req.body;
    res.status(200).send({
        msg: "RunTest8: PATCH http://127.0.0.1:3000/user -{ id: 123aswq12, name: Radek}",
        payload
    });
});

app.delete('/article', (req, res) => {
    const { payload } = req.body;
    res.status(200).send({
        msg: "RunTest9: DELETE http://127.0.0.1:3000/article -{ id: 123aswq12}",
        payload
    });
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
