const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Vamsi:Vamsi1136@atlascluster.pemw0gs.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=AtlasCluster';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
    global.food_items = fetched_data;
    console.log("Food items fetched: ", global.food_items);

    const foodCategoryData = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    global.foodCategory = foodCategoryData;
    console.log("Food categories fetched: ", global.foodCategory);
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
