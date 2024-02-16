// let a1 = document.getElementById("a1");
// let a2 = document.getElementById("a2");
// let a3 = document.getElementById("a3");
// let a4 = document.getElementById("a4");
// let a5 = document.getElementById("a5");
// let a6 = document.getElementById("a6");
// let a7 = document.getElementById("a7");
// let a8 = document.getElementById("a8");
// let a9 = document.getElementById("a9");
// let a10 = document.getElementById("a10");
// let a11 = document.getElementById("a11");

// a2.addEventListener("click", (e) => {
//     e.preventDefault();
//     a1.classList.remove("Act");
//     a3.classList.remove("Act");
//     a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a2.classList.add("Act");
//     location.href ='./About.html'
// })

// a1.addEventListener("click", () => {
//     a1.classList.add("Act");
//     a2.classList.remove("Act");
//     a3.classList.remove("Act");
//      a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
// })
// a3.addEventListener("click", () => {
//     a3.classList.add("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//      a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
// })
// a4.addEventListener("click", () => {
//     a4.classList.add("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//      a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
  
// })
// a5.addEventListener("click", () => {
//     a5.classList.add("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//      a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
   
// })
// a6.addEventListener("click", () => {
//     a6.classList.add("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//        a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
// })
// a7.addEventListener("click", () => {
//     a7.classList.add("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//       a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
// })
// a8.addEventListener("click", () => {
//     a8.classList.add("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//        a11.classList.remove("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
// })
// a9.addEventListener("click", () => {
//     a9.classList.add("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//      a11.classList.remove("Act");
//     a10.classList.remove("Act");
// })
// a10.addEventListener("click", () => {
//     a10.classList.add("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
//        a11.classList.remove("Act");
// })
// a11.addEventListener("click", () => {
//     a11.classList.add("Act");
//     a10.classList.remove("Act");
//     a9.classList.remove("Act");
//     a8.classList.remove("Act");
//     a7.classList.remove("Act");
//     a6.classList.remove("Act");
//     a5.classList.remove("Act");
//     a4.classList.remove("Act");
//     a3.classList.remove("Act");
//     a2.classList.remove("Act");
//     a1.classList.remove("Act");
// })

let bar = document.getElementById("bar");
let mega = document.getElementById("mega-menuu");
let can = document.getElementById("cancel");

bar.addEventListener("click", () => {
    bar.style.cssText = "display:none !important";
    mega.style.cssText = "display:block !important";
    can.style.cssText = "display:block !important";
})

can.addEventListener("click", () => {
     can.style.cssText = "display:none !important";
    mega.style.cssText = "display:none !important";
    bar.style.cssText = "display:block !important";
})