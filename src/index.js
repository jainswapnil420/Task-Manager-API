const express = require('express');
require('./db/mongoose.js');
const UserRouter = require('./router/user.js');
const TaskRouter = require('./router/task.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(UserRouter);
app.use(TaskRouter);


app.listen(port, () => {
    console.log('server is up on ' + port);
})