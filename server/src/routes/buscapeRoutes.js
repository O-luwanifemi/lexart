import { Router } from 'express';
import buscapeController from '../controllers/buscapeController.js';

const router = Router();

router.get('/phones', buscapeController.getPhones);
router.get('/televisions', buscapeController.getTelevisions);
router.get('/refrigerators', buscapeController.getRefrigerators);

export default router;