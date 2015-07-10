var Pokemon = require("./pokemon.js");
var PokemonShowController = require("./pokemonShowController.js");

var Router = function ($container) {
  this.$container = $container;
}

Router.prototype.renderPokemonShow = function (id) {
  var pokemon = new Pokemon(id);
  var pokemonShowController = new PokemonShowController(this.$container, pokemon);
  pokemon.fetch(function () {
    pokemonShowController.render();
  });
}

module.exports = Router;
