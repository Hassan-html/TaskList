const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const pathToJson = path.join(__dirname, "/data.json");

app.post("/register", (req, res) => {
  const body = req.body;

  fs.readFile(pathToJson, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const newData = JSON.parse(data);
    const emailExist = newData.filter((item) => {
      if (item.email === body.email) {
        return item;
      }
    });
    if (emailExist.length > 0) {
      return res.json({ message: "email exist" });
    } else {
      newData.push(body);

      updated = JSON.stringify(newData);

      fs.writeFile(pathToJson, updated, (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("data updated");
      });
      res.json({ message: "form submited" });
    }
  });
});

app.listen(8000, (res) => {
  console.log("server is running");
});
