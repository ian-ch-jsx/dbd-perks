/* eslint-disable eqeqeq */
import { survivorPerks } from './data/survivor-perks.js';

const rollBtn = document.getElementById('roll-btn');
const survPerk1Img = document.getElementById('perk-1-slot');
const survPerk2Img = document.getElementById('perk-2-slot');
const survPerk3Img = document.getElementById('perk-3-slot');
const survPerk4Img = document.getElementById('perk-4-slot');
const perkNames = document.getElementById('perk-names');

let exclusions = document.querySelectorAll('.exclusions');
let finalPerks = survivorPerks;

const filterPerks = () =>{
    exclusions.forEach((item, index) =>{
        if (item.checked && index === 0) {
            finalPerks = finalPerks.filter(survivorPerks => survivorPerks.secondary !== 'Exhaustion');
        }
        else if (item.checked && index === 1) {
            finalPerks = finalPerks.filter(survivorPerks => survivorPerks.secondary !== 'Healing');
        }
        else if (item.checked && index === 2) {
            finalPerks = finalPerks.filter(survivorPerks => survivorPerks.secondary !== 'Second Chance');
        }
        else if (item.checked && index === 3) {
            finalPerks = finalPerks.filter(survivorPerks => survivorPerks.secondary !== 'Loot');
        }
    });
};

const generatePerks = () =>{
    let randPerk1 = Math.floor(Math.random() * finalPerks.length);
    let randPerk2 = Math.floor(Math.random() * finalPerks.length);
    let randPerk3 = Math.floor(Math.random() * finalPerks.length);
    let randPerk4 = Math.floor(Math.random() * finalPerks.length);

    while (
        randPerk1 === randPerk2 ||
        randPerk1 === randPerk3 ||
        randPerk1 === randPerk4 ||
        randPerk2 === randPerk3 ||
        randPerk2 === randPerk4 ||
        randPerk3 === randPerk4 
    ){
        randPerk1 = Math.floor(Math.random() * finalPerks.length);
        randPerk2 = Math.floor(Math.random() * finalPerks.length);
        randPerk3 = Math.floor(Math.random() * finalPerks.length);
        randPerk4 = Math.floor(Math.random() * finalPerks.length);   
    }
    let survPerk1 = finalPerks[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    let survPerk2 = finalPerks[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    let survPerk3 = finalPerks[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    let survPerk4 = finalPerks[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
    perkNames.textContent = survPerk1.name + survPerk2.name + survPerk3.name + survPerk4.name;
};

rollBtn.addEventListener('click', ()=> {
    filterPerks();
    generatePerks();
});
