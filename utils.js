export function findByID(perks, id){
    for (let perk of perks){
        if (perk.id === id){
            return perk;
        }
    }
}

export function getStats() {
    const statsString = localStorage.getItem('STATS') || '[]';
    const stats = JSON.parse(statsString);
    return stats;
}

export function setStats(stats){
    localStorage.setItem('STATS', JSON.stringify(stats));
}

export function matchWon(id) {
    let stats = getStats();
    let perks = findByID(stats, id);

    if (perks){
        perks.won++;
    } else {
        const newPerks = { id: id, won: 1, lost: 0 };
        stats.push(newPerks);
    }
    setStats(stats);
}

export function matchLost(id) {
    let stats = getStats();
    let perks = findByID(stats, id);

    if (perks){
        perks.lost++;
    } else {
        const newPerks = { id: id, won: 0, lost: 1 };
        stats.push(newPerks);
    }
    setStats(stats);
}