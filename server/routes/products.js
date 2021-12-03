import { Router } from 'express';
import { getAllProducts } from '../controllers/productController';

const productRouter = Router();

productRouter.get('/products', getAllProducts);

export default productRouter;
