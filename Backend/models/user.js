import mongoose from "mongoose";    

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://imgs.search.brave.com/JUREPkVy5BaQNfhp1cNHrqH8bElEKYzc05D_64RBAtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9wcm9maWxl/LWRlZmF1bHQtaWNv/bi01MTJ4NTExLXY0/c3c0bTI5LnBuZw"    
    },
    role: {
        type: String,
        default: "user",
        enum: ['user', 'admin']  
    },
    fav: [
        {
            type: mongoose.Types.ObjectId,
            ref: "books" // ✅ changed to match model
        }
    ],
    cart: [
        {
            type: mongoose.Types.ObjectId,
            ref: "books" // ✅ changed to match model
        }
    ],
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Order" // leave this if your Order model is called "Order"
        }
    ]
}, { timestamps: true });

const user = mongoose.model("user", userSchema);

export default user;
