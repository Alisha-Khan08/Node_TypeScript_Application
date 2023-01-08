import axios, { AxiosResponse } from "axios";
import { userAPI } from "../config/config";

import { UserModel } from "../models/userModel";

const USERS: UserModel[] = [];

type User = { id: string; address: { city: string }; city: string };
type Weather = { id: string; location: string };

export async function getUserService() {
  let result: AxiosResponse = await axios.get(userAPI);
  let users: [User] = result.data;
  return users;
}

export async function getWeatherService(userCity: string) {
  let location: string = userCity;
  let result: AxiosResponse = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=98243a52aafb5d914040c7a959be0e40`
  );
  let weather: Weather = result.data;

  return weather;
}

export async function getUserWithWeatherService(id: number) {
  let result: AxiosResponse = await axios.get(userAPI);
  let user = result.data[id - 1];
  let cityU: string = result.data[id - 1].address.city;
  USERS.push(user);
  let getUserWeather = await getWeatherService(cityU);
  USERS.push(getUserWeather);
  return USERS;
}
