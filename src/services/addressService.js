const { Address } = require('../models/addressModel');


const getAllAddresses = async () => {
  try {
    const addresses = await Address.findAll();
    return addresses;
  } catch (error) {
    throw new Error(`Error fetching addresses: ${error.message}`);
  }
}

const getAddressById = async (id) => {
  try {
    console.log(id);
    const address = await Address.findByPk(id);
    if (!address) {
      throw new Error('Address not found');
    }
    return address;
  } catch (error) {
    throw new Error(`Error fetching address by ID: ${error.message}`);
  }
}

const createAddress = async (addressData) => {
  try {
    const address = await Address.findOne({ userId: addressData.userId });
    if(address){
        throw new Error('Address already exists for this user');
    }

    await Address.create({
        userId: addressData.userId,
        street: addressData.street,
        number: addressData.number,
        city: addressData.city,
        neighborhood: addressData.neighborhood,
        country: addressData.country,
    });
    return { message: "Address created successfully" };
  } catch (error) {
    throw new Error(`Error creating address: ${error.message}`);
  }
}

const updateAddress = async (id, addressData) => {
    try{
        if(!id) {
            throw new Error('ID is required');
        }

        const address = await Address.findByPk(id);
        if(!address) {
            throw new Error('Address not found');
        }

        await address.update({
            userId: addressData.userId,
            street: addressData.street,
            number: addressData.number,
            city: addressData.city,
            neighborhood: addressData.neighborhood,
            country: addressData.country,
            
        });

        return { message : 'Address updated successfully' };


    }catch(error){
        throw new Error(`Error updating address: ${error.message}`);
    }
}


const deleteAddress = async (id) => {
  try {
    const address = await Address.findByPk(id);
    if (!address) {
      throw new Error('Address not found');
    }
    await address.destroy();
    return { message : 'Address deleted successfully' };
  } catch (error) {
    throw new Error(`Error deleting address: ${error.message}`);
  }
}

module.exports = {
  getAllAddresses,
  getAddressById,
  createAddress,
  updateAddress,
  deleteAddress
}

    