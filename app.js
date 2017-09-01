var form = document.getElementById('pokeQuiz');

form.addEventListener('submit', function(e) {
  console.log(e);
  e.preventDefault();

  var questions = e.target.elements;
  console.log(questions);

  var randId = getRandomInt();
  getPokemon(randId)
    .then(function(data) {
      console.log(data);
      var url = data.sprites.front_default;

      addImageToDom(url);
    });

});

function getPokemon(randId) {
  var url = 'http://pokeapi.co/api/v2/pokemon/' + randId;

  return fetch(url)
    .then(function(res) {
      return res.json();
    });
}

function getRandomInt() {
  min = Math.ceil(1);
  max = Math.floor(722);
  return Math.floor(Math.random() * (722-1)) + 1; //the max is exclusive and the min is inclusive
}

function addImageToDom(url) {
	var main = document.getElementsByTagName('main')[0];
	var img = document.createElement('img');

	img.setAttribute('src', url);
	main.append(img);
}
