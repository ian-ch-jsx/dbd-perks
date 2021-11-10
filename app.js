import { survivorPerks } from './data/survivor-perks.js';
// import { generatePerks } from './utils.js';

const rollBtn = document.getElementById('roll-btn');

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
    )
    {
        randPerk1 = Math.floor(Math.random() * survivorPerks.length);
        randPerk2 = Math.floor(Math.random() * survivorPerks.length);
        randPerk3 = Math.floor(Math.random() * survivorPerks.length);
        randPerk4 = Math.floor(Math.random() * survivorPerks.length);   
    }
};


rollBtn.addEventListener('click', ()=> {
    generatePerks;
    console.log(generatePerks);
});