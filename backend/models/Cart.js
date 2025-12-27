const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: false // Can be null for guest users (tracked via sessionId)
    },
    guestId: {
        type: String, // For handling non-logged in users if needed
        index: true
    },
    type: {
        type: String,
        enum: ['retail', 'wholesale'],
        default: 'retail'
    },
    items: [{
        productVariant: {
            type: mongoose.Schema.ObjectId,
            ref: 'ProductVariant',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        // Captured price at time of add (only relevant for Retail)
        // For wholesale, this might be null or 0
        price: {
            type: Number,
            default: 0
        }
    }],

    updatedAt: {
        type: Date,
        default: Date.now
    }
});

cartSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Cart', cartSchema);
