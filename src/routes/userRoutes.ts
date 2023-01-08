import express from 'express';
import {getUsers, getWeather, getUserLocationWeather} from '../controllers/userController';
const router = express.Router();

router.get('/users', getUsers);
router.get('/weather/:location', getWeather);
router.get('/user/weather/:id', getUserLocationWeather);


export = router;