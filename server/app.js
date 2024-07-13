// app.js
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from './db.js'; // Import mongoose from db.js

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define schema and model using mongoose
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({
  name: String,
  age: Number,
});

const ExampleModel = mongoose.model('Example', ExampleSchema);

// API endpoint to create a new example document
app.post('/api/examples', async (req, res) => {
  try {
    const { name, age } = req.body;
    const newExample = new ExampleModel({ name, age });
    await newExample.save();
    res.status(201).json(newExample); // Respond with the created document
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
