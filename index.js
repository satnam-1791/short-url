const express = require("express");
const app = express();
const urlRoute = require("./routes/url");
const { connectDB } = require("./database/config");
const URL = require("./models/user");
const StaticRoute = require('./routes/static')
const path = require('path');
const cookies = require('cookie-parser');
const UserRoute = require('./routes/user');
const {RestricttologinUser,checkAuth} = require("./controllers/middleware/authlogin");
app.set('view engine',"ejs")
app.set("views",path.resolve('./views'))
app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cookies());
app.use("/url", RestricttologinUser,urlRoute);
app.use("/user",checkAuth,UserRoute)
app.use('/',checkAuth,StaticRoute);



app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  console.log(shortId)
  const entry = await URL.findOneAndUpdate(
    {
        shortId:shortId
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectUrl)
});

connectDB()
  .then(() => {
    console.log("Success");
    app.listen(5500, () => {
      console.log("RUNNING");
    });
  })
  .catch((err) => {
    console.log(err);
  });
