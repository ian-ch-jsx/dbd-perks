import { survivorPerks } from '../data/survivor-perks.js';
import { findByID, getStats } from '../utils.js';

const stats = getStats();
const main = document.getElementById('main');

for (let stat of stats){
    const perk = findByID(survivorPerks, stat.id);
    const div = document.createElement('div');
    div.classList.add('results-container');
    const header = document.createElement('h3');
    header.textContent = perk.name;
    
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `Won: ${stat.won}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `Lost: ${stat.lost}`;

    div.append(header, resultsSpan1, resultsSpan2);
    main.append(div);
    console.log('wtf');
}
