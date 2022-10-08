const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req,filename,callback)=>{
        callback(null,'./public/image')
    },
    filename:(req,file,callback)=>{
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
            file.originalname
        )}`;
        callback(null, nameFormat);
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 2 * 1000 * 1000},
});

const singleUpload = (req,res,next) =>{
    const uploadImage = upload.single('image');
    uploadImage(req,res,(err)=>{
        if(err){
            let status = "fileerr";
            res.redirect('/add-cars/?status=' + status);
        } else{
            next();
        }
    });
};

module.exports = singleUpload;