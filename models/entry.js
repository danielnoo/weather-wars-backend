const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGO_URI;

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const entrySchema = new mongoose.Schema({
  bestWeather: {
    type: Object,
  },
  openWeather: {
    type: Object,
  },
  visualCrossing: {
    type: Object,
  },
  weatherApi: {
    type: Object,
  },
  weatherBit: {
    type: Object,
  },
  visionWeather: {
    type: Object,
  },
  date: {
    type: Date,
    required: true,
  },
});

/// create method to convert object to JSON and change a few fields
entrySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Entry", entrySchema);
