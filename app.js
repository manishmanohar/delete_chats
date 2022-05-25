const express = require("express");
const axios = require("axios");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const TURN_TOKEN = process.env.TURN_TOKEN;

//add the numbers that you want to delete the chat for in the array below
const BLOCKED_NUMBERS = ["9199999999", "9188888888"];

//the following function takes the wa_id as the input and deletes the chat of those numbers. 
function delete_chat(wa_id) {
  console.log("chats deleted initiated");
  axios
    .delete("https://whatsapp.turn.io/v1/chats/" + wa_id, {
      headers: {
        Authorization: "Bearer " + TURN_TOKEN,
        Accept: "application/vnd.v1+json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("chat deleted executed");
    })
    .catch((err) => {
      console.log(err.message);
    });
}

app.use("/api/delete_chat", (req, res) => {
  res.status(200).json({ message: "ok" });

  //check whether the number where the message is coming from is a part of the blocked number array that we have defined in BLOCKED_NUMBERS.
  if (BLOCKED_NUMBERS.includes(req.body.contacts[0].wa_id)) {
    try {
      delete_chat(req.body.contacts[0].wa_id);
    } catch (err) {
      console.log(err.message);
    }
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});
