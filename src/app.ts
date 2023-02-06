import express from 'express';
import productsRoute from './router/products.route';
import userRoute from './router/users.route';
import ordersRoute from './router/orders.router';
// Fracisco costa

const app = express();

app.use(express.json());
app.use('/products', productsRoute);
app.use('/users', userRoute);
app.use('/orders', ordersRoute);

export default app;
