import { Application } from 'express';
import cors from 'cors';
import express from 'express';
import { config } from '../config';
import reviewsRouter from '../routes/reviews';
import error from '../middleware/error';

export default function (app: Application) {
    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send('Flex Living Reviews API is running!');
    });

    app.use(`${config.apiBaseUrl}/reviews`, reviewsRouter);

    app.use(error);
}
