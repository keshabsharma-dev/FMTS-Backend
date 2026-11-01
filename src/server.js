import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());

// Routes 
app.get('/', (req,res)=> "hello world");


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));