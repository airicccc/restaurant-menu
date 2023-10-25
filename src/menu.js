import reset from "./reset.js"
export default function (event) {
    reset();
    const body = document.getElementById("body")
	body.textContent = "this is the menu page. please hold, WIP";
}