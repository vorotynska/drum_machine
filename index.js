const display = document.getElementById('display');
let btn_q = document.getElementById('btn-q');
let btn_w = document.getElementById('btn-w');
let btn_e = document.getElementById('btn-e');
let audioQ = document.getElementById('Q');
let audioW = document.getElementById('W');
let audioE = document.getElementById('E');
let btn_a = document.getElementById('btn-a');
let btn_s = document.getElementById('btn-s');
let btn_d = document.getElementById('btn-d');
let audioA = document.getElementById('A');
let audioS = document.getElementById('S');
let audioD = document.getElementById('D');
let btn_z = document.getElementById('btn-z');
let btn_x = document.getElementById('btn-x');
let btn_c = document.getElementById('btn-c');
let audioZ = document.getElementById('Z');
let audioX = document.getElementById('X');
let audioC = document.getElementById('C');

btn_q.addEventListener('click', (e) => {
    display.value = e.target.value;
    audioQ.play();
});
btn_w.addEventListener('click', (e) => {
    display.value = e.target.value;
    audioW.play();
});

btn_e.addEventListener('click', (e) => {
    audioE.play();
    display.value = e.target.value;
});

btn_a.addEventListener('click', (e) => {
    display.value = e.target.value;
    audioA.play();
});
btn_s.addEventListener('click', (e) => {
    display.value = e.target.value;
    audioS.play();
});

btn_d.addEventListener('click', (e) => {
    audioD.play();
    display.value = e.target.value;
});

btn_z.addEventListener('click', (e) => {
    display.value = e.target.value;
    audioZ.play();
});
btn_x.addEventListener('click', (e) => {
    display.value = e.target.value;
    audioX.play();
});

btn_c.addEventListener('click', (e) => {
    audioC.play();
    display.value = e.target.value;
    console.log(e.target.value)
});

btn_q.addEventListener('keyup', (e) => {
    display.value = e.target.value;
    audioQ.play();
    console.log(display.value);

})

const sounds = {
    'KeyW': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom1.ogg',
    'KeyA': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom2.ogg',
    'KeyS': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom3.ogg',
    'KeyD': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/pad1.ogg',
    'KeyJ': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/snare1.ogg',
    'KeyK': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/crash1.ogg',
    'KeyL': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/kik.ogg'
}

const play = sound => {
    console.log("playing", sound)
    var audio = new Audio(sound);
    audio.play();
}


document.getElementById('drumSet').addEventListener('click', function (e) {
    const tgt = e.target.closest('button');
    if (tgt) play(sounds[tgt.id])
})

window.addEventListener('keypress', function (e) {
    console.log(e.code)
    if (sounds[e.code]) {
        console.log("clicking", e.code)
        document.getElementById(e.code).click()
    }
})