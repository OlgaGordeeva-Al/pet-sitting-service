const express = require('express');
const sittersRouter = require("./routes/sitters");
const servicesRouter = require("./routes/services");
const indexRouter = require("./routes/index");
const reviewsRouter = require("./routes/reviews");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", indexRouter);
app.use("/api/sitters", sittersRouter);
app.use("/api/services", servicesRouter);
app.use("/api/reviews", reviewsRouter);

app.listen(port, () => {
  console.log('Server was started on PORT:3000')
});
