const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    mobileNumber: {
        type: String,
        required: true
    },
    city: {
        type: String,
        
    },

     pincode: {
        type: String,
        
    },
   
}, 
{
    timestamps: true,
    versionkey: false
});

const UserModel = mongoose.model("userDetails", userSchema);

module.exports = {
    UserModel
};