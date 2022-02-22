
class User {
    constructor(connection,mssql) {
        this.connection = connection;
        this.mssql = mssql;
    }
    checkUserLogin(username, password)
    {
        let queryCheck = "SELECT * FROM tblDangNhap WHERE tendangnhap = @username and matkhau = @password";
        return new Promise((resolve, reject) => {
            this.connection.request()
                           .input("username", this.mssql.VarChar, username)
                           .input("password", this.mssql.VarChar, password)
                           .query(queryCheck, function(err, data){
                                if(err) reject(err);
                                resolve(data);
                           });
        });
    }
    get_user() {
        return new Promise((resolve, reject) => {
            this.connection.query("select * from users_train inner join role on role.id_role=users_train.role", (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            })
        });
    }

}
module.exports = User;