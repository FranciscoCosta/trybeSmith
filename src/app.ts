import express from 'express';
import productsRoute from './router/products.route';
import userRoute from './router/users.route';
// Fracisco costa

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', userRoute);

export default app;
