const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

// Handled Uncaught Exceptions

process.on('uncaughtException', err => {
  console.log(`ERROR : ${err.stack}`)
  console.log('Shutting Down Server Due To Uncaught Exceptions')
  process.exit(1)
})

// Setting up config file
dotenv.config({ path: "backend/config/config.env" });
// DB Connection
connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Started On PORT : ${process.env.Port} In ${process.env.NODE_ENV} Mode.`
  );
});

// Handle Unhandled Promise Rejections
process.on("unhandledRejection", (err) => {
  console.log(`ERROR : ${err.message}`);
  console.log("Shutting Down The Server Due To Unhandled Promise Rejections");
  server.close(() => {
    process.exit(1);
  });
});
