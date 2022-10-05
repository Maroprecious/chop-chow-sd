const router = require("express").Router();
const  ProductController = require("../controllers/productController/product.controller");

//customer routes
router.get("/get-all-products/:page", ProductController.getAllProducts);
router.get("/getAllMongoFileImages", ProductController.readProductImages);
router.get("/getOneMongoFileData/:filename", ProductController.readProductImage);
router.get("/get_store_products/:page", ProductController.getStoreProducts);

module.exports = router;
