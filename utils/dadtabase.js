const mongoose = require('mongoose');

const Database = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Database Connection to ${connection.connection.host}`)
    } catch (ex) {
        console.log(ex)
        process.exit(1)
    }
}

module.exports = Database;