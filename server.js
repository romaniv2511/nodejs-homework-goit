const app = require("./app");

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

const mongoose = require("mongoose");
require("dotenv").config();
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connects success"))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
