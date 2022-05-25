const app = document.getElementById('typewrite');
const typewrite = new typewrite(app, { 
        loop:true,
        Delay:75
    });

typewrite
    .typeString('Frontera con Bolivia')
    .pauseFor(200)
    .start();