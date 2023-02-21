const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// Setting up config file
dotenv.config({ path: "backend/config/config.env" });

// DB Connection
connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `Server Started On PORT : ${process.env.Port} In ${process.env.NODE_ENV} Mode.`
  );
});
