import { Router } from 'express';
import locationRoutes from './location';

const app = Router();

app.use('/', locationRoutes);

export default app;
