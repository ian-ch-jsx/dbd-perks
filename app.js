import { survivorPerks } from './data/survivor-perks.js';

const rollBtn = document.getElementById('roll-btn');
const reRollBtn = document.getElementById('re-roll-btn');
const winLossContainer = document.getElementById('win-loss-container');
const escapedLabel = document.getElementById('escaped-label');
const sacrificedLabel = document.getElementById('sacrificed-label');
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
};

const generateNoExhaustPerks = () =>{
    const notExhaust = survivorPerks.filter(survivorPerks => survivorPerks.secondary !== 'Exhaustion');
    let randPerk1 = Math.floor(Math.random() * notExhaust.length);
    let randPerk2 = Math.floor(Math.random() * notExhaust.length);
    let randPerk3 = Math.floor(Math.random() * notExhaust.length);
    let randPerk4 = Math.floor(Math.random() * notExhaust.length);
    

    while (
        randPerk1 === randPerk2 ||
        randPerk1 === randPerk3 ||
        randPerk1 === randPerk4 ||
        randPerk2 === randPerk3 ||
        randPerk2 === randPerk4 ||
        randPerk3 === randPerk4 
    ){
        randPerk1 = Math.floor(Math.random() * notExhaust.length);
        randPerk2 = Math.floor(Math.random() * notExhaust.length);
        randPerk3 = Math.floor(Math.random() * notExhaust.length);
        randPerk4 = Math.floor(Math.random() * notExhaust.length);   
    }
    let survPerk1 = notExhaust[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    let survPerk2 = notExhaust[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    let survPerk3 = notExhaust[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    let survPerk4 = notExhaust[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
};

const generateNoHealingPerks = () =>{
    const notHealing = survivorPerks.filter(survivorPerks => survivorPerks.secondary !== 'Healing');
    let randPerk1 = Math.floor(Math.random() * notHealing.length);
    let randPerk2 = Math.floor(Math.random() * notHealing.length);
    let randPerk3 = Math.floor(Math.random() * notHealing.length);
    let randPerk4 = Math.floor(Math.random() * notHealing.length);
    

    while (
        randPerk1 === randPerk2 ||
        randPerk1 === randPerk3 ||
        randPerk1 === randPerk4 ||
        randPerk2 === randPerk3 ||
        randPerk2 === randPerk4 ||
        randPerk3 === randPerk4 
    ){
        randPerk1 = Math.floor(Math.random() * notHealing.length);
        randPerk2 = Math.floor(Math.random() * notHealing.length);
        randPerk3 = Math.floor(Math.random() * notHealing.length);
        randPerk4 = Math.floor(Math.random() * notHealing.length);   
    }
    let survPerk1 = notHealing[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    let survPerk2 = notHealing[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    let survPerk3 = notHealing[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    let survPerk4 = notHealing[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
};

const generateNoSecondChancePerks = () =>{
    const notChance = survivorPerks.filter(survivorPerks => survivorPerks.secondary !== 'Second Chance');
    let randPerk1 = Math.floor(Math.random() * notChance.length);
    let randPerk2 = Math.floor(Math.random() * notChance.length);
    let randPerk3 = Math.floor(Math.random() * notChance.length);
    let randPerk4 = Math.floor(Math.random() * notChance.length);
    

    while (
        randPerk1 === randPerk2 ||
        randPerk1 === randPerk3 ||
        randPerk1 === randPerk4 ||
        randPerk2 === randPerk3 ||
        randPerk2 === randPerk4 ||
        randPerk3 === randPerk4 
    ){
        randPerk1 = Math.floor(Math.random() * notChance.length);
        randPerk2 = Math.floor(Math.random() * notChance.length);
        randPerk3 = Math.floor(Math.random() * notChance.length);
        randPerk4 = Math.floor(Math.random() * notChance.length);   
    }
    let survPerk1 = notChance[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    let survPerk2 = notChance[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    let survPerk3 = notChance[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    let survPerk4 = notChance[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
};

const generateNoLootPerks = () =>{
    const notLoot = survivorPerks.filter(survivorPerks => survivorPerks.secondary !== 'Loot');
    let randPerk1 = Math.floor(Math.random() * notLoot.length);
    let randPerk2 = Math.floor(Math.random() * notLoot.length);
    let randPerk3 = Math.floor(Math.random() * notLoot.length);
    let randPerk4 = Math.floor(Math.random() * notLoot.length);
    

    while (
        randPerk1 === randPerk2 ||
        randPerk1 === randPerk3 ||
        randPerk1 === randPerk4 ||
        randPerk2 === randPerk3 ||
        randPerk2 === randPerk4 ||
        randPerk3 === randPerk4 
    ){
        randPerk1 = Math.floor(Math.random() * notLoot.length);
        randPerk2 = Math.floor(Math.random() * notLoot.length);
        randPerk3 = Math.floor(Math.random() * notLoot.length);
        randPerk4 = Math.floor(Math.random() * notLoot.length);   
    }
    let survPerk1 = notLoot[randPerk1];
    survPerk1Img.src = `./assets/${survPerk1.image}`;
    let survPerk2 = notLoot[randPerk2];
    survPerk2Img.src = `./assets/${survPerk2.image}`;
    let survPerk3 = notLoot[randPerk3];
    survPerk3Img.src = `./assets/${survPerk3.image}`;
    let survPerk4 = notLoot[randPerk4];
    survPerk4Img.src = `./assets/${survPerk4.image}`;
};

rollBtn.addEventListener('click', ()=> {
    const exhaustCheck = document.getElementById('exhaust-check');
    const healingCheck = document.getElementById('healing-check');
    const chanceCheck = document.getElementById('chance-check');
    const lootCheck = document.getElementById('loot-check');

    if (exhaustCheck.checked) {
        generateNoExhaustPerks();
    } else if (healingCheck.checked) {
        generateNoHealingPerks();
    } else if (chanceCheck.checked) {
        generateNoSecondChancePerks();
    } else if (lootCheck.checked) {
        generateNoLootPerks();
    } else if (lootCheck.checked) {
        generateNoLootPerks();
    } else {
        generatePerks();
    }
    // rollBtn.classList.add('hidden');
    // reRollBtn.classList.remove('hidden');
    // winLossContainer.classList.remove('hidden');
    // escapedLabel.classList.remove('hidden');
    // sacrificedLabel.classList.remove('hidden');
});

reRollBtn.addEventListener('click', ()=> {
    const winRadio = document.querySelector('input[type=radio]:checked#win');
    const lossRadio = document.querySelector('input[type=radio]:checked#loss');
    if (winRadio) {
        console.log('you won');
    }
    else if (lossRadio) {
        console.log('you lost');
    }
    else {
        console.log('error');
    }
    document.getElementById('win').checked = false;
    document.getElementById('loss').checked = false;
    generatePerks();
});