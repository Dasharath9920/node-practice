import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, 'Name is required']
   },
   price: {
      type: Number,
      required: [true, 'Price is required']
   },
   image: {
      type: String,
      required: true
   }
},
{
   timestamps: true
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;