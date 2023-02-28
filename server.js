const express = require("express");
const app = express();

app.use('/js', express.static('js'))
app.use('/style', express.static('style'))

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log("Server opened in port localhost:3000!");
});