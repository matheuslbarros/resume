import homeController from './controllers/home';
import errorController from './controllers/error';
import registerController from './controllers/register';

export default (router) => {
    router.get('/', homeController);
    router.get('/error', errorController);

    router.post('/api/register', registerController);
};
