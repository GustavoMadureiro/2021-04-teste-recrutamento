const mongoose = require ("mongoose");
const projectSchema = new mongoose.Schema({
    initialDate:{type:Date, require:true},
    finalDate:{type:Date, require:true},
    budget:{type: Number, require: true},
    name:{type: String, require: true, unique: true}
})

module.exports = mongoose.model("Projects", projectSchema)