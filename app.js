import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import ConnectDB from "./app/config/connectDB.js";
import api from "./routes/api.js";

const app = express();

// CORS Policy
app.use(cors());
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

dotenv.config();

// CONNECTION START
const DB_URL = process.env.DB_URL;
ConnectDB(DB_URL);

// ROUTER 
app.use('/', api)

// SERVER START
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER START ON http://localhost:${PORT}`)
})