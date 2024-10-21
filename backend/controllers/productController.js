import expressAsyncHandler from "express-async-handler";
import Product from "../models/product.model.js";

export const createProduct = expressAsyncHandler(async(req, res) => {
   const product = req.body;
   if(!product.name || !product.price || !product.image){
      res.status(400);
      throw new Error('All fields are mandatory');
   }

   const newProduct = new Product(product);
   try{
      await newProduct.save();
      res.status(200).json({ success: true, data: newProduct});
   } catch(err) {
      res.status(500).json({ success: true, message: 'Server error'});
   }
});

export const deleteProduct = expressAsyncHandler(async(req, res) => {
   const product = await Product.findById(req.params.id);
   if(!product){
      res.status(400);
      throw new Error('Product cannot found');
   }

   try{
      await product.deleteOne();
      res.status(200).json({ success: true, data: product});
   } catch(err) {
      res.status(500).json({ success: true, message: 'Server error'});
   }
});

export const getProducts = expressAsyncHandler(async(req, res) => {
   try{
      const products = await Product.find();
      res.status(200).json({success: true, products: products});
   } catch(err) {
      res.status(400).json({success: false, message: 'Something went wrong'});
   }
});

export const updateProduct = expressAsyncHandler(async(req, res) => {
   try{
      const product = await Product.findById(req.params.id);
      if(!product){
         res.status(400);
         throw new Error('Product cannot found');
      }

      const {name, price, image} = req.body;
      product.name = name;
      product.price = price;
      product.image = image;

      const updatedProduct = await product.save();
      res.status(201).json({success: true, product: updatedProduct});
   } catch(err) {
      res.status(400).json({success: false, message: 'Something went wrong'});
   }
});