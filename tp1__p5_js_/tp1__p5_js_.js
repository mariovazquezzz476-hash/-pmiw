let fondo;
let fondomariobros;
let framesMovimiento = [];
const NOMBRES = ['caminar','saltar'];
const FRAMES_POR_ACCION = [4,5];
const velocidad = 3;
let movimientoActual = 0;
let x = -60;
let y;
let tituloY = -100;
let velocidadTitulo = 3.5;


function cargarMovimiento(nombre,cantidad){
let frames = [];
for(let i = 0; i < cantidad; i++){
frames.push(loadImage('images/' + nombre + '_' + i + '.png'));
}
return frames;
}


function elegirFrame(frames, velocidadanimacion){
let indice = floor(frameCount / velocidadanimacion)% frames.length;
return frames[indice];
}



function preload(){
  fondo = loadImage("images/fondo.png");
  fondomariobros = loadImage("images/fondomariobros.png");
  
for(let a = 0; a < NOMBRES.length; a++){
framesMovimiento.push(cargarMovimiento(NOMBRES[a],FRAMES_POR_ACCION[a]))
}
}

function setup() {
createCanvas(800,600);

}


function draw() {
  image(fondo,0,0,width,height);
  image(fondomariobros,0,tituloY,width,height);

tituloY +=velocidadTitulo; 

if(tituloY > 120){
tituloY = 120; //129
}


  if (frameCount % 180 < 50) {
    movimientoActual = 1;
    y = 440;
  } else {
 movimientoActual = 0;
 y = 470; 
}
  

  let frames = elegirFrame(framesMovimiento[movimientoActual],10);
  x += velocidad;
  if (x > width + 60){
  x = -60;
  tituloY = -100;
  }
 image(frames,x,y);
}
