const connect = require('./Connection');
const bcrypt = require('../crypt/crypt');

module.exports = {

    async authenticate(email, password) {
        const connection = await connect;
        const values = [email];
        const [data] = await connection.execute(`
            SELECT *
            FROM tb_users
            WHERE email = ?;
        `, values);

        if(await data.length > 0 && await data[0].email == email) {
            if(await bcrypt.compareCrypt(password, await data[0].pass)){
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }

    },

    async signUser(fistName, lastName, email, password) {
        const connection = await connect;
        const pswHashed = await bcrypt.encrypt(password);
        const values = [fistName, lastName, email, pswHashed];
        
        try {
            await connection.execute(`
                INSERT INTO tb_users(
                    first_name,
                    last_name,
                    email,
                    pass
                ) VALUES(?, ?, ?, ?);
            `, values);
            
            return true;
        } catch {
            return false
        }
    }

}