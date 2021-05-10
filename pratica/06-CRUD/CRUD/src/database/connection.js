const mongoose = require("mongoose");

async function initConnection(){
    await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
    })
}

async function endConnection(){
    await mongoose.disconnect()
}

module.exports = {
    initConnection,
    endConnection
}

//conecta e desconecta.