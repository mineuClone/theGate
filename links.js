import { getFavIconUrl } from "./utils.js";

let urls = ["google.com","github.com","youtube.com"];

urls = localStorage.getItem("urls") ? JSON.parse(localStorage.getItem("urls")) : urls;




const links = document.getElementById("links");
const prompt = document.getElementById("prompt");
const addLinkClass = document.querySelector(".add-btn");
const addLinkBtn = document.getElementById("addLink");
const addLinkInput = document.getElementById("addLinkInput");
const closePrompt = document.querySelector(".close");

closePrompt.addEventListener("click", () => {
    prompt.close();
});

addLinkClass.addEventListener("click", () => {
    prompt.showModal()
});

addLinkBtn.addEventListener("click", e => {
    addLink(addLinkInput.value);
    urls.push(addLinkInput.value);
    localStorage.setItem("urls", JSON.stringify(urls));
    prompt.close();
});

urls.forEach(url => {
    addLink(url);
});

function addLink(url) {
    const link = document.createElement("a");
    link.href = "https://" + url;
    const icon = document.createElement("img");
    let favicon = getFavIconUrl(url)
    console.log(favicon);
    icon.src = favicon;
    icon.alt = "favicon";
    link.appendChild(icon);
    links.appendChild(link);
}