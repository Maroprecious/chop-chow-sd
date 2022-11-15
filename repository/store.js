const { suppliers } = require("../db/dbMongo/config/db_buildSchema");

const createStore = async (payload) => {
  try {
    return await suppliers.create(payload);
  } catch (error) {
    console.log({ error });
  }
};

const updateStore = async (filter, payload) => {
  try {
    return await suppliers.findOneAndUpdate(filter, payload, { new: true });
  } catch (error) {
    console.log({ error });
  }
};

const getAllStores = async (page, filter) => {
  try {
    let getPaginate = await paginate(page, filter);
    const allProducts = await suppliers
      .find(filter || {})
      .limit(getPaginate.limit)
      .skip(getPaginate.skip)
      .populate("sugggested_meals_and_products store_account_users");
    return {
      products: allProducts,
    };
  } catch (error) {
    console.log({ error });
    throw {
      error: error,
      messsage: error.message || "Get all stores operation failed",
      code: error.code || 500,
    };
  }
};

const getStore = async (filter) => {
  try {
    return await suppliers
      .findOne(filter)
      .populate("sugggested_meals_and_products store_account_users");
  } catch (error) {
    console.log({ error });
    throw {
      error: error,
      messsage: error.message || "Get single store operation failed",
      code: error.code || 500,
    };
  }
};

const deleteStore = async (id) => {
  try {
    const deleteStore = await suppliers.deleteOne({ _id: id });
    if (deleteStore) {
      return { message: "store sucessfully removed" };
    }
  } catch (error) {
    console.log({ error });
    throw {
      error: error,
      messsage: error.message || "Delete store failed",
      code: error.code || 500,
    };
  }
};

const paginate = async (page, filter) => {
  const limit = parseInt(filter.limit) || 10;
  let skip = parseInt(page) === 1 ? 0 : limit * page;
  delete filter.limit;
  const docCount = await suppliers.countDocuments(filter);
  if (docCount < skip) {
    skip = (page - 1) * limit;
  }
  return { skip, limit };
};

module.exports = {
  getAllStores,
  createStore,
  updateStore,
  getStore,
  deleteStore,
};
