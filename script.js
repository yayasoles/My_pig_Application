//global variables
var activePlayer, score, currentScore, gamePlaying;
init();
// add event to roll
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 12 + 1);
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById('current-' + activePlayer).textContent = currentScore;
            var dice1;
            var dice2;
            if (dice % 2 === 0) {
                dice1 = dice / 2;
                dice2 = dice / 2;
            } else {
                dice1 = ~~(dice / 2);
                dice2 = dice1 + (dice % 2);
            }
            console.log(dice1 + "  " + dice2);

            var Dice1Dom = document.getElementById('dice-1');
            var Dice2Dom = document.getElementById('dice-2');
            Dice1Dom.style.display = 'block';
            Dice2Dom.style.display = 'block';

            Dice1Dom.src = 'dice-' + dice1 + '.png';
            Dice2Dom.src = 'dice-' + dice2 + '.png';
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        score[activePlayer] = score[activePlayer] + currentScore;
        // console.log('hello');
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        if (score[activePlayer] >= 30) {
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.getElementById('name-' + activePlayer).textContent = 'Winner';
            gamePlaying = false;
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.final-score').ariaPlaceholder = 'dddddddddddddddddddd';

        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
function nextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = '0';
    activePlayer ? activePlayer = 0 : activePlayer = 1;
    currentScore = 0;
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}
function init() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0'

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';

    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('#name-0').textContent = 'Player 1';

    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');



}

