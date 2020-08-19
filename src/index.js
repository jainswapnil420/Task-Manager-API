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


/* const Task = require('./models/task');
const User = require('./models/users');

main = async() => {
     const task = await Task.findById('5f3b91846c89d52044841f9e');
     await task.populate('owner').execPopulate();;
     console.log(task.owner); 

    const user = await User.findById('5f3b91606c89d52044841f9b');
    await user.populate('tasks').execPopulate();
    console.log(user.tasks);
}

main(); */