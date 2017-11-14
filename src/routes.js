import homeAction from './controllers/home';
import errorAction from './controllers/error';
import registerAction from './controllers/register';
import authenticateAction from './controllers/authenticate';

export default (router) => {
    router.get('/', homeAction);
    router.get('/error', errorAction);
    
    router.post('/api/register', registerAction);
    router.post('/api/authenticate', authenticateAction);
};
