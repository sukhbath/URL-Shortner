const mongoose = require("mongoose");

module.exports = function ConnectDB() {
  mongoose
    .connect(
      "mongodb+srv://sukh:sukh@cluster0-7nszg.mongodb.net/URL?retryWrites=true&w=majority",
      { useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then((e) => console.log("DB Connected."))
    .catch((e) => {
      throw e;
      console.log("DB Connection failed.");
    });
};
