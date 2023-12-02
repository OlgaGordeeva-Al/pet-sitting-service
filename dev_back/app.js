const express = require('express');
const sittersRouter = require("./routes/sitters");
const servicesRouter = require("./routes/services");
const indexRouter = require("./routes/index");

const app = express();
const port = 3000;

app.use("/api", indexRouter);
app.use("/api/sitters", sittersRouter);
app.use("/api/services", servicesRouter);

app.listen(port, () => {
  console.log('Server was started on PORT:3000')
});