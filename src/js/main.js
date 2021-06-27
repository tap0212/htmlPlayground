// import "../css/styles.css";
// try {
//     const manipulateLocalStorage = (key, value) => {
//         localStorage.setItem(key, value);
//     };
//     const getSelectedColor = () => {
//         return localStorage.getItem("selectedColor");
//     };
//     const preFilledCells = document.getElementsByClassName("filled-cell");
//     const blankCells = document.getElementsByClassName("blank-cell");
//     for (var i = 0; i < preFilledCells.length; i++) {
//         preFilledCells[i].addEventListener(
//             "click",
//             (event) => {
//                 manipulateLocalStorage(
//                     "selectedColor",
//                     event.target.classList[0]
//                 );
//             },
//             false
//         );
//     }
//     for (var i = 0; i < blankCells.length; i++) {
//         blankCells[i].addEventListener(
//             "pointerover",
//             (event) => {
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "pointerenter",
//             (event) => {
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "pointerdown",
//             (event) => {
//                 console.log("pointerdown");
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "touchstart",
//             (event) => {
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "gotpointercapture",
//             (event) => {
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "pointermove",
//             (event) => {
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "touchmove",
//             (event) => {
//                 console.log({ event });
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//         blankCells[i].addEventListener(
//             "click",
//             (event) => {
//                 event.target.classList.add(getSelectedColor());
//             },
//             false
//         );
//     }
// } catch (error) {
//     console.log({ error });
// }

// PRACTICE
// hoisting =>

console.log(hello);
let hello = 2;
