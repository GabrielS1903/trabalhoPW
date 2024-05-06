import mongoose from "mongoose";

const URI = 'mongodb+srv://gabrielrenatoschons:masterkey@projetopw.kn7kfwa.mongodb.net/?retryWrites=true&w=majority&appName=projetoPW'

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set("strictQuery", false)
        global.mongoose = await mongoose.connect(URI)
        .then(()=>console.log('connected to mongodb'))
        .catch(e=>console.log(e));
    }
}

export default databaseConnection