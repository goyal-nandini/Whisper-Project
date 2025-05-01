//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// rendering html pages two times
// checking if the req.body.password is same as the ILoveProgramming
// may be simple just checking part is different!!

// full fredged code in in solution.js go and check it THAT IS BEST SOLUTION mine is okayish!!

import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const port = 3000;
const app = express();

const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.urlencoded({extended: true}));

app.post("/check", (req, res) => {
    console.log(req.body);
    if(req.body.password === "ILoveProgramming")
        res.sendFile(_dirname + "/public/secret.html");
    else 
        res.sendFile(_dirname + "/public/index.html");
});
//const password = "ILoveProgramming";
//const userPassword = req.body.password;
// userPassword === password ? res.sendFile(__dirname + "/public/secret.html") : res.redirect("/");

app.get("/", (req, res) => {
 res.sendFile(_dirname + "/public/index.html");
});

app.listen(port, () => console.log(`server is listening on port number ${port}`));

// dear if you see this simple why use solution.js so read this
// It is simpler, indeed:). However, in the "real world" this functionality could probably be expanded to an entire module. 
// Really large code in the Route section will destroy the structure of the application. 
// So, it's a really good opportunity to start getting familiar with  middleware on a small piece of code that is easy to 
// review and fix bugs.