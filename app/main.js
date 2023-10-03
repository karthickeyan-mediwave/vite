// import axios from "axios";
import "./style.css";
import { fetchRandomDogImage } from "./utils/DogApi";

// export const fetchRandomDogImage = () => {
//   return axios.get("https://dog.ceo/api/breeds/image/random");
// };

function showLoading() {
  const loadingElement = document.querySelector("#load");
  if (loadingElement) {
    loadingElement.style.display = "block";
  }
}
function hideLoading() {
  const loadingElement = document.querySelector("#load");
  if (loadingElement) {
    loadingElement.style.display = "none";
  }
}

function Loading() {
  const loadingElement = document.querySelector("#app");
  if (loadingElement) {
    loadingElement.style.display = "none";
  }
}
function unLoading() {
  const loadingElement = document.querySelector("#app");
  if (loadingElement) {
    loadingElement.style.display = "block";
  }
}

async function start() {
  Loading();
  showLoading();
  try {
    const res = await fetchRandomDogImage();
    console.log(res.data.message);
    document.querySelector("#imgid").setAttribute("src", res.data.message);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
    unLoading();
  }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  start();
});
