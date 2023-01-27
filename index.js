const output = document.getElementById("output");
const drumA_btn = document.getElementById('drumA');
const drumB_btn = document.getElementById('drumB');
let rad = document.getElementById('ref');
let pad = document.getElementById('bef');

drumA_btn.addEventListener("click", (e) => {
    output.value = e.target.value;
    rad.play();
});

drumB_btn.addEventListener("click", (e) => {
    output.value = e.target.value;
    pad.play();
});