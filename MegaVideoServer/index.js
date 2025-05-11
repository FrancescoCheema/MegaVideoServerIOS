const express = require("express");
const exec = require("child_process");

const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(8080, () => {
    console.log("Listening on localhost:8080")
})

app.post('/login', async(req, res) => {
    try{
        const {email, password} = req.body;
        const cmd = `mega-login ${email} ${password}`;
    }
    catch (error) {
        console.error(error);
        req.status(500).json({message: "Internal server error"});
    }
})


