const bcrypt = require('bcrypt');

module.exports = {

    async encrypt(password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await hashedPassword;
    },

    async compareCrypt(userPass, dbPass) {
        if(await bcrypt.compare(userPass, dbPass)) {
            return true;
        } else {
            return false;
        }
    }

}