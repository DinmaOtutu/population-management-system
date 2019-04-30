import { Router } from 'express';
import verifyInputs from '../middlewares/verifyInputs';
import LocationController from '../controllers/LocationController';
import checkLocation from '../middlewares/checkLocationExist';

const router = Router();

router.post('/location', verifyInputs.locationRequestBody, checkLocation, LocationController.createLocation);
router.get('/location', LocationController.getLocation);
router.put('/location', verifyInputs.locationRequestBody, LocationController);
router.delete('/location', verifyInputs.locationRequestBody, LocationController);

export default router;
