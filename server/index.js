import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extendedn: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extendedn: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://<username>:<password>@cluster0.hdmfkho.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

//mongoose.set("useFindAndModify", false);
