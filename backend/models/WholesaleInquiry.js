const mongoose = require('mongoose');

const wholesaleInquirySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['requested', 'under_review', 'quote_sent', 'accepted', 'rejected', 'converted_to_order'],
        default: 'requested'
    },

    // The items the buyer is interested in
    items: [{
        productVariant: {
            type: mongoose.Schema.ObjectId,
            ref: 'ProductVariant',
            required: true
        },
        // Optional parent ref for display convenience
        product: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        },
        requestedQuantity: {
            type: Number,
            required: true
        },
        // Admin can propose a price per unit here
        quotedPricePerUnit: {
            type: Number,
            default: null
        }
    }],

    // Overall financial summary of the quote
    quoteDetails: {
        totalProductCost: Number,
        estimatedShipping: Number,
        taxAmount: Number,
        finalTotal: Number,
        currency: { type: String, default: 'INR' },
        validUntil: Date
    },

    // Negotiation history / Communication
    messages: [{
        sender: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        message: String,
        sentAt: {
            type: Date,
            default: Date.now
        }
    }],

    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

wholesaleInquirySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('WholesaleInquiry', wholesaleInquirySchema);
