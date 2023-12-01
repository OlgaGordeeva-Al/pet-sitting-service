const express = require('express');
const sittersRouter = require("./routes/sitters");
const servicesRouter = require("./routes/services");
const indexRouter = require("./routes/index");

const app = express();
const port = 3000;

app.use("/", indexRouter);
app.use("/sitters", sittersRouter);
app.use("/services", servicesRouter);

app.listen(port, () => {
  console.log('Server was started on PORT:3000')
});