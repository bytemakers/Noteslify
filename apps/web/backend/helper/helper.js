const crypto = require("crypto");
const algorithm = "aes-256-cbc";


function encrypt(input, password) {
    let m = crypto.createHash('md5');
    m.update(password);
    let key = m.digest('hex');

    m = crypto.createHash('md5');
    m.update(password + key);
    let iv = m.digest('hex');

    let data = Buffer.from(input, 'utf8').toString('binary');

    let cipher = crypto.createCipheriv(algorithm, key, iv.slice(0, 16));
    let encrypted = cipher.update(data, 'binary', 'binary') + cipher.final('binary');
    let encoded = Buffer.from(encrypted, 'binary').toString('base64');
    return encoded;
}


function getKey() {
    // generate a random key
    return (Math.random() + 1).toString(36);

}

function decrypt(input, password) {
    // Convert urlsafe base64 to normal base64
    input = input.replace(/\-/g, '+').replace(/_/g, '/');
    // Convert from base64 to binary string
    let edata = Buffer.from(input, 'base64').toString('binary');

    // Create key from password
    let m = crypto.createHash('md5');
    m.update(password);
    let key = m.digest('hex');

    // Create iv from password and key
    m = crypto.createHash('md5');
    m.update(password + key);
    let iv = m.digest('hex');

    // Decipher encrypted data
    let decipher = crypto.createDecipheriv(algorithm, key, iv.slice(0, 16));
    let decrypted = decipher.update(edata, 'binary', 'binary') + decipher.final('binary');
    let plaintext = Buffer.from(decrypted, 'binary').toString('utf8');

    return plaintext;
}



module.exports = {
    encrypt, getKey, decrypt
}
