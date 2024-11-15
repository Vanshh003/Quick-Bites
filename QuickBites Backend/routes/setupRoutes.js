import express from 'express';
import Restaurant from '../models/Restaurant.js';
import resData from '../mockData.js';

const router = express.Router();

// Route to show all the restaurants on Home Page
router.get('/restaurants', async (req, res) => {
    console.log("home api called");
    try {
        const restaurants = await Restaurant.find({});
        res.json(restaurants);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route to show all the categories of a particular restaurant
router.get('/restaurants/:id', async (req, res) => {
    const { id } = req.params;

    console.log("menu api called");
    try {
        const restaurant = await Restaurant.findOne({ id: id });
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        res.json(restaurant);
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});




export default router;
