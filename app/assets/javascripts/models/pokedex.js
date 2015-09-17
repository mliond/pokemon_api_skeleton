PokedexComponent.prototype.render = function() {
  this.pokedex.fetchThemAll(this.render.bind(this));
  var view = this; 

  this.pokedex.pokemons.forEach(function (pokemon) {
    var PokemonView = new PokemonItemComponent(view.$el, pokemon);
    pokemonView.render();
  });

  $('ul.pokedex-list').on('click', 'a', function(event) {
    event.preventDefault(); 
    var pokemonId = $(event.currentTarget).attr('pokemon-id');
    view.router.go('pokemon-show/' + pokemonId);
  });

  return this;
};