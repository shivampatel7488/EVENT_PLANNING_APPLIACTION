import mongoose from "mongoose";
 
export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGO_URI,
        { dbName: "EVENT_PLANNING_MESSAGE"}
    )
    .then(() => {
        console.log("Database Connected Successfully!");
    })
    .catch((err) =>{
        console.log("Some error occured while connection to databse:", err);
    })
};