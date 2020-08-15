const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://odasUser:mSIQpaj71N41MKps@odas-cluster.anv7q.gcp.mongodb.net/maindb?retryWrites=true&w=majority', { useNewUrlParser: true,  useUnifiedTopology: true });

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  category: String, // What category the item belongs to
  name: String,
  inStock: { type: Number, default: 0 },
  price: String,
  description: String,
  hidden: { type: Boolean, default: false }, // Should the item be displayed to customers
  discount: { type: Number, default: 0 } // In float, so 38% would be 0.38
});

mongoose.model('items', itemSchema);

const categories = new Schema({
  name: String,
  subcategories: [ String ],
  subcategory: { type: Boolean, default: false }
});

module.exports = mongoose;
