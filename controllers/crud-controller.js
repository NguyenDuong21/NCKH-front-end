let User = require('../models/user');
let Role = require("../models/Role");
const {conn,mssql} = require('../utils/database');
exports.index = (req, res) => {
    res.render("login",{ layout: false });

    // let user = new User(conn);
    // user.get_user().then((result) => {
    //     console.log(result);
    //     return res.render('index', { user: result });
    // }).catch(err => console.log(err));

}
exports.login = async (req, res) => {
    const tendn = req.body.tendangnhap;
    const matkhau = req.body.password;
    const pool = await conn;
    const user = new User(pool,mssql);
    let result = await user.checkUserLogin(tendn, matkhau);
    if(result.recordset.length > 0)
    {
        return res.redirect("/home");
    }
    return res.send("Tài khoản mật khẩu không chính xác");
}
exports.adminPage = async (req, res) => {
    res.render("admin");
}
exports.getRoles = async (req, res) => {
    const pool = await conn;
    let roles = new Role(pool);
    let allRoles = await roles.getAllRole();
    res.json(allRoles);
}
exports.create = (req, res) => {
    res.send(crudModel.createCrud() + req.query.id);
}
exports.delete = (req, res) => {
    res.send(crudModel.deleteCrud());
}
exports.edit = (req, res) => {
    res.send(crudModel.editCrud());
}
exports.fetch = (req, res) => {
    res.send(crudModel.fetchCrud());
}