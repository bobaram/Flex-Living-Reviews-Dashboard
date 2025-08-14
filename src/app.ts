    import express, { Application } from 'express';
    import { config } from './config';
    import setupRoutes from '../src/startup/routes';

    const app: Application = express();
    const port = config.port;

    setupRoutes(app);

    app.listen(port, () => {
        console.log(`Flex Living Reviews API listening at http://localhost:${port}`);
    });
    