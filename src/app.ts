import express from 'express';
import Routes from './routes/userRoutes';
import {get404, get500} from './controllers/error';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

const app = express();


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 

app.use(Routes);

app.use(get500);
app.use(get404);
app.listen(process.env.PORT ||3001);
