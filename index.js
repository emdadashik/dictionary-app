let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
let btn = document.getElementById('btn');
const sound = document.getElementById('sound');

btn.addEventListener('click', function () {
    let result = document.getElementById('result');
    let word = document.getElementById('input-search').value;
    fetch(`${url}${word}`)
        .then(res => res.json())
        .then(data => {
            sound.setAttribute("src", `${data[0].phonetics[0].audio}`)
            result.innerHTML = `
            <div class="d-flex">
                <div>
                    <h1 id="word"> ${data[0].word} </h1>
                    <p id="p-o-speech"> ${data[0].meanings[0].partOfSpeech} <span>${data[0].phonetic}</span></p>
                </div>
                <img id="icon"  src="sound.png" alt="">
            </div>
            <h4 id="word-meaning"> ${data[0].meanings[0].definitions[0].definition} </h4>
            <p id="word-example"> ${data[0].meanings[0].definitions[0].example} </p>
        `;
        });

});

const playSound = () => {
    sound.play();
}

document.getElementById('icon').addEventListener('click',function(){
    playSound();
})

