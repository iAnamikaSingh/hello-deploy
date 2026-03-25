const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req,res) => {
    res.json({message: "Hi, I am Anamika"});
});
const port = 3000;
app.listen(port, () => console.log(`Server is running on the port ${port}`));
