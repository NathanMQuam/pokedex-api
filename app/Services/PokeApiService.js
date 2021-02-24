import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokeApiService {

   constructor() {
      console.log("Poke api service");
      this.getPokeApiPokemon()
   }

   async getPokeApiPokemon() {
      try {
         const res = await pokeApi.get()
         console.log(res)
         ProxyState.nationalDex = res.data.results
      } catch (error) {
         console.error(error)
      }
   }

   async setActivePokemon(index) {
      try {
         let res = await pokeApi.get(index)
         console.log(res)
         ProxyState.activePokemon = new Pokemon(res.data)
      } catch (error) {
         console.error(error)
      }
   }

}

export const pokeApiService = new PokeApiService();