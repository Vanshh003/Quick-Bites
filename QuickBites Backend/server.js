import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// import Rrestaurant from './routes/Restaurant.js';
import setupRoutes from './routes/setupRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;


const corsOptions = {
    origin: 'https://quick-bites-frontend-zun4.onrender.com', // Replace with your frontend URL
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/api', setupRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
