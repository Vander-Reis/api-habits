import express  from "express";
import cors from "cors"
import { appRoutes } from './routes';
import * as dotenv from 'dotenv'

dotenv.config();

const app = express();

app.use(cors());

app.use(appRoutes);

const PORT = process.env.PORTS || 3000;


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))