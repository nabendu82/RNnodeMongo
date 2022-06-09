require("dotenv").config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from './routes/auth';

const morgan = require('morgan');

const app = express();

mongoose.connect(process.env.DATABASE)
        .then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error(err));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(morgan('dev'));

//Route middlewares
app.use("/api", authRoutes);

app.listen(8000, () => console.log('Server started on port 8000'));