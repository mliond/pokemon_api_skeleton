var PokemonShowController = function ($parentEl, pokemon) {
  this.pokemon = pokemon;
  this.$parentEl = $parentEl;
  this.$el = $("<p>");
}

PokemonShowController.prototype.render = function () {
  this.$el.html(this.pokemon.name);
  this.$parentEl.append(this.$el);
}

module.exports = PokemonShowController;
