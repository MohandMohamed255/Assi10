import mongoose from "mongoose";


const messageSchema=new mongoose.Schema({
    content:{
        type:String,
        required: function () {
            return this.attachments?.length ? false : true
        }
    },
    attachments:[String],
    userId:{                            
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },

})

const messageModel=mongoose.models.message || mongoose.model("message",messageSchema)
 
export default messageModel