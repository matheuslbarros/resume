import homeAction from './controllers/home';
import errorAction from './controllers/error';
import registerAction from './controllers/register';
import authenticateAction from './controllers/authenticate';
import createProfileAction from './controllers/profile/create';
import updateProfileAction from './controllers/profile/update';

import authorizationHandler from './middlewares/authorizationHandler';

export default (router) => {
    router.get('/', homeAction);
    router.get('/error', errorAction);
    
    router.post('/api/register', registerAction);
    router.post('/api/authenticate', authenticateAction);
    
    router.post('/api/profile', authorizationHandler, createProfileAction);
    router.put('/api/profile', authorizationHandler, updateProfileAction);
};
