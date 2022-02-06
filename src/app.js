const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname,"../public");
const temPath = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs");
app.set("views", temPath);
hbs.registerPartials(partials_path);
app.use(express.static(staticPath));

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});
app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("*", (req, res)=>{
    res.render("404error",{
        errMsg : "Opps! Page Not Found"
    });
});

app.listen(port, ()=>{
    console.log(`Server listening on port  ${port}.....`);
});