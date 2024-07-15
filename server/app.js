import express from 'express';
import bodyParser from 'body-parser';
import './db.js';

import participantRouter from "./router/participantRouter.js";
import pbroomsRouter from "./router/pbroomsRouter.js";
import commentsRouter from "./router/commentRouter.js";

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());


app.use("/participants", participantRouter);
app.use("/pbrooms", pbroomsRouter);
app.use("/comments", commentsRouter);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;