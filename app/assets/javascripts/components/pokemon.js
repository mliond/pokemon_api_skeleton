var PokemonComponent = function(container, pokemon) {
  this.pokemon = pokemon;
  this.container = container;
}

PokemonComponent.prototype.template = function(pokemon) {
  // console.log(pokemon.attack);
  return `
    <p>Name: ${pokemon.name}</p>
    <p>Height: ${pokemon.height}</p>
    <p>Weight: ${pokemon.weight}</p>
    <p>No. of attacks: ${pokemon.moves.length}</p>
    <p>Type: ${pokemon.types[0].name}</p>
    `
}

PokemonComponent.prototype.render = function () {
  var html = this.template(this.pokemon);
  // console.log(this.pokemon);
  // console.log(html);
  this.container.html(html);
}

module.exports = PokemonComponent;