import { survivorPerks } from './data/survivor-perks.js';

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
    ){
        randPerk1 = Math.floor(Math.random() * survivorPerks.length);
        randPerk2 = Math.floor(Math.random() * survivorPerks.length);
        randPerk3 = Math.floor(Math.random() * survivorPerks.length);
        randPerk4 = Math.floor(Math.random() * survivorPerks.length);   
    }
    let survPerk1 = survivorPerks[randPerk1];
    console.log(survPerk1.name);

    let survPerk2 = survivorPerks[randPerk2];
    console.log(survPerk2.name);

    let survPerk3 = survivorPerks[randPerk3];
    console.log(survPerk3.name);

    let survPerk4 = survivorPerks[randPerk4];
    console.log(survPerk4.name);
};
generatePerks();
rollBtn.addEventListener('click', ()=> {
});