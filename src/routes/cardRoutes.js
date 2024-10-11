import { Router } from 'express';
import { getCardDetails } from '../controllers/cardController.js';
import authenticate from '../middleware/auth.js';
const router = Router();

// Single secured endpoint for both card validity and state
router.get('/:cardNumber/details', authenticate, getCardDetails);

export default router;
