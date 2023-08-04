// const mongoose = require("mongoose");

// const userShema = new mongoose.Schema({
//   firstName: { type: String },
//   lastName: { type: String },
//   email: { type: String },
//   occupation: { type: String },
//   phone: { type: Number },
//   city: { type: String },
// });


// const User = mongoose.model("User",userShema)

// module.exports = User
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection URL
const MONGODB_URI = 'mongodb+srv://ayoubok:Samir98939893@cluster0.5zoaygo.mongodb.net/'; // Replace with your MongoDB connection URL
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});
// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a simple data model using Mongoose
const FormDataSchema = new mongoose.Schema({
  lastNamename: String,
  firstName: String,
  email: String,
  occupation: String,
  city: String,
  phone: Number,
});

const FormData = mongoose.model('FormData', FormDataSchema);

// Route to save form data
app.post('/api/formdata', async (req, res) => {
  try {
    const { firstName, lastName, email,occupation,city,phone } = req.body;
    const formData = new FormData({  firstName, lastName, email,occupation,city,phone });
    await formData.save();
    res.status(201).json({ message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error sssssssss saving form data:', error);
    res.status(500).json({ message: 'Error saving form data' });
  }
});