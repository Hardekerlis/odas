const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://odasUser:mSIQpaj71N41MKps@odas-cluster.anv7q.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true });

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: String, // What category the item belongs to
  name: String,
  inStock: Number,
  price: String,
  description: String,
  hidden: Boolean, // Should the item be displayed to customers
  discount: Number
});

module.exports = mongoose;
