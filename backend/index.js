// Importings dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

// Importing custom scripts
const { connMongo } = require("./dbconfig/mongo");
const { User } = require("./models/userModel");

connMongo();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const pathToJson = path.join(__dirname, "/localDataBase/data.json");

app.post("/register", async (req, res) => {
  const body = await req.body;
  // offline data storage
  fs.readFile(pathToJson, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }

    const newData = JSON.parse(data);
    const emailExist = newData.filter((item) => {
      if (item.email === body.email) {
        return item;
      }
    });
    if (emailExist.length > 0) {
    } else {
      newData.push(body);

      updated = JSON.stringify(newData);

      fs.writeFile(pathToJson, updated, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("data updated");
      });
    }
  });

  // online data adding in mongoose
  const { email, password, confirm } = body;

  try {
    const userCreating = await User.create({
      email: email,
      password: password,
    });
    const Created = await userCreating.save();
    console.log("User created with: " + Created);
    return res.json({ message: "User created successfully" });
  } catch (error) {
    console.log("Error in register route while creating user: " + error);
    return res.json({ message: "User creation failed" });
  }
});

app.listen(8000, (res) => {
  console.log("server is running");
});
