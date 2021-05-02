import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Selamun Aleyküm')
});

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => console.log(`DB Connection is Success Port is ${PORT} `))
    })
    .catch((error) =>{
        console.log(error)
    });
mongoose.set("useFindAndModify" , false);
