import express, { Express, Request, Response } from 'express';
import favicon from 'serve-favicon';
import { join } from 'path';

const app: Express = express();
const port = process.env.SERVER_PORT || 3000;

app.use(favicon(join(__dirname, 'public/favicon.ico')));
app.use('/public', express.static(join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.clear();
    console.log(`Server Started on ${port}!`);
});