const AddressService = require('../services/addressService');


const getAllAddresses = async (req, res) => {
    try {
        const addresses = await AddressService.getAllAddresses();
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAddressById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const address = await AddressService.getAddressById(id);
        res.status(200).json(address);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createAddress = async (req, res) => {
    try {
        const addressData = req.body;
        const address = await AddressService.createAddress(addressData);
        res.status(201).json(address);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const addressData = req.body;
        const updatedAddress = await AddressService.updateAddress(id, addressData);
        res.status(200).json(updatedAddress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteAddress = await AddressService.deleteAddress(id);
        res.status(200).json(deleteAddress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllAddresses,
    getAddressById,
    createAddress,
    updateAddress,
    deleteAddress
};