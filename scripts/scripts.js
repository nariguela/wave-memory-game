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
  box.addEventListener('click', () => {
    box.classList.add('box-open');
    setTimeout(() => {
      if (document.querySelectorAll('.box-open').length > 1) {
        if(document.querySelectorAll('.box-open')[0].innerHTML ==
      document.querySelectorAll('.box-open')[1].innerHTML){
        document.querySelectorAll('.box-open')[0].classList.add('box-match');
        document.querySelectorAll('.box-open')[1].classList.add('box-match');
        
        document.querySelectorAll('.box-open')[1].classList.remove('box-open');
        document.querySelectorAll('.box-open')[0].classList.remove('box-open');

        if (document.querySelectorAll('.box-match').length == emojis.length) {
          alert('Win!')
        }
      } else {
        document.querySelectorAll('.box-open')[1].classList.remove('box-open');
        document.querySelectorAll('.box-open')[0].classList.remove('box-open');
      }
      }
    }, 500)
  })
  document.querySelector('.game-grid').appendChild(box);
});

const resetButton = document.querySelector('.js-reset-button');

resetButton.addEventListener('click', () => {
  window.location.reload();
});