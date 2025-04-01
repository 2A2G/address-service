const express = require('express');
const router = express.Router();
const { getAllAddresses, createAddress, updateAddress, deleteAddress, getAddressById } = require('../controllers/addressController');


router.get('/', getAllAddresses);
router.get('/:id', getAddressById);
router.post('/', createAddress);
router.put('/:id', updateAddress);
router.delete('/:id', deleteAddress);

module.exports = router;