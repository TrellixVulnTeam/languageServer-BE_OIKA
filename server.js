const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/search", require("./routes/search"));

app.get("/", (req, res) => {
	res.send(`<h1>Herolo Server</h1>`);
});

app.listen(process.env.PORT || 8000, () => {
	console.log(`im ready to work on port ${port}`);
});
