interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface ISys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface IClouds {
  all: string;
  rain: string;
  snow: string;
}

interface ICoord {
  lon: number;
  lat: number;
}

interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

export interface IWeatherCity {
  id: number;
  clouds: IClouds;
  cod: number;
  coord: ICoord;
  dt: number;
  base: string;
  name: string;
  main: IMain;
  sys: ISys;
  timezone: number;
  visibility: number;
  weather: IWeather[];
  wind: IWind;
}
