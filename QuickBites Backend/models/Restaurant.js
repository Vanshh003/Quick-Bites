import mongoose from 'mongoose';
// import menuCategorySchema from './MenuCategory.js';

// Define the main restaurant schema
const restaurantSchema = new mongoose.Schema({
    id: String,
    name: String,
    cloudinaryImageId: String,
    costForTwo: String,
    cuisines: [String],
    rating: String,
    deliveryTime: String,
        
    menu: [
        {
            title: String,
            itemCards: [
                {
                    id: String,
                    name: String,
                    category: String,
                    description: String,
                    imageId: String,
                    price: Number,
                    rating: String,
                }
            ]
        }
    ]
});

const Restaurant = mongoose.model('restaurants', restaurantSchema);

export default Restaurant;
