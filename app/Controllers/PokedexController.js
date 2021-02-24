import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
// import { pokeApi } from "../Services/AxiosService.js";
import { pokeApiService } from "../Services/PokeApiService.js"

function _draw() {
   let pokemon = ProxyState.nationalDex
   let results = ''
   // pokemon.forEach(p => results += p.name + '<br/>')
   pokemon.forEach(p => {
      results += p.ListTemplate
   })

   document.getElementById('pokemon-list').innerHTML = results
}

function _drawActivePokemon() {
   if (ProxyState.activePokemon) {
      document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.ActiveTemplate
   } else {
      document.getElementById("active-pokemon").innerHTML = ""
   }
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