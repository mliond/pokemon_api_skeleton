window.Pokemon = require('./models/pokemon.js');
window.Component = require('./components/pokemon.js');

var AppRouter = function (container) {
  this.container = container;
};

AppRouter.prototype.renderPokemonComponent = function (id) {
  var my_pokemon = new Pokemon(id);
  var my_component = new Component(this.container, my_pokemon);
  my_pokemon.fetch(function() {
    my_component.render();
  });
};

AppRouter.prototype.renderView = function (view) {
  this.container.empty();
  view.render();
  this.container.append(view.$el);
};

module.exports = AppRouter;