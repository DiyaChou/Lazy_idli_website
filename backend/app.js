const express = require("express");
const mongoose = require("mongoose");
const https = require("https");
const http = require("http");
const fs = require("fs");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

app.use(express.json());

require("dotenv").config();
const port = process.env.PORT;

// Making Build Folder as Public
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

//mongodb connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MONGODB.."));

app.use(cors());

const sendEmail = (user) => {
  const tranporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.COMPANY_EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.COMPANY_EMAIL,
    to: user.email,
    subject: "Hello from Lazy Idli",
    html:
      "<p>Thank you for reaching out to us. Our representative will get in touch with you shortly!</p>" +
      "<b>Thank you, Have a nice day!</b><br/>Bikas Adhikari<br/>Software Engineer at Lazy Idli",
  };

  tranporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to " + user.name);
    }
  });
};

//import query schema
const Query = require("./models/QuerySchema");

//incoming request for query and save
app.post("/postQuery", async (req, res) => {
  const newQuery = new Query.queries(req.body);
  const newTopic = new Query.topics({
    queryID: newQuery._id,
    topics: req.body.topics,
  });

  try {
    await newQuery.save();
    await newTopic.save();
    console.log("Data successfully saved..");
    sendEmail(req.body);
    res.status(200).send("Successful");
  } catch (err) {
    return res.status(500).json(err);
  }
});
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/lazyidli.com/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/lazyidli.com/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/lazyidli.com/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// const httpServer = http.createServer(app);

// const httpsServer = https.createServer(
//   {
//     key: fs.readFileSync("server.key"),
//     cert: fs.readFileSync("server.cert"),
//   },
//   app
// );

httpServer.listen(8626, () => console.log(`Listening on port ${8626}`));
httpsServer.listen(port, () => console.log(`Listening on port ${port}`));
