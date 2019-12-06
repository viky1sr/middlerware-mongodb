const adminController = require("../controller/adminController");
const middleware = require("../middleware/middleware");

module.exports = app => {
    app.get("/", adminController.index);
    app.get("/data-murid", adminController.dataMurid);
    app.get("/add-murid", adminController.dataMurid);
    app.post("/save-murid", adminController.dataMurid);
    app.get("/edit-murid/:id", adminController.login);
    app.post("/update-murid/:id", adminController.login);
    app.get("/delete-murid/:id", adminController.login);
    app.get("/login", adminController.login);
    app.post("/proses", middleware.validate_user, adminController.proses);

};