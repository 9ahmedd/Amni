let toggle = document.getElementById("toggle");
let ulll = document.getElementById("ulll");

toggle.addEventListener("click", () => {
    ulll.style.cssText = "display:flex;flex-direction: column;"
});

		let link1 = document.querySelector("#link1");
		let link2 = document.querySelector("#link2");
		let link3 = document.querySelector("#link3");

		link1.addEventListener("click", () => {
			link1.style.cssText = "color:goldenrod"
			link2.style.cssText = "color:black"
			link3.style.cssText = "color:black"
		});
		link2.addEventListener("click", () => {
			link1.style.cssText = "color:black"
			link2.style.cssText = "color:goldenrod"
			link3.style.cssText = "color:black"
		});
		link3.addEventListener("click", () => {
			link1.style.cssText = "color:black"
			link2.style.cssText = "color:black"
			link3.style.cssText = "color:goldenrod"
		});
