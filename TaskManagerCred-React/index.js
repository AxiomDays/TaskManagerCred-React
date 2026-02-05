import { getItem, setItem } from "./src/components/utils/localStorage";

let background = getItem("taskListDetailsBackground");

if (background) {
	document.getElementById("bg").id = background;
} else {
	setItem("taskListDetailsBackground", "st-green");
	window.location.reload();
}
