var Pokemon = function (id) {
  this.id = id;
  this.url = "/api/pokemon/";
}

Pokemon.prototype.fetch = function (callback) {
  var pokemon = this;
  $.ajax({
    url: this.url + this.id,
    method: "GET",
    success: function (pokemonInfo) {
      $.extend(pokemon, pokemonInfo);
      callback();
    }
  });
}

module.exports = Pokemon