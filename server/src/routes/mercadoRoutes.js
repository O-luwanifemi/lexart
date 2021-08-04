import { Router } from 'express';
import mercadoController from '../controllers/mercadoController.js';

const router = Router();

router.get('/phones', mercadoController.getPhones);
router.get('/televisions', mercadoController.getTelevisions);
router.get('/refrigerators', mercadoController.getRefrigerators);

export default router;