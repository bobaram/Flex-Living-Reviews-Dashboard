import { Request, Response, NextFunction } from 'express';

export default function (err: Error, req: Request, res: Response, next: NextFunction) {
    console.error('An unhandled error occurred:', err);
    res.status(500).send('Something failed on the server.');
}