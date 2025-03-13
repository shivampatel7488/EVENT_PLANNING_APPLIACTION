import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required : [true, "Name Required!"],
        minLength : [5, "Name must be contain at least 5 character"],
    },
    email:{
        type: String,
        required : [true, "Email Required!"],
        validate : [validator.isEmail, "Please provide valid email!"],
    },
    subject:{
        type: String,
        required : [true, "Subject Required!"],
        minLength : [5, "Subject must be contain at least 5 character"],
    },
    message:{
        type: String,
        required : [true, "Message Required!"],
        minLength : [10, "Message must be contain at least 10 character"],
    },

});

export const Message = mongoose.model("Message",messageSchema);