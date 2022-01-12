import express from 'express';

import * as secretController from 'secret/http/controller/secret.controller';

const secretRouter = express.Router();

secretRouter.post('/secrets', secretController.postSecret);
secretRouter.get('/secrets/:id', secretController.getSingleSecret);
secretRouter.post('/private/:id', secretController.getPassphrase);

export { secretRouter };
 