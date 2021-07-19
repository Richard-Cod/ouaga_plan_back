import express from 'express'
import appsMiddleWare from './middlewares/appsOne';

const app = express();
appsMiddleWare.apply(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
