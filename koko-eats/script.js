function kokoEat(arr, k) {
    let left = 1;
    let right = Math.max(...arr);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        const h = arr.reduce((sum, bananas) => sum + Math.ceil(bananas / mid), 0);

        if (h > k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startSimulation() {
    const arr = document.getElementById('banana-input').value.split(',').map(Number);
    const k = parseInt(document.getElementById('hours-input').value);
    const speed = kokoEat(arr, k);

    document.getElementById('result').innerText = `Minimum Speed: ${speed} bananas/hour`;

    const visualization = document.getElementById('visualization');
    visualization.innerHTML = '';

    const piles = arr.map((count, i) => {
        const div = document.createElement('div');
        div.className = 'pile';
        div.id = `pile-${i}`;

        for (let j = 0; j < count; j++) {
            const banana = document.createElement('div');
            banana.innerText = '🍌';
            div.appendChild(banana);
        }

        // Add Koko emoji to the pile
        const koko = document.createElement('div');
        koko.innerText = i === 0 ? '🐵' : '';
        koko.className = 'koko';
        koko.id = `koko-${i}`;
        div.appendChild(koko);

        visualization.appendChild(div);
        return count;
    });

    let hour = 0;
    let remaining = [...arr];

    while (hour < k && remaining.some(n => n > 0)) {
        for (let i = 0; i < remaining.length; i++) {
            if (remaining[i] > 0) {
                const eat = Math.min(speed, remaining[i]);
                remaining[i] -= eat;

                const pileDiv = document.getElementById(`pile-${i}`);
                for (let b = 0; b < eat; b++) {
                    if (pileDiv.childNodes.length > 1) {
                        pileDiv.removeChild(pileDiv.childNodes[0]);
                    }
                }

                // Move Koko to this pile
                for (let j = 0; j < remaining.length; j++) {
                    const kokoDiv = document.getElementById(`koko-${j}`);
                    kokoDiv.innerText = j === i ? '🐵' : '';
                }

                break; // Only one pile per hour
            }
        }

        hour++;
        await sleep(1000); // Simulate one hour
    }

    document.getElementById('result').innerText += ` — Finished in ${hour} hour(s)!`;
}
