import { ProxyState } from "../AppState.js";
import { pokeApi } from "../Services/AxiosService.js";
import { pokeApiService } from "../Services/PokeApiService.js"

function _draw() {
   let pokemon = ProxyState.nationalDex
   let results = ''
   pokemon.forEach(p => results += p.name + '<br/>')

   document.getElementById('app').innerHTML = results
}

function _drawActivePokemon() {

}


export default class PokedexController {
   constructor() {
      console.log("PokedexController");
      ProxyState.on("nationalDex", _draw)
      ProxyState.on("activePokemon", _drawActivePokemon)
      _draw()
   }

   setActivePokemon(index) {
      console.log('Active Pokemon set to:', index);
      pokeApiService.setActivePokemon(index)
   }
}