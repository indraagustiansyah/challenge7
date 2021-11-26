const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", "public", "images"))
    },
    filename: function (req, file, cb) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, unique + "-" + file.originalname.toLowerCase())
    }
})

const upload = multer({ storage: storage })

module.exports = upload