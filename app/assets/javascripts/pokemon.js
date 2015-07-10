var Pokemon = function (id) {
  this.id = id;
  this.url = "/api/pokemon/"
}

Pokemon.prototype.fetch = function (callback) {
  var self = this;
  $.ajax({
    url: this.url + this.id,
    method: "GET",
    success: function (pokemonInfo) {
      $.extend(self, pokemonInfo);
      callback();
    }
  });
}

module.exports = Pokemon
