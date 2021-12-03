/* eslint-disable eqeqeq */
import { survivorPerks } from './data/survivor-perks.js';
import { matchWon, matchLost } from './utils.js';

const rollBtn = document.getElementById('roll-btn');
const survPerk1Img = document.getElementById('perk-1-image');
const survPerk2Img = document.getElementById('perk-2-image');
const survPerk3Img = document.getElementById('perk-3-image');
const survPerk4Img = document.getElementById('perk-4-image');
const perkName1 = document.getElementById('perk-1-name');
const perkName2 = document.getElementById('perk-2-name');
const perkName3 = document.getElementById('perk-3-name');
const perkName4 = document.getElementById('perk-4-name');
const wonBtn = document.getElementById('escaped-btn');
const lostBtn = document.getElementById('sacrificed-btn');
const statsBtn = document.getElementById('stats');

let exclusions = document.querySelectorAll('.exclusions');
let finalPerks = survivorPerks;

const filterPerks = () => {
    exclusions.forEach((item, index) => {
        if (item.checked && index === 0) {
            finalPerks = finalPerks.filter(
                (survivorPerks) => survivorPerks.secondary !== 'Exhaustion'
            );
        } else if (item.checked && index === 1) {
            finalPerks = finalPerks.filter(
                (survivorPerks) => survivorPerks.secondary !== 'Healing'
            );
        } else if (item.checked && index === 2) {
            finalPerks = finalPerks.filter(
                (survivorPerks) => survivorPerks.secondary !== 'Second Chance'
            );
        } else if (item.checked && index === 3) {
            finalPerks = finalPerks.filter(
                (survivorPerks) => survivorPerks.secondary !== 'Loot'
            );
        }
    });
};

let resultPerks1;
let resultPerks2;
let resultPerks3;
let resultPerks4;

const generatePerks = () => {
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
    ) {
        randPerk1 = Math.floor(Math.random() * finalPerks.length);
        randPerk2 = Math.floor(Math.random() * finalPerks.length);
        randPerk3 = Math.floor(Math.random() * finalPerks.length);
        randPerk4 = Math.floor(Math.random() * finalPerks.length);
    }
    let survPerk1 = finalPerks[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    perkName1.textContent = survPerk1.name;
    let survPerk2 = finalPerks[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    perkName2.textContent = survPerk2.name;
    let survPerk3 = finalPerks[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    perkName3.textContent = survPerk3.name;
    let survPerk4 = finalPerks[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
    perkName4.textContent = survPerk4.name;

    resultPerks1 = survPerk1.id;
    resultPerks2 = survPerk2.id;
    resultPerks3 = survPerk3.id;
    resultPerks4 = survPerk4.id;
};

function results(){
    filterPerks();
    generatePerks();
}

rollBtn.addEventListener('click', () => {
    wonBtn.classList.remove('hidden');
    lostBtn.classList.remove('hidden');
    results();
    finalPerks = survivorPerks; 
});

wonBtn.addEventListener('click', () => {
    matchWon(resultPerks1);
    matchWon(resultPerks2);
    matchWon(resultPerks3);
    matchWon(resultPerks4);
});

lostBtn.addEventListener('click', () => {
    matchLost(resultPerks1);
    matchLost(resultPerks2);
    matchLost(resultPerks3);
    matchLost(resultPerks4);
});

statsBtn.addEventListener('click', () => {
    window.location.replace('./stats');
})