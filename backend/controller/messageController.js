import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {


    try {
        const { name, email, subject, message} = req.body;
        if ( !name || !email || !subject || !message) {
            return res.status(400).json({
                sucess: false,
                message: "All field are required!",
            });
        }
        await Message.create({name, email, subject, message});
        res.status(200).json({
            sucess: true,
            message: "Message sent successfully!",
        });
    } catch (error) {


if(error.name === "validationError"){
    let errorMessage = "";
    if(error.errors.name){
        errorMessage += error.errors.name.message + " ";
    }
    if(error.errors.email){
        errorMessage += error.errors.email.message + " ";
    }
    if(error.errors.subject){
        errorMessage += error.errors.subject.message + " ";
    }
    if(error.errors.message){
        errorMessage += error.errors.message.message + " ";
    }
    return res.status(400).json({
        sucess: false,
        message: errorMessage,
    });
}

        return res.status(500).json({
            sucess: false,
            message: "Unknown Error",
        });
    }
};