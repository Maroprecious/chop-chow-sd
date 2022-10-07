const {
  getCustomerGroceryList,
  createUser,
  updateUser,
  deleteUser,
  findUsers,
  validatePassWord,
  generateAccessTokens,
  generatePasswordResetToken,
  validateToken,
  findUser,
} = require("./user.js");
const {
  getMeals,
  getMeal,
  getSuggestedMeals,
  getMealImages,
  removeSuggestedMeal,
  createMealFromSuggestion,
  addMealSuggestion,
  updateSuggestedMealItem,
  getAllCategories,
} = require("./meal");

const {
  getAllProducts,
  readImages,
  readImage,
  getStoreProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct
} = require("./product");

module.exports = {
  getCustomerGroceryList,
  findUser,
  createUser,
  generateAccessTokens,
  validatePassWord,
  generatePasswordResetToken,
  updateUser,
  deleteUser,
  findUsers,
  validateToken,
  getMeals,
  getMeal,
  getSuggestedMeals,
  getMealImages,
  removeSuggestedMeal,
  createMealFromSuggestion,
  addMealSuggestion,
  updateSuggestedMealItem,
  getAllCategories,
  getAllProducts,
  readImages,
  readImage,
  getStoreProducts,
  createProduct,
  updateProduct,
  getProduct,
  deleteProduct
};
