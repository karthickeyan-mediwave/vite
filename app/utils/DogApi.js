import axios from "axios";

export const fetchRandomDogImage = () => {
  return axios.get("https://dog.ceo/api/breeds/image/random");
};
