import "./style.css";
import { fetchRandomDogImage } from "./utils/DogApi";
import { fetchAllDogList } from "./utils/DogApi";
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
async function startselect() {
  const dogNamesList = await fetchDogList();
  appendDogNamesToSelect(dogNamesList);
}
function appendDogNamesToSelect(dogNamesList) {
  const selectBreed = document.querySelector("#dog-list");
  for (let i = 0; i < dogNamesList.length; i++) {
    const item = dogNamesList[i];
    const option = document.createElement("option");
    option.textContent = item;
    selectBreed.appendChild(option);
  }
}
async function start(dogBreed) {
  Loading();
  showLoading();
  try {
    const res = await fetchRandomDogImage(dogBreed);
    console.log(res.data.message);
    document.querySelector("#imgid").setAttribute("src", res.data.message);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoading();
    unLoading();
  }
}
async function fetchDogList() {
  try {
    const response = await fetchAllDogList();
    const dogList = response.data.message;
    const dogNames = Object.keys(dogList);
    console.log(dogNames);
    return dogNames;
  } catch (error) {
    console.log(error);
  }
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  const selectBreed = document.querySelector("#dog-list");
  start(selectBreed.value);
});
startselect();
fetchDogList();
