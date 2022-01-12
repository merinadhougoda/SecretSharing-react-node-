const express = require('express');
// import 'reflect-metadata';
const dotenv = require('dotenv');
import cors from 'cors';
import { resolve } from 'path';

import { globalErrorHandler } from 'common/http/middleware/global-error-handler';
// import { commonRouter } from 'common/http/route';
import { secretRouter } from 'secret/http/route';

const app = express();

/**
 * Initial setup.
 */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: resolve(__dirname, '../.env') });

/**
 * App routes.
 */
// app.use(commonRouter);
app.use(secretRouter);

/**
 * Register middlewares.
 */
app.use(globalErrorHandler);

export default app;
