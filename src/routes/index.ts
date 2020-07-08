import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    return res.json({ messege: 'ola, mundo' });
});

export default routes;
