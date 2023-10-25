export default function () {
    const element = document.getElementById("body");
    element.textContent = "";
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}