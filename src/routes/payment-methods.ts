import { ReadPaymentMethodsController } from '@/controllers/read-payment-methods';
import express from 'express';
const router = express.Router();

router.get('/', new ReadPaymentMethodsController().handle);

export default router;
