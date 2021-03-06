import homeAction from './controllers/home';
import errorAction from './controllers/error';
import registerAction from './controllers/register';
import authenticateAction from './controllers/authenticate';

import getProfileAction from './controllers/profile/get';
import createProfileAction from './controllers/profile/create';
import updateProfileAction from './controllers/profile/update';

import createExperienceAction from './controllers/profile/experience/create';
import updateExperienceAction from './controllers/profile/experience/update';
import deleteExperienceAction from './controllers/profile/experience/delete';

import authorizationHandler from './middlewares/authorizationHandler';

export default (router) => {
    router.get('/', homeAction);
    router.get('/error', errorAction);
    
    router.post('/api/register', registerAction);
    router.post('/api/authenticate', authenticateAction);
    
    router.get('/api/profile', authorizationHandler, getProfileAction);
    router.post('/api/profile', authorizationHandler, createProfileAction);
    router.put('/api/profile', authorizationHandler, updateProfileAction);

    router.post('/api/profile/experience', authorizationHandler, createExperienceAction);
    router.put('/api/profile/experience/:id', authorizationHandler, updateExperienceAction);
    router.delete('/api/profile/experience/:id', authorizationHandler, deleteExperienceAction);
};
