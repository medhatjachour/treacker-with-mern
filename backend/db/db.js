const mongoose = require('mongoose')
const db = async () => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.DB_YRL)
    }
    catch (err) {
        console.log("db error connectiion",err);
        
    }
}
module.exports={db}