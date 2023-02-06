import express from 'express';
import productsRoute from './router/products.route';
// Fracisco costa

const app = express();

app.use(express.json());
app.use('/products', productsRoute);

export default app;
