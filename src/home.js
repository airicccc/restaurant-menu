import reset from "./reset.js"
export default function (event) {
    reset();
    const body = document.getElementById("body")
	const heroImage = document.createElement("div");
	heroImage.id = "heroImage";
	body.appendChild(heroImage);
}