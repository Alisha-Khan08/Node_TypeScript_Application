import {
  getUserWithWeatherService,
  getWeatherService,
} from "../../service/userService";

describe("UsersDBAccess test suite", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const Weather = {
    base: "stations",
    clouds: { all: 1 },
    cod: 200,
    coord: { lat: 22.7179, lon: 75.8333 },
    dt: 1672986330,
    id: 1269743,
    main: {
      feels_like: 293.77,
      humidity: 52,
      pressure: 1024,
      temp: 294.25,
      temp_max: 294.25,
      temp_min: 294.25,
    },
    name: "Indore",
    sys: {
      country: "IN",
      id: 9067,
      sunrise: 1672969089,
      sunset: 1673007956,
      type: 1,
    },
    timezone: 19800,
    visibility: 3500,
    weather: [{ description: "haze", icon: "50d", id: 721, main: "Haze" }],
    wind: { deg: 120, speed: 2.57 },
  };

  const userWithWeather = [
    {
      address: {
        city: "Indore",
        geo: { lat: "-37.3159", lng: "81.1496" },
        street: "Kulas Light",
        suite: "Apt. 556",
        zipcode: "92998-3874",
      },
      company: {
        bs: "harness real-time e-markets",
        catchPhrase: "Multi-layered client-server neural-net",
        name: "Romaguera-Crona",
      },
      email: "Sincere@april.biz",
      id: 1,
      name: "Alisha Khan",
      phone: "1-770-736-8031 x56442",
      username: "Bret",
      website: "hildegard.org",
    },
    {
      base: "stations",
      clouds: { all: 1 },
      cod: 200,
      coord: { lat: 22.7179, lon: 75.8333 },
      dt: 1672986330,
      id: 1269743,
      main: {
        feels_like: 293.77,
        humidity: 52,
        pressure: 1024,
        temp: 294.25,
        temp_max: 294.25,
        temp_min: 294.25,
      },
      name: "Indore",
      sys: {
        country: "IN",
        id: 9067,
        sunrise: 1672969089,
        sunset: 1673007956,
        type: 1,
      },
      timezone: 19800,
      visibility: 3500,
      weather: [{ description: "haze", icon: "50d", id: 721, main: "Haze" }],
      wind: { deg: 120, speed: 2.57 },
    },
  ];

  test("test getWeatherService ", async () => {
    const resultWeather = await getWeatherService("indore");
    expect(resultWeather).toEqual(Weather);
  });

  test("test getUserWithWeatherService ", async () => {
    const resultUsers = await getUserWithWeatherService(1);
    expect(resultUsers).toEqual(userWithWeather);
  });
});
