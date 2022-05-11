const express = require('express');
const app = express();
const PORT = 8000;
const profileRouter = require('./router/profile');
const homeRouter = require('./router/home');

app.use(profileRouter);
app.use(homeRouter);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

