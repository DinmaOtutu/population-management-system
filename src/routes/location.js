import { Router } from 'express';
import verifyInputs from '../middlewares/verifyInputs';
import LocationController from '../controllers/LocationController';

const router = Router();

router.post('/location', verifyInputs.locationRequestBody, LocationController);
router.get('/location', verifyInputs.locationRequestBody, LocationController);
router.put('/location', verifyInputs.locationRequestBody, LocationController);
router.delete('/location', verifyInputs.locationRequestBody, LocationController);

export default router;
