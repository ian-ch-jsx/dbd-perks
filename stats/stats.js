import { survivorPerks } from '../data/survivor-perks.js';
import { findByID, getStats } from '../utils.js';

const stats = getStats();
const main = document.getElementById('main');
const homeBtn = document.getElementById('home-btn');
const resetBtn = document.getElementById('clear');

for (let stat of stats){
    const perk = findByID(survivorPerks, stat.id);
    const div = document.createElement('div');
    div.classList.add('results-container');
    const img = document.createElement('img');
    img.src = perk.image;
    img.classList.add('stats-image');
    const header = document.createElement('h3');
    header.textContent = perk.name;
    
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Won: ${stat.won}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Lost: ${stat.lost}`;

    div.append(img, header, resultsSpan1, resultsSpan2);
    main.append(div);
}

homeBtn.addEventListener('click', () => {
    window.location.replace('../index.html');
});

resetBtn.addEventListener('click', ()=>{
    localStorage.clear();
    window.location.reload();
});