import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/productController.js';
const productRouter = express.Router();

productRouter.route('/').post(createProduct).get(getProducts);
productRouter.route('/:id').delete(deleteProduct).patch(updateProduct);

export default productRouter;

