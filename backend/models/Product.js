const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide product name'],
        trim: true,
        maxlength: 100,
        index: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    description: {
        type: String,
        required: [true, 'Please provide product description'],
        maxlength: 2000
    },
    // Multimedia (General product images, e.g., lifestyle shots)
    images: [{
        url: { type: String, required: true },
        altText: String,
        isPrimary: { type: Boolean, default: false }
    }],
    // Categorization
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true,
        index: true
    },
    tags: [String],

    // SEO Metadata
    metaTitle: String,
    metaDescription: String,

    isActive: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create slug from name
productSchema.pre('save', function (next) {
    if (this.name && !this.slug) {
        this.slug = this.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    next();
});

productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', productSchema);
