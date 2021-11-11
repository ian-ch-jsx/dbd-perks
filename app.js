import { survivorPerks } from './data/survivor-perks.js';

const rollBtn = document.getElementById('roll-btn');
const names = document.getElementById('names');
const survPerk1Img = document.getElementById('perk-1-slot');
const survPerk2Img = document.getElementById('perk-2-slot');
const survPerk3Img = document.getElementById('perk-3-slot');
const survPerk4Img = document.getElementById('perk-4-slot');

const generatePerks = () =>{
    let randPerk1 = Math.floor(Math.random() * survivorPerks.length);
    let randPerk2 = Math.floor(Math.random() * survivorPerks.length);
    let randPerk3 = Math.floor(Math.random() * survivorPerks.length);
    let randPerk4 = Math.floor(Math.random() * survivorPerks.length);

    while (
        randPerk1 === randPerk2 ||
        randPerk1 === randPerk3 ||
        randPerk1 === randPerk4 ||
        randPerk2 === randPerk3 ||
        randPerk2 === randPerk4 ||
        randPerk3 === randPerk4 
    ){
        randPerk1 = Math.floor(Math.random() * survivorPerks.length);
        randPerk2 = Math.floor(Math.random() * survivorPerks.length);
        randPerk3 = Math.floor(Math.random() * survivorPerks.length);
        randPerk4 = Math.floor(Math.random() * survivorPerks.length);   
    }
    let survPerk1 = survivorPerks[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    let survPerk2 = survivorPerks[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    let survPerk3 = survivorPerks[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    let survPerk4 = survivorPerks[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
    names.textContent = survPerk1.name + survPerk2.name + survPerk3.name + survPerk4.name;
};

rollBtn.addEventListener('click', ()=> {
    generatePerks();
});