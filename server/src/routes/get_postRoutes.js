import { Router } from 'express';
import get_postController from '../controllers/get_postController.js';

const router = Router();

const { getProducts, addProducts } = get_postController;

router.route('').get(getProducts).post(addProducts);

export default router;