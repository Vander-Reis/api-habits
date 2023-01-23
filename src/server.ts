import Fastify from "fastify";
import cors from "@fastify/cors"
import { appRoutes } from './routes';
import * as dotenv from 'dotenv'

dotenv.config();

const app = Fastify();

app.register(cors);

app.register(appRoutes);
const ports = Number(process.env.PORTS)


app.listen({
  port: ports || 3333,
  // host: '192.168.18.65',
}).then(() => {
  console.log('Http Server running on', ports)
});