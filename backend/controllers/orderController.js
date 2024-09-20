import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
// Placing orders using COD method

const placeOrder = async (req,res) =>{
    try {
        const {userId, items, amount, address } = req.body
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success: true, message: "Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Placing orders using Stripe method

const placeOrderStripe = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
}

//  All Orders Data for Admin

// Placing orders using COD method

const allOrders = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
}

// User Order Data for Frontend

const userOrders = async (req,res) =>{
    try {
        const { userId } = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// Update Order Status

const updateStatus = async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error)
    }
}

export {placeOrder, placeOrderStripe, updateStatus, userOrders, allOrders}