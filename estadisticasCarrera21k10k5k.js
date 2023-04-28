document.addEventListener('DOMContentLoaded',function(){

const tabla21k = document.getElementById('tabla21k');
const tabla10k = document.getElementById('tabla10k');
const tabla5k = document.getElementById('tabla5k');
const trTable21k = document.querySelectorAll('#tabla21k .datos-corredores tr');
const trTable10k = document.querySelectorAll('#tabla10k .datos-corredores tr');
const trTable5k = document.querySelectorAll('#tabla5k .datos-corredores tr');

const seleccionTabla21k = document.querySelector('.seleccion-tabla-21k');
const seleccionTabla10k = document.querySelector('.seleccion-tabla-10k');
const seleccionTabla5k = document.querySelector('.seleccion-tabla-5k ');
const h4Tabla21k = document.getElementById('21k-general');
const h4Tabla10k = document.getElementById('10k-general');
const h4Tabla5k = document.getElementById('5k-general');


seleccionTabla21k.addEventListener('click',()=>{
    h4Tabla21k.scrollIntoView({
        behavior:'smooth'
    });
    if (screen.width < 720) {
        document.querySelector('body').style.minWidth = '1024px';
        cambioWebPc();
    } 
});


seleccionTabla10k.addEventListener('click',()=>{
    h4Tabla10k.scrollIntoView({
        behavior:'smooth'
    });
    if (screen.width < 720) {
        document.querySelector('body').style.minWidth = '1024px';
        cambioWebPc();
    } 
});
 
 seleccionTabla5k.addEventListener('click',()=>{
    h4Tabla5k.scrollIntoView({
        behavior:'smooth'
    });
    if (screen.width < 720) {
        document.querySelector('body').style.minWidth = '1024px';
        cambioWebPc();
    } 
});

function cambioWebPc(){
    if (screen.width < 720) {
    document.querySelector('body').style.transition = 'transform 1s ease-in-out';
    document.querySelector('body').style.zoom = (screen.width / 1024);
    document.querySelector('.nav-menu-mobile').style.display = 'none';
    document.querySelector('.nav-menu-pc').style.cssText = 'display: inherit;background-color: #1b1b1b;display: flex;align-items: center;padding: 1.2rem 1.5rem;height: 9.4rem;';
    document.querySelector('.nav-menu-pc img').style.cssText = 'height: 6rem;padding-left: 2rem;';
    document.querySelector('.menu-pc').style.cssText ='width: 80%;margin-left: auto;margin-right: auto;display: flex;justify-content: space-around;';
    document.querySelector('.detalles__buscador-individual').style.cssText = ' display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: auto auto;grid-template-areas:  "img title"  "img text"  "img input";gap: 20px;padding: 3rem ;box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.75);background: radial-gradient(ellipse at center, #5f5e5e 0%, #52524f 11%, #1f1f1e 100%);';
    document.querySelector('.imagen-buscador_individual').style.cssText = ' grid-area: img;max-width: 100%;height: 100%;object-fit: cover;clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 70% 100%, 0% 99%);';
    document.querySelector('.buscador-individual__info h4').style.cssText = 'grid-area: title;';
    document.querySelector('.buscador-individual_parrafo').style.cssText = 'grid-area: text;';
    document.querySelector('.inputs-individual').style.cssText = ' grid-area: input;';

    document.querySelector('.detalles__buscador-grupal').style.cssText = ' display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: auto auto;grid-template-areas:  "title img"  "text img"  "input img";gap: 20px;padding: 3rem ;box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.75);background: radial-gradient(ellipse at center, #5f5e5e 0%, #52524f 11%, #1f1f1e 100%);';
    document.querySelector('.imagen-buscador_grupal').style.cssText = 'grid-area: img;max-width: 100%;height: 100%;object-fit: cover;background-position: left;clip-path: polygon(0 30%, 0% 0%, 100% 0%, 100% 100%, 30% 100%);';
    document.querySelector('.buscador-grupal__info h4').style.cssText = 'grid-area: title;';
    document.querySelector('.buscador-grupal__info p').style.cssText = 'grid-area: text;';
    document.querySelector('#acceder-consulta-grupal').style.cssText = ' grid-area: input;';

    document.querySelector('.intro-tablas').style.cssText = 'display: grid;grid-template-columns: 1fr 1fr;grid-template-rows: auto auto;grid-template-areas:    "title img"    "text img";gap: 20px;padding: 3rem;box-shadow: 10px 10px 18px -7px rgba(0,0,0,0.75);background: radial-gradient(ellipse at center, #5f5e5e 0%, #52524f 11%, #1f1f1e 100%);margin-bottom: 3rem;';
    document.querySelector('.llegada-web').style.cssText = ' display: inherit;grid-area: img;';
    document.querySelector('.intro-tablas h4').style.cssText = 'grid-area: title;';
    document.querySelector('.texto-tabla').style.cssText = 'grid-area: text;';
    document.querySelector('.llegada-cel').style.cssText = 'display: none;';

    document.querySelector('#bg-video').style.cssText = 'position: absolute;top: 0;left: 0;width: 100%;height: 100%;object-fit: cover;z-index: -1;';
    document.querySelector('.circular-amigos').style.cssText = 'display: flex;justify-content: space-evenly;';

    
    }
}



let fila21k = tabla21k.rows; 
let fila10k = tabla10k.rows;
let fila5k = tabla5k.rows;

let posicion21k = 0, 
dorsal21k = 1,
nombre21k = 2, 
apellido21k = 3, 
tiempoBruto21k = 4,
tiempoNeto21k = 5, 
edad21k = 6, 
genero21k = 7, 
runinngTeam21k = 8,

posicion10k = 0, 
dorsal10k = 1,
nombre10k = 2, 
apellido10k = 3, 
tiempoBruto10k = 4,
tiempoNeto10k = 5, 
edad10k = 6, 
genero10k = 7, 
runinngTeam10k = 8,

posicion5k = 0, 
dorsal5k = 1,
nombre5k = 2, 
apellido5k = 3, 
tiempoBruto5k = 4,
tiempoNeto5k = 5, 
edad5k = 6, 
genero5k = 7, 
runinngTeam5k = 8;


datos21k = [];
competidor21k = [];

datos10k = [];
competidor10k = [];

datos5k = [];
competidor5k = [];

copaTeam = [];
teamGanadores= [];





// -------------- GENERAL 21K -------------- 

for( y=1; y<fila21k.length; y++ ) {
    competidores21k = fila21k[y].cells;
    for(  datos of competidores21k){
        datos21k = [...datos21k,datos.innerHTML];
        objeto21k = {
            posicionGeneral: datos21k[posicion21k],
            posicionSexo: datos21k[posicion21k],
            posicionEdad: datos21k[posicion21k],
            dorsal: datos21k[dorsal21k],
            nombre: datos21k[nombre21k],
            apellido: datos21k[apellido21k],
            tiempoBruto: datos21k[tiempoBruto21k],
            tiempoNeto: datos21k[tiempoNeto21k],
            edad: datos21k[edad21k],
            genero: datos21k[genero21k],
            runningTeam: datos21k[runinngTeam21k],
            difTiempo: datos21k[tiempoNeto21k],
            difTiempoGS: datos21k[tiempoNeto21k],
            ritmo: datos21k[tiempoNeto21k],
            porcentajePorEdad: datos21k[posicion21k],
            porcentajePorGenero: datos21k[posicion21k],
            totalCorredoresGeneral: 0,
            totalCorredoresSexo:0,
            totalCorredoresEdad: 0,

        };
    };
    competidor21k = [...competidor21k,objeto21k];
    posicion21k +=9; 
    dorsal21k +=9;
    nombre21k +=9; 
    apellido21k +=9; 
    tiempoBruto21k +=9;
    tiempoNeto21k +=9;  
    edad21k +=9;
    genero21k +=9; 
    runinngTeam21k +=9;
}

let general21k = competidor21k;

lengthGeneral21k = general21k.length;

tiempoCero21kArr = general21k[0].difTiempo.split(":");
tiempoCero21kEnSegundos = Number.parseInt(tiempoCero21kArr[0]*3600) + Number.parseInt(tiempoCero21kArr[1]*60) + Number.parseInt(tiempoCero21kArr[2]);

for( g21k=0; g21k<lengthGeneral21k; g21k++ ){
    general21k[g21k].totalCorredoresGeneral = lengthGeneral21k;
    general21k[g21k].posicionGeneral = g21k+1;
    general21k[g21k].posicionSexo = g21k+1;
    general21k[g21k].posicionEdad = g21k+1;
    general21k[g21k].edad = Number.parseInt(general21k[g21k].edad);
    general21k[g21k].dorsal = Number.parseInt(general21k[g21k].dorsal);
    general21k[g21k].runningTeam = general21k[g21k].runningTeam.trim();
    tiempoArr = general21k[g21k].difTiempo.split(":")
    tiempoEnSegundos = Number.parseInt(tiempoArr[0]*3600) + Number.parseInt(tiempoArr[1]*60) + Number.parseInt(tiempoArr[2]);
    general21k[g21k].difTiempo = tiempoEnSegundos;
    general21k[g21k].difTiempo = general21k[g21k].difTiempo - tiempoCero21kEnSegundos;
    difHsTiempo = Math.trunc(general21k[g21k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(general21k[g21k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (general21k[g21k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        general21k[g21k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        general21k[g21k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        general21k[g21k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    const tr21k = trTable21k[g21k]
    const td21k = document.createElement('td');
    td21k.innerHTML = general21k[g21k].difTiempo;
    tr21k.insertBefore(td21k,tr21k.children[6]);

    ritmoCompetidores = general21k[g21k].tiempoNeto.split(":");
    ritmoCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]*3600);
    ritmoCalculoMinutoCompetidor = Number.parseInt(ritmoCompetidores[1]*60);
    ritmoCalculoSegundosCompetidor = Number.parseInt(ritmoCompetidores[2]);
    ritmoMinutoCompetidor = ((ritmoCalculoHorasCompetidor + ritmoCalculoMinutoCompetidor + ritmoCalculoSegundosCompetidor)/60)/10;
    ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor%1)*60);
    ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor)
    if (ritmoSegundosCompetidor<10){
        ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor
    }
    if (ritmoMinutosCompetidor<10){
        ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor
    }
    general21k[g21k].ritmo = ritmoMinutosCompetidor + ":" + ritmoSegundosCompetidor
}

console.log(general21k)




// -------------- GENERAL 10K -------------- 

for( x=1; x<fila10k.length; x++ ) {
    competidores10k = fila10k[x].cells;
    for(  datos of competidores10k){
        datos10k = [...datos10k,datos.innerHTML];
        objeto10k = {
            posicionGeneral: datos10k[posicion10k],
            posicionSexo: datos10k[posicion10k],
            posicionEdad: datos10k[posicion10k],
            dorsal: datos10k[dorsal10k],
            nombre: datos10k[nombre10k],
            apellido: datos10k[apellido10k],
            tiempoBruto: datos10k[tiempoBruto10k],
            tiempoNeto: datos10k[tiempoNeto10k],
            edad: datos10k[edad10k],
            genero: datos10k[genero10k],
            runningTeam: datos10k[runinngTeam10k],
            difTiempo: datos10k[tiempoNeto10k],
            difTiempoGS: datos10k[tiempoNeto10k],
            ritmo: datos10k[tiempoNeto10k],
            porcentajePorEdad: datos10k[posicion10k],
            porcentajePorGenero: datos10k[posicion10k],
            totalCorredoresGeneral: 0,
            totalCorredoresSexo:0,
            totalCorredoresEdad: 0,

        };
    };
    competidor10k = [...competidor10k,objeto10k];
    posicion10k +=9; 
    dorsal10k +=9;
    nombre10k +=9; 
    apellido10k +=9; 
    tiempoBruto10k +=9;
    tiempoNeto10k +=9;  
    edad10k +=9;
    genero10k +=9; 
    runinngTeam10k +=9;
}

let general10k = competidor10k;

lengthGeneral10k = general10k.length;

tiempoCero10kArr = general10k[0].difTiempo.split(":");
tiempoCero10kEnSegundos = Number.parseInt(tiempoCero10kArr[0]*3600) + Number.parseInt(tiempoCero10kArr[1]*60) + Number.parseInt(tiempoCero10kArr[2]);

for( g10k=0; g10k<lengthGeneral10k; g10k++ ){
    general10k[g10k].totalCorredoresGeneral = lengthGeneral10k;
    general10k[g10k].posicionGeneral = g10k+1;
    general10k[g10k].posicionSexo = g10k+1;
    general10k[g10k].posicionEdad = g10k+1;
    general10k[g10k].edad = Number.parseInt(general10k[g10k].edad);
    general10k[g10k].dorsal = Number.parseInt(general10k[g10k].dorsal);
    general10k[g10k].runningTeam = general10k[g10k].runningTeam.trim();
    tiempoArr = general10k[g10k].difTiempo.split(":")
    tiempoEnSegundos = Number.parseInt(tiempoArr[0]*3600) + Number.parseInt(tiempoArr[1]*60) + Number.parseInt(tiempoArr[2]);
    general10k[g10k].difTiempo = tiempoEnSegundos;
    general10k[g10k].difTiempo = general10k[g10k].difTiempo - tiempoCero10kEnSegundos;
    difHsTiempo = Math.trunc(general10k[g10k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(general10k[g10k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (general10k[g10k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        general10k[g10k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        general10k[g10k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        general10k[g10k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    const tr10k = trTable10k[g10k]
    const td10k = document.createElement('td');
    td10k.innerHTML = general10k[g10k].difTiempo;
    tr10k.insertBefore(td10k,tr10k.children[6]);

    ritmoCompetidores = general10k[g10k].tiempoNeto.split(":");
    ritmoCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]*3600);
    ritmoCalculoMinutoCompetidor = Number.parseInt(ritmoCompetidores[1]*60);
    ritmoCalculoSegundosCompetidor = Number.parseInt(ritmoCompetidores[2]);
    ritmoMinutoCompetidor = ((ritmoCalculoHorasCompetidor + ritmoCalculoMinutoCompetidor + ritmoCalculoSegundosCompetidor)/60)/10;
    ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor%1)*60);
    ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor)
    if (ritmoSegundosCompetidor<10){
        ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor
    }
    if (ritmoMinutosCompetidor<10){
        ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor
    }
    general10k[g10k].ritmo = ritmoMinutosCompetidor + ":" + ritmoSegundosCompetidor
}

console.log(general10k)





// -------------- GENERAL 5K -------------- 

for( z=1; z<fila5k.length; z++ ) {
    competidores5k = fila5k[z].cells;
    for(  datos of competidores5k){
        datos5k = [...datos5k,datos.innerHTML];
        objeto5k = {
            posicionGeneral: datos5k[posicion5k],
            posicionSexo: datos5k[posicion5k],
            posicionEdad: datos5k[posicion5k],
            dorsal: datos5k[dorsal5k],
            nombre: datos5k[nombre5k],
            apellido: datos5k[apellido5k],
            tiempoBruto: datos5k[tiempoBruto5k],
            tiempoNeto: datos5k[tiempoNeto5k],
            edad: datos5k[edad5k],
            genero: datos5k[genero5k],
            runningTeam: datos5k[runinngTeam5k],
            difTiempo: datos5k[tiempoNeto5k],
            difTiempoGS: datos5k[tiempoNeto5k],
            ritmo: datos5k[tiempoNeto5k],
            porcentajePorEdad: datos5k[posicion5k],
            porcentajePorGenero: datos5k[posicion5k],
            totalCorredoresGeneral: 0,
            totalCorredoresSexo:0,
            totalCorredoresEdad: 0,

        };
    };
    competidor5k = [...competidor5k,objeto5k];
    posicion5k +=9; 
    dorsal5k +=9;
    nombre5k +=9; 
    apellido5k +=9; 
    tiempoBruto5k +=9;
    tiempoNeto5k +=9;  
    edad5k +=9;
    genero5k +=9; 
    runinngTeam5k +=9;
}

let general5k = competidor5k;

lengthGeneral5k = general5k.length;

tiempoCero5kArr = general5k[0].difTiempo.split(":");
tiempoCero5kEnSegundos = Number.parseInt(tiempoCero5kArr[0]*3600) + Number.parseInt(tiempoCero5kArr[1]*60) + Number.parseInt(tiempoCero5kArr[2]);

for( g5k=0; g5k<lengthGeneral5k; g5k++ ){
    general5k[g5k].totalCorredoresGeneral = lengthGeneral5k;
    general5k[g5k].posicionGeneral = g5k+1;
    general5k[g5k].posicionSexo = g5k+1;
    general5k[g5k].posicionEdad = g5k+1;
    general5k[g5k].edad = Number.parseInt(general5k[g5k].edad);
    general5k[g5k].dorsal = Number.parseInt(general5k[g5k].dorsal);
    general5k[g5k].runningTeam = general5k[g5k].runningTeam.trim();
    tiempoArr = general5k[g5k].difTiempo.split(":")
    tiempoEnSegundos = Number.parseInt(tiempoArr[0]*3600) + Number.parseInt(tiempoArr[1]*60) + Number.parseInt(tiempoArr[2]);
    general5k[g5k].difTiempo = tiempoEnSegundos;
    general5k[g5k].difTiempo = general5k[g5k].difTiempo - tiempoCero5kEnSegundos;
    difHsTiempo = Math.trunc(general5k[g5k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(general5k[g5k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (general5k[g5k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        general5k[g5k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        general5k[g5k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        general5k[g5k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    const tr5k = trTable5k[g5k]
    const td5k = document.createElement('td');
    td5k.innerHTML = general5k[g5k].difTiempo;
    tr5k.insertBefore(td5k,tr5k.children[6]);

    ritmoCompetidores = general5k[g5k].tiempoNeto.split(":");
    ritmoCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]*3600);
    ritmoCalculoMinutoCompetidor = Number.parseInt(ritmoCompetidores[1]*60);
    ritmoCalculoSegundosCompetidor = Number.parseInt(ritmoCompetidores[2]);
    ritmoMinutoCompetidor = ((ritmoCalculoHorasCompetidor + ritmoCalculoMinutoCompetidor + ritmoCalculoSegundosCompetidor)/60)/10;
    ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor%1)*60);
    ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor)
    if (ritmoSegundosCompetidor<10){
        ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor
    }
    if (ritmoMinutosCompetidor<10){
        ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor
    }
    general5k[g5k].ritmo = ritmoMinutosCompetidor + ":" + ritmoSegundosCompetidor
}

console.log(general5k)




// -------------- HOMBRES GENERAL 5K -------------- 

let masc5k

masc5k = general5k.filter( sexo5k => sexo5k.genero == "Masc");
lengthMasculino5k = masc5k.length;

tiempoCeromasc5kArr = masc5k[0].tiempoNeto.split(":");
tiempoCeromasc5kEnSegundos = Number.parseInt(tiempoCeromasc5kArr[0]*3600) + Number.parseInt(tiempoCeromasc5kArr[1]*60) + Number.parseInt(tiempoCeromasc5kArr[2]);
for( hg5k=0; hg5k<lengthMasculino5k; hg5k++ ){
    masc5k[hg5k].totalCorredoresSexo = lengthMasculino5k;
    masc5k[hg5k].posicionSexo = hg5k+1;
    tiempomasc5kArr = masc5k[hg5k].tiempoNeto.split(":")
    tiempomasc5kEnSegundos = Number.parseInt(tiempomasc5kArr[0]*3600) + Number.parseInt(tiempomasc5kArr[1]*60) + Number.parseInt(tiempomasc5kArr[2]);
    masc5k[hg5k].difTiempo = tiempomasc5kEnSegundos;
    masc5k[hg5k].difTiempo = masc5k[hg5k].difTiempo - tiempoCeromasc5kEnSegundos;
    difHsTiempo = Math.trunc(masc5k[hg5k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k[hg5k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k[hg5k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k[hg5k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k[hg5k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
        masc5k[hg5k].difTiempoGS = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k[hg5k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
        masc5k[hg5k].difTiempoGS = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k[hg5k].porcentajePorGenero = (100 - (masc5k[hg5k].posicionSexo / lengthMasculino5k)*100).toFixed(2) + "%"
}




// -------------- HOMBRES GENERAL 10K -------------- 

let masc10k

masc10k = general10k.filter( sexo10k => sexo10k.genero == "Masc");
lengthMasculino10k = masc10k.length;

tiempoCeromasc10kArr = masc10k[0].tiempoNeto.split(":");
tiempoCeromasc10kEnSegundos = Number.parseInt(tiempoCeromasc10kArr[0]*3600) + Number.parseInt(tiempoCeromasc10kArr[1]*60) + Number.parseInt(tiempoCeromasc10kArr[2]);

for( hg10k=0; hg10k<lengthMasculino10k; hg10k++ ){
    masc10k[hg10k].totalCorredoresSexo = lengthMasculino10k;
    masc10k[hg10k].posicionSexo = hg10k+1;
    tiempomasc10kArr = masc10k[hg10k].tiempoNeto.split(":")
    tiempomasc10kEnSegundos = Number.parseInt(tiempomasc10kArr[0]*3600) + Number.parseInt(tiempomasc10kArr[1]*60) + Number.parseInt(tiempomasc10kArr[2]);
    masc10k[hg10k].difTiempo = tiempomasc10kEnSegundos;
    masc10k[hg10k].difTiempo = masc10k[hg10k].difTiempo - tiempoCeromasc10kEnSegundos;
    difHsTiempo = Math.trunc(masc10k[hg10k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k[hg10k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k[hg10k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k[hg10k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k[hg10k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
        masc10k[hg10k].difTiempoGS = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k[hg10k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
        masc10k[hg10k].difTiempoGS = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k[hg10k].porcentajePorGenero = (100 - (masc10k[hg10k].posicionSexo / lengthMasculino10k)*100).toFixed(2) + "%"
}

// -------------- HOMBRES GENERAL 21K -------------- 

let masc21k

masc21k = general21k.filter( sexo21k => sexo21k.genero == "Masc");
lengthMasculino21k = masc21k.length;

tiempoCeromasc21kArr = masc21k[0].tiempoNeto.split(":");
tiempoCeromasc21kEnSegundos = Number.parseInt(tiempoCeromasc21kArr[0]*3600) + Number.parseInt(tiempoCeromasc21kArr[1]*60) + Number.parseInt(tiempoCeromasc21kArr[2]);

for( hg21k=0; hg21k<lengthMasculino21k; hg21k++ ){
    masc21k[hg21k].totalCorredoresSexo = lengthMasculino21k;
    masc21k[hg21k].posicionSexo = hg21k+1;
    tiempomasc21kArr = masc21k[hg21k].tiempoNeto.split(":")
    tiempomasc21kEnSegundos = Number.parseInt(tiempomasc21kArr[0]*3600) + Number.parseInt(tiempomasc21kArr[1]*60) + Number.parseInt(tiempomasc21kArr[2]);
    masc21k[hg21k].difTiempo = tiempomasc21kEnSegundos;
    masc21k[hg21k].difTiempo = masc21k[hg21k].difTiempo - tiempoCeromasc21kEnSegundos;
    difHsTiempo = Math.trunc(masc21k[hg21k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k[hg21k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k[hg21k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k[hg21k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k[hg21k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
        masc21k[hg21k].difTiempoGS = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k[hg21k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
        masc21k[hg21k].difTiempoGS = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k[hg21k].porcentajePorGenero = (100 - (masc21k[hg21k].posicionSexo / lengthMasculino21k)*100).toFixed(2) + "%"
}



// -------------- MUJERES GENERAL 5K -------------- 

let fem5k

fem5k = general5k.filter( sexo5k => sexo5k.genero == "Fem");
lengthFemenino5k = fem5k.length;

tiempoCerofem5kArr = fem5k[0].tiempoNeto.split(":");
tiempoCerofem5kEnSegundos = Number.parseInt(tiempoCerofem5kArr[0]*3600) + Number.parseInt(tiempoCerofem5kArr[1]*60) + Number.parseInt(tiempoCerofem5kArr[2]);

for( mg5k=0; mg5k<lengthFemenino5k; mg5k++ ){
    fem5k[mg5k].totalCorredoresSexo = lengthFemenino5k;
    fem5k[mg5k].posicionSexo = mg5k+1;
    tiempofem5kArr = fem5k[mg5k].tiempoNeto.split(":")
    tiempofem5kEnSegundos = Number.parseInt(tiempofem5kArr[0]*3600) + Number.parseInt(tiempofem5kArr[1]*60) + Number.parseInt(tiempofem5kArr[2]);
    fem5k[mg5k].difTiempo = tiempofem5kEnSegundos;
    fem5k[mg5k].difTiempo = fem5k[mg5k].difTiempo - tiempoCerofem5kEnSegundos;
    difHsTiempo = Math.trunc(fem5k[mg5k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k[mg5k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k[mg5k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k[mg5k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k[mg5k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
        fem5k[mg5k].difTiempoGS = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k[mg5k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
        fem5k[mg5k].difTiempoGS = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k[mg5k].porcentajePorGenero = (100 - (fem5k[mg5k].posicionSexo / lengthFemenino5k)*100).toFixed(2) + "%"
}

// -------------- MUJERES GENERAL 10K -------------- 

let fem10k

fem10k = general10k.filter( sexo10k => sexo10k.genero == "Fem");
lengthFemenino10k = fem10k.length;

tiempoCerofem10kArr = fem10k[0].tiempoNeto.split(":");
tiempoCerofem10kEnSegundos = Number.parseInt(tiempoCerofem10kArr[0]*3600) + Number.parseInt(tiempoCerofem10kArr[1]*60) + Number.parseInt(tiempoCerofem10kArr[2]);

for( mg10k=0; mg10k<lengthFemenino10k; mg10k++ ){
    fem10k[mg10k].totalCorredoresSexo = lengthFemenino10k;
    fem10k[mg10k].posicionSexo = mg10k+1;
    tiempofem10kArr = fem10k[mg10k].tiempoNeto.split(":")
    tiempofem10kEnSegundos = Number.parseInt(tiempofem10kArr[0]*3600) + Number.parseInt(tiempofem10kArr[1]*60) + Number.parseInt(tiempofem10kArr[2]);
    fem10k[mg10k].difTiempo = tiempofem10kEnSegundos;
    fem10k[mg10k].difTiempo = fem10k[mg10k].difTiempo - tiempoCerofem10kEnSegundos;
    difHsTiempo = Math.trunc(fem10k[mg10k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k[mg10k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k[mg10k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k[mg10k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k[mg10k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
        fem10k[mg10k].difTiempoGS = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k[mg10k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
        fem10k[mg10k].difTiempoGS = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k[mg10k].porcentajePorGenero = (100 - (fem10k[mg10k].posicionSexo / lengthFemenino10k)*100).toFixed(2) + "%"
}


// -------------- MUJERES GENERAL 21K -------------- 

let fem21k

fem21k = general21k.filter( sexo21k => sexo21k.genero == "Fem");
lengthFemenino21k = fem21k.length;

tiempoCerofem21kArr = fem21k[0].tiempoNeto.split(":");
tiempoCerofem21kEnSegundos = Number.parseInt(tiempoCerofem21kArr[0]*3600) + Number.parseInt(tiempoCerofem21kArr[1]*60) + Number.parseInt(tiempoCerofem21kArr[2]);

for( mg21k=0; mg21k<lengthFemenino21k; mg21k++ ){
    fem21k[mg21k].totalCorredoresSexo = lengthFemenino21k;
    fem21k[mg21k].posicionSexo = mg21k+1;
    tiempofem21kArr = fem21k[mg21k].tiempoNeto.split(":")
    tiempofem21kEnSegundos = Number.parseInt(tiempofem21kArr[0]*3600) + Number.parseInt(tiempofem21kArr[1]*60) + Number.parseInt(tiempofem21kArr[2]);
    fem21k[mg21k].difTiempo = tiempofem21kEnSegundos;
    fem21k[mg21k].difTiempo = fem21k[mg21k].difTiempo - tiempoCerofem21kEnSegundos;
    difHsTiempo = Math.trunc(fem21k[mg21k].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k[mg21k].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k[mg21k].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k[mg21k].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k[mg21k].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
        fem21k[mg21k].difTiempoGS = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k[mg21k].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
        fem21k[mg21k].difTiempoGS = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k[mg21k].porcentajePorGenero = (100 - (fem21k[mg21k].posicionSexo / lengthFemenino21k)*100).toFixed(2) + "%"
}



// -------------- HOMBRES HASTA 19 AÑOS -------------- 

let masc21kh19

masc21kh19 = masc21k.filter( edad21k => edad21k.edad < 20 );
lengthMasculino21kh19 = masc21kh19.length;

if(lengthMasculino21kh19 != 0){
    tiempoCeromasc21kh19Arr = masc21kh19[0].tiempoNeto.split(":");
    tiempoCeromasc21kh19EnSegundos = Number.parseInt(tiempoCeromasc21kh19Arr[0]*3600) + Number.parseInt(tiempoCeromasc21kh19Arr[1]*60) + Number.parseInt(tiempoCeromasc21kh19Arr[2]);  
}

for( hh19=0; hh19<lengthMasculino21kh19; hh19++ ){
    masc21kh19[hh19].totalCorredoresEdad = lengthMasculino21kh19;
    masc21kh19[hh19].posicionEdad = hh19+1;
    tiempomasc21kh19Arr = masc21kh19[hh19].tiempoNeto.split(":")
    tiempomasc21kh19EnSegundos = Number.parseInt(tiempomasc21kh19Arr[0]*3600) + Number.parseInt(tiempomasc21kh19Arr[1]*60) + Number.parseInt(tiempomasc21kh19Arr[2]);
    masc21kh19[hh19].difTiempo = tiempomasc21kh19EnSegundos;
    masc21kh19[hh19].difTiempo = masc21kh19[hh19].difTiempo - tiempoCeromasc21kh19EnSegundos;
    difHsTiempo = Math.trunc(masc21kh19[hh19].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21kh19[hh19].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21kh19[hh19].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21kh19[hh19].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21kh19[hh19].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21kh19[hh19].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21kh19[hh19].porcentajePorEdad = (100 - (masc21kh19[hh19].posicionEdad / lengthMasculino21kh19)*100).toFixed(2) + "%";
}


let masc10kh19

masc10kh19 = masc10k.filter( edad10k => edad10k.edad < 20 );
lengthMasculino10kh19 = masc10kh19.length;

if(lengthMasculino10kh19 != 0){
    tiempoCeromasc10kh19Arr = masc10kh19[0].tiempoNeto.split(":");
    tiempoCeromasc10kh19EnSegundos = Number.parseInt(tiempoCeromasc10kh19Arr[0]*3600) + Number.parseInt(tiempoCeromasc10kh19Arr[1]*60) + Number.parseInt(tiempoCeromasc10kh19Arr[2]);  
}

for( hh19=0; hh19<lengthMasculino10kh19; hh19++ ){
    masc10kh19[hh19].totalCorredoresEdad = lengthMasculino10kh19;
    masc10kh19[hh19].posicionEdad = hh19+1;
    tiempomasc10kh19Arr = masc10kh19[hh19].tiempoNeto.split(":")
    tiempomasc10kh19EnSegundos = Number.parseInt(tiempomasc10kh19Arr[0]*3600) + Number.parseInt(tiempomasc10kh19Arr[1]*60) + Number.parseInt(tiempomasc10kh19Arr[2]);
    masc10kh19[hh19].difTiempo = tiempomasc10kh19EnSegundos;
    masc10kh19[hh19].difTiempo = masc10kh19[hh19].difTiempo - tiempoCeromasc10kh19EnSegundos;
    difHsTiempo = Math.trunc(masc10kh19[hh19].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10kh19[hh19].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10kh19[hh19].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10kh19[hh19].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10kh19[hh19].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10kh19[hh19].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10kh19[hh19].porcentajePorEdad = (100 - (masc10kh19[hh19].posicionEdad / lengthMasculino10kh19)*100).toFixed(2) + "%";
}


let masc5kh19

masc5kh19 = masc5k.filter( edad5k => edad5k.edad < 20 );
lengthMasculino5kh19 = masc5kh19.length;

if(lengthMasculino5kh19 != 0){
    tiempoCeromasc5kh19Arr = masc5kh19[0].tiempoNeto.split(":");
    tiempoCeromasc5kh19EnSegundos = Number.parseInt(tiempoCeromasc5kh19Arr[0]*3600) + Number.parseInt(tiempoCeromasc5kh19Arr[1]*60) + Number.parseInt(tiempoCeromasc5kh19Arr[2]);  
}

for( hh19=0; hh19<lengthMasculino5kh19; hh19++ ){
    masc5kh19[hh19].totalCorredoresEdad = lengthMasculino5kh19;
    masc5kh19[hh19].posicionEdad = hh19+1;
    tiempomasc5kh19Arr = masc5kh19[hh19].tiempoNeto.split(":")
    tiempomasc5kh19EnSegundos = Number.parseInt(tiempomasc5kh19Arr[0]*3600) + Number.parseInt(tiempomasc5kh19Arr[1]*60) + Number.parseInt(tiempomasc5kh19Arr[2]);
    masc5kh19[hh19].difTiempo = tiempomasc5kh19EnSegundos;
    masc5kh19[hh19].difTiempo = masc5kh19[hh19].difTiempo - tiempoCeromasc5kh19EnSegundos;
    difHsTiempo = Math.trunc(masc5kh19[hh19].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5kh19[hh19].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5kh19[hh19].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5kh19[hh19].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5kh19[hh19].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5kh19[hh19].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5kh19[hh19].porcentajePorEdad = (100 - (masc5kh19[hh19].posicionEdad / lengthMasculino5kh19)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 20 A 24 AÑOS -------------- 

let masc21k2024

masc21k2024 = masc21k.filter( edad21k => ( edad21k.edad >= 20 && edad21k.edad < 25) );
lengthMasculino21k2024 = masc21k2024.length;

if(lengthMasculino21k2024 != 0){
    tiempoCeromasc21k2024Arr = masc21k2024[0].tiempoNeto.split(":");
    tiempoCeromasc21k2024EnSegundos = Number.parseInt(tiempoCeromasc21k2024Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k2024Arr[1]*60) + Number.parseInt(tiempoCeromasc21k2024Arr[2]);
}

for( h2024=0; h2024<lengthMasculino21k2024; h2024++ ){
    masc21k2024[h2024].totalCorredoresEdad = lengthMasculino21k2024;
    masc21k2024[h2024].posicionEdad = h2024+1;
    tiempomasc21k2024Arr = masc21k2024[h2024].tiempoNeto.split(":")
    tiempomasc21k2024EnSegundos = Number.parseInt(tiempomasc21k2024Arr[0]*3600) + Number.parseInt(tiempomasc21k2024Arr[1]*60) + Number.parseInt(tiempomasc21k2024Arr[2]);
    masc21k2024[h2024].difTiempo = tiempomasc21k2024EnSegundos;
    masc21k2024[h2024].difTiempo = masc21k2024[h2024].difTiempo - tiempoCeromasc21k2024EnSegundos;
    difHsTiempo = Math.trunc(masc21k2024[h2024].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k2024[h2024].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k2024[h2024].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k2024[h2024].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k2024[h2024].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k2024[h2024].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k2024[h2024].porcentajePorEdad = (100 - (masc21k2024[h2024].posicionEdad / lengthMasculino21k2024)*100).toFixed(2) + "%"
}


let masc10k2024

masc10k2024 = masc10k.filter( edad10k => ( edad10k.edad >= 20 && edad10k.edad < 25) );
lengthMasculino10k2024 = masc10k2024.length;

if(lengthMasculino10k2024 != 0){
    tiempoCeromasc10k2024Arr = masc10k2024[0].tiempoNeto.split(":");
    tiempoCeromasc10k2024EnSegundos = Number.parseInt(tiempoCeromasc10k2024Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k2024Arr[1]*60) + Number.parseInt(tiempoCeromasc10k2024Arr[2]);
}

for( h2024=0; h2024<lengthMasculino10k2024; h2024++ ){
    masc10k2024[h2024].totalCorredoresEdad = lengthMasculino10k2024;
    masc10k2024[h2024].posicionEdad = h2024+1;
    tiempomasc10k2024Arr = masc10k2024[h2024].tiempoNeto.split(":")
    tiempomasc10k2024EnSegundos = Number.parseInt(tiempomasc10k2024Arr[0]*3600) + Number.parseInt(tiempomasc10k2024Arr[1]*60) + Number.parseInt(tiempomasc10k2024Arr[2]);
    masc10k2024[h2024].difTiempo = tiempomasc10k2024EnSegundos;
    masc10k2024[h2024].difTiempo = masc10k2024[h2024].difTiempo - tiempoCeromasc10k2024EnSegundos;
    difHsTiempo = Math.trunc(masc10k2024[h2024].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k2024[h2024].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k2024[h2024].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k2024[h2024].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k2024[h2024].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k2024[h2024].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k2024[h2024].porcentajePorEdad = (100 - (masc10k2024[h2024].posicionEdad / lengthMasculino10k2024)*100).toFixed(2) + "%"
}

let masc5k2024

masc5k2024 = masc5k.filter( edad5k => ( edad5k.edad >= 20 && edad5k.edad < 25) );
lengthMasculino5k2024 = masc5k2024.length;

if(lengthMasculino5k2024 != 0){
    tiempoCeromasc5k2024Arr = masc5k2024[0].tiempoNeto.split(":");
    tiempoCeromasc5k2024EnSegundos = Number.parseInt(tiempoCeromasc5k2024Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k2024Arr[1]*60) + Number.parseInt(tiempoCeromasc5k2024Arr[2]);
}

for( h2024=0; h2024<lengthMasculino5k2024; h2024++ ){
    masc5k2024[h2024].totalCorredoresEdad = lengthMasculino5k2024;
    masc5k2024[h2024].posicionEdad = h2024+1;
    tiempomasc5k2024Arr = masc5k2024[h2024].tiempoNeto.split(":")
    tiempomasc5k2024EnSegundos = Number.parseInt(tiempomasc5k2024Arr[0]*3600) + Number.parseInt(tiempomasc5k2024Arr[1]*60) + Number.parseInt(tiempomasc5k2024Arr[2]);
    masc5k2024[h2024].difTiempo = tiempomasc5k2024EnSegundos;
    masc5k2024[h2024].difTiempo = masc5k2024[h2024].difTiempo - tiempoCeromasc5k2024EnSegundos;
    difHsTiempo = Math.trunc(masc5k2024[h2024].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k2024[h2024].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k2024[h2024].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k2024[h2024].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k2024[h2024].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k2024[h2024].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k2024[h2024].porcentajePorEdad = (100 - (masc5k2024[h2024].posicionEdad / lengthMasculino5k2024)*100).toFixed(2) + "%"
}


// -------------- HOMBRES 25 A 29 AÑOS -------------- 

let masc21k2529

masc21k2529 = masc21k.filter( edad21k => ( edad21k.edad >= 25 && edad21k.edad < 30) );
lengthMasculino21k2529 = masc21k2529.length;

if(lengthMasculino21k2529 != 0){
    tiempoCeromasc21k2529Arr = masc21k2529[0].tiempoNeto.split(":");
    tiempoCeromasc21k2529EnSegundos = Number.parseInt(tiempoCeromasc21k2529Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k2529Arr[1]*60) + Number.parseInt(tiempoCeromasc21k2529Arr[2]); 
}

for( h2529=0; h2529<lengthMasculino21k2529; h2529++ ){
    masc21k2529[h2529].totalCorredoresEdad = lengthMasculino21k2529;
    masc21k2529[h2529].posicionEdad = h2529+1;
    tiempomasc21k2529Arr = masc21k2529[h2529].tiempoNeto.split(":")
    tiempomasc21k2529EnSegundos = Number.parseInt(tiempomasc21k2529Arr[0]*3600) + Number.parseInt(tiempomasc21k2529Arr[1]*60) + Number.parseInt(tiempomasc21k2529Arr[2]);
    masc21k2529[h2529].difTiempo = tiempomasc21k2529EnSegundos;
    masc21k2529[h2529].difTiempo = masc21k2529[h2529].difTiempo - tiempoCeromasc21k2529EnSegundos;
    difHsTiempo = Math.trunc(masc21k2529[h2529].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k2529[h2529].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k2529[h2529].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k2529[h2529].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k2529[h2529].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k2529[h2529].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k2529[h2529].porcentajePorEdad = (100 - (masc21k2529[h2529].posicionEdad / lengthMasculino21k2529)*100).toFixed(2) + "%"
}


let masc10k2529

masc10k2529 = masc10k.filter( edad10k => ( edad10k.edad >= 25 && edad10k.edad < 30) );
lengthMasculino10k2529 = masc10k2529.length;

if(lengthMasculino10k2529 != 0){
    tiempoCeromasc10k2529Arr = masc10k2529[0].tiempoNeto.split(":");
    tiempoCeromasc10k2529EnSegundos = Number.parseInt(tiempoCeromasc10k2529Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k2529Arr[1]*60) + Number.parseInt(tiempoCeromasc10k2529Arr[2]); 
}

for( h2529=0; h2529<lengthMasculino10k2529; h2529++ ){
    masc10k2529[h2529].totalCorredoresEdad = lengthMasculino10k2529;
    masc10k2529[h2529].posicionEdad = h2529+1;
    tiempomasc10k2529Arr = masc10k2529[h2529].tiempoNeto.split(":")
    tiempomasc10k2529EnSegundos = Number.parseInt(tiempomasc10k2529Arr[0]*3600) + Number.parseInt(tiempomasc10k2529Arr[1]*60) + Number.parseInt(tiempomasc10k2529Arr[2]);
    masc10k2529[h2529].difTiempo = tiempomasc10k2529EnSegundos;
    masc10k2529[h2529].difTiempo = masc10k2529[h2529].difTiempo - tiempoCeromasc10k2529EnSegundos;
    difHsTiempo = Math.trunc(masc10k2529[h2529].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k2529[h2529].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k2529[h2529].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k2529[h2529].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k2529[h2529].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k2529[h2529].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k2529[h2529].porcentajePorEdad = (100 - (masc10k2529[h2529].posicionEdad / lengthMasculino10k2529)*100).toFixed(2) + "%"
}

let masc5k2529

masc5k2529 = masc5k.filter( edad5k => ( edad5k.edad >= 25 && edad5k.edad < 30) );
lengthMasculino5k2529 = masc5k2529.length;

if(lengthMasculino5k2529 != 0){
    tiempoCeromasc5k2529Arr = masc5k2529[0].tiempoNeto.split(":");
    tiempoCeromasc5k2529EnSegundos = Number.parseInt(tiempoCeromasc5k2529Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k2529Arr[1]*60) + Number.parseInt(tiempoCeromasc5k2529Arr[2]); 
}

for( h2529=0; h2529<lengthMasculino5k2529; h2529++ ){
    masc5k2529[h2529].totalCorredoresEdad = lengthMasculino5k2529;
    masc5k2529[h2529].posicionEdad = h2529+1;
    tiempomasc5k2529Arr = masc5k2529[h2529].tiempoNeto.split(":")
    tiempomasc5k2529EnSegundos = Number.parseInt(tiempomasc5k2529Arr[0]*3600) + Number.parseInt(tiempomasc10k2529Arr[1]*60) + Number.parseInt(tiempomasc10k2529Arr[2]);
    masc5k2529[h2529].difTiempo = tiempomasc5k2529EnSegundos;
    masc5k2529[h2529].difTiempo = masc5k2529[h2529].difTiempo - tiempoCeromasc5k2529EnSegundos;
    difHsTiempo = Math.trunc(masc5k2529[h2529].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k2529[h2529].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k2529[h2529].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k2529[h2529].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k2529[h2529].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k2529[h2529].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k2529[h2529].porcentajePorEdad = (100 - (masc5k2529[h2529].posicionEdad / lengthMasculino5k2529)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 30 A 34 AÑOS -------------- 

let masc21k3034

masc21k3034 = masc21k.filter( edad21k => ( edad21k.edad >= 30 && edad21k.edad < 35) );
lengthMasculino21k3034 = masc21k3034.length;

if(lengthMasculino21k3034 != 0){
    tiempoCeromasc21k3034Arr = masc21k3034[0].tiempoNeto.split(":");
    tiempoCeromasc21k3034EnSegundos = Number.parseInt(tiempoCeromasc21k3034Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k3034Arr[1]*60) + Number.parseInt(tiempoCeromasc21k3034Arr[2]); 
}

for( h3034=0; h3034<lengthMasculino21k3034; h3034++ ){
    masc21k3034[h3034].totalCorredoresEdad = lengthMasculino21k3034;
    masc21k3034[h3034].posicionEdad = h3034+1;
    tiempomasc21k3034Arr = masc21k3034[h3034].tiempoNeto.split(":")
    tiempomasc21k3034EnSegundos = Number.parseInt(tiempomasc21k3034Arr[0]*3600) + Number.parseInt(tiempomasc21k3034Arr[1]*60) + Number.parseInt(tiempomasc21k3034Arr[2]);
    masc21k3034[h3034].difTiempo = tiempomasc21k3034EnSegundos;
    masc21k3034[h3034].difTiempo = masc21k3034[h3034].difTiempo - tiempoCeromasc21k3034EnSegundos;
    difHsTiempo = Math.trunc(masc21k3034[h3034].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k3034[h3034].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k3034[h3034].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k3034[h3034].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k3034[h3034].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k3034[h3034].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k3034[h3034].porcentajePorEdad = (100 - (masc21k3034[h3034].posicionEdad / lengthMasculino21k3034)*100).toFixed(2) + "%"
}

let masc10k3034

masc10k3034 = masc10k.filter( edad10k => ( edad10k.edad >= 30 && edad10k.edad < 35) );
lengthMasculino10k3034 = masc10k3034.length;

if(lengthMasculino10k3034 != 0){
    tiempoCeromasc10k3034Arr = masc10k3034[0].tiempoNeto.split(":");
    tiempoCeromasc10k3034EnSegundos = Number.parseInt(tiempoCeromasc10k3034Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k3034Arr[1]*60) + Number.parseInt(tiempoCeromasc10k3034Arr[2]); 
}

for( h3034=0; h3034<lengthMasculino10k3034; h3034++ ){
    masc10k3034[h3034].totalCorredoresEdad = lengthMasculino10k3034;
    masc10k3034[h3034].posicionEdad = h3034+1;
    tiempomasc10k3034Arr = masc10k3034[h3034].tiempoNeto.split(":")
    tiempomasc10k3034EnSegundos = Number.parseInt(tiempomasc10k3034Arr[0]*3600) + Number.parseInt(tiempomasc10k3034Arr[1]*60) + Number.parseInt(tiempomasc10k3034Arr[2]);
    masc10k3034[h3034].difTiempo = tiempomasc10k3034EnSegundos;
    masc10k3034[h3034].difTiempo = masc10k3034[h3034].difTiempo - tiempoCeromasc10k3034EnSegundos;
    difHsTiempo = Math.trunc(masc10k3034[h3034].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k3034[h3034].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k3034[h3034].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k3034[h3034].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k3034[h3034].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k3034[h3034].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k3034[h3034].porcentajePorEdad = (100 - (masc10k3034[h3034].posicionEdad / lengthMasculino10k3034)*100).toFixed(2) + "%"
}

let masc5k3034

masc5k3034 = masc5k.filter( edad5k => ( edad5k.edad >= 30 && edad5k.edad < 35) );
lengthMasculino5k3034 = masc5k3034.length;

if(lengthMasculino5k3034 != 0){
    tiempoCeromasc5k3034Arr = masc5k3034[0].tiempoNeto.split(":");
    tiempoCeromasc5k3034EnSegundos = Number.parseInt(tiempoCeromasc5k3034Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k3034Arr[1]*60) + Number.parseInt(tiempoCeromasc5k3034Arr[2]); 
}

for( h3034=0; h3034<lengthMasculino5k3034; h3034++ ){
    masc5k3034[h3034].totalCorredoresEdad = lengthMasculino5k3034;
    masc5k3034[h3034].posicionEdad = h3034+1;
    tiempomasc5k3034Arr = masc5k3034[h3034].tiempoNeto.split(":")
    tiempomasc5k3034EnSegundos = Number.parseInt(tiempomasc5k3034Arr[0]*3600) + Number.parseInt(tiempomasc5k3034Arr[1]*60) + Number.parseInt(tiempomasc5k3034Arr[2]);
    masc5k3034[h3034].difTiempo = tiempomasc5k3034EnSegundos;
    masc5k3034[h3034].difTiempo = masc5k3034[h3034].difTiempo - tiempoCeromasc5k3034EnSegundos;
    difHsTiempo = Math.trunc(masc5k3034[h3034].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k3034[h3034].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k3034[h3034].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k3034[h3034].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k3034[h3034].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k3034[h3034].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k3034[h3034].porcentajePorEdad = (100 - (masc5k3034[h3034].posicionEdad / lengthMasculino5k3034)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 35 A 39 AÑOS -------------- 

let masc21k3539

masc21k3539 = masc21k.filter( edad21k => ( edad21k.edad >= 35 && edad21k.edad < 40) );
lengthMasculino21k3539 = masc21k3539.length;

if(lengthMasculino21k3539 != 0){
    tiempoCeromasc21k3539Arr = masc21k3539[0].tiempoNeto.split(":");
    tiempoCeromasc21k3539EnSegundos = Number.parseInt(tiempoCeromasc21k3539Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k3539Arr[1]*60) + Number.parseInt(tiempoCeromasc21k3539Arr[2]); 
}

for( h3539=0; h3539<lengthMasculino21k3539; h3539++ ){
    masc21k3539[h3539].totalCorredoresEdad = lengthMasculino21k3539;
    masc21k3539[h3539].posicionEdad = h3539+1;
    tiempomasc21k3539Arr = masc21k3539[h3539].tiempoNeto.split(":")
    tiempomasc21k3539EnSegundos = Number.parseInt(tiempomasc21k3539Arr[0]*3600) + Number.parseInt(tiempomasc21k3539Arr[1]*60) + Number.parseInt(tiempomasc21k3539Arr[2]);
    masc21k3539[h3539].difTiempo = tiempomasc21k3539EnSegundos;
    masc21k3539[h3539].difTiempo = masc21k3539[h3539].difTiempo - tiempoCeromasc21k3539EnSegundos;
    difHsTiempo = Math.trunc(masc21k3539[h3539].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k3539[h3539].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k3539[h3539].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k3539[h3539].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k3539[h3539].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k3539[h3539].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k3539[h3539].porcentajePorEdad = (100 - (masc21k3539[h3539].posicionEdad / lengthMasculino21k3539)*100).toFixed(2) + "%"
}

let masc10k3539

masc10k3539 = masc10k.filter( edad10k => ( edad10k.edad >= 35 && edad10k.edad < 40) );
lengthMasculino10k3539 = masc10k3539.length;

if(lengthMasculino10k3539 != 0){
    tiempoCeromasc10k3539Arr = masc10k3539[0].tiempoNeto.split(":");
    tiempoCeromasc10k3539EnSegundos = Number.parseInt(tiempoCeromasc10k3539Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k3539Arr[1]*60) + Number.parseInt(tiempoCeromasc10k3539Arr[2]); 
}

for( h3539=0; h3539<lengthMasculino10k3539; h3539++ ){
    masc10k3539[h3539].totalCorredoresEdad = lengthMasculino10k3539;
    masc10k3539[h3539].posicionEdad = h3539+1;
    tiempomasc10k3539Arr = masc10k3539[h3539].tiempoNeto.split(":")
    tiempomasc10k3539EnSegundos = Number.parseInt(tiempomasc10k3539Arr[0]*3600) + Number.parseInt(tiempomasc10k3539Arr[1]*60) + Number.parseInt(tiempomasc10k3539Arr[2]);
    masc10k3539[h3539].difTiempo = tiempomasc10k3539EnSegundos;
    masc10k3539[h3539].difTiempo = masc10k3539[h3539].difTiempo - tiempoCeromasc10k3539EnSegundos;
    difHsTiempo = Math.trunc(masc10k3539[h3539].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k3539[h3539].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k3539[h3539].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k3539[h3539].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k3539[h3539].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k3539[h3539].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k3539[h3539].porcentajePorEdad = (100 - (masc10k3539[h3539].posicionEdad / lengthMasculino10k3539)*100).toFixed(2) + "%"
}

let masc5k3539

masc5k3539 = masc5k.filter( edad5k => ( edad5k.edad >= 35 && edad5k.edad < 40) );
lengthMasculino5k3539 = masc5k3539.length;

if(lengthMasculino5k3539 != 0){
    tiempoCeromasc5k3539Arr = masc5k3539[0].tiempoNeto.split(":");
    tiempoCeromasc5k3539EnSegundos = Number.parseInt(tiempoCeromasc5k3539Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k3539Arr[1]*60) + Number.parseInt(tiempoCeromasc5k3539Arr[2]); 
}

for( h3539=0; h3539<lengthMasculino5k3539; h3539++ ){
    masc5k3539[h3539].totalCorredoresEdad = lengthMasculino5k3539;
    masc5k3539[h3539].posicionEdad = h3539+1;
    tiempomasc5k3539Arr = masc5k3539[h3539].tiempoNeto.split(":")
    tiempomasc5k3539EnSegundos = Number.parseInt(tiempomasc5k3539Arr[0]*3600) + Number.parseInt(tiempomasc5k3539Arr[1]*60) + Number.parseInt(tiempomasc5k3539Arr[2]);
    masc5k3539[h3539].difTiempo = tiempomasc5k3539EnSegundos;
    masc5k3539[h3539].difTiempo = masc5k3539[h3539].difTiempo - tiempoCeromasc5k3539EnSegundos;
    difHsTiempo = Math.trunc(masc5k3539[h3539].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k3539[h3539].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k3539[h3539].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k3539[h3539].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k3539[h3539].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k3539[h3539].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k3539[h3539].porcentajePorEdad = (100 - (masc5k3539[h3539].posicionEdad / lengthMasculino5k3539)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 40 A 44 AÑOS -------------- 


let masc21k4044

masc21k4044 = masc21k.filter( edad21k => ( edad21k.edad >= 40 && edad21k.edad < 45) );
lengthMasculino21k4044 = masc21k4044.length;

if(lengthMasculino21k4044 != 0){
    tiempoCeromasc21k4044Arr = masc21k4044[0].tiempoNeto.split(":");
    tiempoCeromasc21k4044EnSegundos = Number.parseInt(tiempoCeromasc21k4044Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k4044Arr[1]*60) + Number.parseInt(tiempoCeromasc21k4044Arr[2]);  
}

for( h4044=0; h4044<lengthMasculino21k4044; h4044++ ){
    masc21k4044[h4044].totalCorredoresEdad = lengthMasculino21k4044;
    masc21k4044[h4044].posicionEdad = h4044+1;
    tiempomasc21k4044Arr = masc21k4044[h4044].tiempoNeto.split(":")
    tiempomasc21k4044EnSegundos = Number.parseInt(tiempomasc21k4044Arr[0]*3600) + Number.parseInt(tiempomasc21k4044Arr[1]*60) + Number.parseInt(tiempomasc21k4044Arr[2]);
    masc21k4044[h4044].difTiempo = tiempomasc21k4044EnSegundos;
    masc21k4044[h4044].difTiempo = masc21k4044[h4044].difTiempo - tiempoCeromasc21k4044EnSegundos;
    difHsTiempo = Math.trunc(masc21k4044[h4044].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k4044[h4044].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k4044[h4044].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k4044[h4044].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k4044[h4044].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k4044[h4044].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k4044[h4044].porcentajePorEdad = (100 - (masc21k4044[h4044].posicionEdad / lengthMasculino21k4044)*100).toFixed(2) + "%"
}

let masc10k4044

masc10k4044 = masc10k.filter( edad10k => ( edad10k.edad >= 40 && edad10k.edad < 45) );
lengthMasculino10k4044 = masc10k4044.length;

if(lengthMasculino10k4044 != 0){
    tiempoCeromasc10k4044Arr = masc10k4044[0].tiempoNeto.split(":");
    tiempoCeromasc10k4044EnSegundos = Number.parseInt(tiempoCeromasc10k4044Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k4044Arr[1]*60) + Number.parseInt(tiempoCeromasc10k4044Arr[2]);  
}

for( h4044=0; h4044<lengthMasculino10k4044; h4044++ ){
    masc10k4044[h4044].totalCorredoresEdad = lengthMasculino10k4044;
    masc10k4044[h4044].posicionEdad = h4044+1;
    tiempomasc10k4044Arr = masc10k4044[h4044].tiempoNeto.split(":")
    tiempomasc10k4044EnSegundos = Number.parseInt(tiempomasc10k4044Arr[0]*3600) + Number.parseInt(tiempomasc10k4044Arr[1]*60) + Number.parseInt(tiempomasc10k4044Arr[2]);
    masc10k4044[h4044].difTiempo = tiempomasc10k4044EnSegundos;
    masc10k4044[h4044].difTiempo = masc10k4044[h4044].difTiempo - tiempoCeromasc10k4044EnSegundos;
    difHsTiempo = Math.trunc(masc10k4044[h4044].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k4044[h4044].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k4044[h4044].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k4044[h4044].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k4044[h4044].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k4044[h4044].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k4044[h4044].porcentajePorEdad = (100 - (masc10k4044[h4044].posicionEdad / lengthMasculino10k4044)*100).toFixed(2) + "%"
}

let masc5k4044

masc5k4044 = masc5k.filter( edad5k => ( edad5k.edad >= 40 && edad5k.edad < 45) );
lengthMasculino5k4044 = masc5k4044.length;

if(lengthMasculino5k4044 != 0){
    tiempoCeromasc5k4044Arr = masc5k4044[0].tiempoNeto.split(":");
    tiempoCeromasc5k4044EnSegundos = Number.parseInt(tiempoCeromasc5k4044Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k4044Arr[1]*60) + Number.parseInt(tiempoCeromasc5k4044Arr[2]);  
}

for( h4044=0; h4044<lengthMasculino5k4044; h4044++ ){
    masc5k4044[h4044].totalCorredoresEdad = lengthMasculino5k4044;
    masc5k4044[h4044].posicionEdad = h4044+1;
    tiempomasc5k4044Arr = masc5k4044[h4044].tiempoNeto.split(":")
    tiempomasc5k4044EnSegundos = Number.parseInt(tiempomasc5k4044Arr[0]*3600) + Number.parseInt(tiempomasc5k4044Arr[1]*60) + Number.parseInt(tiempomasc5k4044Arr[2]);
    masc5k4044[h4044].difTiempo = tiempomasc5k4044EnSegundos;
    masc5k4044[h4044].difTiempo = masc5k4044[h4044].difTiempo - tiempoCeromasc5k4044EnSegundos;
    difHsTiempo = Math.trunc(masc5k4044[h4044].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k4044[h4044].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k4044[h4044].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k4044[h4044].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k4044[h4044].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k4044[h4044].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k4044[h4044].porcentajePorEdad = (100 - (masc5k4044[h4044].posicionEdad / lengthMasculino5k4044)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 45 A 49 AÑOS -------------- 


let masc21k4549

masc21k4549 = masc21k.filter( edad21k => ( edad21k.edad >= 45 && edad21k.edad < 50) );
lengthMasculino21k4549 = masc21k4549.length;

if(lengthMasculino21k4549 != 0){
    tiempoCeromasc21k4549Arr = masc21k4549[0].tiempoNeto.split(":");
    tiempoCeromasc21k4549EnSegundos = Number.parseInt(tiempoCeromasc21k4549Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k4549Arr[1]*60) + Number.parseInt(tiempoCeromasc21k4549Arr[2]); 
}

for( h4549=0; h4549<lengthMasculino21k4549; h4549++ ){
    masc21k4549[h4549].totalCorredoresEdad = lengthMasculino21k4549;
    masc21k4549[h4549].posicionEdad = h4549+1;
    tiempomasc21k4549Arr = masc21k4549[h4549].tiempoNeto.split(":")
    tiempomasc21k4549EnSegundos = Number.parseInt(tiempomasc21k4549Arr[0]*3600) + Number.parseInt(tiempomasc21k4549Arr[1]*60) + Number.parseInt(tiempomasc21k4549Arr[2]);
    masc21k4549[h4549].difTiempo = tiempomasc21k4549EnSegundos;
    masc21k4549[h4549].difTiempo = masc21k4549[h4549].difTiempo - tiempoCeromasc21k4549EnSegundos;
    difHsTiempo = Math.trunc(masc21k4549[h4549].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k4549[h4549].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k4549[h4549].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k4549[h4549].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k4549[h4549].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k4549[h4549].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k4549[h4549].porcentajePorEdad = (100 - (masc21k4549[h4549].posicionEdad / lengthMasculino21k4549)*100).toFixed(2) + "%"
}

let masc10k4549

masc10k4549 = masc10k.filter( edad10k => ( edad10k.edad >= 45 && edad10k.edad < 50) );
lengthMasculino10k4549 = masc10k4549.length;

if(lengthMasculino10k4549 != 0){
    tiempoCeromasc10k4549Arr = masc10k4549[0].tiempoNeto.split(":");
    tiempoCeromasc10k4549EnSegundos = Number.parseInt(tiempoCeromasc10k4549Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k4549Arr[1]*60) + Number.parseInt(tiempoCeromasc10k4549Arr[2]); 
}

for( h4549=0; h4549<lengthMasculino10k4549; h4549++ ){
    masc10k4549[h4549].totalCorredoresEdad = lengthMasculino10k4549;
    masc10k4549[h4549].posicionEdad = h4549+1;
    tiempomasc10k4549Arr = masc10k4549[h4549].tiempoNeto.split(":")
    tiempomasc10k4549EnSegundos = Number.parseInt(tiempomasc10k4549Arr[0]*3600) + Number.parseInt(tiempomasc10k4549Arr[1]*60) + Number.parseInt(tiempomasc10k4549Arr[2]);
    masc10k4549[h4549].difTiempo = tiempomasc10k4549EnSegundos;
    masc10k4549[h4549].difTiempo = masc10k4549[h4549].difTiempo - tiempoCeromasc10k4549EnSegundos;
    difHsTiempo = Math.trunc(masc10k4549[h4549].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k4549[h4549].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k4549[h4549].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k4549[h4549].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k4549[h4549].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k4549[h4549].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k4549[h4549].porcentajePorEdad = (100 - (masc10k4549[h4549].posicionEdad / lengthMasculino10k4549)*100).toFixed(2) + "%"
}

let masc5k4549

masc5k4549 = masc5k.filter( edad5k => ( edad5k.edad >= 45 && edad5k.edad < 50) );
lengthMasculino5k4549 = masc5k4549.length;

if(lengthMasculino5k4549 != 0){
    tiempoCeromasc5k4549Arr = masc5k4549[0].tiempoNeto.split(":");
    tiempoCeromasc5k4549EnSegundos = Number.parseInt(tiempoCeromasc5k4549Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k4549Arr[1]*60) + Number.parseInt(tiempoCeromasc5k4549Arr[2]); 
}

for( h4549=0; h4549<lengthMasculino5k4549; h4549++ ){
    masc5k4549[h4549].totalCorredoresEdad = lengthMasculino5k4549;
    masc5k4549[h4549].posicionEdad = h4549+1;
    tiempomasc5k4549Arr = masc5k4549[h4549].tiempoNeto.split(":")
    tiempomasc5k4549EnSegundos = Number.parseInt(tiempomasc5k4549Arr[0]*3600) + Number.parseInt(tiempomasc5k4549Arr[1]*60) + Number.parseInt(tiempomasc5k4549Arr[2]);
    masc5k4549[h4549].difTiempo = tiempomasc5k4549EnSegundos;
    masc5k4549[h4549].difTiempo = masc5k4549[h4549].difTiempo - tiempoCeromasc5k4549EnSegundos;
    difHsTiempo = Math.trunc(masc5k4549[h4549].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k4549[h4549].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k4549[h4549].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k4549[h4549].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k4549[h4549].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k4549[h4549].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k4549[h4549].porcentajePorEdad = (100 - (masc5k4549[h4549].posicionEdad / lengthMasculino5k4549)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 50 A 54 AÑOS -------------- 

let masc21k5054

masc21k5054 = masc21k.filter( edad21k => ( edad21k.edad >= 50 && edad21k.edad < 55) );
lengthMasculino21k5054 = masc21k5054.length;

if(lengthMasculino21k5054 != 0){
    tiempoCeromasc21k5054Arr = masc21k5054[0].tiempoNeto.split(":");
    tiempoCeromasc21k5054EnSegundos = Number.parseInt(tiempoCeromasc21k5054Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k5054Arr[1]*60) + Number.parseInt(tiempoCeromasc21k5054Arr[2]);
}

for( h5054=0; h5054<lengthMasculino21k5054; h5054++ ){
    masc21k5054[h5054].totalCorredoresEdad = lengthMasculino21k5054;
    masc21k5054[h5054].posicionEdad = h5054+1;
    tiempomasc21k5054Arr = masc21k5054[h5054].tiempoNeto.split(":")
    tiempomasc21k5054EnSegundos = Number.parseInt(tiempomasc21k5054Arr[0]*3600) + Number.parseInt(tiempomasc21k5054Arr[1]*60) + Number.parseInt(tiempomasc21k5054Arr[2]);
    masc21k5054[h5054].difTiempo = tiempomasc21k5054EnSegundos;
    masc21k5054[h5054].difTiempo = masc21k5054[h5054].difTiempo - tiempoCeromasc21k5054EnSegundos;
    difHsTiempo = Math.trunc(masc21k5054[h5054].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k5054[h5054].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k5054[h5054].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k5054[h5054].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k5054[h5054].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k5054[h5054].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k5054[h5054].porcentajePorEdad = (100 - (masc21k5054[h5054].posicionEdad / lengthMasculino21k5054)*100).toFixed(2) + "%"
}

let masc10k5054

masc10k5054 = masc10k.filter( edad10k => ( edad10k.edad >= 50 && edad10k.edad < 55) );
lengthMasculino10k5054 = masc10k5054.length;

if(lengthMasculino10k5054 != 0){
    tiempoCeromasc10k5054Arr = masc10k5054[0].tiempoNeto.split(":");
    tiempoCeromasc10k5054EnSegundos = Number.parseInt(tiempoCeromasc10k5054Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k5054Arr[1]*60) + Number.parseInt(tiempoCeromasc10k5054Arr[2]);
}

for( h5054=0; h5054<lengthMasculino10k5054; h5054++ ){
    masc10k5054[h5054].totalCorredoresEdad = lengthMasculino10k5054;
    masc10k5054[h5054].posicionEdad = h5054+1;
    tiempomasc10k5054Arr = masc10k5054[h5054].tiempoNeto.split(":")
    tiempomasc10k5054EnSegundos = Number.parseInt(tiempomasc10k5054Arr[0]*3600) + Number.parseInt(tiempomasc10k5054Arr[1]*60) + Number.parseInt(tiempomasc10k5054Arr[2]);
    masc10k5054[h5054].difTiempo = tiempomasc10k5054EnSegundos;
    masc10k5054[h5054].difTiempo = masc10k5054[h5054].difTiempo - tiempoCeromasc10k5054EnSegundos;
    difHsTiempo = Math.trunc(masc10k5054[h5054].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k5054[h5054].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k5054[h5054].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k5054[h5054].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k5054[h5054].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k5054[h5054].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k5054[h5054].porcentajePorEdad = (100 - (masc10k5054[h5054].posicionEdad / lengthMasculino10k5054)*100).toFixed(2) + "%"
}

let masc5k5054

masc5k5054 = masc5k.filter( edad5k => ( edad5k.edad >= 50 && edad5k.edad < 55) );
lengthMasculino5k5054 = masc5k5054.length;

if(lengthMasculino5k5054 != 0){
    tiempoCeromasc5k5054Arr = masc5k5054[0].tiempoNeto.split(":");
    tiempoCeromasc5k5054EnSegundos = Number.parseInt(tiempoCeromasc5k5054Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k5054Arr[1]*60) + Number.parseInt(tiempoCeromasc5k5054Arr[2]);
}

for( h5054=0; h5054<lengthMasculino5k5054; h5054++ ){
    masc5k5054[h5054].totalCorredoresEdad = lengthMasculino5k5054;
    masc5k5054[h5054].posicionEdad = h5054+1;
    tiempomasc5k5054Arr = masc5k5054[h5054].tiempoNeto.split(":")
    tiempomasc5k5054EnSegundos = Number.parseInt(tiempomasc5k5054Arr[0]*3600) + Number.parseInt(tiempomasc5k5054Arr[1]*60) + Number.parseInt(tiempomasc5k5054Arr[2]);
    masc5k5054[h5054].difTiempo = tiempomasc5k5054EnSegundos;
    masc5k5054[h5054].difTiempo = masc5k5054[h5054].difTiempo - tiempoCeromasc5k5054EnSegundos;
    difHsTiempo = Math.trunc(masc5k5054[h5054].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k5054[h5054].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k5054[h5054].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k5054[h5054].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k5054[h5054].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k5054[h5054].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k5054[h5054].porcentajePorEdad = (100 - (masc5k5054[h5054].posicionEdad / lengthMasculino5k5054)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 55 A 59 AÑOS -------------- 

let masc21k5559

masc21k5559 = masc21k.filter( edad21k => ( edad21k.edad >= 55 && edad21k.edad < 60) );
lengthMasculino21k5559 = masc21k5559.length;

if(lengthMasculino21k5559 != 0){
    tiempoCeromasc21k5559Arr = masc21k5559[0].tiempoNeto.split(":");
    tiempoCeromasc21k5559EnSegundos = Number.parseInt(tiempoCeromasc21k5559Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k5559Arr[1]*60) + Number.parseInt(tiempoCeromasc21k5559Arr[2]);
}

for( h5559=0; h5559<lengthMasculino21k5559; h5559++ ){
    masc21k5559[h5559].totalCorredoresEdad = lengthMasculino21k5559;
    masc21k5559[h5559].posicionEdad = h5559+1;
    tiempomasc21k5559Arr = masc21k5559[h5559].tiempoNeto.split(":")
    tiempomasc21k5559EnSegundos = Number.parseInt(tiempomasc21k5559Arr[0]*3600) + Number.parseInt(tiempomasc21k5559Arr[1]*60) + Number.parseInt(tiempomasc21k5559Arr[2]);
    masc21k5559[h5559].difTiempo = tiempomasc21k5559EnSegundos;
    masc21k5559[h5559].difTiempo = masc21k5559[h5559].difTiempo - tiempoCeromasc21k5559EnSegundos;
    difHsTiempo = Math.trunc(masc21k5559[h5559].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k5559[h5559].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k5559[h5559].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k5559[h5559].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k5559[h5559].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k5559[h5559].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k5559[h5559].porcentajePorEdad = (100 - (masc21k5559[h5559].posicionEdad / lengthMasculino21k5559)*100).toFixed(2) + "%"
}

let masc10k5559

masc10k5559 = masc10k.filter( edad10k => ( edad10k.edad >= 55 && edad10k.edad < 60) );
lengthMasculino10k5559 = masc10k5559.length;

if(lengthMasculino10k5559 != 0){
    tiempoCeromasc10k5559Arr = masc10k5559[0].tiempoNeto.split(":");
    tiempoCeromasc10k5559EnSegundos = Number.parseInt(tiempoCeromasc10k5559Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k5559Arr[1]*60) + Number.parseInt(tiempoCeromasc10k5559Arr[2]);
}

for( h5559=0; h5559<lengthMasculino10k5559; h5559++ ){
    masc10k5559[h5559].totalCorredoresEdad = lengthMasculino10k5559;
    masc10k5559[h5559].posicionEdad = h5559+1;
    tiempomasc10k5559Arr = masc10k5559[h5559].tiempoNeto.split(":")
    tiempomasc10k5559EnSegundos = Number.parseInt(tiempomasc10k5559Arr[0]*3600) + Number.parseInt(tiempomasc10k5559Arr[1]*60) + Number.parseInt(tiempomasc10k5559Arr[2]);
    masc10k5559[h5559].difTiempo = tiempomasc10k5559EnSegundos;
    masc10k5559[h5559].difTiempo = masc10k5559[h5559].difTiempo - tiempoCeromasc10k5559EnSegundos;
    difHsTiempo = Math.trunc(masc10k5559[h5559].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k5559[h5559].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k5559[h5559].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k5559[h5559].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k5559[h5559].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k5559[h5559].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k5559[h5559].porcentajePorEdad = (100 - (masc10k5559[h5559].posicionEdad / lengthMasculino10k5559)*100).toFixed(2) + "%"
}

let masc5k5559

masc5k5559 = masc5k.filter( edad5k => ( edad5k.edad >= 55 && edad5k.edad < 60) );
lengthMasculino5k5559 = masc5k5559.length;

if(lengthMasculino5k5559 != 0){
    tiempoCeromasc5k5559Arr = masc5k5559[0].tiempoNeto.split(":");
    tiempoCeromasc5k5559EnSegundos = Number.parseInt(tiempoCeromasc5k5559Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k5559Arr[1]*60) + Number.parseInt(tiempoCeromasc5k5559Arr[2]);
}

for( h5559=0; h5559<lengthMasculino5k5559; h5559++ ){
    masc5k5559[h5559].totalCorredoresEdad = lengthMasculino5k5559;
    masc5k5559[h5559].posicionEdad = h5559+1;
    tiempomasc5k5559Arr = masc5k5559[h5559].tiempoNeto.split(":")
    tiempomasc5k5559EnSegundos = Number.parseInt(tiempomasc5k5559Arr[0]*3600) + Number.parseInt(tiempomasc5k5559Arr[1]*60) + Number.parseInt(tiempomasc5k5559Arr[2]);
    masc5k5559[h5559].difTiempo = tiempomasc5k5559EnSegundos;
    masc5k5559[h5559].difTiempo = masc5k5559[h5559].difTiempo - tiempoCeromasc5k5559EnSegundos;
    difHsTiempo = Math.trunc(masc5k5559[h5559].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k5559[h5559].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k5559[h5559].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k5559[h5559].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k5559[h5559].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k5559[h5559].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k5559[h5559].porcentajePorEdad = (100 - (masc5k5559[h5559].posicionEdad / lengthMasculino5k5559)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 60 A 64 AÑOS -------------- 

let masc21k6064

masc21k6064 = masc21k.filter( edad21k => ( edad21k.edad >= 60 && edad21k.edad < 65) );
lengthMasculino21k6064 = masc21k6064.length;

if(lengthMasculino21k6064 != 0){
    tiempoCeromasc21k6064Arr = masc21k6064[0].tiempoNeto.split(":");
    tiempoCeromasc21k6064EnSegundos = Number.parseInt(tiempoCeromasc21k6064Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k6064Arr[1]*60) + Number.parseInt(tiempoCeromasc21k6064Arr[2]);
}

for( h6064=0; h6064<lengthMasculino21k6064; h6064++ ){
    masc21k6064[h6064].totalCorredoresEdad = lengthMasculino21k6064;
    masc21k6064[h6064].posicionEdad = h6064+1;
    tiempomasc21k6064Arr = masc21k6064[h6064].tiempoNeto.split(":")
    tiempomasc21k6064EnSegundos = Number.parseInt(tiempomasc21k6064Arr[0]*3600) + Number.parseInt(tiempomasc21k6064Arr[1]*60) + Number.parseInt(tiempomasc21k6064Arr[2]);
    masc21k6064[h6064].difTiempo = tiempomasc21k6064EnSegundos;
    masc21k6064[h6064].difTiempo = masc21k6064[h6064].difTiempo - tiempoCeromasc21k6064EnSegundos;
    difHsTiempo = Math.trunc(masc21k6064[h6064].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k6064[h6064].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k6064[h6064].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k6064[h6064].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k6064[h6064].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k6064[h6064].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k6064[h6064].porcentajePorEdad = (100 - (masc21k6064[h6064].posicionEdad / lengthMasculino21k6064)*100).toFixed(2) + "%"
}


let masc10k6064

masc10k6064 = masc10k.filter( edad10k => ( edad10k.edad >= 60 && edad10k.edad < 65) );
lengthMasculino10k6064 = masc10k6064.length;

if(lengthMasculino10k6064 != 0){
    tiempoCeromasc10k6064Arr = masc10k6064[0].tiempoNeto.split(":");
    tiempoCeromasc10k6064EnSegundos = Number.parseInt(tiempoCeromasc10k6064Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k6064Arr[1]*60) + Number.parseInt(tiempoCeromasc10k6064Arr[2]);
}

for( h6064=0; h6064<lengthMasculino10k6064; h6064++ ){
    masc10k6064[h6064].totalCorredoresEdad = lengthMasculino10k6064;
    masc10k6064[h6064].posicionEdad = h6064+1;
    tiempomasc10k6064Arr = masc10k6064[h6064].tiempoNeto.split(":")
    tiempomasc10k6064EnSegundos = Number.parseInt(tiempomasc10k6064Arr[0]*3600) + Number.parseInt(tiempomasc10k6064Arr[1]*60) + Number.parseInt(tiempomasc10k6064Arr[2]);
    masc10k6064[h6064].difTiempo = tiempomasc10k6064EnSegundos;
    masc10k6064[h6064].difTiempo = masc10k6064[h6064].difTiempo - tiempoCeromasc10k6064EnSegundos;
    difHsTiempo = Math.trunc(masc10k6064[h6064].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k6064[h6064].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k6064[h6064].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k6064[h6064].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k6064[h6064].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k6064[h6064].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k6064[h6064].porcentajePorEdad = (100 - (masc10k6064[h6064].posicionEdad / lengthMasculino10k6064)*100).toFixed(2) + "%"
}

let masc5k6064

masc5k6064 = masc5k.filter( edad5k => ( edad5k.edad >= 60 && edad5k.edad < 65) );
lengthMasculino5k6064 = masc5k6064.length;

if(lengthMasculino5k6064 != 0){
    tiempoCeromasc5k6064Arr = masc5k6064[0].tiempoNeto.split(":");
    tiempoCeromasc5k6064EnSegundos = Number.parseInt(tiempoCeromasc5k6064Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k6064Arr[1]*60) + Number.parseInt(tiempoCeromasc5k6064Arr[2]);
}

for( h6064=0; h6064<lengthMasculino5k6064; h6064++ ){
    masc5k6064[h6064].totalCorredoresEdad = lengthMasculino5k6064;
    masc5k6064[h6064].posicionEdad = h6064+1;
    tiempomasc5k6064Arr = masc5k6064[h6064].tiempoNeto.split(":")
    tiempomasc5k6064EnSegundos = Number.parseInt(tiempomasc5k6064Arr[0]*3600) + Number.parseInt(tiempomasc5k6064Arr[1]*60) + Number.parseInt(tiempomasc5k6064Arr[2]);
    masc5k6064[h6064].difTiempo = tiempomasc5k6064EnSegundos;
    masc5k6064[h6064].difTiempo = masc5k6064[h6064].difTiempo - tiempoCeromasc5k6064EnSegundos;
    difHsTiempo = Math.trunc(masc5k6064[h6064].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k6064[h6064].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k6064[h6064].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k6064[h6064].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k6064[h6064].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k6064[h6064].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k6064[h6064].porcentajePorEdad = (100 - (masc5k6064[h6064].posicionEdad / lengthMasculino5k6064)*100).toFixed(2) + "%"
}

// -------------- HOMBRES 65 A 69 AÑOS -------------- 

let masc21k6569

masc21k6569 = masc21k.filter( edad21k => ( edad21k.edad >= 65 && edad21k.edad < 70) );
lengthMasculino21k6569 = masc21k6569.length;

if(lengthMasculino21k6569 != 0){
    tiempoCeromasc21k6569Arr = masc21k6569[0].tiempoNeto.split(":");
    tiempoCeromasc21k6569EnSegundos = Number.parseInt(tiempoCeromasc21k6569Arr[0]*3600) + Number.parseInt(tiempoCeromasc21k6569Arr[1]*60) + Number.parseInt(tiempoCeromasc21k6569Arr[2]);
}

for( h6569=0; h6569<lengthMasculino21k6569; h6569++ ){
    masc21k6569[h6569].totalCorredoresEdad = lengthMasculino21k6569;
    masc21k6569[h6569].posicionEdad = h6569+1;
    tiempomasc21k6569Arr = masc21k6569[h6569].tiempoNeto.split(":")
    tiempomasc21k6569EnSegundos = Number.parseInt(tiempomasc21k6569Arr[0]*3600) + Number.parseInt(tiempomasc21k6569Arr[1]*60) + Number.parseInt(tiempomasc21k6569Arr[2]);
    masc21k6569[h6569].difTiempo = tiempomasc21k6569EnSegundos;
    masc21k6569[h6569].difTiempo = masc21k6569[h6569].difTiempo - tiempoCeromasc21k6569EnSegundos;
    difHsTiempo = Math.trunc(masc21k6569[h6569].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21k6569[h6569].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21k6569[h6569].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21k6569[h6569].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21k6569[h6569].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21k6569[h6569].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21k6569[h6569].porcentajePorEdad = (100 - (masc21k6569[h6569].posicionEdad / lengthMasculino21k6569)*100).toFixed(2) + "%"
}

let masc10k6569

masc10k6569 = masc10k.filter( edad10k => ( edad10k.edad >= 65 && edad10k.edad < 70) );
lengthMasculino10k6569 = masc10k6569.length;

if(lengthMasculino10k6569 != 0){
    tiempoCeromasc10k6569Arr = masc10k6569[0].tiempoNeto.split(":");
    tiempoCeromasc10k6569EnSegundos = Number.parseInt(tiempoCeromasc10k6569Arr[0]*3600) + Number.parseInt(tiempoCeromasc10k6569Arr[1]*60) + Number.parseInt(tiempoCeromasc10k6569Arr[2]);
}

for( h6569=0; h6569<lengthMasculino10k6569; h6569++ ){
    masc10k6569[h6569].totalCorredoresEdad = lengthMasculino10k6569;
    masc10k6569[h6569].posicionEdad = h6569+1;
    tiempomasc10k6569Arr = masc10k6569[h6569].tiempoNeto.split(":")
    tiempomasc10k6569EnSegundos = Number.parseInt(tiempomasc10k6569Arr[0]*3600) + Number.parseInt(tiempomasc10k6569Arr[1]*60) + Number.parseInt(tiempomasc10k6569Arr[2]);
    masc10k6569[h6569].difTiempo = tiempomasc10k6569EnSegundos;
    masc10k6569[h6569].difTiempo = masc10k6569[h6569].difTiempo - tiempoCeromasc10k6569EnSegundos;
    difHsTiempo = Math.trunc(masc10k6569[h6569].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10k6569[h6569].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10k6569[h6569].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10k6569[h6569].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10k6569[h6569].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10k6569[h6569].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10k6569[h6569].porcentajePorEdad = (100 - (masc10k6569[h6569].posicionEdad / lengthMasculino10k6569)*100).toFixed(2) + "%"
}

let masc5k6569

masc5k6569 = masc5k.filter( edad5k => ( edad5k.edad >= 65 && edad5k.edad < 70) );
lengthMasculino5k6569 = masc5k6569.length;

if(lengthMasculino5k6569 != 0){
    tiempoCeromasc5k6569Arr = masc5k6569[0].tiempoNeto.split(":");
    tiempoCeromasc5k6569EnSegundos = Number.parseInt(tiempoCeromasc5k6569Arr[0]*3600) + Number.parseInt(tiempoCeromasc5k6569Arr[1]*60) + Number.parseInt(tiempoCeromasc5k6569Arr[2]);
}

for( h6569=0; h6569<lengthMasculino5k6569; h6569++ ){
    masc5k6569[h6569].totalCorredoresEdad = lengthMasculino5k6569;
    masc5k6569[h6569].posicionEdad = h6569+1;
    tiempomasc5k6569Arr = masc5k6569[h6569].tiempoNeto.split(":")
    tiempomasc5k6569EnSegundos = Number.parseInt(tiempomasc5k6569Arr[0]*3600) + Number.parseInt(tiempomasc5k6569Arr[1]*60) + Number.parseInt(tiempomasc5k6569Arr[2]);
    masc5k6569[h6569].difTiempo = tiempomasc5k6569EnSegundos;
    masc5k6569[h6569].difTiempo = masc5k6569[h6569].difTiempo - tiempoCeromasc5k6569EnSegundos;
    difHsTiempo = Math.trunc(masc5k6569[h6569].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5k6569[h6569].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5k6569[h6569].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5k6569[h6569].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5k6569[h6569].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5k6569[h6569].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5k6569[h6569].porcentajePorEdad = (100 - (masc5k6569[h6569].posicionEdad / lengthMasculino5k6569)*100).toFixed(2) + "%"
}

// -------------- HOMBRES +70 AÑOS -------------- 

let masc21km70

masc21km70 = masc21k.filter( edad21k => ( edad21k.edad >=  70) );
lengthMasculino21km70 = masc21km70.length;

if(lengthMasculino21km70 != 0){
    tiempoCeromasc21km70Arr = masc21km70[0].tiempoNeto.split(":");
    tiempoCeromasc21km70EnSegundos = Number.parseInt(tiempoCeromasc21km70Arr[0]*3600) + Number.parseInt(tiempoCeromasc21km70Arr[1]*60) + Number.parseInt(tiempoCeromasc21km70Arr[2]); 
}

for( hm70=0; hm70<lengthMasculino21km70; hm70++ ){
    masc21km70[hm70].totalCorredoresEdad = lengthMasculino21km70;
    masc21km70[hm70].posicionEdad = hm70+1;
    tiempomasc21km70Arr = masc21km70[hm70].tiempoNeto.split(":")
    tiempomasc21km70EnSegundos = Number.parseInt(tiempomasc21km70Arr[0]*3600) + Number.parseInt(tiempomasc21km70Arr[1]*60) + Number.parseInt(tiempomasc21km70Arr[2]);
    masc21km70[hm70].difTiempo = tiempomasc21km70EnSegundos;
    masc21km70[hm70].difTiempo = masc21km70[hm70].difTiempo - tiempoCeromasc21km70EnSegundos;
    difHsTiempo = Math.trunc(masc21km70[hm70].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc21km70[hm70].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc21km70[hm70].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc21km70[hm70].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc21km70[hm70].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc21km70[hm70].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc21km70[hm70].porcentajePorEdad = (100 - (masc21km70[hm70].posicionEdad / lengthMasculino21km70)*100).toFixed(2) + "%"
}

let masc10km70

masc10km70 = masc10k.filter( edad10k => ( edad10k.edad >=  70) );
lengthMasculino10km70 = masc10km70.length;

if(lengthMasculino10km70 != 0){
    tiempoCeromasc10km70Arr = masc10km70[0].tiempoNeto.split(":");
    tiempoCeromasc10km70EnSegundos = Number.parseInt(tiempoCeromasc10km70Arr[0]*3600) + Number.parseInt(tiempoCeromasc10km70Arr[1]*60) + Number.parseInt(tiempoCeromasc10km70Arr[2]); 
}

for( hm70=0; hm70<lengthMasculino10km70; hm70++ ){
    masc10km70[hm70].totalCorredoresEdad = lengthMasculino10km70;
    masc10km70[hm70].posicionEdad = hm70+1;
    tiempomasc10km70Arr = masc10km70[hm70].tiempoNeto.split(":")
    tiempomasc10km70EnSegundos = Number.parseInt(tiempomasc10km70Arr[0]*3600) + Number.parseInt(tiempomasc10km70Arr[1]*60) + Number.parseInt(tiempomasc10km70Arr[2]);
    masc10km70[hm70].difTiempo = tiempomasc10km70EnSegundos;
    masc10km70[hm70].difTiempo = masc10km70[hm70].difTiempo - tiempoCeromasc10km70EnSegundos;
    difHsTiempo = Math.trunc(masc10km70[hm70].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc10km70[hm70].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc10km70[hm70].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc10km70[hm70].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc10km70[hm70].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc10km70[hm70].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc10km70[hm70].porcentajePorEdad = (100 - (masc10km70[hm70].posicionEdad / lengthMasculino10km70)*100).toFixed(2) + "%"
}

let masc5km70

masc5km70 = masc5k.filter( edad5k => ( edad5k.edad >=  70) );
lengthMasculino5km70 = masc5km70.length;

if(lengthMasculino5km70 != 0){
    tiempoCeromasc5km70Arr = masc5km70[0].tiempoNeto.split(":");
    tiempoCeromasc5km70EnSegundos = Number.parseInt(tiempoCeromasc5km70Arr[0]*3600) + Number.parseInt(tiempoCeromasc5km70Arr[1]*60) + Number.parseInt(tiempoCeromasc5km70Arr[2]); 
}

for( hm70=0; hm70<lengthMasculino5km70; hm70++ ){
    masc5km70[hm70].totalCorredoresEdad = lengthMasculino5km70;
    masc5km70[hm70].posicionEdad = hm70+1;
    tiempomasc5km70Arr = masc5km70[hm70].tiempoNeto.split(":")
    tiempomasc5km70EnSegundos = Number.parseInt(tiempomasc5km70Arr[0]*3600) + Number.parseInt(tiempomasc5km70Arr[1]*60) + Number.parseInt(tiempomasc5km70Arr[2]);
    masc5km70[hm70].difTiempo = tiempomasc5km70EnSegundos;
    masc5km70[hm70].difTiempo = masc5km70[hm70].difTiempo - tiempoCeromasc5km70EnSegundos;
    difHsTiempo = Math.trunc(masc5km70[hm70].difTiempo/3600);
    
    difMinTiempo = Math.trunc(masc5km70[hm70].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (masc5km70[hm70].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        masc5km70[hm70].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        masc5km70[hm70].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        masc5km70[hm70].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    masc5km70[hm70].porcentajePorEdad = (100 - (masc5km70[hm70].posicionEdad / lengthMasculino5km70)*100).toFixed(2) + "%"
}






// -------------- MUJERES HASTA 19 AÑOS -------------- 

let fem21kh19

fem21kh19 = fem21k.filter( edad21k => edad21k.edad < 20 );
lengthFemenino21kh19 = fem21kh19.length;

if(lengthFemenino21kh19 != 0){
    tiempoCerofem21kh19Arr = fem21kh19[0].tiempoNeto.split(":");
    tiempoCerofem21kh19EnSegundos = Number.parseInt(tiempoCerofem21kh19Arr[0]*3600) + Number.parseInt(tiempoCerofem21kh19Arr[1]*60) + Number.parseInt(tiempoCerofem21kh19Arr[2]); 
}

for( mh19=0; mh19<lengthFemenino21kh19; mh19++ ){
    fem21kh19[mh19].totalCorredoresEdad = lengthFemenino21kh19;
    fem21kh19[mh19].posicionEdad = mh19+1;
    tiempofem21kh19Arr = fem21kh19[mh19].tiempoNeto.split(":")
    tiempofem21kh19EnSegundos = Number.parseInt(tiempofem21kh19Arr[0]*3600) + Number.parseInt(tiempofem21kh19Arr[1]*60) + Number.parseInt(tiempofem21kh19Arr[2]);
    fem21kh19[mh19].difTiempo = tiempofem21kh19EnSegundos;
    fem21kh19[mh19].difTiempo = fem21kh19[mh19].difTiempo - tiempoCerofem21kh19EnSegundos;
    difHsTiempo = Math.trunc(fem21kh19[mh19].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21kh19[mh19].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21kh19[mh19].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21kh19[mh19].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21kh19[mh19].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21kh19[mh19].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21kh19[mh19].porcentajePorEdad = (100 - (fem21kh19[mh19].posicionEdad / lengthFemenino21kh19)*100).toFixed(2) + "%"
}

let fem10kh19

fem10kh19 = fem10k.filter( edad10k => edad10k.edad < 20 );
lengthFemenino10kh19 = fem10kh19.length;

if(lengthFemenino10kh19 != 0){
    tiempoCerofem10kh19Arr = fem10kh19[0].tiempoNeto.split(":");
    tiempoCerofem10kh19EnSegundos = Number.parseInt(tiempoCerofem10kh19Arr[0]*3600) + Number.parseInt(tiempoCerofem10kh19Arr[1]*60) + Number.parseInt(tiempoCerofem10kh19Arr[2]); 
}

for( mh19=0; mh19<lengthFemenino10kh19; mh19++ ){
    fem10kh19[mh19].totalCorredoresEdad = lengthFemenino10kh19;
    fem10kh19[mh19].posicionEdad = mh19+1;
    tiempofem10kh19Arr = fem10kh19[mh19].tiempoNeto.split(":")
    tiempofem10kh19EnSegundos = Number.parseInt(tiempofem10kh19Arr[0]*3600) + Number.parseInt(tiempofem10kh19Arr[1]*60) + Number.parseInt(tiempofem10kh19Arr[2]);
    fem10kh19[mh19].difTiempo = tiempofem10kh19EnSegundos;
    fem10kh19[mh19].difTiempo = fem10kh19[mh19].difTiempo - tiempoCerofem10kh19EnSegundos;
    difHsTiempo = Math.trunc(fem10kh19[mh19].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10kh19[mh19].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10kh19[mh19].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10kh19[mh19].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10kh19[mh19].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10kh19[mh19].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10kh19[mh19].porcentajePorEdad = (100 - (fem10kh19[mh19].posicionEdad / lengthFemenino10kh19)*100).toFixed(2) + "%"
}

let fem5kh19

fem5kh19 = fem5k.filter( edad5k => edad5k.edad < 20 );
lengthFemenino5kh19 = fem5kh19.length;

if(lengthFemenino5kh19 != 0){
    tiempoCerofem5kh19Arr = fem5kh19[0].tiempoNeto.split(":");
    tiempoCerofem5kh19EnSegundos = Number.parseInt(tiempoCerofem5kh19Arr[0]*3600) + Number.parseInt(tiempoCerofem5kh19Arr[1]*60) + Number.parseInt(tiempoCerofem5kh19Arr[2]); 
}

for( mh19=0; mh19<lengthFemenino5kh19; mh19++ ){
    fem5kh19[mh19].totalCorredoresEdad =lengthFemenino5kh19;
    fem5kh19[mh19].posicionEdad = mh19+1;
    tiempofem5kh19Arr = fem5kh19[mh19].tiempoNeto.split(":")
    tiempofem5kh19EnSegundos = Number.parseInt(tiempofem5kh19Arr[0]*3600) + Number.parseInt(tiempofem5kh19Arr[1]*60) + Number.parseInt(tiempofem5kh19Arr[2]);
    fem5kh19[mh19].difTiempo = tiempofem5kh19EnSegundos;
    fem5kh19[mh19].difTiempo = fem5kh19[mh19].difTiempo - tiempoCerofem5kh19EnSegundos;
    difHsTiempo = Math.trunc(fem5kh19[mh19].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5kh19[mh19].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5kh19[mh19].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5kh19[mh19].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5kh19[mh19].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5kh19[mh19].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5kh19[mh19].porcentajePorEdad = (100 - (fem5kh19[mh19].posicionEdad / lengthFemenino5kh19)*100).toFixed(2) + "%"
    
}

// -------------- MUJERES 20 A 24 AÑOS -------------- 

let fem21k2024

fem21k2024 = fem21k.filter( edad21k => ( edad21k.edad >= 20 && edad21k.edad < 25) );
lengthFemenino21k2024 = fem21k2024.length;

if(lengthFemenino21k2024 != 0){
    tiempoCerofem21k2024Arr = fem21k2024[0].tiempoNeto.split(":");
    tiempoCerofem21k2024EnSegundos = Number.parseInt(tiempoCerofem21k2024Arr[0]*3600) + Number.parseInt(tiempoCerofem21k2024Arr[1]*60) + Number.parseInt(tiempoCerofem21k2024Arr[2]);
}

for( m2024=0; m2024<lengthFemenino21k2024; m2024++ ){
    fem21k2024[m2024].totalCorredoresEdad = lengthFemenino21k2024;
    fem21k2024[m2024].posicionEdad = m2024+1;
    tiempofem21k2024Arr = fem21k2024[m2024].tiempoNeto.split(":")
    tiempofem21k2024EnSegundos = Number.parseInt(tiempofem21k2024Arr[0]*3600) + Number.parseInt(tiempofem21k2024Arr[1]*60) + Number.parseInt(tiempofem21k2024Arr[2]);
    fem21k2024[m2024].difTiempo = tiempofem21k2024EnSegundos;
    fem21k2024[m2024].difTiempo = fem21k2024[m2024].difTiempo - tiempoCerofem21k2024EnSegundos;
    difHsTiempo = Math.trunc(fem21k2024[m2024].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k2024[m2024].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k2024[m2024].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k2024[m2024].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k2024[m2024].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k2024[m2024].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k2024[m2024].porcentajePorEdad = (100 - (fem21k2024[m2024].posicionEdad / lengthFemenino21k2024)*100).toFixed(2) + "%"
}

let fem10k2024

fem10k2024 = fem10k.filter( edad10k => ( edad10k.edad >= 20 && edad10k.edad < 25) );
lengthFemenino10k2024 = fem10k2024.length;

if(lengthFemenino10k2024 != 0){
    tiempoCerofem10k2024Arr = fem10k2024[0].tiempoNeto.split(":");
    tiempoCerofem10k2024EnSegundos = Number.parseInt(tiempoCerofem10k2024Arr[0]*3600) + Number.parseInt(tiempoCerofem10k2024Arr[1]*60) + Number.parseInt(tiempoCerofem10k2024Arr[2]);
}

for( m2024=0; m2024<lengthFemenino10k2024; m2024++ ){
    fem10k2024[m2024].totalCorredoresEdad = lengthFemenino10k2024;
    fem10k2024[m2024].posicionEdad = m2024+1;
    tiempofem10k2024Arr = fem10k2024[m2024].tiempoNeto.split(":")
    tiempofem10k2024EnSegundos = Number.parseInt(tiempofem10k2024Arr[0]*3600) + Number.parseInt(tiempofem10k2024Arr[1]*60) + Number.parseInt(tiempofem10k2024Arr[2]);
    fem10k2024[m2024].difTiempo = tiempofem10k2024EnSegundos;
    fem10k2024[m2024].difTiempo = fem10k2024[m2024].difTiempo - tiempoCerofem10k2024EnSegundos;
    difHsTiempo = Math.trunc(fem10k2024[m2024].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k2024[m2024].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k2024[m2024].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k2024[m2024].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k2024[m2024].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k2024[m2024].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k2024[m2024].porcentajePorEdad = (100 - (fem10k2024[m2024].posicionEdad / lengthFemenino10k2024)*100).toFixed(2) + "%"
}

let fem5k2024

fem5k2024 = fem5k.filter( edad5k => ( edad5k.edad >= 20 && edad5k.edad < 25) );
lengthFemenino5k2024 = fem5k2024.length;

if(lengthFemenino5k2024 != 0){
    tiempoCerofem5k2024Arr = fem5k2024[0].tiempoNeto.split(":");
    tiempoCerofem5k2024EnSegundos = Number.parseInt(tiempoCerofem5k2024Arr[0]*3600) + Number.parseInt(tiempoCerofem5k2024Arr[1]*60) + Number.parseInt(tiempoCerofem5k2024Arr[2]);
}

for( m2024=0; m2024<lengthFemenino5k2024; m2024++ ){
    fem5k2024[m2024].totalCorredoresEdad = lengthFemenino5k2024;
    fem5k2024[m2024].posicionEdad = m2024+1;
    tiempofem5k2024Arr = fem5k2024[m2024].tiempoNeto.split(":")
    tiempofem5k2024EnSegundos = Number.parseInt(tiempofem5k2024Arr[0]*3600) + Number.parseInt(tiempofem5k2024Arr[1]*60) + Number.parseInt(tiempofem5k2024Arr[2]);
    fem5k2024[m2024].difTiempo = tiempofem5k2024EnSegundos;
    fem5k2024[m2024].difTiempo = fem5k2024[m2024].difTiempo - tiempoCerofem5k2024EnSegundos;
    difHsTiempo = Math.trunc(fem5k2024[m2024].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k2024[m2024].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k2024[m2024].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k2024[m2024].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k2024[m2024].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k2024[m2024].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k2024[m2024].porcentajePorEdad = (100 - (fem5k2024[m2024].posicionEdad / lengthFemenino5k2024)*100).toFixed(2) + "%"
}

// -------------- MUJERES 25 A 29 AÑOS -------------- 

let fem21k2529

fem21k2529 = fem21k.filter( edad21k => ( edad21k.edad >= 25 && edad21k.edad < 30) );
lengthFemenino21k2529 = fem21k2529.length;

if(lengthFemenino21k2529 != 0){
    tiempoCerofem21k2529Arr = fem21k2529[0].tiempoNeto.split(":");
    tiempoCerofem21k2529EnSegundos = Number.parseInt(tiempoCerofem21k2529Arr[0]*3600) + Number.parseInt(tiempoCerofem21k2529Arr[1]*60) + Number.parseInt(tiempoCerofem21k2529Arr[2]);
}

for( m2529=0; m2529<lengthFemenino21k2529; m2529++ ){
    fem21k2529[m2529].totalCorredoresEdad = lengthFemenino21k2529;
    fem21k2529[m2529].posicionEdad = m2529+1;
    tiempofem21k2529Arr = fem21k2529[m2529].tiempoNeto.split(":")
    tiempofem21k2529EnSegundos = Number.parseInt(tiempofem21k2529Arr[0]*3600) + Number.parseInt(tiempofem21k2529Arr[1]*60) + Number.parseInt(tiempofem21k2529Arr[2]);
    fem21k2529[m2529].difTiempo = tiempofem21k2529EnSegundos;
    fem21k2529[m2529].difTiempo = fem21k2529[m2529].difTiempo - tiempoCerofem21k2529EnSegundos;
    difHsTiempo = Math.trunc(fem21k2529[m2529].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k2529[m2529].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k2529[m2529].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k2529[m2529].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k2529[m2529].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k2529[m2529].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k2529[m2529].porcentajePorEdad = (100 - (fem21k2529[m2529].posicionEdad / lengthFemenino21k2529)*100).toFixed(2) + "%"
}

let fem10k2529

fem10k2529 = fem10k.filter( edad10k => ( edad10k.edad >= 25 && edad10k.edad < 30) );
lengthFemenino10k2529 = fem10k2529.length;

if(lengthFemenino10k2529 != 0){
    tiempoCerofem10k2529Arr = fem10k2529[0].tiempoNeto.split(":");
    tiempoCerofem10k2529EnSegundos = Number.parseInt(tiempoCerofem10k2529Arr[0]*3600) + Number.parseInt(tiempoCerofem10k2529Arr[1]*60) + Number.parseInt(tiempoCerofem10k2529Arr[2]);
}

for( m2529=0; m2529<lengthFemenino10k2529; m2529++ ){
    fem10k2529[m2529].totalCorredoresEdad = lengthFemenino10k2529;
    fem10k2529[m2529].posicionEdad = m2529+1;
    tiempofem10k2529Arr = fem10k2529[m2529].tiempoNeto.split(":")
    tiempofem10k2529EnSegundos = Number.parseInt(tiempofem10k2529Arr[0]*3600) + Number.parseInt(tiempofem10k2529Arr[1]*60) + Number.parseInt(tiempofem10k2529Arr[2]);
    fem10k2529[m2529].difTiempo = tiempofem10k2529EnSegundos;
    fem10k2529[m2529].difTiempo = fem10k2529[m2529].difTiempo - tiempoCerofem10k2529EnSegundos;
    difHsTiempo = Math.trunc(fem10k2529[m2529].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k2529[m2529].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k2529[m2529].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k2529[m2529].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k2529[m2529].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k2529[m2529].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k2529[m2529].porcentajePorEdad = (100 - (fem10k2529[m2529].posicionEdad / lengthFemenino10k2529)*100).toFixed(2) + "%"
}

let fem5k2529

fem5k2529 = fem5k.filter( edad5k => ( edad5k.edad >= 25 && edad5k.edad < 30) );
lengthFemenino5k2529 = fem5k2529.length;

if(lengthFemenino5k2529 != 0){
    tiempoCerofem5k2529Arr = fem5k2529[0].tiempoNeto.split(":");
    tiempoCerofem5k2529EnSegundos = Number.parseInt(tiempoCerofem5k2529Arr[0]*3600) + Number.parseInt(tiempoCerofem5k2529Arr[1]*60) + Number.parseInt(tiempoCerofem5k2529Arr[2]);
}

for( m2529=0; m2529<lengthFemenino5k2529; m2529++ ){
    fem5k2529[m2529].totalCorredoresEdad = lengthFemenino5k2529;
    fem5k2529[m2529].posicionEdad = m2529+1;
    tiempofem5k2529Arr = fem5k2529[m2529].tiempoNeto.split(":")
    tiempofem5k2529EnSegundos = Number.parseInt(tiempofem5k2529Arr[0]*3600) + Number.parseInt(tiempofem5k2529Arr[1]*60) + Number.parseInt(tiempofem5k2529Arr[2]);
    fem5k2529[m2529].difTiempo = tiempofem5k2529EnSegundos;
    fem5k2529[m2529].difTiempo = fem5k2529[m2529].difTiempo - tiempoCerofem5k2529EnSegundos;
    difHsTiempo = Math.trunc(fem5k2529[m2529].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k2529[m2529].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k2529[m2529].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k2529[m2529].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k2529[m2529].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k2529[m2529].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k2529[m2529].porcentajePorEdad = (100 - (fem5k2529[m2529].posicionEdad / lengthFemenino5k2529)*100).toFixed(2) + "%"
}

// -------------- MUJERES 30 A 34 AÑOS -------------- 


let fem21k3034

fem21k3034 = fem21k.filter( edad21k => ( edad21k.edad >= 30 && edad21k.edad < 35) );
lengthFemenino21k3034 = fem21k3034.length;

if(lengthFemenino21k3034 != 0){
    tiempoCerofem21k3034Arr = fem21k3034[0].tiempoNeto.split(":");
    tiempoCerofem21k3034EnSegundos = Number.parseInt(tiempoCerofem21k3034Arr[0]*3600) + Number.parseInt(tiempoCerofem21k3034Arr[1]*60) + Number.parseInt(tiempoCerofem21k3034Arr[2]); 
}

for( m3034=0; m3034<lengthFemenino21k3034; m3034++ ){
    fem21k3034[m3034].totalCorredoresEdad = lengthFemenino21k3034;
    fem21k3034[m3034].posicionEdad = m3034+1;
    tiempofem21k3034Arr = fem21k3034[m3034].tiempoNeto.split(":")
    tiempofem21k3034EnSegundos = Number.parseInt(tiempofem21k3034Arr[0]*3600) + Number.parseInt(tiempofem21k3034Arr[1]*60) + Number.parseInt(tiempofem21k3034Arr[2]);
    fem21k3034[m3034].difTiempo = tiempofem21k3034EnSegundos;
    fem21k3034[m3034].difTiempo = fem21k3034[m3034].difTiempo - tiempoCerofem21k3034EnSegundos;
    difHsTiempo = Math.trunc(fem21k3034[m3034].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k3034[m3034].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k3034[m3034].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k3034[m3034].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k3034[m3034].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k3034[m3034].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k3034[m3034].porcentajePorEdad = (100 - (fem21k3034[m3034].posicionEdad / lengthFemenino21k3034)*100).toFixed(2) + "%"
}

let fem10k3034

fem10k3034 = fem10k.filter( edad10k => ( edad10k.edad >= 30 && edad10k.edad < 35) );
lengthFemenino10k3034 = fem10k3034.length;

if(lengthFemenino10k3034 != 0){
    tiempoCerofem10k3034Arr = fem10k3034[0].tiempoNeto.split(":");
    tiempoCerofem10k3034EnSegundos = Number.parseInt(tiempoCerofem10k3034Arr[0]*3600) + Number.parseInt(tiempoCerofem10k3034Arr[1]*60) + Number.parseInt(tiempoCerofem10k3034Arr[2]); 
}

for( m3034=0; m3034<lengthFemenino10k3034; m3034++ ){
    fem10k3034[m3034].totalCorredoresEdad = lengthFemenino10k3034;
    fem10k3034[m3034].posicionEdad = m3034+1;
    tiempofem10k3034Arr = fem10k3034[m3034].tiempoNeto.split(":")
    tiempofem10k3034EnSegundos = Number.parseInt(tiempofem10k3034Arr[0]*3600) + Number.parseInt(tiempofem10k3034Arr[1]*60) + Number.parseInt(tiempofem10k3034Arr[2]);
    fem10k3034[m3034].difTiempo = tiempofem10k3034EnSegundos;
    fem10k3034[m3034].difTiempo = fem10k3034[m3034].difTiempo - tiempoCerofem10k3034EnSegundos;
    difHsTiempo = Math.trunc(fem10k3034[m3034].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k3034[m3034].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k3034[m3034].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k3034[m3034].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k3034[m3034].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k3034[m3034].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k3034[m3034].porcentajePorEdad = (100 - (fem10k3034[m3034].posicionEdad / lengthFemenino10k3034)*100).toFixed(2) + "%"
}

let fem5k3034

fem5k3034 = fem5k.filter( edad5k => ( edad5k.edad >= 30 && edad5k.edad < 35) );
lengthFemenino5k3034 = fem5k3034.length;

if(lengthFemenino5k3034 != 0){
    tiempoCerofem5k3034Arr = fem5k3034[0].tiempoNeto.split(":");
    tiempoCerofem5k3034EnSegundos = Number.parseInt(tiempoCerofem5k3034Arr[0]*3600) + Number.parseInt(tiempoCerofem5k3034Arr[1]*60) + Number.parseInt(tiempoCerofem5k3034Arr[2]); 
}

for( m3034=0; m3034<lengthFemenino5k3034; m3034++ ){
    fem5k3034[m3034].totalCorredoresEdad = lengthFemenino5k3034;
    fem5k3034[m3034].posicionEdad = m3034+1;
    tiempofem5k3034Arr = fem5k3034[m3034].tiempoNeto.split(":")
    tiempofem5k3034EnSegundos = Number.parseInt(tiempofem5k3034Arr[0]*3600) + Number.parseInt(tiempofem5k3034Arr[1]*60) + Number.parseInt(tiempofem5k3034Arr[2]);
    fem5k3034[m3034].difTiempo = tiempofem5k3034EnSegundos;
    fem5k3034[m3034].difTiempo = fem5k3034[m3034].difTiempo - tiempoCerofem5k3034EnSegundos;
    difHsTiempo = Math.trunc(fem5k3034[m3034].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k3034[m3034].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k3034[m3034].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k3034[m3034].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k3034[m3034].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k3034[m3034].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k3034[m3034].porcentajePorEdad = (100 - (fem5k3034[m3034].posicionEdad / lengthFemenino5k3034)*100).toFixed(2) + "%"
}

// -------------- MUJERES 35 A 39 AÑOS -------------- 


let fem21k3539

fem21k3539 = fem21k.filter( edad21k => ( edad21k.edad >= 35 && edad21k.edad < 40) );
lengthFemenino21k3539 = fem21k3539.length;

if(lengthFemenino21k3539 != 0){
   tiempoCerofem21k3539Arr = fem21k3539[0].tiempoNeto.split(":");
    tiempoCerofem21k3539EnSegundos = Number.parseInt(tiempoCerofem21k3539Arr[0]*3600) + Number.parseInt(tiempoCerofem21k3539Arr[1]*60) + Number.parseInt(tiempoCerofem21k3539Arr[2]); 
}

for( m3539=0; m3539<lengthFemenino21k3539; m3539++ ){
    fem21k3539[m3539].totalCorredoresEdad = lengthFemenino21k3539;
    fem21k3539[m3539].posicionEdad = m3539+1;
    tiempofem21k3539Arr = fem21k3539[m3539].tiempoNeto.split(":")
    tiempofem21k3539EnSegundos = Number.parseInt(tiempofem21k3539Arr[0]*3600) + Number.parseInt(tiempofem21k3539Arr[1]*60) + Number.parseInt(tiempofem21k3539Arr[2]);
    fem21k3539[m3539].difTiempo = tiempofem21k3539EnSegundos;
    fem21k3539[m3539].difTiempo = fem21k3539[m3539].difTiempo - tiempoCerofem21k3539EnSegundos;
    difHsTiempo = Math.trunc(fem21k3539[m3539].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k3539[m3539].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k3539[m3539].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k3539[m3539].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k3539[m3539].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k3539[m3539].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k3539[m3539].porcentajePorEdad = (100 - (fem21k3539[m3539].posicionEdad / lengthFemenino21k3539)*100).toFixed(2) + "%"
}

let fem10k3539

fem10k3539 = fem10k.filter( edad10k => ( edad10k.edad >= 35 && edad10k.edad < 40) );
lengthFemenino10k3539 = fem10k3539.length;

if(lengthFemenino10k3539 != 0){
   tiempoCerofem10k3539Arr = fem10k3539[0].tiempoNeto.split(":");
    tiempoCerofem10k3539EnSegundos = Number.parseInt(tiempoCerofem10k3539Arr[0]*3600) + Number.parseInt(tiempoCerofem10k3539Arr[1]*60) + Number.parseInt(tiempoCerofem10k3539Arr[2]); 
}

for( m3539=0; m3539<lengthFemenino10k3539; m3539++ ){
    fem10k3539[m3539].totalCorredoresEdad = lengthFemenino10k3539;
    fem10k3539[m3539].posicionEdad = m3539+1;
    tiempofem10k3539Arr = fem10k3539[m3539].tiempoNeto.split(":")
    tiempofem10k3539EnSegundos = Number.parseInt(tiempofem10k3539Arr[0]*3600) + Number.parseInt(tiempofem10k3539Arr[1]*60) + Number.parseInt(tiempofem10k3539Arr[2]);
    fem10k3539[m3539].difTiempo = tiempofem10k3539EnSegundos;
    fem10k3539[m3539].difTiempo = fem10k3539[m3539].difTiempo - tiempoCerofem10k3539EnSegundos;
    difHsTiempo = Math.trunc(fem10k3539[m3539].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k3539[m3539].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k3539[m3539].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k3539[m3539].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k3539[m3539].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k3539[m3539].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k3539[m3539].porcentajePorEdad = (100 - (fem10k3539[m3539].posicionEdad / lengthFemenino10k3539)*100).toFixed(2) + "%"
}

let fem5k3539

fem5k3539 = fem5k.filter( edad5k => ( edad5k.edad >= 35 && edad5k.edad < 40) );
lengthFemenino5k3539 = fem5k3539.length;

if(lengthFemenino5k3539 != 0){
    tiempoCerofem5k3539Arr = fem5k3539[0].tiempoNeto.split(":");
     tiempoCerofem5k3539EnSegundos = Number.parseInt(tiempoCerofem5k3539Arr[0]*3600) + Number.parseInt(tiempoCerofem5k3539Arr[1]*60) + Number.parseInt(tiempoCerofem5k3539Arr[2]); 
 }

for( m3539=0; m3539<lengthFemenino5k3539; m3539++ ){
    fem5k3539[m3539].totalCorredoresEdad = lengthFemenino5k3539;
    fem5k3539[m3539].posicionEdad = m3539+1;
    tiempofem5k3539Arr = fem5k3539[m3539].tiempoNeto.split(":")
    tiempofem5k3539EnSegundos = Number.parseInt(tiempofem5k3539Arr[0]*3600) + Number.parseInt(tiempofem5k3539Arr[1]*60) + Number.parseInt(tiempofem5k3539Arr[2]);
    fem5k3539[m3539].difTiempo = tiempofem5k3539EnSegundos;
    fem5k3539[m3539].difTiempo = fem5k3539[m3539].difTiempo - tiempoCerofem5k3539EnSegundos;
    difHsTiempo = Math.trunc(fem5k3539[m3539].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k3539[m3539].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k3539[m3539].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k3539[m3539].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k3539[m3539].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k3539[m3539].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k3539[m3539].porcentajePorEdad = (100 - (fem5k3539[m3539].posicionEdad / lengthFemenino5k3539)*100).toFixed(2) + "%"
}

// -------------- MUJERES 40 A 44 AÑOS -------------- 

let fem21k4044

fem21k4044 = fem21k.filter( edad21k => ( edad21k.edad >= 40 && edad21k.edad < 45) );
lengthFemenino21k4044 = fem21k4044.length;

if(lengthFemenino21k4044 != 0){
    tiempoCerofem21k4044Arr = fem21k4044[0].tiempoNeto.split(":");
    tiempoCerofem21k4044EnSegundos = Number.parseInt(tiempoCerofem21k4044Arr[0]*3600) + Number.parseInt(tiempoCerofem21k4044Arr[1]*60) + Number.parseInt(tiempoCerofem21k4044Arr[2]);
}

for( m4044=0; m4044<lengthFemenino21k4044; m4044++ ){
    fem21k4044[m4044].totalCorredoresEdad = lengthFemenino21k4044;
    fem21k4044[m4044].posicionEdad = m4044+1;
    tiempofem21k4044Arr = fem21k4044[m4044].tiempoNeto.split(":")
    tiempofem21k4044EnSegundos = Number.parseInt(tiempofem21k4044Arr[0]*3600) + Number.parseInt(tiempofem21k4044Arr[1]*60) + Number.parseInt(tiempofem21k4044Arr[2]);
    fem21k4044[m4044].difTiempo = tiempofem21k4044EnSegundos;
    fem21k4044[m4044].difTiempo = fem21k4044[m4044].difTiempo - tiempoCerofem21k4044EnSegundos;
    difHsTiempo = Math.trunc(fem21k4044[m4044].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k4044[m4044].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k4044[m4044].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k4044[m4044].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k4044[m4044].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k4044[m4044].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k4044[m4044].porcentajePorEdad = (100 - (fem21k4044[m4044].posicionEdad / lengthFemenino21k4044)*100).toFixed(2) + "%"
}

let fem10k4044

fem10k4044 = fem10k.filter( edad10k => ( edad10k.edad >= 40 && edad10k.edad < 45) );
lengthFemenino10k4044 = fem10k4044.length;

if(lengthFemenino10k4044 != 0){
    tiempoCerofem10k4044Arr = fem10k4044[0].tiempoNeto.split(":");
    tiempoCerofem10k4044EnSegundos = Number.parseInt(tiempoCerofem10k4044Arr[0]*3600) + Number.parseInt(tiempoCerofem10k4044Arr[1]*60) + Number.parseInt(tiempoCerofem10k4044Arr[2]);
}

for( m4044=0; m4044<lengthFemenino10k4044; m4044++ ){
    fem10k4044[m4044].totalCorredoresEdad = lengthFemenino10k4044;
    fem10k4044[m4044].posicionEdad = m4044+1;
    tiempofem10k4044Arr = fem10k4044[m4044].tiempoNeto.split(":")
    tiempofem10k4044EnSegundos = Number.parseInt(tiempofem10k4044Arr[0]*3600) + Number.parseInt(tiempofem10k4044Arr[1]*60) + Number.parseInt(tiempofem10k4044Arr[2]);
    fem10k4044[m4044].difTiempo = tiempofem10k4044EnSegundos;
    fem10k4044[m4044].difTiempo = fem10k4044[m4044].difTiempo - tiempoCerofem10k4044EnSegundos;
    difHsTiempo = Math.trunc(fem10k4044[m4044].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k4044[m4044].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k4044[m4044].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k4044[m4044].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k4044[m4044].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k4044[m4044].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k4044[m4044].porcentajePorEdad = (100 - (fem10k4044[m4044].posicionEdad / lengthFemenino10k4044)*100).toFixed(2) + "%"
}

let fem5k4044

fem5k4044 = fem5k.filter( edad5k => ( edad5k.edad >= 40 && edad5k.edad < 45) );
lengthFemenino5k4044 = fem5k4044.length;

if(lengthFemenino5k4044 != 0){
    tiempoCerofem5k4044Arr = fem5k4044[0].tiempoNeto.split(":");
    tiempoCerofem5k4044EnSegundos = Number.parseInt(tiempoCerofem5k4044Arr[0]*3600) + Number.parseInt(tiempoCerofem5k4044Arr[1]*60) + Number.parseInt(tiempoCerofem5k4044Arr[2]);
}

for( m4044=0; m4044<lengthFemenino5k4044; m4044++ ){
    fem5k4044[m4044].totalCorredoresEdad = lengthFemenino5k4044;
    fem5k4044[m4044].posicionEdad = m4044+1;
    tiempofem5k4044Arr = fem5k4044[m4044].tiempoNeto.split(":")
    tiempofem5k4044EnSegundos = Number.parseInt(tiempofem5k4044Arr[0]*3600) + Number.parseInt(tiempofem5k4044Arr[1]*60) + Number.parseInt(tiempofem5k4044Arr[2]);
    fem5k4044[m4044].difTiempo = tiempofem5k4044EnSegundos;
    fem5k4044[m4044].difTiempo = fem5k4044[m4044].difTiempo - tiempoCerofem5k4044EnSegundos;
    difHsTiempo = Math.trunc(fem5k4044[m4044].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k4044[m4044].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k4044[m4044].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k4044[m4044].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k4044[m4044].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k4044[m4044].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k4044[m4044].porcentajePorEdad = (100 - (fem5k4044[m4044].posicionEdad / lengthFemenino5k4044)*100).toFixed(2) + "%"
}

// -------------- MUJERES 45 A 49 AÑOS -------------- 


let fem21k4549

fem21k4549 = fem21k.filter( edad21k => ( edad21k.edad >= 45 && edad21k.edad < 50) );
lengthFemenino21k4549 = fem21k4549.length;

if(lengthFemenino21k4549 != 0){
    tiempoCerofem21k4549Arr = fem21k4549[0].tiempoNeto.split(":");
    tiempoCerofem21k4549EnSegundos = Number.parseInt(tiempoCerofem21k4549Arr[0]*3600) + Number.parseInt(tiempoCerofem21k4549Arr[1]*60) + Number.parseInt(tiempoCerofem21k4549Arr[2]);
}

for( m4549=0; m4549<lengthFemenino21k4549; m4549++ ){
    fem21k4549[m4549].totalCorredoresEdad = lengthFemenino21k4549;
    fem21k4549[m4549].posicionEdad = m4549+1;
    tiempofem21k4549Arr = fem21k4549[m4549].tiempoNeto.split(":")
    tiempofem21k4549EnSegundos = Number.parseInt(tiempofem21k4549Arr[0]*3600) + Number.parseInt(tiempofem21k4549Arr[1]*60) + Number.parseInt(tiempofem21k4549Arr[2]);
    fem21k4549[m4549].difTiempo = tiempofem21k4549EnSegundos;
    fem21k4549[m4549].difTiempo = fem21k4549[m4549].difTiempo - tiempoCerofem21k4549EnSegundos;
    difHsTiempo = Math.trunc(fem21k4549[m4549].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k4549[m4549].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k4549[m4549].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k4549[m4549].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k4549[m4549].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k4549[m4549].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k4549[m4549].porcentajePorEdad = (100 - (fem21k4549[m4549].posicionEdad / lengthFemenino21k4549)*100).toFixed(2) + "%"
}

let fem10k4549

fem10k4549 = fem10k.filter( edad10k => ( edad10k.edad >= 45 && edad10k.edad < 50) );
lengthFemenino10k4549 = fem10k4549.length;

if(lengthFemenino10k4549 != 0){
    tiempoCerofem10k4549Arr = fem10k4549[0].tiempoNeto.split(":");
    tiempoCerofem10k4549EnSegundos = Number.parseInt(tiempoCerofem10k4549Arr[0]*3600) + Number.parseInt(tiempoCerofem10k4549Arr[1]*60) + Number.parseInt(tiempoCerofem10k4549Arr[2]);
}

for( m4549=0; m4549<lengthFemenino10k4549; m4549++ ){
    fem10k4549[m4549].totalCorredoresEdad = lengthFemenino10k4549;
    fem10k4549[m4549].posicionEdad = m4549+1;
    tiempofem10k4549Arr = fem10k4549[m4549].tiempoNeto.split(":")
    tiempofem10k4549EnSegundos = Number.parseInt(tiempofem10k4549Arr[0]*3600) + Number.parseInt(tiempofem10k4549Arr[1]*60) + Number.parseInt(tiempofem10k4549Arr[2]);
    fem10k4549[m4549].difTiempo = tiempofem10k4549EnSegundos;
    fem10k4549[m4549].difTiempo = fem10k4549[m4549].difTiempo - tiempoCerofem10k4549EnSegundos;
    difHsTiempo = Math.trunc(fem10k4549[m4549].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k4549[m4549].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k4549[m4549].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k4549[m4549].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k4549[m4549].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k4549[m4549].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k4549[m4549].porcentajePorEdad = (100 - (fem10k4549[m4549].posicionEdad / lengthFemenino10k4549)*100).toFixed(2) + "%"
}

let fem5k4549

fem5k4549 = fem5k.filter( edad5k => ( edad5k.edad >= 45 && edad5k.edad < 50) );
lengthFemenino5k4549 = fem5k4549.length;

if(lengthFemenino5k4549 != 0){
    tiempoCerofem5k4549Arr = fem5k4549[0].tiempoNeto.split(":");
    tiempoCerofem5k4549EnSegundos = Number.parseInt(tiempoCerofem5k4549Arr[0]*3600) + Number.parseInt(tiempoCerofem5k4549Arr[1]*60) + Number.parseInt(tiempoCerofem5k4549Arr[2]);
}

for( m4549=0; m4549<lengthFemenino5k4549; m4549++ ){
    fem5k4549[m4549].totalCorredoresEdad = lengthFemenino5k4549;
    fem5k4549[m4549].posicionEdad = m4549+1;
    tiempofem5k4549Arr = fem5k4549[m4549].tiempoNeto.split(":")
    tiempofem5k4549EnSegundos = Number.parseInt(tiempofem5k4549Arr[0]*3600) + Number.parseInt(tiempofem5k4549Arr[1]*60) + Number.parseInt(tiempofem5k4549Arr[2]);
    fem5k4549[m4549].difTiempo = tiempofem5k4549EnSegundos;
    fem5k4549[m4549].difTiempo = fem5k4549[m4549].difTiempo - tiempoCerofem5k4549EnSegundos;
    difHsTiempo = Math.trunc(fem5k4549[m4549].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k4549[m4549].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k4549[m4549].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k4549[m4549].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k4549[m4549].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k4549[m4549].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k4549[m4549].porcentajePorEdad = (100 - (fem5k4549[m4549].posicionEdad / lengthFemenino5k4549)*100).toFixed(2) + "%"
}

// -------------- MUJERES 50 A 54 AÑOS -------------- 

let fem21k5054

fem21k5054 = fem21k.filter( edad21k => ( edad21k.edad >= 50 && edad21k.edad < 55) );
lengthFemenino21k5054 = fem21k5054.length;

if(lengthFemenino21k5054 != 0){
    tiempoCerofem21k5054Arr = fem21k5054[0].tiempoNeto.split(":");
    tiempoCerofem21k5054EnSegundos = Number.parseInt(tiempoCerofem21k5054Arr[0]*3600) + Number.parseInt(tiempoCerofem21k5054Arr[1]*60) + Number.parseInt(tiempoCerofem21k5054Arr[2]);
}

for( m5054=0; m5054<lengthFemenino21k5054; m5054++ ){
    fem21k5054[m5054].totalCorredoresEdad = lengthFemenino21k5054;
    fem21k5054[m5054].posicionEdad = m5054+1;
    tiempofem21k5054Arr = fem21k5054[m5054].tiempoNeto.split(":")
    tiempofem21k5054EnSegundos = Number.parseInt(tiempofem21k5054Arr[0]*3600) + Number.parseInt(tiempofem21k5054Arr[1]*60) + Number.parseInt(tiempofem21k5054Arr[2]);
    fem21k5054[m5054].difTiempo = tiempofem21k5054EnSegundos;
    fem21k5054[m5054].difTiempo = fem21k5054[m5054].difTiempo - tiempoCerofem21k5054EnSegundos;
    difHsTiempo = Math.trunc(fem21k5054[m5054].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k5054[m5054].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k5054[m5054].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k5054[m5054].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k5054[m5054].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k5054[m5054].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k5054[m5054].porcentajePorEdad = (100 - (fem21k5054[m5054].posicionEdad / lengthFemenino21k5054)*100).toFixed(2) + "%"
}


let fem10k5054

fem10k5054 = fem10k.filter( edad10k => ( edad10k.edad >= 50 && edad10k.edad < 55) );
lengthFemenino10k5054 = fem10k5054.length;

if(lengthFemenino10k5054 != 0){
    tiempoCerofem10k5054Arr = fem10k5054[0].tiempoNeto.split(":");
    tiempoCerofem10k5054EnSegundos = Number.parseInt(tiempoCerofem10k5054Arr[0]*3600) + Number.parseInt(tiempoCerofem10k5054Arr[1]*60) + Number.parseInt(tiempoCerofem10k5054Arr[2]);
}

for( m5054=0; m5054<lengthFemenino10k5054; m5054++ ){
    fem10k5054[m5054].totalCorredoresEdad = lengthFemenino10k5054;
    fem10k5054[m5054].posicionEdad = m5054+1;
    tiempofem10k5054Arr = fem10k5054[m5054].tiempoNeto.split(":")
    tiempofem10k5054EnSegundos = Number.parseInt(tiempofem10k5054Arr[0]*3600) + Number.parseInt(tiempofem10k5054Arr[1]*60) + Number.parseInt(tiempofem10k5054Arr[2]);
    fem10k5054[m5054].difTiempo = tiempofem10k5054EnSegundos;
    fem10k5054[m5054].difTiempo = fem10k5054[m5054].difTiempo - tiempoCerofem10k5054EnSegundos;
    difHsTiempo = Math.trunc(fem10k5054[m5054].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k5054[m5054].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k5054[m5054].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k5054[m5054].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k5054[m5054].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k5054[m5054].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k5054[m5054].porcentajePorEdad = (100 - (fem10k5054[m5054].posicionEdad / lengthFemenino10k5054)*100).toFixed(2) + "%"
}

let fem5k5054

fem5k5054 = fem5k.filter( edad5k => ( edad5k.edad >= 50 && edad5k.edad < 55) );
lengthFemenino5k5054 = fem5k5054.length;

if(lengthFemenino5k5054 != 0){
    tiempoCerofem5k5054Arr = fem5k5054[0].tiempoNeto.split(":");
    tiempoCerofem5k5054EnSegundos = Number.parseInt(tiempoCerofem5k5054Arr[0]*3600) + Number.parseInt(tiempoCerofem5k5054Arr[1]*60) + Number.parseInt(tiempoCerofem5k5054Arr[2]);
}

for( m5054=0; m5054<lengthFemenino5k5054; m5054++ ){
    fem5k5054[m5054].totalCorredoresEdad = lengthFemenino5k5054;
    fem5k5054[m5054].posicionEdad = m5054+1;
    tiempofem5k5054Arr = fem5k5054[m5054].tiempoNeto.split(":")
    tiempofem5k5054EnSegundos = Number.parseInt(tiempofem5k5054Arr[0]*3600) + Number.parseInt(tiempofem5k5054Arr[1]*60) + Number.parseInt(tiempofem5k5054Arr[2]);
    fem5k5054[m5054].difTiempo = tiempofem5k5054EnSegundos;
    fem5k5054[m5054].difTiempo = fem5k5054[m5054].difTiempo - tiempoCerofem5k5054EnSegundos;
    difHsTiempo = Math.trunc(fem5k5054[m5054].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k5054[m5054].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k5054[m5054].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k5054[m5054].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k5054[m5054].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k5054[m5054].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k5054[m5054].porcentajePorEdad = (100 - (fem5k5054[m5054].posicionEdad / lengthFemenino5k5054)*100).toFixed(2) + "%"
}

// -------------- MUJERES 55 A 59 AÑOS -------------- 

let fem21k5559

fem21k5559 = fem21k.filter( edad21k => ( edad21k.edad >= 55 && edad21k.edad < 60) );
lengthFemenino21k5559 = fem21k5559.length;

if(lengthFemenino21k5559 != 0){
    tiempoCerofem21k5559Arr = fem21k5559[0].tiempoNeto.split(":");
    tiempoCerofem21k5559EnSegundos = Number.parseInt(tiempoCerofem21k5559Arr[0]*3600) + Number.parseInt(tiempoCerofem21k5559Arr[1]*60) + Number.parseInt(tiempoCerofem21k5559Arr[2]);
}

for( m5559=0; m5559<lengthFemenino21k5559; m5559++ ){
    fem21k5559[m5559].totalCorredoresEdad = lengthFemenino21k5559;
    fem21k5559[m5559].posicionEdad = m5559+1;
    tiempofem21k5559Arr = fem21k5559[m5559].tiempoNeto.split(":")
    tiempofem21k5559EnSegundos = Number.parseInt(tiempofem21k5559Arr[0]*3600) + Number.parseInt(tiempofem21k5559Arr[1]*60) + Number.parseInt(tiempofem21k5559Arr[2]);
    fem21k5559[m5559].difTiempo = tiempofem21k5559EnSegundos;
    fem21k5559[m5559].difTiempo = fem21k5559[m5559].difTiempo - tiempoCerofem21k5559EnSegundos;
    difHsTiempo = Math.trunc(fem21k5559[m5559].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k5559[m5559].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k5559[m5559].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k5559[m5559].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k5559[m5559].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k5559[m5559].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k5559[m5559].porcentajePorEdad = (100 - (fem21k5559[m5559].posicionEdad / lengthFemenino21k5559)*100).toFixed(2) + "%"
}

let fem10k5559

fem10k5559 = fem10k.filter( edad10k => ( edad10k.edad >= 55 && edad10k.edad < 60) );
lengthFemenino10k5559 = fem10k5559.length;

if(lengthFemenino10k5559 != 0){
    tiempoCerofem10k5559Arr = fem10k5559[0].tiempoNeto.split(":");
    tiempoCerofem10k5559EnSegundos = Number.parseInt(tiempoCerofem10k5559Arr[0]*3600) + Number.parseInt(tiempoCerofem10k5559Arr[1]*60) + Number.parseInt(tiempoCerofem10k5559Arr[2]);
}

for( m5559=0; m5559<lengthFemenino10k5559; m5559++ ){
    fem10k5559[m5559].totalCorredoresEdad = lengthFemenino10k5559;
    fem10k5559[m5559].posicionEdad = m5559+1;
    tiempofem10k5559Arr = fem10k5559[m5559].tiempoNeto.split(":")
    tiempofem10k5559EnSegundos = Number.parseInt(tiempofem10k5559Arr[0]*3600) + Number.parseInt(tiempofem10k5559Arr[1]*60) + Number.parseInt(tiempofem10k5559Arr[2]);
    fem10k5559[m5559].difTiempo = tiempofem10k5559EnSegundos;
    fem10k5559[m5559].difTiempo = fem10k5559[m5559].difTiempo - tiempoCerofem10k5559EnSegundos;
    difHsTiempo = Math.trunc(fem10k5559[m5559].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k5559[m5559].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k5559[m5559].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k5559[m5559].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k5559[m5559].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k5559[m5559].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k5559[m5559].porcentajePorEdad = (100 - (fem10k5559[m5559].posicionEdad / lengthFemenino10k5559)*100).toFixed(2) + "%"
}

let fem5k5559

fem5k5559 = fem5k.filter( edad5k => ( edad5k.edad >= 55 && edad5k.edad < 60) );
lengthFemenino5k5559 = fem5k5559.length;

if(lengthFemenino5k5559 != 0){
    tiempoCerofem5k5559Arr = fem5k5559[0].tiempoNeto.split(":");
    tiempoCerofem5k5559EnSegundos = Number.parseInt(tiempoCerofem5k5559Arr[0]*3600) + Number.parseInt(tiempoCerofem5k5559Arr[1]*60) + Number.parseInt(tiempoCerofem5k5559Arr[2]);
}

for( m5559=0; m5559<lengthFemenino5k5559; m5559++ ){
    fem5k5559[m5559].totalCorredoresEdad = lengthFemenino5k5559;
    fem5k5559[m5559].posicionEdad = m5559+1;
    tiempofem5k5559Arr = fem5k5559[m5559].tiempoNeto.split(":")
    tiempofem5k5559EnSegundos = Number.parseInt(tiempofem5k5559Arr[0]*3600) + Number.parseInt(tiempofem5k5559Arr[1]*60) + Number.parseInt(tiempofem5k5559Arr[2]);
    fem5k5559[m5559].difTiempo = tiempofem5k5559EnSegundos;
    fem5k5559[m5559].difTiempo = fem5k5559[m5559].difTiempo - tiempoCerofem5k5559EnSegundos;
    difHsTiempo = Math.trunc(fem5k5559[m5559].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k5559[m5559].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k5559[m5559].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k5559[m5559].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k5559[m5559].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k5559[m5559].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k5559[m5559].porcentajePorEdad = (100 - (fem5k5559[m5559].posicionEdad / lengthFemenino5k5559)*100).toFixed(2) + "%"
}

// -------------- MUJERES 60 A 64 AÑOS -------------- 

let fem21k6064

fem21k6064 = fem21k.filter( edad21k => ( edad21k.edad >= 60 && edad21k.edad < 65) );
lengthFemenino21k6064 = fem21k6064.length;

if(lengthFemenino21k6064 != 0){
    tiempoCerofem21k6064Arr = fem21k6064[0].tiempoNeto.split(":");
    tiempoCerofem21k6064EnSegundos = Number.parseInt(tiempoCerofem21k6064Arr[0]*3600) + Number.parseInt(tiempoCerofem21k6064Arr[1]*60) + Number.parseInt(tiempoCerofem21k6064Arr[2]);
}

for( m6064=0; m6064<lengthFemenino21k6064; m6064++ ){
    fem21k6064[m6064].totalCorredoresEdad = lengthFemenino21k6064;
    fem21k6064[m6064].posicionEdad = m6064+1;
    tiempofem21k6064Arr = fem21k6064[m6064].tiempoNeto.split(":")
    tiempofem21k6064EnSegundos = Number.parseInt(tiempofem21k6064Arr[0]*3600) + Number.parseInt(tiempofem21k6064Arr[1]*60) + Number.parseInt(tiempofem21k6064Arr[2]);
    fem21k6064[m6064].difTiempo = tiempofem21k6064EnSegundos;
    fem21k6064[m6064].difTiempo = fem21k6064[m6064].difTiempo - tiempoCerofem21k6064EnSegundos;
    difHsTiempo = Math.trunc(fem21k6064[m6064].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k6064[m6064].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k6064[m6064].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k6064[m6064].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k6064[m6064].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k6064[m6064].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k6064[m6064].porcentajePorEdad = (100 - (fem21k6064[m6064].posicionEdad / lengthFemenino21k6064)*100).toFixed(2) + "%"
}

let fem10k6064

fem10k6064 = fem10k.filter( edad10k => ( edad10k.edad >= 60 && edad10k.edad < 65) );
lengthFemenino10k6064 = fem10k6064.length;

if(lengthFemenino10k6064 != 0){
    tiempoCerofem10k6064Arr = fem10k6064[0].tiempoNeto.split(":");
    tiempoCerofem10k6064EnSegundos = Number.parseInt(tiempoCerofem10k6064Arr[0]*3600) + Number.parseInt(tiempoCerofem10k6064Arr[1]*60) + Number.parseInt(tiempoCerofem10k6064Arr[2]);
}

for( m6064=0; m6064<lengthFemenino10k6064; m6064++ ){
    fem10k6064[m6064].totalCorredoresEdad = lengthFemenino10k6064;
    fem10k6064[m6064].posicionEdad = m6064+1;
    tiempofem10k6064Arr = fem10k6064[m6064].tiempoNeto.split(":")
    tiempofem10k6064EnSegundos = Number.parseInt(tiempofem10k6064Arr[0]*3600) + Number.parseInt(tiempofem10k6064Arr[1]*60) + Number.parseInt(tiempofem10k6064Arr[2]);
    fem10k6064[m6064].difTiempo = tiempofem10k6064EnSegundos;
    fem10k6064[m6064].difTiempo = fem10k6064[m6064].difTiempo - tiempoCerofem10k6064EnSegundos;
    difHsTiempo = Math.trunc(fem10k6064[m6064].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k6064[m6064].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k6064[m6064].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k6064[m6064].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k6064[m6064].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k6064[m6064].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k6064[m6064].porcentajePorEdad = (100 - (fem10k6064[m6064].posicionEdad / lengthFemenino10k6064)*100).toFixed(2) + "%"
}

let fem5k6064

fem5k6064 = fem5k.filter( edad5k => ( edad5k.edad >= 60 && edad5k.edad < 65) );
lengthFemenino5k6064 = fem5k6064.length;

if(lengthFemenino5k6064 != 0){
    tiempoCerofem5k6064Arr = fem5k6064[0].tiempoNeto.split(":");
    tiempoCerofem5k6064EnSegundos = Number.parseInt(tiempoCerofem5k6064Arr[0]*3600) + Number.parseInt(tiempoCerofem5k6064Arr[1]*60) + Number.parseInt(tiempoCerofem5k6064Arr[2]);
}

for( m6064=0; m6064<lengthFemenino5k6064; m6064++ ){
    fem5k6064[m6064].totalCorredoresEdad = lengthFemenino5k6064;
    fem5k6064[m6064].posicionEdad = m6064+1;
    tiempofem5k6064Arr = fem5k6064[m6064].tiempoNeto.split(":")
    tiempofem5k6064EnSegundos = Number.parseInt(tiempofem5k6064Arr[0]*3600) + Number.parseInt(tiempofem5k6064Arr[1]*60) + Number.parseInt(tiempofem5k6064Arr[2]);
    fem5k6064[m6064].difTiempo = tiempofem5k6064EnSegundos;
    fem5k6064[m6064].difTiempo = fem5k6064[m6064].difTiempo - tiempoCerofem5k6064EnSegundos;
    difHsTiempo = Math.trunc(fem5k6064[m6064].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k6064[m6064].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k6064[m6064].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k6064[m6064].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k6064[m6064].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k6064[m6064].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k6064[m6064].porcentajePorEdad = (100 - (fem5k6064[m6064].posicionEdad / lengthFemenino5k6064)*100).toFixed(2) + "%"
}

// -------------- MUJERES 65 A 69 AÑOS -------------- 

let fem21k6569

fem21k6569 = fem21k.filter( edad21k => ( edad21k.edad >= 65 && edad21k.edad < 70) );
lengthFemenino21k6569 = fem21k6569.length;

if(lengthFemenino21k6569 != 0){
tiempoCerofem21k6569Arr = fem21k6569[0].tiempoNeto.split(":");
tiempoCerofem21k6569EnSegundos = Number.parseInt(tiempoCerofem21k6569Arr[0]*3600) + Number.parseInt(tiempoCerofem21k6569Arr[1]*60) + Number.parseInt(tiempoCerofem21k6569Arr[2]);
}

for( m6569=0; m6569<lengthFemenino21k6569; m6569++ ){
    fem21k6569[m6569].totalCorredoresEdad = lengthFemenino21k6569;
    fem21k6569[m6569].posicionEdad = m6569+1;
    tiempofem21k6569Arr = fem21k6569[m6569].tiempoNeto.split(":")
    tiempofem21k6569EnSegundos = Number.parseInt(tiempofem21k6569Arr[0]*3600) + Number.parseInt(tiempofem21k6569Arr[1]*60) + Number.parseInt(tiempofem21k6569Arr[2]);
    fem21k6569[m6569].difTiempo = tiempofem21k6569EnSegundos;
    fem21k6569[m6569].difTiempo = fem21k6569[m6569].difTiempo - tiempoCerofem21k6569EnSegundos;
    difHsTiempo = Math.trunc(fem21k6569[m6569].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21k6569[m6569].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21k6569[m6569].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21k6569[m6569].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21k6569[m6569].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21k6569[m6569].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21k6569[m6569].porcentajePorEdad = (100 - (fem21k6569[m6569].posicionEdad / lengthFemenino21k6569)*100).toFixed(2) + "%"
}

let fem10k6569

fem10k6569 = fem10k.filter( edad10k => ( edad10k.edad >= 65 && edad10k.edad < 70) );
lengthFemenino10k6569 = fem10k6569.length;

if(lengthFemenino10k6569 != 0){
tiempoCerofem10k6569Arr = fem10k6569[0].tiempoNeto.split(":");
tiempoCerofem10k6569EnSegundos = Number.parseInt(tiempoCerofem10k6569Arr[0]*3600) + Number.parseInt(tiempoCerofem10k6569Arr[1]*60) + Number.parseInt(tiempoCerofem10k6569Arr[2]);
}

for( m6569=0; m6569<lengthFemenino10k6569; m6569++ ){
    fem10k6569[m6569].totalCorredoresEdad = lengthFemenino10k6569;
    fem10k6569[m6569].posicionEdad = m6569+1;
    tiempofem10k6569Arr = fem10k6569[m6569].tiempoNeto.split(":")
    tiempofem10k6569EnSegundos = Number.parseInt(tiempofem10k6569Arr[0]*3600) + Number.parseInt(tiempofem10k6569Arr[1]*60) + Number.parseInt(tiempofem10k6569Arr[2]);
    fem10k6569[m6569].difTiempo = tiempofem10k6569EnSegundos;
    fem10k6569[m6569].difTiempo = fem10k6569[m6569].difTiempo - tiempoCerofem10k6569EnSegundos;
    difHsTiempo = Math.trunc(fem10k6569[m6569].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10k6569[m6569].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10k6569[m6569].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10k6569[m6569].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10k6569[m6569].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10k6569[m6569].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10k6569[m6569].porcentajePorEdad = (100 - (fem10k6569[m6569].posicionEdad / lengthFemenino10k6569)*100).toFixed(2) + "%"
}

let fem5k6569

fem5k6569 = fem5k.filter( edad5k => ( edad5k.edad >= 65 && edad5k.edad < 70));
lengthFemenino5k6569 = fem5k6569.length;

if(lengthFemenino5k6569 != 0){
    tiempoCerofem5k6569Arr = fem5k6569[0].tiempoNeto.split(":");
    tiempoCerofem5k6569EnSegundos = Number.parseInt(tiempoCerofem5k6569Arr[0]*3600) + Number.parseInt(tiempoCerofem5k6569Arr[1]*60) + Number.parseInt(tiempoCerofem5k6569Arr[2]);
}

for( m6569=0; m6569<lengthFemenino5k6569; m6569++ ){
    fem5k6569[m6569].totalCorredoresEdad = lengthFemenino5k6569;
    fem5k6569[m6569].posicionEdad = m6569+1;
    tiempofem5k6569Arr = fem5k6569[m6569].tiempoNeto.split(":")
    tiempofem5k6569EnSegundos = Number.parseInt(tiempofem5k6569Arr[0]*3600) + Number.parseInt(tiempofem5k6569Arr[1]*60) + Number.parseInt(tiempofem5k6569Arr[2]);
    fem5k6569[m6569].difTiempo = tiempofem5k6569EnSegundos;
    fem5k6569[m6569].difTiempo = fem5k6569[m6569].difTiempo - tiempoCerofem5k6569EnSegundos;
    difHsTiempo = Math.trunc(fem5k6569[m6569].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5k6569[m6569].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5k6569[m6569].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5k6569[m6569].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5k6569[m6569].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5k6569[m6569].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5k6569[m6569].porcentajePorEdad = (100 - (fem5k6569[m6569].posicionEdad / lengthFemenino5k6569)*100).toFixed(2) + "%"
}


// -------------- MUJERES +70 AÑOS -------------- 

let fem21km70

fem21km70 = fem21k.filter( edad21k => ( edad21k.edad >= 70) );
lengthFemenino21km70 = fem21km70.length;

if(lengthFemenino21km70 != 0){
    tiempoCerofem21km70Arr = fem21km70[0].tiempoNeto.split(":");
    tiempoCerofem21km70EnSegundos = Number.parseInt(tiempoCerofem21km70Arr[0]*3600) + Number.parseInt(tiempoCerofem21km70Arr[1]*60) + Number.parseInt(tiempoCerofem21km70Arr[2]);
}

for( mm70=0; mm70<lengthFemenino21km70; mm70++ ){
    fem21km70[mm70].totalCorredoresEdad = lengthFemenino21km70;
    fem21km70[mm70].posicionEdad = mm70+1;
    tiempofem21km70Arr = fem21km70[mm70].tiempoNeto.split(":")
    tiempofem21km70EnSegundos = Number.parseInt(tiempofem21km70Arr[0]*3600) + Number.parseInt(tiempofem21km70Arr[1]*60) + Number.parseInt(tiempofem21km70Arr[2]);
    fem21km70[mm70].difTiempo = tiempofem21km70EnSegundos;
    fem21km70[mm70].difTiempo = fem21km70[mm70].difTiempo - tiempoCerofem21km70EnSegundos;
    difHsTiempo = Math.trunc(fem21km70[mm70].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem21km70[mm70].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem21km70[mm70].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem21km70[mm70].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem21km70[mm70].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem21km70[mm70].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem21km70[mm70].porcentajePorEdad = (100 - (fem21km70[mm70].posicionEdad / lengthFemenino21km70)*100).toFixed(2) + "%"
}

let fem10km70

fem10km70 = fem10k.filter( edad10k => ( edad10k.edad >= 70) );
lengthFemenino10km70 = fem10km70.length;

if(lengthFemenino10km70 != 0){
    tiempoCerofem10km70Arr = fem10km70[0].tiempoNeto.split(":");
    tiempoCerofem10km70EnSegundos = Number.parseInt(tiempoCerofem10km70Arr[0]*3600) + Number.parseInt(tiempoCerofem10km70Arr[1]*60) + Number.parseInt(tiempoCerofem10km70Arr[2]);
}

for( mm70=0; mm70<lengthFemenino10km70; mm70++ ){
    fem10km70[mm70].totalCorredoresEdad = lengthFemenino10km70;
    fem10km70[mm70].posicionEdad = mm70+1;
    tiempofem10km70Arr = fem10km70[mm70].tiempoNeto.split(":")
    tiempofem10km70EnSegundos = Number.parseInt(tiempofem10km70Arr[0]*3600) + Number.parseInt(tiempofem10km70Arr[1]*60) + Number.parseInt(tiempofem10km70Arr[2]);
    fem10km70[mm70].difTiempo = tiempofem10km70EnSegundos;
    fem10km70[mm70].difTiempo = fem10km70[mm70].difTiempo - tiempoCerofem10km70EnSegundos;
    difHsTiempo = Math.trunc(fem10km70[mm70].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem10km70[mm70].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem10km70[mm70].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem10km70[mm70].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem10km70[mm70].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem10km70[mm70].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem10km70[mm70].porcentajePorEdad = (100 - (fem10km70[mm70].posicionEdad / lengthFemenino10km70)*100).toFixed(2) + "%"
}

let fem5km70

fem5km70 = fem5k.filter( edad5k => ( edad5k.edad >= 70) );
lengthFemenino5km70 = fem5km70.length;

if(lengthFemenino5km70 != 0){
    tiempoCerofem5km70Arr = fem5km70[0].tiempoNeto.split(":");
    tiempoCerofem5km70EnSegundos = Number.parseInt(tiempoCerofem5km70Arr[0]*3600) + Number.parseInt(tiempoCerofem5km70Arr[1]*60) + Number.parseInt(tiempoCerofem5km70Arr[2]);
}

for( mm70=0; mm70<lengthFemenino5km70; mm70++ ){
    fem5km70[mm70].totalCorredoresEdad = lengthFemenino5km70;
    fem5km70[mm70].posicionEdad = mm70+1;
    tiempofem5km70Arr = fem5km70[mm70].tiempoNeto.split(":")
    tiempofem5km70EnSegundos = Number.parseInt(tiempofem5km70Arr[0]*3600) + Number.parseInt(tiempofem5km70Arr[1]*60) + Number.parseInt(tiempofem5km70Arr[2]);
    fem5km70[mm70].difTiempo = tiempofem5km70EnSegundos;
    fem5km70[mm70].difTiempo = fem5km70[mm70].difTiempo - tiempoCerofem5km70EnSegundos;
    difHsTiempo = Math.trunc(fem5km70[mm70].difTiempo/3600);
    
    difMinTiempo = Math.trunc(fem5km70[mm70].difTiempo/60);
    if (difMinTiempo<10 && difMinTiempo>0){
        difMinTiempo = "0" + difMinTiempo;
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 1){
        difMinTiempo -= 60;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    if(difMinTiempo>59 && Math.trunc(difMinTiempo/60) == 2){
        difMinTiempo -= 120;
        if (difMinTiempo<10 && difMinTiempo>0){
            difMinTiempo = "0" + difMinTiempo;
        }
    }
    difSegTiempo = (fem5km70[mm70].difTiempo%60)
    if (difSegTiempo<10){
        difSegTiempo = "0" + difSegTiempo;
    }
    if (difHsTiempo == 0 && difMinTiempo ==0 && difSegTiempo ==0){
        fem5km70[mm70].difTiempo = "--:--"
    }
    if (difHsTiempo!== 0 && difMinTiempo!==0 && difSegTiempo !==0){
        fem5km70[mm70].difTiempo = "+ " + difHsTiempo + ":" + difMinTiempo + ":" + difSegTiempo;
    }
    if(difHsTiempo == 0){
        fem5km70[mm70].difTiempo = "+ " + difMinTiempo + ":" + difSegTiempo;
    }
    fem5km70[mm70].porcentajePorEdad = (100 - (fem5km70[mm70].posicionEdad / lengthFemenino5km70)*100).toFixed(2) + "%"
}

for(i=0; i<general10k.length; i++){
    if(general10k[i].porcentajePorEdad == "0.00%"){
        general10k[i].porcentajePorEdad = "100.00%" ;
    }
    if(general10k[i].porcentajePorGenero == "0.00%"){
        general10k[i].porcentajePorGenero = "100.00%" ;
    }
    
}

for(i=0; i<general5k.length; i++){
    if(general5k[i].porcentajePorEdad == "0.00%"){
        general5k[i].porcentajePorEdad = "100.00%" ;
    }
    if(general5k[i].porcentajePorGenero == "0.00%"){
        general5k[i].porcentajePorGenero = "100.00%" ;
    }
}


// -------------- COPA TEAM -------------- 

let copaTeam21k = general21k.filter(copa=> (copa.posicionGeneral < 4 || copa.posicionSexo < 4 || copa.posicionEdad < 4) && copa.runningTeam !== "Ninguno");

// Crear un objeto para almacenar los competidores agrupados por su equipo
const competidoresPorEquipo = {};

// Recorrer el array copaTeam21k
copaTeam21k.forEach((competidor) => {
  // Acceder al nombre del equipo del competidor
  const equipo = competidor.runningTeam;

  // Si el equipo no existe en el objeto, crear un array vacío para ese equipo
  if (!competidoresPorEquipo[equipo]) {
    competidoresPorEquipo[equipo] = [];
  }

  // Agregar el competidor al array correspondiente al equipo
  competidoresPorEquipo[equipo].push(competidor);
});

// Recorrer el objeto competidoresPorEquipo
for (const equipo in competidoresPorEquipo) {
  // Imprimir el nombre del equipo en consola
  console.log(`Equipo: ${equipo}`);

  // Recorrer el array de competidores del equipo y mostrar su información en consola
  competidoresPorEquipo[equipo].forEach((competidor, index) => {
    const nombre = competidor.nombre;
    const edad = competidor.edad;
    const posicionGeneral = competidor.posicionGeneral;
    const posicionEdad = competidor.posicionEdad;
    const posicionSexo = competidor.posicionSexo;

    console.log(`   Competidor ${index + 1}: ${nombre}, ${edad} años.`);
    console.log(`   Posición general: ${posicionGeneral}`);
    console.log(`   Posición por edad: ${posicionEdad}`);
    console.log(`   Posición por sexo: ${posicionSexo}`);
  });
}


let copaTeam10k = general10k.filter(copa=> (copa.posicionGeneral < 4 || copa.posicionSexo < 4 || copa.posicionEdad < 4) && copa.runningTeam !== "Ninguno");

let copaTeam5k = general5k.filter(copa=> (copa.posicionGeneral < 4 || copa.posicionSexo < 4) && copa.runningTeam !== "Ninguno");

copaTeam = copaTeam21k.concat(copaTeam10k).concat(copaTeam5k)

medalleros = []
copaTeam.forEach(team => {
    medallero = [team.posicionGeneral, team.posicionSexo, team.posicionEdad, team.runningTeam];
    medalleros = [...medalleros, medallero]
});

copaTeam.forEach(team =>{
    teamGanadores = [...teamGanadores, team.runningTeam];
});


const teamGanadoresArr = new Set(teamGanadores);

let nombreTeamsGanadores = [...teamGanadoresArr]


medalleroTeams=[]
nombreTeamsGanadores.forEach(teams =>{
    medalleroInicialTeams =[0,0,0,teams];
    medalleroTeams = [...medalleroTeams, medalleroInicialTeams];
})


j=0
do{
    for( i=0; i<copaTeam.length; i++){
        if( medalleros[i][3] == medalleroTeams[j][3] ){
            for(a=0;a<3;a++){
                if(medalleros[i][a] === 1){
                    medalleroTeams[j][0]+=1;
                }

                if(medalleros[i][a] === 2){
                    medalleroTeams[j][1]+=1;
                }

                if(medalleros[i][a] === 3){
                    medalleroTeams[j][2]+=1;
                }
            }
        }
    }
    j++

}while(j<medalleroTeams.length)



ordenTrofeosTeams = medalleroTeams.sort(function(a, b) {
    if (a[0] > b[0]) {
      return -1;
    } else if (a[0] < b[0]) {
      return 1;
    } else {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else {
        if (a[2] > b[2]) {
          return -1;
        } else if (a[2] < b[2]) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  });


medalleroFinalTeams=[]

for(datosTeam of ordenTrofeosTeams ){
    datosTeam ={
        oro: datosTeam[0],
        plata: datosTeam[1],
        bronce: datosTeam[2],
        team: datosTeam[3],
        posicion: 0,
        posicionPorMedallas: 0 ,
        totalMedallas: datosTeam[0] + datosTeam[1] + datosTeam[2]
    }
    medalleroFinalTeams = [...medalleroFinalTeams, datosTeam] 
    
}

for(i=0;i<medalleroFinalTeams.length;i++){
    medalleroFinalTeams[i].posicion = i+1;
}

totalMedallasTeam = []
for(medalleroTotal of medalleroFinalTeams){
    medalleroTotal=[medalleroTotal.totalMedallas,medalleroTotal.team ]
    totalMedallasTeam=[...totalMedallasTeam, medalleroTotal]
}
console.log(medalleroFinalTeams)
puestoMedallas=[]
totalMedallasTeam.forEach(tm =>{
    puestoMedallas = [...puestoMedallas, tm[0]];
});

const puestoMedallasArr = new Set(puestoMedallas);

let puestoMedalla = [...puestoMedallasArr]

puestoMedalla.sort(function (a,b){return a - b}).reverse()

c=0
do{
    for(i=0;i<medalleroFinalTeams.length;i++)
        if(medalleroFinalTeams[i].totalMedallas == puestoMedalla[c]){
            medalleroFinalTeams[i].posicionPorMedallas=c+1
        }
        c++
}while(c<puestoMedalla.length)


// -------- TABLA FILTRADA ------------





const menuClasificacion = document.querySelector('.menu');
const tituloClasificacion = document.querySelector('#titulo-filtrado-clasificacion');
const tituloCopaTeam= document.querySelector('#titulo-filtrado-team');
const tablaFiltrada = document.querySelector('#tabla-filtrada');
const medalleroTeam = document.querySelector('#medallero-team');



cargarEventListeners()

function cargarEventListeners(){
    menuClasificacion.addEventListener('click', verClasificacion);
}


//funciones

function verClasificacion(e){
    e.preventDefault();
    if(e.target.classList.contains("5k-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="5K Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem5k.forEach(tablafem5k=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem5k.posicionSexo}</td>
            <td>${tablafem5k.dorsal}</td>
            <td>${tablafem5k.nombre}</td>
            <td>${tablafem5k.apellido}</td>
            <td>${tablafem5k.tiempoBruto}</td>
            <td>${tablafem5k.tiempoNeto}</td>
            <td>${tablafem5k.difTiempoGS}</td>
            <td>${tablafem5k.edad}</td>
            <td>${tablafem5k.genero}</td>
            <td>${tablafem5k.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
            fem10k.forEach(tablafem10k=>{
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${tablafem10k.posicionSexo}</td>
            <td>${tablafem10k.dorsal}</td>
            <td>${tablafem10k.nombre}</td>
            <td>${tablafem10k.apellido}</td>
            <td>${tablafem10k.tiempoBruto}</td>
            <td>${tablafem10k.tiempoNeto}</td>
            <td>${tablafem10k.difTiempoGS}</td>
            <td>${tablafem10k.edad}</td>
            <td>${tablafem10k.genero}</td>
            <td>${tablafem10k.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
            fem21k.forEach(tablafem21k=>{
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${tablafem21k.posicionSexo}</td>
            <td>${tablafem21k.dorsal}</td>
            <td>${tablafem21k.nombre}</td>
            <td>${tablafem21k.apellido}</td>
            <td>${tablafem21k.tiempoBruto}</td>
            <td>${tablafem21k.tiempoNeto}</td>
            <td>${tablafem21k.difTiempoGS}</td>
            <td>${tablafem21k.edad}</td>
            <td>${tablafem21k.genero}</td>
            <td>${tablafem21k.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-h19-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K hasta 19 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10kh19.forEach(tablafem10kh19=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10kh19.posicionEdad}</td>
            <td>${tablafem10kh19.dorsal}</td>
            <td>${tablafem10kh19.nombre}</td>
            <td>${tablafem10kh19.apellido}</td>
            <td>${tablafem10kh19.tiempoBruto}</td>
            <td>${tablafem10kh19.tiempoNeto}</td>
            <td>${tablafem10kh19.difTiempo}</td>
            <td>${tablafem10kh19.edad}</td>
            <td>${tablafem10kh19.genero}</td>
            <td>${tablafem10kh19.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();;
        })
    }
    if(e.target.classList.contains("21k-h19-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K hasta 19 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21kh19.forEach(tablafem21kh19=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21kh19.posicionEdad}</td>
            <td>${tablafem21kh19.dorsal}</td>
            <td>${tablafem21kh19.nombre}</td>
            <td>${tablafem21kh19.apellido}</td>
            <td>${tablafem21kh19.tiempoBruto}</td>
            <td>${tablafem21kh19.tiempoNeto}</td>
            <td>${tablafem21kh19.difTiempo}</td>
            <td>${tablafem21kh19.edad}</td>
            <td>${tablafem21kh19.genero}</td>
            <td>${tablafem21kh19.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();;
        })
    }
    if(e.target.classList.contains("10k-2024-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 20 a 24 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k2024.forEach(tablafem10k2024=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k2024.posicionEdad}</td>
            <td>${tablafem10k2024.dorsal}</td>
            <td>${tablafem10k2024.nombre}</td>
            <td>${tablafem10k2024.apellido}</td>
            <td>${tablafem10k2024.tiempoBruto}</td>
            <td>${tablafem10k2024.tiempoNeto}</td>
            <td>${tablafem10k2024.difTiempo}</td>
            <td>${tablafem10k2024.edad}</td>
            <td>${tablafem10k2024.genero}</td>
            <td>${tablafem10k2024.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-2024-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 20 a 24 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k2024.forEach(tablafem21k2024=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k2024.posicionEdad}</td>
            <td>${tablafem21k2024.dorsal}</td>
            <td>${tablafem21k2024.nombre}</td>
            <td>${tablafem21k2024.apellido}</td>
            <td>${tablafem21k2024.tiempoBruto}</td>
            <td>${tablafem21k2024.tiempoNeto}</td>
            <td>${tablafem21k2024.difTiempo}</td>
            <td>${tablafem21k2024.edad}</td>
            <td>${tablafem21k2024.genero}</td>
            <td>${tablafem21k2024.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-2529-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 25 a 29 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k2529.forEach(tablafem10k2529=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k2529.posicionEdad}</td>
            <td>${tablafem10k2529.dorsal}</td>
            <td>${tablafem10k2529.nombre}</td>
            <td>${tablafem10k2529.apellido}</td>
            <td>${tablafem10k2529.tiempoBruto}</td>
            <td>${tabla.tiempoNeto}</td>
            <td>${tablafem10k2529.difTiempo}</td>
            <td>${tablafem10k2529.edad}</td>
            <td>${tablafem10k2529.genero}</td>
            <td>${tablafem10k2529.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-2529-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 25 a 29 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k2529.forEach(tablafem21k2529=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k2529.posicionEdad}</td>
            <td>${tablafem21k2529.dorsal}</td>
            <td>${tablafem21k2529.nombre}</td>
            <td>${tablafem21k2529.apellido}</td>
            <td>${tablafem21k2529.tiempoBruto}</td>
            <td>${tablafem21k2529.tiempoNeto}</td>
            <td>${tablafem21k2529.difTiempo}</td>
            <td>${tablafem21k2529.edad}</td>
            <td>${tablafem21k2529.genero}</td>
            <td>${tablafem21k2529.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-3034-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 30 a 34 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k3034.forEach(tablafem10k3034=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k3034.posicionEdad}</td>
            <td>${tablafem10k3034.dorsal}</td>
            <td>${tablafem10k3034.nombre}</td>
            <td>${tablafem10k3034.apellido}</td>
            <td>${tablafem10k3034.tiempoBruto}</td>
            <td>${tablafem10k3034.tiempoNeto}</td>
            <td>${tablafem10k3034.difTiempo}</td>
            <td>${tablafem10k3034.edad}</td>
            <td>${tablafem10k3034.genero}</td>
            <td>${tablafem10k3034.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-3034-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 30 a 34 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k3034.forEach(tablafem21k3034=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k3034.posicionEdad}</td>
            <td>${tablafem21k3034.dorsal}</td>
            <td>${tablafem21k3034.nombre}</td>
            <td>${tablafem21k3034.apellido}</td>
            <td>${tablafem21k3034.tiempoBruto}</td>
            <td>${tablafem21k3034.tiempoNeto}</td>
            <td>${tablafem21k3034.difTiempo}</td>
            <td>${tablafem21k3034.edad}</td>
            <td>${tablafem21k3034.genero}</td>
            <td>${tablafem21k3034.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-3539-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 35 a 39 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k3539.forEach(tablafem10k3539=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k3539.posicionEdad}</td>
            <td>${tablafem10k3539.dorsal}</td>
            <td>${tablafem10k3539.nombre}</td>
            <td>${tablafem10k3539.apellido}</td>
            <td>${tablafem10k3539.tiempoBruto}</td>
            <td>${tablafem10k3539.tiempoNeto}</td>
            <td>${tablafem10k3539.difTiempo}</td>
            <td>${tablafem10k3539.edad}</td>
            <td>${tablafem10k3539.genero}</td>
            <td>${tablafem10k3539.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-3539-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 35 a 39 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k3539.forEach(tablafem21k3539=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k3539.posicionEdad}</td>
            <td>${tablafem21k3539.dorsal}</td>
            <td>${tablafem21k3539.nombre}</td>
            <td>${tablafem21k3539.apellido}</td>
            <td>${tablafem21k3539.tiempoBruto}</td>
            <td>${tablafem21k3539.tiempoNeto}</td>
            <td>${tablafem21k3539.difTiempo}</td>
            <td>${tablafem21k3539.edad}</td>
            <td>${tablafem21k3539.genero}</td>
            <td>${tablafem21k3539.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-4044-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 40 a 44 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k4044.forEach(tablafem10k4044=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k4044.posicionEdad}</td>
            <td>${tablafem10k4044.dorsal}</td>
            <td>${tablafem10k4044.nombre}</td>
            <td>${tablafem10k4044.apellido}</td>
            <td>${tablafem10k4044.tiempoBruto}</td>
            <td>${tablafem10k4044.tiempoNeto}</td>
            <td>${tablafem10k4044.difTiempo}</td>
            <td>${tablafem10k4044.edad}</td>
            <td>${tablafem10k4044.genero}</td>
            <td>${tablafem10k4044.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-4044-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 40 a 44 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k4044.forEach(tablafem21k4044=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k4044.posicionEdad}</td>
            <td>${tablafem21k4044.dorsal}</td>
            <td>${tablafem21k4044.nombre}</td>
            <td>${tablafem21k4044.apellido}</td>
            <td>${tablafem21k4044.tiempoBruto}</td>
            <td>${tablafem21k4044.tiempoNeto}</td>
            <td>${tablafem21k4044.difTiempo}</td>
            <td>${tablafem21k4044.edad}</td>
            <td>${tablafem21k4044.genero}</td>
            <td>${tablafem21k4044.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-4549-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 45 a 49 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k4549.forEach(tablafem10k4549=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k4549.posicionEdad}</td>
            <td>${tablafem10k4549.dorsal}</td>
            <td>${tablafem10k4549.nombre}</td>
            <td>${tablafem10k4549.apellido}</td>
            <td>${tablafem10k4549.tiempoBruto}</td>
            <td>${tablafem10k4549.tiempoNeto}</td>
            <td>${tablafem10k4549.difTiempo}</td>
            <td>${tablafem10k4549.edad}</td>
            <td>${tablafem10k4549.genero}</td>
            <td>${tablafem10k4549.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-4549-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="45 a 49 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k4549.forEach(tablafem10k4549=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k4549.posicionEdad}</td>
            <td>${tablafem10k4549.dorsal}</td>
            <td>${tablafem10k4549.nombre}</td>
            <td>${tablafem10k4549.apellido}</td>
            <td>${tablafem10k4549.tiempoBruto}</td>
            <td>${tablafem10k4549.tiempoNeto}</td>
            <td>${tablafem10k4549.difTiempo}</td>
            <td>${tablafem10k4549.edad}</td>
            <td>${tablafem10k4549.genero}</td>
            <td>${tablafem10k4549.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-5054-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 50 a 54 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k5054.forEach(tablafem21k5054=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k5054.posicionEdad}</td>
            <td>${tablafem21k5054.dorsal}</td>
            <td>${tablafem21k5054.nombre}</td>
            <td>${tablafem21k5054.apellido}</td>
            <td>${tablafem21k5054.tiempoBruto}</td>
            <td>${tablafem21k5054.tiempoNeto}</td>
            <td>${tablafem21k5054.difTiempo}</td>
            <td>${tablafem21k5054.edad}</td>
            <td>${tablafem21k5054.genero}</td>
            <td>${tablafem21k5054.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-5559-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 55 a 59 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k5559.forEach(tablafem10k5559=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k5559.posicionEdad}</td>
            <td>${tablafem10k5559.dorsal}</td>
            <td>${tablafem10k5559.nombre}</td>
            <td>${tablafem10k5559.apellido}</td>
            <td>${tablafem10k5559.tiempoBruto}</td>
            <td>${tablafem10k5559.tiempoNeto}</td>
            <td>${tablafem10k5559.difTiempo}</td>
            <td>${tablafem10k5559.edad}</td>
            <td>${tablafem10k5559.genero}</td>
            <td>${tablafem10k5559.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-5559-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 55 a 59 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k5559.forEach(tablafem21k5559=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k5559.posicionEdad}</td>
            <td>${tablafem21k5559.dorsal}</td>
            <td>${tablafem21k5559.nombre}</td>
            <td>${tablafem21k5559.apellido}</td>
            <td>${tablafem21k5559.tiempoBruto}</td>
            <td>${tablafem21k5559.tiempoNeto}</td>
            <td>${tablafem21k5559.difTiempo}</td>
            <td>${tablafem21k5559.edad}</td>
            <td>${tablafem21k5559.genero}</td>
            <td>${tablafem21k5559.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-6064-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 60 a 64 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k6064.forEach(tablafem10k6064=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k6064.posicionEdad}</td>
            <td>${tablafem10k6064.dorsal}</td>
            <td>${tablafem10k6064.nombre}</td>
            <td>${tablafem10k6064.apellido}</td>
            <td>${tablafem10k6064.tiempoBruto}</td>
            <td>${tablafem10k6064.tiempoNeto}</td>
            <td>${tablafem10k6064.difTiempo}</td>
            <td>${tablafem10k6064.edad}</td>
            <td>${tablafem10k6064.genero}</td>
            <td>${tablafem10k6064.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-6064-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 60 a 64 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k6064.forEach(tablafem21k6064=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k6064.posicionEdad}</td>
            <td>${tablafem21k6064.dorsal}</td>
            <td>${tablafem21k6064.nombre}</td>
            <td>${tablafem21k6064.apellido}</td>
            <td>${tablafem21k6064.tiempoBruto}</td>
            <td>${tablafem21k6064.tiempoNeto}</td>
            <td>${tablafem21k6064.difTiempo}</td>
            <td>${tablafem21k6064.edad}</td>
            <td>${tablafem21k6064.genero}</td>
            <td>${tablafem21k6064.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-6569-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 65 a 69 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10k6569.forEach(tablafem10k6569=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10k6569.posicionEdad}</td>
            <td>${tablafem10k6569.dorsal}</td>
            <td>${tablafem10k6569.nombre}</td>
            <td>${tablafem10k6569.apellido}</td>
            <td>${tablafem10k6569.tiempoBruto}</td>
            <td>${tablafem10k6569.tiempoNeto}</td>
            <td>${tablafem10k6569.difTiempo}</td>
            <td>${tablafem10k6569.edad}</td>
            <td>${tablafem10k6569.genero}</td>
            <td>${tablafem10k6569.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-6569-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 65 a 69 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21k6569.forEach(tablafem21k6569=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21k6569.posicionEdad}</td>
            <td>${tablafem21k6569.dorsal}</td>
            <td>${tablafem21k6569.nombre}</td>
            <td>${tablafem21k6569.apellido}</td>
            <td>${tablafem21k6569.tiempoBruto}</td>
            <td>${tablafem21k6569.tiempoNeto}</td>
            <td>${tablafem21k6569.difTiempo}</td>
            <td>${tablafem21k6569.edad}</td>
            <td>${tablafem21k6569.genero}</td>
            <td>${tablafem21k6569.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-m70-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K más 70 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem10km70.forEach(tablafem10km70=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem10km70.posicionEdad}</td>
            <td>${tablafem10km70.dorsal}</td>
            <td>${tablafem10km70.nombre}</td>
            <td>${tablafem10km70.apellido}</td>
            <td>${tablafem10km70.tiempoBruto}</td>
            <td>${tablafem10km70.tiempoNeto}</td>
            <td>${tablafem10km70.difTiempo}</td>
            <td>${tablafem10km70.edad}</td>
            <td>${tablafem10km70.genero}</td>
            <td>${tablafem10km70.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-m70-damas")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K más 70 años Damas";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        fem21km70.forEach(tablafem21km70=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablafem21km70.posicionEdad}</td>
            <td>${tablafem21km70.dorsal}</td>
            <td>${tablafem21km70.nombre}</td>
            <td>${tablafem21km70.apellido}</td>
            <td>${tablafem21km70.tiempoBruto}</td>
            <td>${tablafem21km70.tiempoNeto}</td>
            <td>${tablafem21km70.difTiempo}</td>
            <td>${tablafem21km70.edad}</td>
            <td>${tablafem21km70.genero}</td>
            <td>${tablafem21km70.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("5k-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="5K Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc5k.forEach(tablamasc5k=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc5k.posicionSexo}</td>
            <td>${tablamasc5k.dorsal}</td>
            <td>${tablamasc5k.nombre}</td>
            <td>${tablamasc5k.apellido}</td>
            <td>${tablamasc5k.tiempoBruto}</td>
            <td>${tablamasc5k.tiempoNeto}</td>
            <td>${tablamasc5k.difTiempoGS}</td>
            <td>${tablamasc5k.edad}</td>
            <td>${tablamasc5k.genero}</td>
            <td>${tablamasc5k.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k.forEach(tablamasc10k=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k.posicionSexo}</td>
            <td>${tablamasc10k.dorsal}</td>
            <td>${tablamasc10k.nombre}</td>
            <td>${tablamasc10k.apellido}</td>
            <td>${tablamasc10k.tiempoBruto}</td>
            <td>${tablamasc10k.tiempoNeto}</td>
            <td>${tablamasc10k.difTiempoGS}</td>
            <td>${tablamasc10k.edad}</td>
            <td>${tablamasc10k.genero}</td>
            <td>${tablamasc10k.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k.forEach(tablamasc21k=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k.posicionSexo}</td>
            <td>${tablamasc21k.dorsal}</td>
            <td>${tablamasc21k.nombre}</td>
            <td>${tablamasc21k.apellido}</td>
            <td>${tablamasc21k.tiempoBruto}</td>
            <td>${tablamasc21k.tiempoNeto}</td>
            <td>${tablamasc21k.difTiempoGS}</td>
            <td>${tablamasc21k.edad}</td>
            <td>${tablamasc21k.genero}</td>
            <td>${tablamasc21k.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-h19-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K hasta 19 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10kh19.forEach(tablamasc10kh19=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10kh19.posicionEdad}</td>
            <td>${tablamasc10kh19.dorsal}</td>
            <td>${tablamasc10kh19.nombre}</td>
            <td>${tablamasc10kh19.apellido}</td>
            <td>${tablamasc10kh19.tiempoBruto}</td>
            <td>${tablamasc10kh19.tiempoNeto}</td>
            <td>${tablamasc10kh19.difTiempo}</td>
            <td>${tablamasc10kh19.edad}</td>
            <td>${tablamasc10kh19.genero}</td>
            <td>${tablamasc10kh19.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-h19-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K hasta 19 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21kh19.forEach(tablamasc21kh19=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21kh19.posicionEdad}</td>
            <td>${tablamasc21kh19.dorsal}</td>
            <td>${tablamasc21kh19.nombre}</td>
            <td>${tablamasc21kh19.apellido}</td>
            <td>${tablamasc21kh19.tiempoBruto}</td>
            <td>${tablamasc21kh19.tiempoNeto}</td>
            <td>${tablamasc21kh19.difTiempo}</td>
            <td>${tablamasc21kh19.edad}</td>
            <td>${tablamasc21kh19.genero}</td>
            <td>${tablamasc21kh19.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-2024-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 20 a 24 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k2024.forEach(tablamasc10k2024=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k2024.posicionEdad}</td>
            <td>${tablamasc10k2024.dorsal}</td>
            <td>${tablamasc10k2024.nombre}</td>
            <td>${tablamasc10k2024.apellido}</td>
            <td>${tablamasc10k2024.tiempoBruto}</td>
            <td>${tablamasc10k2024.tiempoNeto}</td>
            <td>${tablamasc10k2024.difTiempo}</td>
            <td>${tablamasc10k2024.edad}</td>
            <td>${tablamasc10k2024.genero}</td>
            <td>${tablamasc10k2024.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-2024-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 20 a 24 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k2024.forEach(tablamasc21k2024=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k2024.posicionEdad}</td>
            <td>${tablamasc21k2024.dorsal}</td>
            <td>${tablamasc21k2024.nombre}</td>
            <td>${tablamasc21k2024.apellido}</td>
            <td>${tablamasc21k2024.tiempoBruto}</td>
            <td>${tablamasc21k2024.tiempoNeto}</td>
            <td>${tablamasc21k2024.difTiempo}</td>
            <td>${tablamasc21k2024.edad}</td>
            <td>${tablamasc21k2024.genero}</td>
            <td>${tablamasc21k2024.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-2529-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 25 a 29 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k2529.forEach(tablamasc10k2529=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k2529.posicionEdad}</td>
            <td>${tablamasc10k2529.dorsal}</td>
            <td>${tablamasc10k2529.nombre}</td>
            <td>${tablamasc10k2529.apellido}</td>
            <td>${tablamasc10k2529.tiempoBruto}</td>
            <td>${tablamasc10k2529.tiempoNeto}</td>
            <td>${tablamasc10k2529.difTiempo}</td>
            <td>${tablamasc10k2529.edad}</td>
            <td>${tablamasc10k2529.genero}</td>
            <td>${tablamasc10k2529.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-2529-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 25 a 29 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k2529.forEach(tablamasc21k2529=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k2529.posicionEdad}</td>
            <td>${tablamasc21k2529.dorsal}</td>
            <td>${tablamasc21k2529.nombre}</td>
            <td>${tablamasc21k2529.apellido}</td>
            <td>${tablamasc21k2529.tiempoBruto}</td>
            <td>${tablamasc21k2529.tiempoNeto}</td>
            <td>${tablamasc21k2529.difTiempo}</td>
            <td>${tablamasc21k2529.edad}</td>
            <td>${tablamasc21k2529.genero}</td>
            <td>${tablamasc21k2529.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-3034-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 30 a 34 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k3034.forEach(tablamasc10k3034=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k3034.posicionEdad}</td>
            <td>${tablamasc10k3034.dorsal}</td>
            <td>${tablamasc10k3034.nombre}</td>
            <td>${tablamasc10k3034.apellido}</td>
            <td>${tablamasc10k3034.tiempoBruto}</td>
            <td>${tablamasc10k3034.tiempoNeto}</td>
            <td>${tablamasc10k3034.difTiempo}</td>
            <td>${tablamasc10k3034.edad}</td>
            <td>${tablamasc10k3034.genero}</td>
            <td>${tablamasc10k3034.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-3034-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 30 a 34 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k3034.forEach(tablamasc21k3034=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k3034.posicionEdad}</td>
            <td>${tablamasc21k3034.dorsal}</td>
            <td>${tablamasc21k3034.nombre}</td>
            <td>${tablamasc21k3034.apellido}</td>
            <td>${tablamasc21k3034.tiempoBruto}</td>
            <td>${tablamasc21k3034.tiempoNeto}</td>
            <td>${tablamasc21k3034.difTiempo}</td>
            <td>${tablamasc21k3034.edad}</td>
            <td>${tablamasc21k3034.genero}</td>
            <td>${tablamasc21k3034.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-3539-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 35 a 39 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k3539.forEach(tablamasc10k3539=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k3539.posicionEdad}</td>
            <td>${tablamasc10k3539.dorsal}</td>
            <td>${tablamasc10k3539.nombre}</td>
            <td>${tablamasc10k3539.apellido}</td>
            <td>${tablamasc10k3539.tiempoBruto}</td>
            <td>${tablamasc10k3539.tiempoNeto}</td>
            <td>${tablamasc10k3539.difTiempo}</td>
            <td>${tablamasc10k3539.edad}</td>
            <td>${tablamasc10k3539.genero}</td>
            <td>${tablamasc10k3539.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-3539-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 35 a 39 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k3539.forEach(tablamasc21k3539=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k3539.posicionEdad}</td>
            <td>${tablamasc21k3539.dorsal}</td>
            <td>${tablamasc21k3539.nombre}</td>
            <td>${tablamasc21k3539.apellido}</td>
            <td>${tablamasc21k3539.tiempoBruto}</td>
            <td>${tablamasc21k3539.tiempoNeto}</td>
            <td>${tablamasc21k3539.difTiempo}</td>
            <td>${tablamasc21k3539.edad}</td>
            <td>${tablamasc21k3539.genero}</td>
            <td>${tablamasc21k3539.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-4044-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 40 a 44 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k4044.forEach(tablamasc10k4044=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k4044.posicionEdad}</td>
            <td>${tablamasc10k4044.dorsal}</td>
            <td>${tablamasc10k4044.nombre}</td>
            <td>${tablamasc10k4044.apellido}</td>
            <td>${tablamasc10k4044.tiempoBruto}</td>
            <td>${tablamasc10k4044.tiempoNeto}</td>
            <td>${tablamasc10k4044.difTiempo}</td>
            <td>${tablamasc10k4044.edad}</td>
            <td>${tablamasc10k4044.genero}</td>
            <td>${tablamasc10k4044.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-4044-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 40 a 44 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k4044.forEach(tablamasc21k4044=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k4044.posicionEdad}</td>
            <td>${tablamasc21k4044.dorsal}</td>
            <td>${tablamasc21k4044.nombre}</td>
            <td>${tablamasc21k4044.apellido}</td>
            <td>${tablamasc21k4044.tiempoBruto}</td>
            <td>${tablamasc21k4044.tiempoNeto}</td>
            <td>${tablamasc21k4044.difTiempo}</td>
            <td>${tablamasc21k4044.edad}</td>
            <td>${tablamasc21k4044.genero}</td>
            <td>${tablamasc21k4044.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-4549-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 45 a 49 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k4549.forEach(tablamasc10k4549=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k4549.posicionEdad}</td>
            <td>${tablamasc10k4549.dorsal}</td>
            <td>${tablamasc10k4549.nombre}</td>
            <td>${tablamasc10k4549.apellido}</td>
            <td>${tablamasc10k4549.tiempoBruto}</td>
            <td>${tablamasc10k4549.tiempoNeto}</td>
            <td>${tablamasc10k4549.difTiempo}</td>
            <td>${tablamasc10k4549.edad}</td>
            <td>${tablamasc10k4549.genero}</td>
            <td>${tablamasc10k4549.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-4549-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 45 a 49 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k4549.forEach(tablamasc21k4549=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k4549.posicionEdad}</td>
            <td>${tablamasc21k4549.dorsal}</td>
            <td>${tablamasc21k4549.nombre}</td>
            <td>${tablamasc21k4549.apellido}</td>
            <td>${tablamasc21k4549.tiempoBruto}</td>
            <td>${tablamasc21k4549.tiempoNeto}</td>
            <td>${tablamasc21k4549.difTiempo}</td>
            <td>${tablamasc21k4549.edad}</td>
            <td>${tablamasc21k4549.genero}</td>
            <td>${tablamasc21k4549.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-5054-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 50 a 54 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k5054.forEach(tablamasc10k5054=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k5054.posicionEdad}</td>
            <td>${tablamasc10k5054.dorsal}</td>
            <td>${tablamasc10k5054.nombre}</td>
            <td>${tablamasc10k5054.apellido}</td>
            <td>${tablamasc10k5054.tiempoBruto}</td>
            <td>${tablamasc10k5054.tiempoNeto}</td>
            <td>${tablamasc10k5054.difTiempo}</td>
            <td>${tablamasc10k5054.edad}</td>
            <td>${tablamasc10k5054.genero}</td>
            <td>${tablamasc10k5054.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-5054-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 50 a 54 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k5054.forEach(tablamasc21k5054=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k5054.posicionEdad}</td>
            <td>${tablamasc21k5054.dorsal}</td>
            <td>${tablamasc21k5054.nombre}</td>
            <td>${tablamasc21k5054.apellido}</td>
            <td>${tablamasc21k5054.tiempoBruto}</td>
            <td>${tablamasc21k5054.tiempoNeto}</td>
            <td>${tablamasc21k5054.difTiempo}</td>
            <td>${tablamasc21k5054.edad}</td>
            <td>${tablamasc21k5054.genero}</td>
            <td>${tablamasc21k5054.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-5559-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 55 a 59 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k5559.forEach(tablamasc10k5559=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k5559.posicionEdad}</td>
            <td>${tablamasc10k5559.dorsal}</td>
            <td>${tablamasc10k5559.nombre}</td>
            <td>${tablamasc10k5559.apellido}</td>
            <td>${tablamasc10k5559.tiempoBruto}</td>
            <td>${tablamasc10k5559.tiempoNeto}</td>
            <td>${tablamasc10k5559.difTiempo}</td>
            <td>${tablamasc10k5559.edad}</td>
            <td>${tablamasc10k5559.genero}</td>
            <td>${tablamasc10k5559.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-5559-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 55 a 59 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k5559.forEach(tablamasc21k5559=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k5559.posicionEdad}</td>
            <td>${tablamasc21k5559.dorsal}</td>
            <td>${tablamasc21k5559.nombre}</td>
            <td>${tablamasc21k5559.apellido}</td>
            <td>${tablamasc21k5559.tiempoBruto}</td>
            <td>${tablamasc21k5559.tiempoNeto}</td>
            <td>${tablamasc21k5559.difTiempo}</td>
            <td>${tablamasc21k5559.edad}</td>
            <td>${tablamasc21k5559.genero}</td>
            <td>${tablamasc21k5559.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-6064-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 60 a 64 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k6064.forEach(tablamasc10k6064=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k6064.posicionEdad}</td>
            <td>${tablamasc10k6064.dorsal}</td>
            <td>${tablamasc10k6064.nombre}</td>
            <td>${tablamasc10k6064.apellido}</td>
            <td>${tablamasc10k6064.tiempoBruto}</td>
            <td>${tablamasc10k6064.tiempoNeto}</td>
            <td>${tablamasc10k6064.difTiempo}</td>
            <td>${tablamasc10k6064.edad}</td>
            <td>${tablamasc10k6064.genero}</td>
            <td>${tablamasc10k6064.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-6064-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 60 a 64 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k6064.forEach(tablamasc21k6064=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k6064.posicionEdad}</td>
            <td>${tablamasc21k6064.dorsal}</td>
            <td>${tablamasc21k6064.nombre}</td>
            <td>${tablamasc21k6064.apellido}</td>
            <td>${tablamasc21k6064.tiempoBruto}</td>
            <td>${tablamasc21k6064.tiempoNeto}</td>
            <td>${tablamasc21k6064.difTiempo}</td>
            <td>${tablamasc21k6064.edad}</td>
            <td>${tablamasc21k6064.genero}</td>
            <td>${tablamasc21k6064.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-6569-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K 65 a 69 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10k6569.forEach(tablamasc10k6569=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc10k6569.posicionEdad}</td>
            <td>${tablamasc10k6569.dorsal}</td>
            <td>${tablamasc10k6569.nombre}</td>
            <td>${tablamasc10k6569.apellido}</td>
            <td>${tablamasc10k6569.tiempoBruto}</td>
            <td>${tablamasc10k6569.tiempoNeto}</td>
            <td>${tablamasc10k6569.difTiempo}</td>
            <td>${tablamasc10k6569.edad}</td>
            <td>${tablamasc10k6569.genero}</td>
            <td>${tablamasc10k6569.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-6569-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K 65 a 69 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21k6569.forEach(tablamasc21k6569=>{
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${tablamasc21k6569.posicionEdad}</td>
            <td>${tablamasc21k6569.dorsal}</td>
            <td>${tablamasc21k6569.nombre}</td>
            <td>${tablamasc21k6569.apellido}</td>
            <td>${tablamasc21k6569.tiempoBruto}</td>
            <td>${tablamasc21k6569.tiempoNeto}</td>
            <td>${tablamasc21k6569.difTiempo}</td>
            <td>${tablamasc21k6569.edad}</td>
            <td>${tablamasc21k6569.genero}</td>
            <td>${tablamasc21k6569.runningTeam}</td>
        `;
        tablaFiltrada.appendChild(row);
        cambioWebPc();
        })
    }
    if(e.target.classList.contains("10k-m70-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="10K más 70 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc10km70.forEach(tablamasc10km70=>{
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tablamasc10km70.posicionEdad}</td>
                <td>${tablamasc10km70.dorsal}</td>
                <td>${tablamasc10km70.nombre}</td>
                <td>${tablamasc10km70.apellido}</td>
                <td>${tablamasc10km70.tiempoBruto}</td>
                <td>${tablamasc10km70.tiempoNeto}</td>
                <td>${tablamasc10km70.difTiempo}</td>
                <td>${tablamasc10km70.edad}</td>
                <td>${tablamasc10km70.genero}</td>
                <td>${tablamasc10km70.runningTeam}</td>
            `;
            tablaFiltrada.appendChild(row);
            cambioWebPc();
        })
    }
    if(e.target.classList.contains("21k-m70-caballeros")){
        limpiarHTML();
        tituloClasificacion.innerHTML="21K más 70 años Caballeros";
        tituloClasificacion.scrollIntoView({
            behavior:'smooth'
        })
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        masc21km70.forEach(tablamasc21km70=>{
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tablamasc21km70.posicionEdad}</td>
                <td>${tablamasc21km70.dorsal}</td>
                <td>${tablamasc21km70.nombre}</td>
                <td>${tablamasc21km70.apellido}</td>
                <td>${tablamasc21km70.tiempoBruto}</td>
                <td>${tablamasc21km70.tiempoNeto}</td>
                <td>${tablamasc21km70.difTiempo}</td>
                <td>${tablamasc21km70.edad}</td>
                <td>${tablamasc21km70.genero}</td>
                <td>${tablamasc21km70.runningTeam}</td>
            `;
            tablaFiltrada.appendChild(row);
            cambioWebPc();
        })
    }

    if(e.target.classList.contains("tabla-trofeos-team")){
        limpiarHTML();
        tituloCopaTeam.innerHTML="Tabla Trofeos Teams";
        tituloCopaTeam.scrollIntoView({
            behavior:'smooth'
        });
        if (screen.width < 720) {
            document.querySelector('body').style.minWidth = '1024px';
            cambioWebPc();
        } 
        medalleroFinalTeams.forEach(tablaTeam=>{
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tablaTeam.posicion}</td>
                <td>${tablaTeam.team}</td>
                <td>${tablaTeam.oro}</td>
                <td>${tablaTeam.plata}</td>
                <td>${tablaTeam.bronce}</td>
                <td>${tablaTeam.totalMedallas}</td>
                <td>${tablaTeam.posicionPorMedallas}</td>
            `;
            medalleroTeam.appendChild(row)
        })
    }
    
}

// Seleccionar la tabla
const tabla = document.querySelector("#tabla");

// Agregar evento clic a la tabla
tabla.addEventListener("click", (event) => {
  // Verificar si se hizo clic en una fila de la tabla
  if (event.target.tagName.toLowerCase() === "td") {
    // Obtener el running team de la fila clickeada
    const runningTeam = event.target.parentNode.querySelector(".running-team").textContent.trim();

    // Filtrar los competidores por el running team
    const competidoresFiltrados = competidores.filter((competidor) => competidor.runningTeam === runningTeam);

    // Crear el HTML con la información de los competidores filtrados
    let html = "";
    competidoresFiltrados.forEach((competidor) => {
      html += `<p>${competidor.nombre} ${competidor.apellido}, ${competidor.edad} años, posición general ${competidor.posicionGeneral}, posición por edad ${competidor.posicionEdad}, posición por sexo ${competidor.posicionSexo}</p>`;
    });

    // Actualizar el contenido del div modal-body con el HTML generado
    document.querySelector("#modal-body").innerHTML = html;

    // Abrir el diálogo
    $("#myModal").modal("show");
  }
});


function limpiarHTML(){
    while(medalleroTeam.firstChild){
        medalleroTeam.removeChild(medalleroTeam.firstChild)
    }
    while(tablaFiltrada.firstChild){
        tablaFiltrada.removeChild(tablaFiltrada.firstChild)
    }
    
}


// -----------  ESTESTADISTICAS INDIVIVUAL  -----------

const dorsalCompetidor = document.querySelector('#dorsal');
const botonCompetidor = document.querySelector('#boton-consulta-individual');
const tablaCompetencia = document.querySelector('.tabla-estadisticas_competencia span');
const tablaNombre = document.querySelector('.tabla-estadisticas_header h4') 
const tablaDorsal = document.querySelector('.tabla-estadisticas_dorsal span');
const tablaGenero = document.querySelector('.tabla-estadisticas_genero span');
const tablaEdad = document.querySelector('.tabla-estadisticas_edad span');
const tablaPorcentajePosicion = document.querySelector('.tabla-estadisticas_porcentaje-posicion span');
const tablaInfoBarra = document.querySelector('.info-barra p');
const tablaBarraFrontal = document.querySelector('.barra-frontal');
const tablaTiempoBruto = document.querySelector('.tabla-estadisticas_tiempo-bruto span');
const tablaTiempoNeto = document.querySelector('.tabla-estadisticas_tiempo-neto span');
const tablaRunningTeam = document.querySelector('.tabla-estadisticas_running-team span');
const tablaPosicionGeneral = document.querySelector('.tabla-estadisticas_posicion-general span');
const tablaPosicionSexo = document.querySelector('.tabla-estadisticas_posicion-sexo span');
const tablaPosicionEdad = document.querySelector('.tabla-estadisticas_posicion-edad span');
const tablaRitmo = document.querySelector('.tabla-estadisticas_ritmo span');
const tablaVelocidad = document.querySelector('.tabla-estadisticas_velocidad span');
// const tablaTotalCorredores = document.querySelector('.tabla-estadisticas_total-corredores span');
const trofeoPosicionGeneral = document.querySelector('.trofeo-posicion-general');
const trofeoPosicionSexo = document.querySelector('.trofeo-posicion-sexo');
const trofeoPosicionEdad = document.querySelector('.trofeo-posicion-edad');
const tablaEstadisticas = document.querySelector('.tabla-estadisticas');
const dorsalNoEncontrada = document.querySelector('.dorsal-no-encontrada');
const fondoTrofeos = document.querySelector('.trofeos');

const descargarImagen = document.getElementById('downloadTable');
const infoDescargar = document.querySelector('.info-descarga');

filtrar1 = ()=>{
    limpiarEstadisticas()
    limpiarTrofeos()
    
    const datosCompetidor = dorsalCompetidor.value

    for(let competidores21k of general21k){
        let dorsales21k = competidores21k.dorsal.toString();
        let competencia = '21.097k';
        distanciaCompetencia = competencia.replace("k","");
        if(dorsales21k == datosCompetidor){
            tablaBarraFrontal.style.width = "0%";
            dorsalNoEncontrada.style.display = "none";
            dorsalCompetidor21k = general21k.filter(dorsal21k => dorsal21k.dorsal == datosCompetidor);
            tablaEstadisticas.style.display = 'inline-block'
            tablaNombre.scrollIntoView({
                behavior:'smooth'
            })
            tablaNombre.innerHTML = dorsalCompetidor21k[0].nombre + " " + dorsalCompetidor21k[0].apellido
            tablaCompetencia.innerHTML = `21K`;
            tablaDorsal.innerHTML = datosCompetidor;
            tablaGenero.innerHTML = dorsalCompetidor21k[0].genero;
            tablaEdad.innerHTML = dorsalCompetidor21k[0].edad;
            porcentaje = (100 - (dorsalCompetidor21k[0].posicionGeneral/general21k.length) *100).toFixed(2)+ "%"
            tablaPorcentajePosicion.innerHTML = porcentaje ;
            tablaInfoBarra.innerHTML = porcentaje;
            tablaBarraFrontal.style.width = porcentaje;
            tablaTiempoBruto.innerHTML = dorsalCompetidor21k[0].tiempoBruto.replaceAll(":"," : ");
            tablaTiempoNeto.innerHTML = dorsalCompetidor21k[0].tiempoNeto.replaceAll(":"," : ");
            tablaRunningTeam.innerHTML = dorsalCompetidor21k[0].runningTeam;
            tablaPosicionSexo.innerHTML = dorsalCompetidor21k[0].posicionSexo + " / " + dorsalCompetidor21k[0].totalCorredoresSexo;
            tablaPosicionGeneral.innerHTML = dorsalCompetidor21k[0].posicionGeneral + " / " + general21k.length;
            tablaPosicionEdad.innerHTML = dorsalCompetidor21k[0].posicionEdad + " / " + dorsalCompetidor21k[0].totalCorredoresEdad;
            ritmoCompetidores = dorsalCompetidor21k[0].tiempoNeto.split(":");
            ritmoCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]*3600);
            ritmoCalculoMinutoCompetidor = Number.parseInt(ritmoCompetidores[1]*60);
            ritmoCalculoSegundosCompetidor = Number.parseInt(ritmoCompetidores[2]);
            ritmoMinutoCompetidor = ((ritmoCalculoHorasCompetidor + ritmoCalculoMinutoCompetidor + ritmoCalculoSegundosCompetidor)/60)/distanciaCompetencia;
            ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor%1)*60);
            ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor)
            if (ritmoSegundosCompetidor<10){
                ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor
            }
            if (ritmoMinutosCompetidor<10){
                ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor
            }
            tablaRitmo.innerHTML = ritmoMinutosCompetidor + " : " + ritmoSegundosCompetidor + " min/km";
            velocidadCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]);
            velocidadCalculoMinutosCompetidor = ritmoCompetidores[1]/60;
            velocidadCalculoSegundosCompetidor = ritmoCompetidores[2]/3600;
            velocidadCompetidor = (competencia.substring(0,competencia.length -1)/(velocidadCalculoHorasCompetidor + velocidadCalculoMinutosCompetidor + velocidadCalculoSegundosCompetidor)).toFixed(2);
            tablaVelocidad.innerHTML = velocidadCompetidor + " Km/h";
            // tablaTotalCorredores.innerHTML = general21k.length;
            trofeos21k()
            descargarImagen.style.display = "flex";
            infoDescargar.style.display = "inline-block";
            break
        }
        else{
            dorsalCompetidor21k = [];
        }
    }


    for(let competidores10k of general10k){
        let dorsales10k = competidores10k.dorsal.toString();
        let competencia = '10.5k';
        distanciaCompetencia = competencia.replace("k","");
        if(dorsales10k == datosCompetidor){
            tablaBarraFrontal.style.width = "0%";
            dorsalNoEncontrada.style.display = "none";
            dorsalCompetidor10k = general10k.filter(dorsal10k => dorsal10k.dorsal == datosCompetidor);
            tablaEstadisticas.style.display = 'inline-block'
            tablaNombre.scrollIntoView({
                behavior:'smooth'
            })
            tablaNombre.innerHTML = dorsalCompetidor10k[0].nombre + " " + dorsalCompetidor10k[0].apellido
            tablaCompetencia.innerHTML = `10K`;
            tablaDorsal.innerHTML = datosCompetidor;
            tablaGenero.innerHTML = dorsalCompetidor10k[0].genero;
            tablaEdad.innerHTML = dorsalCompetidor10k[0].edad;
            porcentaje = (100 - (dorsalCompetidor10k[0].posicionGeneral/general10k.length) *100).toFixed(2)+ "%"
            tablaPorcentajePosicion.innerHTML = porcentaje ;
            tablaInfoBarra.innerHTML = porcentaje;
            tablaBarraFrontal.style.width = porcentaje;
            tablaTiempoBruto.innerHTML = dorsalCompetidor10k[0].tiempoBruto.replaceAll(":"," : ");
            tablaTiempoNeto.innerHTML = dorsalCompetidor10k[0].tiempoNeto.replaceAll(":"," : ");
            tablaRunningTeam.innerHTML = dorsalCompetidor10k[0].runningTeam;
            tablaPosicionSexo.innerHTML = dorsalCompetidor10k[0].posicionSexo + " / " + dorsalCompetidor10k[0].totalCorredoresSexo;
            tablaPosicionGeneral.innerHTML = dorsalCompetidor10k[0].posicionGeneral + " / " + general10k.length;
            tablaPosicionEdad.innerHTML = dorsalCompetidor10k[0].posicionEdad + " / " + dorsalCompetidor10k[0].totalCorredoresEdad;
            ritmoCompetidores = dorsalCompetidor10k[0].tiempoNeto.split(":");
            ritmoCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]*3600);
            ritmoCalculoMinutoCompetidor = Number.parseInt(ritmoCompetidores[1]*60);
            ritmoCalculoSegundosCompetidor = Number.parseInt(ritmoCompetidores[2]);
            ritmoMinutoCompetidor = ((ritmoCalculoHorasCompetidor + ritmoCalculoMinutoCompetidor + ritmoCalculoSegundosCompetidor)/60)/distanciaCompetencia;
            ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor%1)*60);
            ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor)
            if (ritmoSegundosCompetidor<10){
                ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor
            }
            if (ritmoMinutosCompetidor<10){
                ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor
            }
            tablaRitmo.innerHTML = ritmoMinutosCompetidor + " : " + ritmoSegundosCompetidor + " min/km";
            velocidadCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]);
            velocidadCalculoMinutosCompetidor = ritmoCompetidores[1]/60;
            velocidadCalculoSegundosCompetidor = ritmoCompetidores[2]/3600;
            velocidadCompetidor = (competencia.substring(0,competencia.length -1)/(velocidadCalculoHorasCompetidor + velocidadCalculoMinutosCompetidor + velocidadCalculoSegundosCompetidor)).toFixed(2);
            tablaVelocidad.innerHTML = velocidadCompetidor + " Km/h";
            // tablaTotalCorredores.innerHTML = general10k.length;
            trofeos10k()
            descargarImagen.style.display = "flex";
            infoDescargar.style.display = "inline-block";
            break
        }
        else{
            dorsalCompetidor10k = [];
        }
    }
    for(let competidores5k of general5k){
        let dorsales5k = competidores5k.dorsal.toString();
        let competencia = '5k';
        distanciaCompetencia = competencia.replace("k","");
        if(dorsales5k == datosCompetidor){
            tablaBarraFrontal.style.width = "0%";
            dorsalNoEncontrada.style.display = "none";
            dorsalCompetidor5k = general5k.filter(dorsal5k => dorsal5k.dorsal == datosCompetidor);
            tablaEstadisticas.style.display = 'inline-block'
            tablaNombre.scrollIntoView({
                behavior:'smooth'
            })
            tablaNombre.innerHTML = dorsalCompetidor5k[0].nombre + " " + dorsalCompetidor5k[0].apellido
            tablaCompetencia.innerHTML = `5K`;
            tablaDorsal.innerHTML = datosCompetidor;
            tablaGenero.innerHTML = dorsalCompetidor5k[0].genero;
            tablaEdad.innerHTML = dorsalCompetidor5k[0].edad;
            porcentaje = (100 - (dorsalCompetidor5k[0].posicionGeneral/general5k.length) *100).toFixed(2)+ "%"
            tablaPorcentajePosicion.innerHTML = porcentaje ;
            tablaInfoBarra.innerHTML = porcentaje;
            tablaBarraFrontal.style.width = porcentaje;
            tablaTiempoBruto.innerHTML = dorsalCompetidor5k[0].tiempoBruto.replaceAll(":"," : ");
            tablaTiempoNeto.innerHTML = dorsalCompetidor5k[0].tiempoNeto.replaceAll(":"," : ");
            tablaRunningTeam.innerHTML = dorsalCompetidor5k[0].runningTeam;
            tablaPosicionSexo.innerHTML = dorsalCompetidor5k[0].posicionSexo + " / " + dorsalCompetidor5k[0].totalCorredoresSexo;
            tablaPosicionGeneral.innerHTML = dorsalCompetidor5k[0].posicionGeneral + " / " + general5k.length;
            tablaPosicionEdad.innerHTML = dorsalCompetidor5k[0].posicionEdad + " / " + dorsalCompetidor5k[0].totalCorredoresEdad;
            ritmoCompetidores = dorsalCompetidor5k[0].tiempoNeto.split(":");
            ritmoCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]*3600);
            ritmoCalculoMinutoCompetidor = Number.parseInt(ritmoCompetidores[1]*60);
            ritmoCalculoSegundosCompetidor = Number.parseInt(ritmoCompetidores[2]);
            ritmoMinutoCompetidor = ((ritmoCalculoHorasCompetidor + ritmoCalculoMinutoCompetidor + ritmoCalculoSegundosCompetidor)/60)/distanciaCompetencia;
            ritmoSegundosCompetidor = Math.trunc((ritmoMinutoCompetidor%1)*60);
            ritmoMinutosCompetidor = Math.trunc(ritmoMinutoCompetidor)
            if (ritmoSegundosCompetidor<10){
                ritmoSegundosCompetidor = "0" + ritmoSegundosCompetidor
            }
            if (ritmoMinutosCompetidor<10){
                ritmoMinutosCompetidor = "0" + ritmoMinutosCompetidor
            }
            tablaRitmo.innerHTML = ritmoMinutosCompetidor + " : " + ritmoSegundosCompetidor + " min/km";
            velocidadCalculoHorasCompetidor = Number.parseInt(ritmoCompetidores[0]);
            velocidadCalculoMinutosCompetidor = ritmoCompetidores[1]/60;
            velocidadCalculoSegundosCompetidor = ritmoCompetidores[2]/3600;
            velocidadCompetidor = (competencia.substring(0,competencia.length -1)/(velocidadCalculoHorasCompetidor + velocidadCalculoMinutosCompetidor + velocidadCalculoSegundosCompetidor)).toFixed(2);
            tablaVelocidad.innerHTML = velocidadCompetidor + " Km/h";
            // tablaTotalCorredores.innerHTML = general5k.length;
            trofeos5k()
            descargarImagen.style.display = "flex";
            infoDescargar.style.display = "inline-block";
            break
            
        }
        else{
            dorsalCompetidor5k = [];
        }
    }
    if(dorsalCompetidor5k.length === 0 && dorsalCompetidor10k.length === 0 && dorsalCompetidor21k.length === 0){
        dorsalError()
        descargarImagen.style.display = "none";
        infoDescargar.style.display = "none";
    }
}
    
botonCompetidor.addEventListener('click', filtrar1)

function limpiarEstadisticas(){
    tablaCompetencia.innerHTML = '';
    tablaDorsal.innerHTML = '';
    tablaGenero.innerHTML = '';
    tablaEdad.innerHTML = '';
    tablaPorcentajePosicion.innerHTML = '';
    tablaInfoBarra.innerHTML = '';
    tablaTiempoBruto.innerHTML = '';
    tablaTiempoNeto.innerHTML = '';
    tablaPosicionGeneral.innerHTML = '';
    tablaPosicionEdad.innerHTML = '';
    tablaVelocidad.innerHTML = '';
    tablaRitmo.innerHTML = '';
    // tablaTotalCorredores.innerHTML = '';
    total10kEdad = '';
    total5kEdad = '';
    total10kGenero = '';
    total5kGenero = '';
}

window.onload = function() {
    preloadImagenes();
}

function preloadImagenes() {
    const urls = [
      '../Imagenes/trofeos/trofeo-oro.png',
      '../Imagenes/trofeos/trofeo-plata.png',
      '../Imagenes/trofeos/trofeo-bronce.png'
    ];
  
    urls.forEach(url => {
      const imagen = new Image();
      imagen.src = url;
    });
  }


  function trofeos21k(){
    const imagenTrofeoGeneral = document.createElement('img');
    const imagenTrofeoSexo = document.createElement('img');
    const imagenTrofeoEdad = document.createElement('img');
    trofeoPosicionGeneral.appendChild(imagenTrofeoGeneral);
    trofeoPosicionSexo.appendChild(imagenTrofeoSexo);
    trofeoPosicionEdad.appendChild(imagenTrofeoEdad);

    if(dorsalCompetidor21k[0].posicionGeneral == 1){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor21k[0].posicionGeneral == 2){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor21k[0].posicionGeneral == 3){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionGeneral.removeChild(imagenTrofeoGeneral);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }

    if(dorsalCompetidor21k[0].posicionSexo == 1){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor21k[0].posicionSexo == 2){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor21k[0].posicionSexo == 3){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionSexo.removeChild(imagenTrofeoSexo);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }

    if(dorsalCompetidor21k[0].posicionEdad == 1){
        imagenTrofeoEdad.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor21k[0].posicionEdad == 2){
        imagenTrofeoEdad.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor21k[0].posicionEdad == 3){
        imagenTrofeoEdad.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionEdad.removeChild(imagenTrofeoEdad);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }
}  


function trofeos10k(){
    const imagenTrofeoGeneral = document.createElement('img');
    const imagenTrofeoSexo = document.createElement('img');
    const imagenTrofeoEdad = document.createElement('img');
    trofeoPosicionGeneral.appendChild(imagenTrofeoGeneral);
    trofeoPosicionSexo.appendChild(imagenTrofeoSexo);
    trofeoPosicionEdad.appendChild(imagenTrofeoEdad);

    if(dorsalCompetidor10k[0].posicionGeneral == 1){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor10k[0].posicionGeneral == 2){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor10k[0].posicionGeneral == 3){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionGeneral.removeChild(imagenTrofeoGeneral);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }

    if(dorsalCompetidor10k[0].posicionSexo == 1){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor10k[0].posicionSexo == 2){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor10k[0].posicionSexo == 3){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionSexo.removeChild(imagenTrofeoSexo);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }

    if(dorsalCompetidor10k[0].posicionEdad == 1){
        imagenTrofeoEdad.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor10k[0].posicionEdad == 2){
        imagenTrofeoEdad.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor10k[0].posicionEdad == 3){
        imagenTrofeoEdad.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionEdad.removeChild(imagenTrofeoEdad);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }
}

function trofeos5k(){
    const imagenTrofeoGeneral = document.createElement('img');
    const imagenTrofeoSexo = document.createElement('img');
    // const imagenTrofeoEdad = document.createElement('img');
    trofeoPosicionGeneral.appendChild(imagenTrofeoGeneral);
    trofeoPosicionSexo.appendChild(imagenTrofeoSexo);
    // trofeoPosicionEdad.appendChild(imagenTrofeoEdad);
    

    if(dorsalCompetidor5k[0].posicionGeneral == 1){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor5k[0].posicionGeneral == 2){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor5k[0].posicionGeneral == 3){
        imagenTrofeoGeneral.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionGeneral.removeChild(imagenTrofeoGeneral);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }

    if(dorsalCompetidor5k[0].posicionSexo == 1){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-oro.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor5k[0].posicionSexo == 2){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-plata.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else if(dorsalCompetidor5k[0].posicionSexo == 3){
        imagenTrofeoSexo.src = '../Imagenes/trofeos/trofeo-bronce.png';
        fondoTrofeos.classList.add('trofeos-fondo');
    }else{
        trofeoPosicionSexo.removeChild(imagenTrofeoSexo);
        fondoTrofeos.classList.remove('trofeos-fondo');
    }

    // if(dorsalCompetidor5k[0].posicionEdad == 1){
    //     imagenTrofeoEdad.src = 'Imagenes/trofeo-oro.png';
    //     fondoTrofeos.classList.add('trofeos-fondo');
    // }else if(dorsalCompetidor5k[0].posicionEdad == 2){
    //     imagenTrofeoEdad.src = 'Imagenes/trofeo-plata.png';
    //     fondoTrofeos.classList.add('trofeos-fondo');
    // }else if(dorsalCompetidor5k[0].posicionEdad == 3){
    //     imagenTrofeoEdad.src = 'Imagenes/trofeo-bronce.png';
    //     fondoTrofeos.classList.add('trofeos-fondo');
    // }else{
    //     trofeoPosicionEdad.removeChild(imagenTrofeoEdad);
    //     fondoTrofeos.classList.remove('trofeos-fondo');
    // }
}



function limpiarTrofeos(){
    while(trofeoPosicionEdad.firstChild){
        trofeoPosicionEdad.removeChild(trofeoPosicionEdad.firstChild)
    }
    while(trofeoPosicionGeneral.firstChild){
        trofeoPosicionGeneral.removeChild(trofeoPosicionGeneral.firstChild)
    }
    while(trofeoPosicionSexo.firstChild){
        trofeoPosicionSexo.removeChild(trofeoPosicionSexo.firstChild)
    }
}

function dorsalError(){
    dorsalNoEncontrada.style.display = "inline-block";
    tablaEstadisticas.style.display = "none";
}




//         ---------------COMPARADOR-----------------

const accederComparadorGrupal = document.querySelector('#acceder-consulta-grupal');
const selectorCompetencias = document.querySelector('fieldset');
const selectorCantAmigos = document.querySelector('.seleccion-amigos');
const seleccionAmigos = document.querySelector('#seleccion-amigos');

const btnComparador = document.querySelector('.botones-comparadores');

const graficosBarra = document.querySelector('.graficos');
const textoGraficosBarra = document.querySelector('.texto-graficos');
const nombreCompetidor1 = document.querySelector('.nombre-amigo1');
const nombreCompetidor2 = document.querySelector('.nombre-amigo2');
const nombreCompetidor3 = document.querySelector('.nombre-amigo3');
const nombreCompetidor4 = document.querySelector('.nombre-amigo4');
const nombreCompetidor5 = document.querySelector('.nombre-amigo5');

const barraAmigo1 = document.querySelector('.graficos_horizontal-amigo1');
const barraAmigo2 = document.querySelector('.graficos_horizontal-amigo2');
const barraAmigo3 = document.querySelector('.graficos_horizontal-amigo3');
const barraAmigo4 = document.querySelector('.graficos_horizontal-amigo4');
const barraAmigo5 = document.querySelector('.graficos_horizontal-amigo5');

const graficosBarraAmigos = document.querySelector('.graficos_barra');

const formularioComparador = document.querySelector('#formulario-comparador');
const spinner = document.querySelector('.spinner');

accederComparadorGrupal.addEventListener('click', accederComparador);

function accederComparador(e){
    e.preventDefault();
    selectorCompetencias.style.display = 'inline-block';
    selectorCantAmigos.style.display = 'inline-block';
    if (screen.width < 720) {
        document.querySelector('body').style.minWidth = '1024px';
        cambioWebPc();
    }else{
        document.querySelector('body').style.minWidth = '1024px';
        cambioWebPc();
    }
}

//selector de amigos

dorsales21k = []
dorsales10k = []
dorsales5k = []

for(let competidores21k of general21k){
    todasDorsales21k = competidores21k.dorsal
    dorsales21k = [...dorsales21k, todasDorsales21k]
}

for(let competidores10k of general10k){
     todasDorsales10k = competidores10k.dorsal
     dorsales10k = [...dorsales10k, todasDorsales10k]
}

for(let competidores5k of general5k){
    todasDorsales5k = competidores5k.dorsal
    dorsales5k = [...dorsales5k, todasDorsales5k]
}

let mensajeFormulario = document.querySelector('.mensaje-formulario')

//comienza los eventos
 function UI(){}

//instanciar UI
const ui = new UI()

UI.prototype.mostrarMensaje = (mensaje,tipo)=>{
    const div = document.createElement('div');
    const alerta = document.querySelector('.error');
    if(alerta){
        alerta.remove()
    }
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.textContent = mensaje;
    mensajeFormulario.appendChild(div);
    setTimeout(()=>{
        div.remove()
    },3000)
}


function botonSinHabilitacion(){
    console.log("estas sin habilitacion");
    btnComparador.firstChild.style.opacity = "50%";
    btnComparador.firstChild.disabled = true;
}

function botonConHabilitacion(){
    console.log("estas con habilitacion");
    btnComparador.firstChild.style.opacity = "100%";
    btnComparador.firstChild.disabled = false;
}

function spinnerHabilitado(){
    ui.mostrarMensaje('Accediendo a estadisticas...', 'exito');
    spinner.style.display = "flex";
    spinner.style.visibility = "visible";
}

function removerBtnComparador(){
    while(btnComparador.firstChild){
        btnComparador.removeChild(btnComparador.firstChild);
    }
}

const amigosForm = {
    amigo1: '',
    amigo2: '',
    amigo3: '',
    amigo4: '',
    amigo5: ''
}

function resetAmigosForm(){
    amigosForm.amigo1 = '',
    amigosForm.amigo2 = '',
    amigosForm.amigo3 = '',
    amigosForm.amigo4 = '',
    amigosForm.amigo5 = ''
}


seleccionAmigos.addEventListener('change', () => {
    const numAmigos = seleccionAmigos.value;
    resetAmigosForm();
    removerBtnComparador();
    if(numAmigos ==2){
        botonComparadorf2 = document.createElement('button');
        btnComparador.appendChild(botonComparadorf2);
        botonComparadorf2.type = 'submit';
        botonComparadorf2.classList.add("boton-consulta");
        botonComparadorf2.textContent = "Consultar";
        botonComparadorf2.style.display = "block";
    }

    if(numAmigos ==3){
        botonComparadorf3 = document.createElement('button');
        btnComparador.appendChild(botonComparadorf3);
        botonComparadorf3.type = 'submit';
        botonComparadorf3.classList.add("boton-consulta");
        botonComparadorf3.textContent = "Consultar";
        botonComparadorf3.style.display = "block";
    }

    if(numAmigos ==4){
        botonComparadorf4 = document.createElement('button');
        btnComparador.appendChild(botonComparadorf4);
        botonComparadorf4.type = 'submit';
        botonComparadorf4.classList.add("boton-consulta");
        botonComparadorf4.textContent = "Consultar";
        botonComparadorf4.style.display = "block";
    }

    if(numAmigos ==5){
        botonComparadorf5 = document.createElement('button');
        btnComparador.appendChild(botonComparadorf5);
        botonComparadorf5.type = 'submit';
        botonComparadorf5.classList.add("boton-consulta");
        botonComparadorf5.textContent = "Consultar";
        botonComparadorf5.style.display = "block";
    }

    botonSinHabilitacion();

    formularioComparador.innerHTML = '';
    formularioComparador.style.display ='block';
    graficosEstadisticas.style.display= 'none';

    const ingresoDorsales = document.createElement('p');
    ingresoDorsales.textContent = ` * Ingresa las dorsales:`;
    ingresoDorsales.style.margin = "1rem";
    formularioComparador.appendChild(ingresoDorsales);

    for (let i = 0; i < numAmigos; i++) {
    const input = document.createElement('input');
    input.type = 'number';
    input.name = `amigo${i + 1}`;
    input.className = `input-amigo`;
    input.min = 1;
    input.placeholder = `Dorsal ${i + 1}`;
    formularioComparador.appendChild(input);
    input.addEventListener('input', () => {
      validarEntrada(input);
      console.log(amigosForm);
    });
    }

    const infoDorsales = document.createElement('p');
    infoDorsales.textContent = `(*) Termina de ingresar los numeros de dorsales hasta que se ponga en verde la casilla.\nUna vez que se llenen las casillas con dorsales correctas se habilita el boton de consultar estadisticas.\nSi se pone en rojo es porque reconoce el sistema que pertenece a otra competencia o no existe la dorsal ingresada.`;
    infoDorsales.style.margin = "1rem";
    formularioComparador.appendChild(infoDorsales);
});


function validarEntrada(input) {
    console.log("entraste en validarEntrada")
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if(input.value.trim() === ''){
        input.style.border = ".2rem solid red";
        ui.mostrarMensaje('El ingreso de dorsales es obligatorio', 'error');
        botonSinHabilitacion();
        return
    }

    amigosForm[input.name] = Number.parseInt(input.value.trim());
    let dorsal = amigosForm[input.name]

    if (isNaN(dorsal) || dorsal < 1) {
        input.style.border = ".2rem solid red";
        ui.mostrarMensaje('El valor ingresado debe ser un número positivo', 'error');
        return;
    }

    if( tipoCompetencia === '21k'){
        input.style.border = ".2rem solid green";
        if (dorsales5k.includes(dorsal)) {
                input.style.border = ".2rem solid red";
                ui.mostrarMensaje('Este dorsal se encuentra en la carrera de 5k', 'error');
                botonSinHabilitacion();
                return;
        }
        if (dorsales10k.includes(dorsal)) {
            input.style.border = ".2rem solid red";
            ui.mostrarMensaje('Este dorsal se encuentra en la carrera de 10k', 'error');
            botonSinHabilitacion();
            return;
      }
        
    }

    if( tipoCompetencia === '10k'){
        input.style.border = ".2rem solid green";
        if (dorsales21k.includes(dorsal)) {
            input.style.border = ".2rem solid red";
            ui.mostrarMensaje('Este dorsal se encuentra en la carrera de 21k', 'error');
            botonSinHabilitacion();
            return;
    }
        if (dorsales5k.includes(dorsal)) {
                input.style.border = ".2rem solid red";
                ui.mostrarMensaje('Este dorsal se encuentra en la carrera de 5k', 'error');
                botonSinHabilitacion();
                return;
        }
    }

    if( tipoCompetencia === '5k'){
        input.style.border = ".2rem solid green";
        if (dorsales21k.includes(dorsal)) {
            input.style.border = ".2rem solid red";
            ui.mostrarMensaje('Este dorsal se encuentra en la carrera de 21k', 'error');
            botonSinHabilitacion();
            return;
    }
        if (dorsales10k.includes(dorsal)) {
                input.style.border = ".2rem solid red";
                ui.mostrarMensaje('Este dorsal se encuentra en la carrera de 10k', 'error');
                botonSinHabilitacion();
                return;
        }
    }

    if (!dorsales21k.includes(dorsal) && !dorsales10k.includes(dorsal) && !dorsales5k.includes(dorsal)) {
        input.style.border = ".2rem solid red";
        ui.mostrarMensaje('Dorsal no encontrado', 'error');
        botonSinHabilitacion();
        return;
    }

    let option = seleccionAmigos.options[seleccionAmigos.selectedIndex].id;
    if (option === "opcion-2") {
        validarf2();
        graficosEstadisticas.style.maxWidth = '82.3rem';
        graficoCircularAmigos.style.justifyContent = "space-arround";
    } else if (option === "opcion-3") {
        validarf3();
        graficosEstadisticas.style.maxWidth = '82.3rem';
        graficoCircularAmigos.style.justifyContent = "space-arround";
    } else if (option === "opcion-4") {
        validarf4();
        graficosEstadisticas.style.maxWidth = '91.3rem';
        graficoCircularAmigos.style.justifyContent = "space-evenly";
    } else if (option === "opcion-5") {
        validarf5();
        graficosEstadisticas.style.maxWidth = '91.3rem';
        graficoCircularAmigos.style.justifyContent = "space-evenly";
    }
    
}

const tipoCompetencia5k = document.querySelector('#radio5k');
const tipoCompetencia10k = document.querySelector('#radio10k');
const tipoCompetencia21k = document.querySelector('#radio21k');

tipoCompetencia21k.addEventListener('click', resetForm);
tipoCompetencia10k.addEventListener('click', resetForm);
tipoCompetencia5k.addEventListener('click', resetForm);

function resetForm(){
    while(formularioComparador.firstChild){
        formularioComparador.removeChild(formularioComparador.firstChild);
        btnComparador.firstChild.style.display = "none";
        seleccionAmigos.value = "";
        graficosEstadisticas.style.display = 'none';
    }
}



//activacion de graficos
function activarGraficos(){
    graficosBarra.style.display = "grid";
    graficosBarra.style.position = "grid";
    textoGraficosBarra.style.display = "flex";
    graficosCirculares.style.justifyContent = "space-between";
}


function validarf2(){
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if (amigosForm.amigo1 == '' || amigosForm.amigo2 == '') {
        botonSinHabilitacion();
      return;
    }
  
    const amigosDorsales = [amigosForm.amigo1, amigosForm.amigo2];
    // const todosLosDorsales = tipoCompetencia === '10k' ? dorsales10k : dorsales5k;
    const todosLosDorsales = tipoCompetencia === '10k' ? dorsales10k : tipoCompetencia === '5k' ? dorsales5k : dorsales21k;

  
    // if (!amigosDorsales.every(dorsal => todosLosDorsales.includes(dorsal))) {
    //   ui.mostrarMensaje('Dorsal no encontrada', 'error');
    //   botonSinHabilitacion();
    //   return;
    // }
  
    // if (tipoCompetencia === '10k' && amigosDorsales.some(dorsal => dorsales5k.includes(dorsal))) {
    //   botonSinHabilitacion();
    //   return;
    // }
  
    // if (tipoCompetencia === '5k' && amigosDorsales.some(dorsal => dorsales10k.includes(dorsal))) {
    //   botonSinHabilitacion();
    //   return;
    // }

    if (!amigosDorsales.every(dorsal => todosLosDorsales.includes(dorsal))) {
        ui.mostrarMensaje('Dorsal no encontrada', 'error');
        botonSinHabilitacion();
        return;
    }
      
    if (tipoCompetencia === '21k' && (amigosDorsales.some(dorsal => dorsales10k.includes(dorsal)) || amigosDorsales.some(dorsal => dorsales5k.includes(dorsal)))) {
        botonSinHabilitacion();
        return;
    }

    if (tipoCompetencia === '10k' && (amigosDorsales.some(dorsal => dorsales5k.includes(dorsal)) || amigosDorsales.some(dorsal => dorsales21k.includes(dorsal)))) {
        botonSinHabilitacion();
        return;
    }
      
    if (tipoCompetencia === '5k' && (amigosDorsales.some(dorsal => dorsales10k.includes(dorsal)) || amigosDorsales.some(dorsal => dorsales21k.includes(dorsal)))) {
        botonSinHabilitacion();
        return;
    }
      
    // botonComparadorf2.addEventListener('click', tipoCompetencia === '10k' ?  compararf210k : compararf25k);
    botonComparadorf2.addEventListener('click', tipoCompetencia === '10k' ? compararf210k : (tipoCompetencia === '5k' ? compararf25k : compararf221k));

    botonConHabilitacion();
}


function compararf221k(e){
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '10k'){
        compararf210k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf25k();
        return
    }
    e.preventDefault();
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        dosAmigos21k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}


function compararf210k(e){
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf221k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf25k();
        return
    }
    e.preventDefault();
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        dosAmigos10k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}

function compararf25k(e){
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf221k();
        return
    }
    if( tipoCompetencia === '10k'){
        compararf210k();
        return
    }
    e.preventDefault();
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        dosAmigos5k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}

function validarf3(){

    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    const amigos = [amigosForm.amigo1, amigosForm.amigo2, amigosForm.amigo3];
    const todosLosDorsales = tipoCompetencia === '10k' ? dorsales10k : (tipoCompetencia === '5k' ? dorsales5k : dorsales21k);

    if(amigos.some(amigo => amigo === '')){
        botonSinHabilitacion();
        return;
    }

    // if(!amigos.every(amigo => dorsales10k.includes(amigo) || dorsales5k.includes(amigo))){
    //     ui.mostrarMensaje('Dorsal no encontrada', 'error');
    //     botonSinHabilitacion();
    //     return;
    // }

    if(!amigos.every(amigo => todosLosDorsales.includes(amigo))){
        ui.mostrarMensaje('Dorsal no encontrada', 'error');
        botonSinHabilitacion();
        return;
    }

    // if(tipoCompetencia === '10k' && amigos.some(amigo => dorsales5k.includes(amigo))){
    //     botonSinHabilitacion();
    //     return;
    // }

    // if(tipoCompetencia === '5k' && amigos.some(amigo => dorsales10k.includes(amigo))){
    //     botonSinHabilitacion();
    //     return;
    // }

    if(tipoCompetencia === '21k' && amigos.some(amigo => dorsales10k.includes(amigo) || dorsales5k.includes(amigo))){
        botonSinHabilitacion();
        return;
    }

    if(tipoCompetencia === '10k' && amigos.some(amigo => dorsales5k.includes(amigo) || dorsales21k.includes(amigo))){
        botonSinHabilitacion();
        return;
    }

    if(tipoCompetencia === '5k' && amigos.some(amigo => dorsales10k.includes(amigo) || dorsales21k.includes(amigo))){
        botonSinHabilitacion();
        return;
    }


    // if(tipoCompetencia === '10k'){
    //     botonComparadorf3.addEventListener('click', compararf310k);
    // } else {
    //     console.log("llegaste a validarf2")
    //     botonComparadorf3.addEventListener('click', compararf35k);
    // }

    if(tipoCompetencia === '10k'){
        botonComparadorf3.addEventListener('click', compararf310k);
    } else if(tipoCompetencia === '5k'){
        botonComparadorf3.addEventListener('click', compararf35k);
    } else if(tipoCompetencia === '21k'){
        botonComparadorf3.addEventListener('click', compararf321k);
    }
    botonConHabilitacion();
}

function compararf321k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '10k'){
        compararf310k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf35k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        tresAmigos21k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}


function compararf310k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf321k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf35k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        tresAmigos10k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}

function compararf35k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf321k();
        return
    }
    if( tipoCompetencia === '10k'){
        compararf310k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        tresAmigos5k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}


function validarf4(){

    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    const amigosArr = [amigosForm.amigo1, amigosForm.amigo2, amigosForm.amigo3, amigosForm.amigo4];
    
    if(amigosArr.some(amigo => amigo === '')){
        botonSinHabilitacion();
        return
    }

    // if(amigosArr.some(amigo => (!dorsales10k.includes(amigo) && !dorsales5k.includes(amigo) && amigo !== ''))){
    //     ui.mostrarMensaje('Dorsal no encontrada', 'error');
    //     botonSinHabilitacion();
    //     return
    // }

    if(amigosArr.some(amigo => (!dorsales10k.includes(amigo) && !dorsales5k.includes(amigo) && !dorsales21k.includes(amigo) && amigo !== ''))){
        ui.mostrarMensaje('Dorsal no encontrada', 'error');
        botonSinHabilitacion();
        return
    }

    if(tipoCompetencia === '21k' && amigosArr.some(amigo => dorsales10k.includes(amigo) || dorsales5k.includes(amigo))){
        botonSinHabilitacion();
        return
    }
    
    // if(tipoCompetencia === '10k' && amigosArr.some(amigo => dorsales5k.includes(amigo))){
    //     botonSinHabilitacion();
    //     return
    // }
    if(tipoCompetencia === '10k' && amigosArr.some(amigo => dorsales5k.includes(amigo) || dorsales21k.includes(amigo))){
        botonSinHabilitacion();
        return
    }

    // if(tipoCompetencia === '5k' && amigosArr.some(amigo => dorsales10k.includes(amigo))){
    //     botonSinHabilitacion();
    //     return
    // }
    if(tipoCompetencia === '5k' && amigosArr.some(amigo => dorsales10k.includes(amigo) || dorsales21k.includes(amigo))){
        botonSinHabilitacion();
        return
    }

    if(tipoCompetencia === '21k'){
        botonComparadorf4.addEventListener('click', compararf421k)
        botonConHabilitacion();
    }
    
    if( tipoCompetencia === '10k'){
        botonComparadorf4.addEventListener('click', compararf410k)
        botonConHabilitacion();
    }

    if( tipoCompetencia === '5k'){
        botonComparadorf4.addEventListener('click', compararf45k)
        botonConHabilitacion();
    }
    
}


function compararf421k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '10k'){
        compararf410k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf45k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        cuatroAmigos21k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}

function compararf410k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf421k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf45k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        cuatroAmigos10k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}

function compararf45k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf421k();
        return
    }
    if( tipoCompetencia === '10k'){
        compararf410k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        cuatroAmigos5k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}


function validarf5() {
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    let competenciaValida = true;
    
    for (let i = 1; i <= 5; i++) {
      const amigoDorsal = amigosForm['amigo' + i];
      
      if (amigoDorsal === '') {
        botonSinHabilitacion();
        return;
      }
      
    //   const esDorsalValido = tipoCompetencia === '10k' ?
    //     dorsales10k.includes(amigoDorsal) : dorsales5k.includes(amigoDorsal);

        const esDorsalValido = tipoCompetencia === '10k' ?
        dorsales10k.includes(amigoDorsal) : tipoCompetencia === '5k' ?
        dorsales5k.includes(amigoDorsal) : dorsales21k.includes(amigoDorsal);
    
        
        if (!esDorsalValido) {
            ui.mostrarMensaje('Dorsal no encontrada', 'error');
            botonSinHabilitacion();
            return;
        }
        
        if (tipoCompetencia === '21k' && (dorsales10k.includes(amigoDorsal) || dorsales5k.includes(amigoDorsal))) {
            competenciaValida = false; 
        } else if (tipoCompetencia === '10k' && (dorsales21k.includes(amigoDorsal) || dorsales5k.includes(amigoDorsal))) {
            competenciaValida = false;
        } else if (tipoCompetencia === '5k' && (dorsales21k.includes(amigoDorsal)|| dorsales10k.includes(amigoDorsal))) {
            competenciaValida = false;
        }
    }
    
    if (!competenciaValida) {
      botonSinHabilitacion();
      return;
    }

    if (tipoCompetencia === '21k') {
        botonComparadorf5.addEventListener('click', compararf521k)
    } else if (tipoCompetencia === '10k') {
      botonComparadorf5.addEventListener('click', compararf510k)
    } else if (tipoCompetencia === '5k') {
      botonComparadorf5.addEventListener('click', compararf55k)
    }
    
    botonConHabilitacion();
  }
  
  function compararf521k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '10k'){
        compararf510k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf55k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        cincoAmigos21k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}


function compararf510k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf521k();
        return
    }
    if( tipoCompetencia === '5k'){
        compararf55k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        cincoAmigos10k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}

function compararf55k(e){
    e.preventDefault();
    const tipoCompetencia = document.querySelector('input[name="competencia"]:checked').value;
    if( tipoCompetencia === '21k'){
        compararf521k();
        return
    }
    if( tipoCompetencia === '10k'){
        compararf510k();
        return
    }
    spinnerHabilitado();
    setTimeout(()=>{
        spinner.style.display = "none";
        spinner.style.visibility = "hidden";
        activarGraficos();
        cincoAmigos5k();
        graficosEstadisticas.scrollIntoView({
            behavior:'smooth'
        })
    },3000);
}



//------------  funciones de amigos  --------------



function dosAmigos21k(){
    resetGraficosCirculares();
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;

    graficosEstadisticas.style.display = "block";
    
    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'none';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';
    
    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(2, 1fr)';
    graficosBarra.style.width = '12rem';

    amigoUno21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo1);
    amigoDos21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo2);
    ppga1 = (100 - (amigoUno21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;

    nombreAmigo1.textContent = amigoUno21k[0].nombre + " " + amigoUno21k[0].apellido;
    nombreAmigo2.textContent = amigoDos21k[0].nombre + " " + amigoDos21k[0].apellido;

    progressEndAmigo1 = Number.parseInt(ppga1);
    resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
    progressEndAmigo2 = Number.parseInt(ppga2);
    resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno21k[0].posicionSexo +"/"+ amigoUno21k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos21k[0].posicionSexo +"/"+ amigoDos21k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno21k[0].posicionEdad +"/"+ amigoUno21k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos21k[0].posicionEdad +"/"+ amigoDos21k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        resultadoA1.textContent = amigoUno21k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos21k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        resultadoA1.textContent = amigoUno21k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos21k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
    });

    

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";

    graficosCirculares2Amigos()

    graficosCircularesA1()
    graficosCircularesA2()


}



function dosAmigos10k(){
    resetGraficosCirculares();
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;

    graficosEstadisticas.style.display = "block";
    
    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'none';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';
    
    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(2, 1fr)';
    graficosBarra.style.width = '12rem';

    amigoUno10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo1);
    amigoDos10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo2);
    ppga1 = (100 - (amigoUno10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;

    nombreAmigo1.textContent = amigoUno10k[0].nombre + " " + amigoUno10k[0].apellido;
    nombreAmigo2.textContent = amigoDos10k[0].nombre + " " + amigoDos10k[0].apellido;

    progressEndAmigo1 = Number.parseInt(ppga1);
    resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
    progressEndAmigo2 = Number.parseInt(ppga2);
    resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno10k[0].posicionSexo +"/"+ amigoUno10k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos10k[0].posicionSexo +"/"+ amigoDos10k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno10k[0].posicionEdad +"/"+ amigoUno10k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos10k[0].posicionEdad +"/"+ amigoDos10k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        resultadoA1.textContent = amigoUno10k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos10k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        resultadoA1.textContent = amigoUno10k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos10k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
    });

    

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";

    graficosCirculares2Amigos()

    graficosCircularesA1()
    graficosCircularesA2()


}


function dosAmigos5k(){
    resetGraficosCirculares();
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;

    graficosEstadisticas.style.display = "block";
    
    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'none';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';
    
    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(2, 1fr)';
    graficosBarra.style.width = '12rem';

    amigoUno5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo1);
    amigoDos5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo2);
    ppga1 = (100 - (amigoUno5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    

    nombreAmigo1.textContent = amigoUno5k[0].nombre + " " + amigoUno5k[0].apellido;
    nombreAmigo2.textContent = amigoDos5k[0].nombre + " " + amigoDos5k[0].apellido;

    progressEndAmigo1 = Number.parseInt(ppga1);
    resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
    progressEndAmigo2 = Number.parseInt(ppga2);
    resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno5k[0].posicionSexo +"/"+ amigoUno5k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos5k[0].posicionSexo +"/"+ amigoDos5k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno5k[0].posicionEdad +"/"+ amigoUno5k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos5k[0].posicionEdad +"/"+ amigoDos5k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        resultadoA1.textContent = amigoUno5k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos5k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        resultadoA1.textContent = amigoUno5k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos5k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
    });

    

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";

    graficosCirculares2Amigos()

    graficosCircularesA1()
    graficosCircularesA2()


}

function graficosCirculares2Amigos(){
    progressBarA1.parentElement.style.display = "inline-block";
    progressBarA2.parentElement.style.display = "inline-block";
}

function tresAmigos21k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(3, 1fr)';
    graficosBarra.style.width = '17rem';

    amigoUno21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo1);
    amigoDos21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo2);
    amigoTres21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo3);
    ppga1 = (100 - (amigoUno21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;

    nombreAmigo1.textContent = amigoUno21k[0].nombre + " " + amigoUno21k[0].apellido;
    nombreAmigo2.textContent = amigoDos21k[0].nombre + " " + amigoDos21k[0].apellido;
    nombreAmigo3.textContent = amigoTres21k[0].nombre + " " + amigoTres21k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres21k[0].posicionGeneral +"/"+ amigoTres21k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres21k[0].posicionGeneral +"/"+ amigoTres21k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres21k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres21k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno21k[0].posicionSexo +"/"+ amigoUno21k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos21k[0].posicionSexo +"/"+ amigoDos21k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres21k[0].posicionSexo +"/"+ amigoTres21k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres21k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres21k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno21k[0].posicionEdad +"/"+ amigoUno21k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos21k[0].posicionEdad +"/"+ amigoDos21k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres21k[0].posicionEdad +"/"+ amigoTres21k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        resultadoA1.textContent = amigoUno21k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos21k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres21k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        resultadoA1.textContent = amigoUno21k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos21k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres21k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });

    graficosCirculares3Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();

    

}

function tresAmigos10k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(3, 1fr)';
    graficosBarra.style.width = '17rem';

    amigoUno10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo1);
    amigoDos10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo2);
    amigoTres10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo3);
    ppga1 = (100 - (amigoUno10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;

    nombreAmigo1.textContent = amigoUno10k[0].nombre + " " + amigoUno10k[0].apellido;
    nombreAmigo2.textContent = amigoDos10k[0].nombre + " " + amigoDos10k[0].apellido;
    nombreAmigo3.textContent = amigoTres10k[0].nombre + " " + amigoTres10k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres10k[0].posicionGeneral +"/"+ amigoTres10k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres10k[0].posicionGeneral +"/"+ amigoTres10k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres10k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres10k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno10k[0].posicionSexo +"/"+ amigoUno10k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos10k[0].posicionSexo +"/"+ amigoDos10k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres10k[0].posicionSexo +"/"+ amigoTres10k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres10k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres10k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno10k[0].posicionEdad +"/"+ amigoUno10k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos10k[0].posicionEdad +"/"+ amigoDos10k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres10k[0].posicionEdad +"/"+ amigoTres10k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        resultadoA1.textContent = amigoUno10k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos10k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres10k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        resultadoA1.textContent = amigoUno10k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos10k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres10k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });

    graficosCirculares3Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();

    

}


function tresAmigos5k(){
    resetGraficosCirculares();
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(3, 1fr)';
    graficosBarra.style.width = '17rem';

    amigoUno5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo1);
    amigoDos5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo2);
    amigoTres5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo3);
    ppga1 = (100 - (amigoUno5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;

    nombreAmigo1.textContent = amigoUno5k[0].nombre + " " + amigoUno5k[0].apellido;
    nombreAmigo2.textContent = amigoDos5k[0].nombre + " " + amigoDos5k[0].apellido;
    nombreAmigo3.textContent = amigoTres5k[0].nombre + " " + amigoTres5k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres5k[0].posicionGeneral +"/"+ amigoTres5k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres5k[0].posicionGeneral +"/"+ amigoTres5k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres5k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres5k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno5k[0].posicionSexo +"/"+ amigoUno5k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos5k[0].posicionSexo +"/"+ amigoDos5k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres5k[0].posicionSexo +"/"+ amigoTres5k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres5k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres5k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno5k[0].posicionEdad +"/"+ amigoUno5k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos5k[0].posicionEdad +"/"+ amigoDos5k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres5k[0].posicionEdad +"/"+ amigoTres5k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        resultadoA1.textContent = amigoUno5k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos5k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres5k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        resultadoA1.textContent = amigoUno5k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos5k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres5k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
    });

    graficosCirculares3Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
}

function graficosCirculares3Amigos(){
    graficosCirculares2Amigos()
    progressBarA3.parentElement.style.display = "inline-block";
}

function cuatroAmigos21k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;
    const amigo4 = amigosForm.amigo4;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'inline-block';
    barraAmigo5.style.display = 'none';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(4, 1fr)';
    graficosBarra.style.width = '22rem';

    amigoUno21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo1);
    amigoDos21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo2);
    amigoTres21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo3);
    amigoCuatro21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo4);

    ppga1 = (100 - (amigoUno21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga4 = (100 - (amigoCuatro21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;
    barraAmigo4.style.height = ppga4;

    nombreAmigo1.textContent = amigoUno21k[0].nombre + " " + amigoUno21k[0].apellido;
    nombreAmigo2.textContent = amigoDos21k[0].nombre + " " + amigoDos21k[0].apellido;
    nombreAmigo3.textContent = amigoTres21k[0].nombre + " " + amigoTres21k[0].apellido;
    nombreAmigo4.textContent = amigoCuatro21k[0].nombre + " " + amigoCuatro21k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";
    nombreCompetidor4.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    progressEndAmigo4 = Number.parseInt(ppga4);

    resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres21k[0].posicionGeneral +"/"+ amigoTres21k[0].totalCorredoresGeneral;
    resultadoA4.textContent = amigoCuatro21k[0].posicionGeneral +"/"+ amigoCuatro21k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres21k[0].posicionGeneral +"/"+ amigoTres21k[0].totalCorredoresGeneral;
        resultadoA4.textContent = amigoCuatro21k[0].posicionGeneral +"/"+ amigoCuatro21k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA4();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro21k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres21k[0].porcentajePorGenero;
        barraAmigo4.style.height = amigoCuatro21k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno21k[0].posicionSexo +"/"+ amigoUno21k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos21k[0].posicionSexo +"/"+ amigoDos21k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres21k[0].posicionSexo +"/"+ amigoTres21k[0].totalCorredoresSexo;
        resultadoA4.textContent = amigoCuatro21k[0].posicionSexo +"/"+ amigoCuatro21k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro21k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres21k[0].porcentajePorEdad;
        barraAmigo4.style.height = amigoCuatro21k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno21k[0].posicionEdad +"/"+ amigoUno21k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos21k[0].posicionEdad +"/"+ amigoDos21k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres21k[0].posicionEdad +"/"+ amigoTres21k[0].totalCorredoresEdad;
        resultadoA4.textContent = amigoCuatro21k[0].posicionEdad +"/"+ amigoCuatro21k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        resultadoA1.textContent = amigoUno21k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos21k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres21k[0].ritmo + 'min/km';
        resultadoA4.textContent = amigoCuatro21k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        barraAmigo4.style.height = Number.parseInt(ppga4);
        resultadoA1.textContent = amigoUno21k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos21k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres21k[0].tiempoNeto;
        resultadoA4.textContent = amigoCuatro21k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });

    graficosCirculares4Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
    graficosCircularesA4();
}

function cuatroAmigos10k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;
    const amigo4 = amigosForm.amigo4;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'inline-block';
    barraAmigo5.style.display = 'none';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(4, 1fr)';
    graficosBarra.style.width = '22rem';

    amigoUno10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo1);
    amigoDos10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo2);
    amigoTres10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo3);
    amigoCuatro10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo4);

    ppga1 = (100 - (amigoUno10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga4 = (100 - (amigoCuatro10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;
    barraAmigo4.style.height = ppga4;

    nombreAmigo1.textContent = amigoUno10k[0].nombre + " " + amigoUno10k[0].apellido;
    nombreAmigo2.textContent = amigoDos10k[0].nombre + " " + amigoDos10k[0].apellido;
    nombreAmigo3.textContent = amigoTres10k[0].nombre + " " + amigoTres10k[0].apellido;
    nombreAmigo4.textContent = amigoCuatro10k[0].nombre + " " + amigoCuatro10k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";
    nombreCompetidor4.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    progressEndAmigo4 = Number.parseInt(ppga4);

    resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres10k[0].posicionGeneral +"/"+ amigoTres10k[0].totalCorredoresGeneral;
    resultadoA4.textContent = amigoCuatro10k[0].posicionGeneral +"/"+ amigoCuatro10k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres10k[0].posicionGeneral +"/"+ amigoTres10k[0].totalCorredoresGeneral;
        resultadoA4.textContent = amigoCuatro10k[0].posicionGeneral +"/"+ amigoCuatro10k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA4();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro10k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres10k[0].porcentajePorGenero;
        barraAmigo4.style.height = amigoCuatro10k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno10k[0].posicionSexo +"/"+ amigoUno10k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos10k[0].posicionSexo +"/"+ amigoDos10k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres10k[0].posicionSexo +"/"+ amigoTres10k[0].totalCorredoresSexo;
        resultadoA4.textContent = amigoCuatro10k[0].posicionSexo +"/"+ amigoCuatro10k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro10k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres10k[0].porcentajePorEdad;
        barraAmigo4.style.height = amigoCuatro10k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno10k[0].posicionEdad +"/"+ amigoUno10k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos10k[0].posicionEdad +"/"+ amigoDos10k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres10k[0].posicionEdad +"/"+ amigoTres10k[0].totalCorredoresEdad;
        resultadoA4.textContent = amigoCuatro10k[0].posicionEdad +"/"+ amigoCuatro10k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        resultadoA1.textContent = amigoUno10k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos10k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres10k[0].ritmo + 'min/km';
        resultadoA4.textContent = amigoCuatro10k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        barraAmigo4.style.height = Number.parseInt(ppga4);
        resultadoA1.textContent = amigoUno10k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos10k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres10k[0].tiempoNeto;
        resultadoA4.textContent = amigoCuatro10k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });

    graficosCirculares4Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
    graficosCircularesA4();
}

function cuatroAmigos5k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;
    const amigo4 = amigosForm.amigo4;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'inline-block';
    barraAmigo5.style.display = 'none';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(4, 1fr)';
    graficosBarra.style.width = '22rem';

    amigoUno5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo1);
    amigoDos5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo2);
    amigoTres5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo3);
    amigoCuatro5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo4);

    ppga1 = (100 - (amigoUno5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga4 = (100 - (amigoCuatro5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;
    barraAmigo4.style.height = ppga4;

    nombreAmigo1.textContent = amigoUno5k[0].nombre + " " + amigoUno5k[0].apellido;
    nombreAmigo2.textContent = amigoDos5k[0].nombre + " " + amigoDos5k[0].apellido;
    nombreAmigo3.textContent = amigoTres5k[0].nombre + " " + amigoTres5k[0].apellido;
    nombreAmigo4.textContent = amigoCuatro5k[0].nombre + " " + amigoCuatro5k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";
    nombreCompetidor4.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    progressEndAmigo4 = Number.parseInt(ppga4);

    resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres5k[0].posicionGeneral +"/"+ amigoTres5k[0].totalCorredoresGeneral;
    resultadoA4.textContent = amigoCuatro5k[0].posicionGeneral +"/"+ amigoCuatro5k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres5k[0].posicionGeneral +"/"+ amigoTres5k[0].totalCorredoresGeneral;
        resultadoA4.textContent = amigoCuatro5k[0].posicionGeneral +"/"+ amigoCuatro5k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA4();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro5k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres5k[0].porcentajePorGenero;
        barraAmigo4.style.height = amigoCuatro5k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno5k[0].posicionSexo +"/"+ amigoUno5k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos5k[0].posicionSexo +"/"+ amigoDos5k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres5k[0].posicionSexo +"/"+ amigoTres5k[0].totalCorredoresSexo;
        resultadoA4.textContent = amigoCuatro5k[0].posicionSexo +"/"+ amigoCuatro5k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro5k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres5k[0].porcentajePorEdad;
        barraAmigo4.style.height = amigoCuatro5k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno5k[0].posicionEdad +"/"+ amigoUno5k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos5k[0].posicionEdad +"/"+ amigoDos5k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres5k[0].posicionEdad +"/"+ amigoTres5k[0].totalCorredoresEdad;
        resultadoA4.textContent = amigoCuatro5k[0].posicionEdad +"/"+ amigoCuatro5k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        resultadoA1.textContent = amigoUno5k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos5k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres5k[0].ritmo + 'min/km';
        resultadoA4.textContent = amigoCuatro5k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        barraAmigo4.style.height = Number.parseInt(ppga4);
        resultadoA1.textContent = amigoUno5k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos5k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres5k[0].tiempoNeto;
        resultadoA4.textContent = amigoCuatro5k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
    });

    graficosCirculares4Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
    graficosCircularesA4();
    

}

function graficosCirculares4Amigos(){
    graficosCirculares3Amigos()
    progressBarA4.parentElement.style.display = "inline-block";
}

function cincoAmigos21k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;
    const amigo4 = amigosForm.amigo4;
    const amigo5 = amigosForm.amigo5;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'inline-block';
    barraAmigo5.style.display = 'inline-block';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(5, 1fr)';
    graficosBarra.style.width = '27rem';

    amigoUno21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo1);
    amigoDos21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo2);
    amigoTres21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo3);
    amigoCuatro21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo4);
    amigoCinco21k = general21k.filter(dorsal21k => dorsal21k.dorsal == amigo5);

    ppga1 = (100 - (amigoUno21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga4 = (100 - (amigoCuatro21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";
    ppga5 = (100 - (amigoCinco21k[0].posicionGeneral/general21k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;
    barraAmigo4.style.height = ppga4;
    barraAmigo5.style.height = ppga5;

    nombreAmigo1.textContent = amigoUno21k[0].nombre + " " + amigoUno21k[0].apellido;
    nombreAmigo2.textContent = amigoDos21k[0].nombre + " " + amigoDos21k[0].apellido;
    nombreAmigo3.textContent = amigoTres21k[0].nombre + " " + amigoTres21k[0].apellido;
    nombreAmigo4.textContent = amigoCuatro21k[0].nombre + " " + amigoCuatro21k[0].apellido;
    nombreAmigo5.textContent = amigoCinco21k[0].nombre + " " + amigoCinco21k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";
    nombreCompetidor4.style.display = "inline-block";
    nombreCompetidor5.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    progressEndAmigo4 = Number.parseInt(ppga4);
    progressEndAmigo5 = Number.parseInt(ppga5);

    resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres21k[0].posicionGeneral +"/"+ amigoTres21k[0].totalCorredoresGeneral;
    resultadoA4.textContent = amigoCuatro21k[0].posicionGeneral +"/"+ amigoCuatro21k[0].totalCorredoresGeneral;
    resultadoA5.textContent = amigoCinco21k[0].posicionGeneral +"/"+ amigoCinco21k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        barraAmigo5.style.height = ppga5;
        resultadoA1.textContent = amigoUno21k[0].posicionGeneral +"/"+ amigoUno21k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos21k[0].posicionGeneral +"/"+ amigoDos21k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres21k[0].posicionGeneral +"/"+ amigoTres21k[0].totalCorredoresGeneral;
        resultadoA5.textContent = amigoCinco21k[0].posicionGeneral +"/"+ amigoCinco21k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA4();
        graficosCircularesA5();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro21k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo5 = Number.parseInt((amigoCinco21k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres21k[0].porcentajePorGenero;
        barraAmigo4.style.height = amigoCuatro21k[0].porcentajePorGenero;
        barraAmigo5.style.height = amigoCinco21k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno21k[0].posicionSexo +"/"+ amigoUno21k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos21k[0].posicionSexo +"/"+ amigoDos21k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres21k[0].posicionSexo +"/"+ amigoTres21k[0].totalCorredoresSexo;
        resultadoA4.textContent = amigoCuatro21k[0].posicionSexo +"/"+ amigoCuatro21k[0].totalCorredoresSexo;
        resultadoA5.textContent = amigoCinco21k[0].posicionSexo +"/"+ amigoCinco21k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro21k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo5 = Number.parseInt((amigoCinco21k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno21k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos21k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres21k[0].porcentajePorEdad;
        barraAmigo4.style.height = amigoCuatro21k[0].porcentajePorEdad;
        barraAmigo5.style.height = amigoCinco21k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno21k[0].posicionEdad +"/"+ amigoUno21k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos21k[0].posicionEdad +"/"+ amigoDos21k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres21k[0].posicionEdad +"/"+ amigoTres21k[0].totalCorredoresEdad;
        resultadoA4.textContent = amigoCuatro21k[0].posicionEdad +"/"+ amigoCuatro21k[0].totalCorredoresEdad;
        resultadoA5.textContent = amigoCinco21k[0].posicionEdad +"/"+ amigoCinco21k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        barraAmigo5.style.height = ppga5;
        resultadoA1.textContent = amigoUno21k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos21k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres21k[0].ritmo + 'min/km';
        resultadoA4.textContent = amigoCuatro21k[0].ritmo + 'min/km';
        resultadoA5.textContent = amigoCinco21k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        barraAmigo4.style.height = Number.parseInt(ppga4);
        barraAmigo5.style.height = Number.parseInt(ppga5);
        resultadoA1.textContent = amigoUno21k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos21k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres21k[0].tiempoNeto;
        resultadoA4.textContent = amigoCuatro21k[0].tiempoNeto;
        resultadoA5.textContent = amigoCinco21k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });

    graficosCirculares5Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
    graficosCircularesA4();
    graficosCircularesA5();

}



function cincoAmigos10k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;
    const amigo4 = amigosForm.amigo4;
    const amigo5 = amigosForm.amigo5;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'inline-block';
    barraAmigo5.style.display = 'inline-block';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(5, 1fr)';
    graficosBarra.style.width = '27rem';

    amigoUno10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo1);
    amigoDos10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo2);
    amigoTres10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo3);
    amigoCuatro10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo4);
    amigoCinco10k = general10k.filter(dorsal10k => dorsal10k.dorsal == amigo5);

    ppga1 = (100 - (amigoUno10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga4 = (100 - (amigoCuatro10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";
    ppga5 = (100 - (amigoCinco10k[0].posicionGeneral/general10k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;
    barraAmigo4.style.height = ppga4;
    barraAmigo5.style.height = ppga5;

    nombreAmigo1.textContent = amigoUno10k[0].nombre + " " + amigoUno10k[0].apellido;
    nombreAmigo2.textContent = amigoDos10k[0].nombre + " " + amigoDos10k[0].apellido;
    nombreAmigo3.textContent = amigoTres10k[0].nombre + " " + amigoTres10k[0].apellido;
    nombreAmigo4.textContent = amigoCuatro10k[0].nombre + " " + amigoCuatro10k[0].apellido;
    nombreAmigo5.textContent = amigoCinco10k[0].nombre + " " + amigoCinco10k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";
    nombreCompetidor4.style.display = "inline-block";
    nombreCompetidor5.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    progressEndAmigo4 = Number.parseInt(ppga4);
    progressEndAmigo5 = Number.parseInt(ppga5);

    resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres10k[0].posicionGeneral +"/"+ amigoTres10k[0].totalCorredoresGeneral;
    resultadoA4.textContent = amigoCuatro10k[0].posicionGeneral +"/"+ amigoCuatro10k[0].totalCorredoresGeneral;
    resultadoA5.textContent = amigoCinco10k[0].posicionGeneral +"/"+ amigoCinco10k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        barraAmigo5.style.height = ppga5;
        resultadoA1.textContent = amigoUno10k[0].posicionGeneral +"/"+ amigoUno10k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos10k[0].posicionGeneral +"/"+ amigoDos10k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres10k[0].posicionGeneral +"/"+ amigoTres10k[0].totalCorredoresGeneral;
        resultadoA5.textContent = amigoCinco10k[0].posicionGeneral +"/"+ amigoCinco10k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA4();
        graficosCircularesA5();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro10k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo5 = Number.parseInt((amigoCinco10k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres10k[0].porcentajePorGenero;
        barraAmigo4.style.height = amigoCuatro10k[0].porcentajePorGenero;
        barraAmigo5.style.height = amigoCinco10k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno10k[0].posicionSexo +"/"+ amigoUno10k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos10k[0].posicionSexo +"/"+ amigoDos10k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres10k[0].posicionSexo +"/"+ amigoTres10k[0].totalCorredoresSexo;
        resultadoA4.textContent = amigoCuatro10k[0].posicionSexo +"/"+ amigoCuatro10k[0].totalCorredoresSexo;
        resultadoA5.textContent = amigoCinco10k[0].posicionSexo +"/"+ amigoCinco10k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro10k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo5 = Number.parseInt((amigoCinco10k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno10k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos10k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres10k[0].porcentajePorEdad;
        barraAmigo4.style.height = amigoCuatro10k[0].porcentajePorEdad;
        barraAmigo5.style.height = amigoCinco10k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno10k[0].posicionEdad +"/"+ amigoUno10k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos10k[0].posicionEdad +"/"+ amigoDos10k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres10k[0].posicionEdad +"/"+ amigoTres10k[0].totalCorredoresEdad;
        resultadoA4.textContent = amigoCuatro10k[0].posicionEdad +"/"+ amigoCuatro10k[0].totalCorredoresEdad;
        resultadoA5.textContent = amigoCinco10k[0].posicionEdad +"/"+ amigoCinco10k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        barraAmigo5.style.height = ppga5;
        resultadoA1.textContent = amigoUno10k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos10k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres10k[0].ritmo + 'min/km';
        resultadoA4.textContent = amigoCuatro10k[0].ritmo + 'min/km';
        resultadoA5.textContent = amigoCinco10k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        barraAmigo4.style.height = Number.parseInt(ppga4);
        barraAmigo5.style.height = Number.parseInt(ppga5);
        resultadoA1.textContent = amigoUno10k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos10k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres10k[0].tiempoNeto;
        resultadoA4.textContent = amigoCuatro10k[0].tiempoNeto;
        resultadoA5.textContent = amigoCinco10k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });

    graficosCirculares5Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
    graficosCircularesA4();
    graficosCircularesA5();

}

function cincoAmigos5k(){
    resetGraficosCirculares()
    const amigo1 = amigosForm.amigo1;
    const amigo2 = amigosForm.amigo2;
    const amigo3 = amigosForm.amigo3;
    const amigo4 = amigosForm.amigo4;
    const amigo5 = amigosForm.amigo5;

    graficosEstadisticas.style.display = "block";

    barraAmigo1.style.display = 'inline-block';
    barraAmigo2.style.display = 'inline-block';
    barraAmigo3.style.display = 'inline-block';
    barraAmigo4.style.display = 'inline-block';
    barraAmigo5.style.display = 'inline-block';

    graficosBarraAmigos.style.gridTemplateColumns = 'repeat(5, 1fr)';
    graficosBarra.style.width = '27rem';

    amigoUno5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo1);
    amigoDos5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo2);
    amigoTres5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo3);
    amigoCuatro5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo4);
    amigoCinco5k = general5k.filter(dorsal5k => dorsal5k.dorsal == amigo5);

    ppga1 = (100 - (amigoUno5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga2 = (100 - (amigoDos5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga3 = (100 - (amigoTres5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga4 = (100 - (amigoCuatro5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";
    ppga5 = (100 - (amigoCinco5k[0].posicionGeneral/general5k.length)*100).toFixed(2)+ "%";

    barraAmigo1.style.height = ppga1;
    barraAmigo2.style.height = ppga2;
    barraAmigo3.style.height = ppga3;
    barraAmigo4.style.height = ppga4;
    barraAmigo5.style.height = ppga5;

    nombreAmigo1.textContent = amigoUno5k[0].nombre + " " + amigoUno5k[0].apellido;
    nombreAmigo2.textContent = amigoDos5k[0].nombre + " " + amigoDos5k[0].apellido;
    nombreAmigo3.textContent = amigoTres5k[0].nombre + " " + amigoTres5k[0].apellido;
    nombreAmigo4.textContent = amigoCuatro5k[0].nombre + " " + amigoCuatro5k[0].apellido;
    nombreAmigo5.textContent = amigoCinco5k[0].nombre + " " + amigoCinco5k[0].apellido;

    nombreCompetidor1.style.display = "inline-block";
    nombreCompetidor2.style.display = "inline-block";
    nombreCompetidor3.style.display = "inline-block";
    nombreCompetidor4.style.display = "inline-block";
    nombreCompetidor5.style.display = "inline-block";

    progressEndAmigo1 = Number.parseInt(ppga1);
    progressEndAmigo2 = Number.parseInt(ppga2);
    progressEndAmigo3 = Number.parseInt(ppga3);
    progressEndAmigo4 = Number.parseInt(ppga4);
    progressEndAmigo5 = Number.parseInt(ppga5);

    resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
    resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
    resultadoA3.textContent = amigoTres5k[0].posicionGeneral +"/"+ amigoTres5k[0].totalCorredoresGeneral;
    resultadoA4.textContent = amigoCuatro5k[0].posicionGeneral +"/"+ amigoCuatro5k[0].totalCorredoresGeneral;
    resultadoA5.textContent = amigoCinco5k[0].posicionGeneral +"/"+ amigoCinco5k[0].totalCorredoresGeneral;

    puestosGeneralBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        barraAmigo5.style.height = ppga5;
        resultadoA1.textContent = amigoUno5k[0].posicionGeneral +"/"+ amigoUno5k[0].totalCorredoresGeneral;
        resultadoA2.textContent = amigoDos5k[0].posicionGeneral +"/"+ amigoDos5k[0].totalCorredoresGeneral;
        resultadoA3.textContent = amigoTres5k[0].posicionGeneral +"/"+ amigoTres5k[0].totalCorredoresGeneral;
        resultadoA5.textContent = amigoCinco5k[0].posicionGeneral +"/"+ amigoCinco5k[0].totalCorredoresGeneral;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA4();
        graficosCircularesA5();
    });

    puestosSexoBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro5k[0].porcentajePorGenero).replace('%',''));
        progressEndAmigo5 = Number.parseInt((amigoCinco5k[0].porcentajePorGenero).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorGenero;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorGenero;
        barraAmigo3.style.height = amigoTres5k[0].porcentajePorGenero;
        barraAmigo4.style.height = amigoCuatro5k[0].porcentajePorGenero;
        barraAmigo5.style.height = amigoCinco5k[0].porcentajePorGenero;
        resultadoA1.textContent = amigoUno5k[0].posicionSexo +"/"+ amigoUno5k[0].totalCorredoresSexo;
        resultadoA2.textContent = amigoDos5k[0].posicionSexo +"/"+ amigoDos5k[0].totalCorredoresSexo;
        resultadoA3.textContent = amigoTres5k[0].posicionSexo +"/"+ amigoTres5k[0].totalCorredoresSexo;
        resultadoA4.textContent = amigoCuatro5k[0].posicionSexo +"/"+ amigoCuatro5k[0].totalCorredoresSexo;
        resultadoA5.textContent = amigoCinco5k[0].posicionSexo +"/"+ amigoCinco5k[0].totalCorredoresSexo;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    puestosEdadBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt((amigoUno5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo2 = Number.parseInt((amigoDos5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo3 = Number.parseInt((amigoTres5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo4 = Number.parseInt((amigoCuatro5k[0].porcentajePorEdad).replace('%',''));
        progressEndAmigo5 = Number.parseInt((amigoCinco5k[0].porcentajePorEdad).replace('%',''));
        barraAmigo1.style.height = amigoUno5k[0].porcentajePorEdad;
        barraAmigo2.style.height = amigoDos5k[0].porcentajePorEdad;
        barraAmigo3.style.height = amigoTres5k[0].porcentajePorEdad;
        barraAmigo4.style.height = amigoCuatro5k[0].porcentajePorEdad;
        barraAmigo5.style.height = amigoCinco5k[0].porcentajePorEdad;
        resultadoA1.textContent = amigoUno5k[0].posicionEdad +"/"+ amigoUno5k[0].totalCorredoresEdad;
        resultadoA2.textContent = amigoDos5k[0].posicionEdad +"/"+ amigoDos5k[0].totalCorredoresEdad;
        resultadoA3.textContent = amigoTres5k[0].posicionEdad +"/"+ amigoTres5k[0].totalCorredoresEdad;
        resultadoA4.textContent = amigoCuatro5k[0].posicionEdad +"/"+ amigoCuatro5k[0].totalCorredoresEdad;
        resultadoA5.textContent = amigoCinco5k[0].posicionEdad +"/"+ amigoCinco5k[0].totalCorredoresEdad;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    ritmosBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = ppga1;
        barraAmigo2.style.height = ppga2;
        barraAmigo3.style.height = ppga3;
        barraAmigo4.style.height = ppga4;
        barraAmigo5.style.height = ppga5;
        resultadoA1.textContent = amigoUno5k[0].ritmo + 'min/km';
        resultadoA2.textContent = amigoDos5k[0].ritmo + 'min/km';
        resultadoA3.textContent = amigoTres5k[0].ritmo + 'min/km';
        resultadoA4.textContent = amigoCuatro5k[0].ritmo + 'min/km';
        resultadoA5.textContent = amigoCinco5k[0].ritmo + 'min/km';
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });
    tiemposBoton.addEventListener('click', ()=>{
        progressEndAmigo1 = Number.parseInt(ppga1);
        progressEndAmigo2 = Number.parseInt(ppga2);
        progressEndAmigo3 = Number.parseInt(ppga3);
        progressEndAmigo4 = Number.parseInt(ppga4);
        progressEndAmigo5 = Number.parseInt(ppga5);
        barraAmigo1.style.height = Number.parseInt(ppga1);
        barraAmigo2.style.height = Number.parseInt(ppga2);
        barraAmigo3.style.height = Number.parseInt(ppga3);
        barraAmigo4.style.height = Number.parseInt(ppga4);
        barraAmigo5.style.height = Number.parseInt(ppga5);
        resultadoA1.textContent = amigoUno5k[0].tiempoNeto;
        resultadoA2.textContent = amigoDos5k[0].tiempoNeto;
        resultadoA3.textContent = amigoTres5k[0].tiempoNeto;
        resultadoA4.textContent = amigoCuatro5k[0].tiempoNeto;
        resultadoA5.textContent = amigoCinco5k[0].tiempoNeto;
        graficosCircularesA1();
        graficosCircularesA2();
        graficosCircularesA3();
        graficosCircularesA4();
        graficosCircularesA5();
    });

    graficosCirculares5Amigos();

    graficosCircularesA1();
    graficosCircularesA2();
    graficosCircularesA3();
    graficosCircularesA4();
    graficosCircularesA5();
}

function graficosCirculares5Amigos(){
    graficosCirculares4Amigos()
    progressBarA5.parentElement.style.display = "inline-block";
}

function resetGraficos(){
    barraAmigo1.style.display = 'none';
    barraAmigo2.style.display = 'none';
    barraAmigo3.style.display = 'none';
    barraAmigo4.style.display = 'none';
    barraAmigo5.style.display = 'none';
}

function resetGraficosCirculares(){
    PuestoGeneral()
    nombreCompetidor1.style.display = "none";
    nombreCompetidor2.style.display = "none";
    nombreCompetidor3.style.display = "none";
    nombreCompetidor4.style.display = "none";
    nombreCompetidor5.style.display = "none";
    graficosEstadisticas.style.disaplay = "none";
    progressBarA1.parentElement.style.display = "none";
    progressBarA2.parentElement.style.display = "none";
    progressBarA3.parentElement.style.display = "none";
    progressBarA4.parentElement.style.display = "none";
    progressBarA5.parentElement.style.display = "none";
}



let progressBarA1 = document.querySelector('.grafico-circular__amigo1 .circular-progress');
let progressBarA2 = document.querySelector('.grafico-circular__amigo2 .circular-progress');
let progressBarA3 = document.querySelector('.grafico-circular__amigo3 .circular-progress');
let progressBarA4 = document.querySelector('.grafico-circular__amigo4 .circular-progress');
let progressBarA5 = document.querySelector('.grafico-circular__amigo5 .circular-progress');
let porcentajeAmigo1 = document.querySelector('.grafico-circular__amigo1 .value-container');
let porcentajeAmigo2 = document.querySelector('.grafico-circular__amigo2 .value-container');
let porcentajeAmigo3 = document.querySelector('.grafico-circular__amigo3 .value-container');
let porcentajeAmigo4 = document.querySelector('.grafico-circular__amigo4 .value-container');
let porcentajeAmigo5 = document.querySelector('.grafico-circular__amigo5 .value-container');
let resultadoA1 = document.querySelector('.grafico-circular__amigo1 .resultado');
let resultadoA2 = document.querySelector('.grafico-circular__amigo2 .resultado');
let resultadoA3 = document.querySelector('.grafico-circular__amigo3 .resultado');
let resultadoA4 = document.querySelector('.grafico-circular__amigo4 .resultado');
let resultadoA5 = document.querySelector('.grafico-circular__amigo5 .resultado');
let graficoCircularAmigos = document.querySelector('.grafico-circular__amigos');

let nombreAmigo1 = document.querySelector('.nombre-amigo1 p');
let nombreAmigo2 = document.querySelector('.nombre-amigo2 p');
let nombreAmigo3 = document.querySelector('.nombre-amigo3 p');
let nombreAmigo4 = document.querySelector('.nombre-amigo4 p');
let nombreAmigo5 = document.querySelector('.nombre-amigo5 p');

const speed = 20;
const graficosEstadisticas = document.querySelector('.graficos-estadisticas');
const graficosCirculares = document.querySelector('.graficos-circulares');

const puestosGeneralBoton = document.querySelector('.texto-graficos__puesto-general');
const puestosSexoBoton = document.querySelector('.texto-graficos__puesto-sexo');
const puestosEdadBoton = document.querySelector('.texto-graficos__puesto-edad');
const ritmosBoton = document.querySelector('.texto-graficos__ritmo');
const tiemposBoton = document.querySelector('.texto-graficos__tiempo');

const cambioTexto = document.querySelectorAll('.titulo-resultado p');



PuestoGeneral();

function PuestoGeneral(){
    puestosGeneralBoton.classList.remove("sin-seleccion");
    puestosGeneralBoton.classList.add("seleccion-grafico");
    tiemposBoton.classList.add("sin-seleccion");
    puestosSexoBoton.classList.add("sin-seleccion");
    puestosEdadBoton.classList.add("sin-seleccion");
    ritmosBoton.classList.add("sin-seleccion");
    graficosCirculares.style.display = "block";
    cambioTexto.forEach(elemento => {
        elemento.textContent = 'Puestos Generales';
    });
}

function PuestoSexo(){
    puestosSexoBoton.classList.remove("sin-seleccion");
    puestosSexoBoton.classList.add("seleccion-grafico");
    tiemposBoton.classList.add("sin-seleccion");
    puestosGeneralBoton.classList.add("sin-seleccion");
    puestosEdadBoton.classList.add("sin-seleccion");
    ritmosBoton.classList.add("sin-seleccion");
    graficosCirculares.style.display = "block";
    cambioTexto.forEach(elemento => {
        elemento.textContent = 'Puestos Sexo';
    });
}
function PuestoEdad(){
    puestosEdadBoton.classList.remove("sin-seleccion");
    puestosEdadBoton.classList.add("seleccion-grafico");
    puestosSexoBoton.classList.add("sin-seleccion");
    puestosGeneralBoton.classList.add("sin-seleccion");
    tiemposBoton.classList.add("sin-seleccion");
    ritmosBoton.classList.add("sin-seleccion");
    graficosCirculares.style.display = "block";
    cambioTexto.forEach(elemento => {
        elemento.textContent = 'Puestos Edad';
    });
    
}

function soloRitmos(){
    puestosGeneralBoton.classList.add("sin-seleccion");
    puestosSexoBoton.classList.add("sin-seleccion");
    puestosEdadBoton.classList.add("sin-seleccion");
    tiemposBoton.classList.add("sin-seleccion");
    ritmosBoton.classList.remove("sin-seleccion");
    ritmosBoton.classList.add("seleccion-grafico");
    graficosCirculares.style.display = "block";
    cambioTexto.forEach(elemento => {
        elemento.textContent = 'Ritmos';
    });
}

function soloTiempos(){
    puestosGeneralBoton.classList.add("sin-seleccion");
    puestosSexoBoton.classList.add("sin-seleccion");
    puestosEdadBoton.classList.add("sin-seleccion");
    ritmosBoton.classList.add("sin-seleccion");
    tiemposBoton.classList.add("seleccion-grafico");
    tiemposBoton.classList.remove("sin-seleccion");
    graficosCirculares.style.display = "block";
    cambioTexto.forEach(elemento => {
        elemento.textContent = 'Tiempos';
    });
}

puestosGeneralBoton.addEventListener('click', PuestoGeneral);
puestosSexoBoton.addEventListener('click', PuestoSexo);
puestosEdadBoton.addEventListener('click', PuestoEdad);
ritmosBoton.addEventListener('click', soloRitmos);
tiemposBoton.addEventListener('click', soloTiempos);








function graficosCircularesA1(){
    let progressValueAmigo1 = 0;
    if(progressEndAmigo1 == 0){
        progressEndAmigo1 = 1
    }
    let progressAmigo1 = setInterval(() => {
        progressValueAmigo1+=1
        porcentajeAmigo1.textContent = `${progressValueAmigo1}%`;
        progressBarA1.style.background = `conic-gradient( rgb(255, 1, 103) ${progressValueAmigo1 * 3.6}deg, #34393f ${progressValueAmigo1 *3.6}deg`;
        if(progressValueAmigo1 == progressEndAmigo1){
            clearInterval(progressAmigo1);
            resultadoA1.style.opacity = '1';
            resultadoA1.style.top = '0';
        }
        if (progressValueAmigo1 > progressEndAmigo1) {
            clearInterval(progressAmigo1);
            porcentajeAmigo1.textContent = `${progressEndAmigo1}%`;
            progressBarA1.style.background = `conic-gradient( rgb(255, 1, 103) ${progressEndAmigo1 * 3.6}deg, #34393f ${progressEndAmigo1 *3.6}deg`;
        }
    }, speed);

    
}

function graficosCircularesA2(){
    let progressValueAmigo2 = 0;
    if(progressEndAmigo2 == 0){
        progressEndAmigo2 = 1
    }
    let progressAmigo2 = setInterval(() => {
        progressValueAmigo2+=1
        porcentajeAmigo2.textContent = `${progressValueAmigo2}%`;
        progressBarA2.style.background = `conic-gradient( rgba(168,71,210,1) ${progressValueAmigo2 * 3.6}deg, #34393f ${progressValueAmigo2 *3.6}deg`;
        if(progressValueAmigo2 == progressEndAmigo2){
            clearInterval(progressAmigo2);
            resultadoA2.style.opacity = '1';
            resultadoA2.style.top = '0';  
        }
        if (progressValueAmigo2 > progressEndAmigo2) {
            clearInterval(progressAmigo2);
            porcentajeAmigo2.textContent = `${progressEndAmigo2}%`;
            progressBarA2.style.background = `conic-gradient( rgb(255, 1, 103) ${progressEndAmigo2 * 3.6}deg, #34393f ${progressEndAmigo2 *3.6}deg`;
        }
    }, speed);
    
}


function graficosCircularesA3(){
    let progressValueAmigo3 = 0;
    if(progressEndAmigo3 == 0){
        progressEndAmigo3 = 1
    }
    let progressAmigo3 = setInterval(() => {
        progressValueAmigo3+=1
        porcentajeAmigo3.textContent = `${progressValueAmigo3}%`;
        progressBarA3.style.background = `conic-gradient( rgba(33,219,236,1) ${progressValueAmigo3 * 3.6}deg, #34393f ${progressValueAmigo3 *3.6}deg`;
        if(progressValueAmigo3 == progressEndAmigo3){
            clearInterval(progressAmigo3);
            resultadoA3.style.opacity = '1';
            resultadoA3.style.top = '0';  
        }
        if (progressValueAmigo3 > progressEndAmigo3) {
            clearInterval(progressAmigo3);
            porcentajeAmigo3.textContent = `${progressEndAmigo3}%`;
            progressBarA3.style.background = `conic-gradient( rgb(255, 1, 103) ${progressEndAmigo3 * 3.6}deg, #34393f ${progressEndAmigo3 *3.6}deg`;
        }
    }, speed);
    
}

function graficosCircularesA4(){
    let progressValueAmigo4 = 0;
    if(progressEndAmigo4 == 0){
        progressEndAmigo4 = 1
    }
    let progressAmigo4 = setInterval(() => {
        progressValueAmigo4+=1
        porcentajeAmigo4.textContent = `${progressValueAmigo4}%`;
        progressBarA4.style.background = `conic-gradient( rgba(132,255,83,1) ${progressValueAmigo4 * 3.6}deg, #34393f ${progressValueAmigo4 *3.6}deg`;
        if(progressValueAmigo4 == progressEndAmigo4){
            clearInterval(progressAmigo4);
            resultadoA4.style.opacity = '1';
            resultadoA4.style.top = '0';  
        }
        if (progressValueAmigo4 > progressEndAmigo4) {
            clearInterval(progressAmigo4);
            porcentajeAmigo4.textContent = `${progressEndAmigo4}%`;
            progressBarA4.style.background = `conic-gradient( rgb(255, 1, 103) ${progressEndAmigo4 * 3.6}deg, #34393f ${progressEndAmigo4 *3.6}deg`;
        }
    }, speed);
    
}


function graficosCircularesA5(){
    let progressValueAmigo5 = 0;
    if(progressEndAmigo5 == 0){
        progressEndAmigo5 = 1
    }
    let progressAmigo5 = setInterval(() => {
        progressValueAmigo5+=1
        porcentajeAmigo5.textContent = `${progressValueAmigo5}%`;
        progressBarA5.style.background = `conic-gradient( rgba(255,217,50,1) ${progressValueAmigo5 * 3.6}deg, #34393f ${progressValueAmigo5 *3.6}deg`;
        if(progressValueAmigo5 == progressEndAmigo5){
            clearInterval(progressAmigo5);
            resultadoA5.style.opacity = '1';
            resultadoA5.style.top = '0';  
        }
        if (progressValueAmigo5 > progressEndAmigo5) {
            clearInterval(progressAmigo5);
            porcentajeAmigo5.textContent = `${progressEndAmigo5}%`;
            progressBarA5.style.background = `conic-gradient( rgb(255, 1, 103) ${progressEndAmigo5 * 3.6}deg, #34393f ${progressEndAmigo5 *3.6}deg`;
        }
    }, speed);
    
}


})