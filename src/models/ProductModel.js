import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "Untitled"
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: Buffer,
    },
    listedBy: {
        type: String,
        required: true
    },
    sellerId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

const Product = mongoose.models.products || mongoose.model("products")

export default Product