require('dotenv').config()
const express = require("express");
const { spawn } = require("child_process");

const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 8080);

app.listen(8080, () => {
    console.log("Listening on localhost:8080");

    const email = process.env.MEGA_EMAIL;
    const password = process.env.MEGA_PASSWORD;

    if(!email || !password) {
        console.error("Missing environment variables MEGA_EMAIL or MEGA_PASSWORD");
        process.exit(1);
    }else{
        const mega = spawn("mega-cmd");

        mega.stdin.write(`login ${email} ${password}`);

        mega.stdout.on("data", (data) =>{
            console.error(`MEGA STDOUT: ${data}`);
        })

        mega.stderr.on("data", (data) => {
            console.error(`MEGA STDERR: ${data}`)
        })
    }
}) 



