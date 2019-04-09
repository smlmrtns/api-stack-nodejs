const multer = require('multer');
const path = require('path');
const dest = path.resolve(__dirname, '..', '..', 'tmp');
const crypto = require('crypto');

module.exports = {
    dest: dest,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, dest);
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, file.key);
            });
        }
    })
};