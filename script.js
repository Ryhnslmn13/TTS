const answers = {
    '0-0': { letter: 'P', number: 1 }, '0-1': { letter: 'I' }, '0-2': { letter: 'A' }, '0-3': { letter: 'N' }, '0-4': { letter: 'O' },
    '1-0': { letter: 'H', number: 2 }, '2-0': { letter: 'I' }, '3-0': { letter: 'J' }, '4-0': { letter: 'A' }, '5-0': { letter: 'U' },
    '2-3': { letter: 'G', number: 3 }, '2-4': { letter: 'A' }, '2-5': { letter: 'S' },
    '2-2': { letter: 'A', number: 4 }, '3-2': { letter: 'N' }, '4-2': { letter: 'J' }, '5-2': { letter: 'I' }, '6-2': { letter: 'N' }, '7-2': { letter: 'G' },
    '4-2': { letter: 'J', number: 5 }, '4-3': { letter: 'A' }, '4-4': { letter: 'N' }, '4-5': { letter: 'T' }, '4-6': { letter: 'U' }, '4-7': { letter: 'N' }, '4-8': { letter: 'G' },
    '6-5': { letter: 'P', number: 7 }, '6-6': { letter: 'O' }, '6-7': { letter: 'T' },
    '8-5': { letter: 'B', number: 9 }, '8-6': { letter: 'U' }, '8-7': { letter: 'M' }, '8-8': { letter: 'I' },
    '4-9': { letter: 'G', number: 10 }, '5-9': { letter: 'E' }, '6-9': { letter: 'Y' }, '7-9': { letter: 'S' }, '8-9': { letter: 'E' }, '9-9': { letter: 'R' },
};

function createCrossword() {
    const crosswordTable = document.getElementById('crossword');
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            if (answers[`${i}-${j}`]) {
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = 1;
                input.dataset.cell = `${i}-${j}`;

                if (answers[`${i}-${j}`].number) {
                    const cellNumber = document.createElement('div');
                    cellNumber.classList.add('cell-number');
                    cellNumber.textContent = answers[`${i}-${j}`].number;
                    cell.appendChild(cellNumber);
                }
                
                cell.appendChild(input);
            } else {
                cell.classList.add('black-cell');
            }
            row.appendChild(cell);
        }
        crosswordTable.appendChild(row);
    }
}

function validateAnswers() {
    let score = 0;
    document.querySelectorAll('input').forEach(input => {
        const cell = input.dataset.cell;
        if (answers[cell] && input.value.toUpperCase() === answers[cell].letter) {
            input.style.backgroundColor = '#d4edda'; // Hijau jika benar
            score++;
        } else if (input.value) {
            input.style.backgroundColor = '#f8d7da'; // Merah jika salah
        }
    });
    document.getElementById('score').textContent = `Skor: ${score}`;
}

document.getElementById('validate').addEventListener('click', validateAnswers);
document.addEventListener('DOMContentLoaded', createCrossword);