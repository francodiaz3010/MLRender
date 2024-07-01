const express = require("express");
const app = express();
const path = require("path");
const port = 3000 || process.env.PORT ;
app.listen(port, () => console.log("server up in http://localhost:3000"));

app.get("/", (req,res) => {
    res.sendFile(path.resolve("./views/home.html"))
})
app.get("/register", (req, res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})

app.get("/login", (reg,res) =>{
    res.sendFile(path.resolve("./views/login.html"))
})

app.use(express.static("./public"))