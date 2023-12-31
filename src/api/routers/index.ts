import express from 'express';
import { checkApiKey, checkPermission } from '../auth/checkApiKey';

const router = express.Router();

//check api key
router.use(checkApiKey);
//check api key's permission
router.use(checkPermission('0000'));

router.use('/discounts', require('./discount'));
router.use('/checkout', require('./checkout'));
router.use('/products', require('./product'));
router.use('/cart', require('./cart'));
router.use('/', require('./auth'));

module.exports = router;
