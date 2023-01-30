let KeyQ = document.getElementById('KeyQ');
let KeyW = document.getElementById('KeyW');
let KeyE = document.getElementById('KeyE');
let audioQ = document.getElementById('Q');
let audioW = document.getElementById('W');
let audioE = document.getElementById('E');
let KeyA = document.getElementById('KeyA');
let KeyS = document.getElementById('KeyS');
let KeyD = document.getElementById('KeyD');
let audioA = document.getElementById('A');
let audioS = document.getElementById('S');
let audioD = document.getElementById('D');
let KeyZ = document.getElementById('KeyZ');
let KeyX = document.getElementById('KeyX');
let KeyC = document.getElementById('KeyC');
let audioZ = document.getElementById('Z');
let audioX = document.getElementById('X');
let audioC = document.getElementById('C');
let output = document.querySelector('#display');

KeyQ.addEventListener('click', (e) => {
    console.log(KeyQ.innerText);
    output.innerText = 'Heater 1'
    audioQ.play();
    console.log(output);
});
KeyW.addEventListener('click', (e) => {
    output.innerText = 'Heater 2';
    audioW.play();
});

KeyE.addEventListener('click', (e) => {
    audioE.play();
    output.innerText = 'Heater 3'
});

KeyA.addEventListener('click', (e) => {
    output.innerText = 'Heater 4';
    audioA.play();
});
KeyS.addEventListener('click', (e) => {
    output.innerText = 'Clap';
    audioS.play();
});

KeyD.addEventListener('click', (e) => {
    audioD.play();
    output.innerText = 'Open-HH';
});

KeyZ.addEventListener('click', (e) => {
    output.innerText = "Kick-n'-Hat";
    audioZ.play();
});
KeyX.addEventListener('click', (e) => {
    output.innerText = 'Kick';
    audioX.play();
});

KeyC.addEventListener('click', (e) => {
    audioC.play();
    output.innerText = 'Closet-HH'
    console.log(e.target.value)
});

window.addEventListener('keyup', (e) => {
    if (e.key == 'Q' || e.key == 'q') {
        output.innerText = 'Heater 1'
        audioQ.play();
        console.log();
    }
    if (e.key == 'W' || e.key == 'w') {
        output.innerText = 'Heater 2';
        audioW.play();
    }
    if (e.key == 'E' || e.key == 'e') {
        output.innerText = 'Heater 3';
        audioE.play();
    }
    if (e.key == 'A' || e.key == 'a') {
        output.innerText = 'Heater 4';
        audioA.play();
    }
    if (e.key == 'S' || e.key == 's') {
        output.innerText = 'Clap';
        audioS.play();
    }
    if (e.key == 'D' || e.key == 'd') {
        output.innerText = 'Open-HH';
        audioD.play();
    }
    if (e.key == 'Z' || e.key == 'z') {
        output.innerText = "Kick-n'-Hat"
        audioZ.play();
    }
    if (e.key == 'X' || e.key == 'x') {
        output.innerText = 'Kick';
        audioX.play();
    }
    if (e.key == 'C' || e.key == 'c') {
        output.innerText = 'Closed-HH';
        audioC.play();
    }


})



const sounds = {
    'KeyQ': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    'KeyW': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    'KeyE': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    'KeyA': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    'KeyS': 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    'KeyD': 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    'KeyZ': 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    'KeyX': 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    'KeyC': 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
};

const play = sound => {
    console.log("playing", sound)
    var audio = new Audio(sound);
    audio.play();
}
/*
document.getElementById('footer').addEventListener('click', function (e) {
    const tgt = e.target.closest('button');

    if (tgt) play(sounds[tgt.id]);
    display.value = e.target.value;

});*/




const a = {
    'KeyW': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom1.ogg',
    'KeyA': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom2.ogg',
    'KeyS': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom3.ogg',
    'KeyD': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/pad1.ogg',
    'KeyJ': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/snare1.ogg',
    'KeyK': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/crash1.ogg',
    'KeyL': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/kik.ogg'
}


//*const demo = document.getElementById('demo');

//*document.getElementById('drumSet').addEventListener('click', function (e) {
//*   const tgt = e.target.closest('button');

//*   if (tgt) play(sounds[tgt.id]);
//*  demo.value = e.target.value;

//*}) 

/*window.addEventListener('keypress', function (e) {
    console.log(e.code)
    demo.value = e.target.value
    if (sounds[e.code]) {
        console.log("clicking", e.code)
        document.getElementById(e.code).click()


    }
})*/