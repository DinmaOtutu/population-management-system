import { Router } from 'express';
import locationRoutes from './location';

const app = Router();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to population management API'
  });
});
app.use('/', locationRoutes);

export default app;
