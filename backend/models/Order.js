const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    orderType: {
        type: String,
        enum: ['retail', 'wholesale'],
        required: true
    },
    // If wholesale, link back to the inquiry/quote
    sourceInquiry: {
        type: mongoose.Schema.ObjectId,
        ref: 'WholesaleInquiry'
    },

    items: [{
        // Link to the specific variant being ordered
        productVariant: {
            type: mongoose.Schema.ObjectId,
            ref: 'ProductVariant',
            required: true
        },
        // Optional: Keep reference to parent product for easier querying
        product: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        },
        name: String, // Snapshot of Product Name
        variantName: String, // Snapshot of Variant Name (e.g. "12 inch")
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        price: {
            type: Number, // The final agreed unit price
            required: true
        },
        image: String, // Snapshot of the specific variant image
        sku: String // Snapshot of SKU
    }],

    shippingAddress: {
        street: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },

    paymentInfo: {
        id: String,
        status: {
            type: String,
            enum: ['pending', 'paid', 'failed', 'refunded'],
            default: 'pending'
        },
        method: {
            type: String,
            enum: ['credit_card', 'upi', 'bank_transfer', 'cod'],
            default: 'credit_card'
        },
        paidAt: Date
    },

    taxPrice: {
        type: Number,
        default: 0.0
    },
    shippingPrice: {
        type: Number,
        default: 0.0
    },
    totalAmount: {
        type: Number,
        required: true,
        default: 0.0
    },

    orderStatus: {
        type: String,
        enum: ['processing', 'confirmed', 'shipped', 'delivered', 'cancelled'],
        default: 'processing'
    },

    deliveredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
