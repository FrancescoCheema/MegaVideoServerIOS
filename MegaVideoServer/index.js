// requires .env file
require('dotenv').config()
const express = require("express");
const { spawn } = require("child_process");

const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 8080);

app.listen(8080, () => {
    console.log("Listening on localhost:8080");
});

app.get("/", (_, res) => {

    const email = process.env.MEGA_EMAIL;
    const password = process.env.MEGA_PASSWORD;

    if(!email || !password) {
        return res.status(500).json({error: "Missing environment variables MEGA_EMAIL or MEGA_PASSWORD"});
    }

        const mega = spawn("mega-login", [email, password]);

        let output = "";

        mega.stdout.on("data", (data) =>{
            console.log(`MEGA STDOUT: ${data}`);
            output += data.toString();
        });

        mega.stderr.on("data", (data) => {
            console.error(`MEGA STDERR: ${data}`)
        });

        // once mega-cmd process is finished, send output back to client
        mega.on("close", (code) => {
            res.send(`<pre>${output}</pre>`)
        });
}); 



