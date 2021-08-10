import cors from 'cors';
import express from 'express';
import mercadoRouter from './src/routes/mercadoRoutes.js';
import buscapeRouter from './src/routes/buscapeRoutes.js';
import get_postRouter from './src/routes/get_postRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', get_postRouter);
app.use('/mercado', mercadoRouter);
app.use('/buscape', buscapeRouter);

export default app;