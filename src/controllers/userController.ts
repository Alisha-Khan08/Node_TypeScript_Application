import { Request, Response, NextFunction } from "express";
import {
  getUserService,
  getUserWithWeatherService,
  getWeatherService,
} from "../service/userService";

// getting all Users
export const getUsers = async (req: Request,res: Response,next: NextFunction) => {
  try {
    let users = await getUserService();
    return res.status(200).json({
      data: users,
    });
  } catch (error: any) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

// getting a single user with id and weather of user city
export const getUserLocationWeather = async (req: Request,res: Response,next: NextFunction) => {
  // get the user id from the req
  let id: number = parseInt(req.params.id);
  try {
    let getUserWeather = await getUserWithWeatherService(id);
    return res.status(200).json({
      data: getUserWeather,
    });
  } catch (error: any) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};

//getting weather report by location
export const getWeather = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the location from the req
  let location: string = req.params.location;
  try {
    let weather = await getWeatherService(location);
    return res.status(200).json({
      data: weather,
    });
  } catch (error: any) {
    console.log(error);
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
