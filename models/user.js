const { Schema, model } = require("mongoose"); 


const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },

},
    { versionKey: false, timestamps: true }
); 

// userSchema.post("save", mongooseErrorHandler); 

const User = model("user", userSchema); 

module.exports = User; 
