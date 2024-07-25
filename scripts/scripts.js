const emojis = ['🏖️','🏖️','🐚','🐚','🌊','🌊','🌴','🌴','🐠','🐠','🐙','🐙','🦐','🦐','👙','👙']

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(emojis);
console.log(emojis);

emojis.forEach((emoji) => {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = emoji;
  document.querySelector('.game-grid').appendChild(box);
});