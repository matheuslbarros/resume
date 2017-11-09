import homeController from './controllers/home';
import errorController from './controllers/error';

export default (router) => {
    router.get('/', homeController);
    router.get('/error', errorController);
};
