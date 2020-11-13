import { Router } from 'express';

const routes = Router();

routes.post('/users', (request, response) => {
    const { name, email } = request.body;

    return response.json({});
});

export default routes;
