const express = require("express");
const userRoute = require("./routes/User");
const contactRoute = require("./routes/Contact");

const app = express();

app.use("/user", userRoute);
app.use("/user/:id", userRoute);
app.use("/user/:id/:companyid", userRoute);
app.use("/contact", contactRoute);

app.listen(5000, () => {
  console.log("server is running on ");
});
