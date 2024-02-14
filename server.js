const express = require("express");

// for CORS (Cross Origin)
const cors = require("cors");

const app = express();

// for PORT Number
const PORT = 5000;

//--------Importing Routes-----------
const MockUserRoutes = require("./routes/userRoutes");

let StartServer = async () => {
  //----------Middleware Section-----------
  app.use(express.json());

  //-----------enabling cors so the frontend Client request is accepted ------------
  app.use(cors());

  //-----------Loading  Routes ------------
  app.use("/api/users/", MockUserRoutes);

  //----------- Listening to Server -----------
  app.listen(PORT, err => {
    if (err) throw err;
    console.log("server is running in port number 5000");
  });
};
StartServer();
