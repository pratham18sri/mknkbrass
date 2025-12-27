const mongoose = require('mongoose');

const productVariantSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: true,
        index: true
    },
    sku: {
        type: String,
        required: true,
        unique: true, // Unique across all variants
        uppercase: true,
        trim: true,
        index: true
    },
    // Variant specific name (optional override, e.g. "Ganesha - 12 inch")
    // If empty, frontend can compose "{Product.name} - {Variant.attributes.values}"
    variantName: String,

    // Specific Attributes (Use Map for flexibility or fixed structure)
    // Industry Standard: Fixed structure for querying, optional Map for extra
    attributes: {
        material: { type: String, default: 'Brass' },
        finish: { type: String }, // e.g., 'Antique', 'Polished'
        height: { value: Number, unit: { type: String, default: 'inch' } },
        weight: { value: Number, unit: { type: String, default: 'kg' } },
    },

    // Specific Images for this variant (e.g., The Gold one vs The Silver one)
    images: [{
        url: { type: String, required: true },
        altText: String,
        isPrimary: { type: Boolean, default: false }
    }],

    // Retail Pricing
    price: {
        type: Number,
        required: true,
        min: 0
    },
    // Compare at price (for discounts)
    compareAtPrice: {
        type: Number,
        min: 0
    },

    // Wholesale Limits
    wholesaleConfig: {
        minQuantity: { type: Number, default: 5 },
        // Hidden price floor for internal calculation
        baseCost: { type: Number, select: false }
    },

    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },

    isActive: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ProductVariant', productVariantSchema);
