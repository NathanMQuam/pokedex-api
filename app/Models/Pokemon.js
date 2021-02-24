import { ProxyState } from "../AppState.js";
import { pokeApi } from "../services/AxiosService.js";

export default class Pokemon {
   constructor({name, url, img, weight, height, types, user}) {
      this.name = name
      this.url = url
      this.img = img
      this.weight = weight
      this.height = height
      this.types = types
      this.user = user
   }

   get ListTemplate() {
      return /*html*/`<div id='${this.name}' onclick="app.pokedexController.setActivePokemon('${this.name}')">${this.name}</div>`
   }

   get ActiveTemplate() {
      console.log(this.types);
      let type = ''
      
      if (this.types[1])
         type = this.types[0].type.name + ', ' + this.types[1].type.name
      else 
         type = this.types[0].type.name

      return /*html*/`<div>
         <h2>${this.name}</h2>
         <div>${type}</div>
         <div>${this.weight}</div>
         <div>${this.height}</div>
      </div>`
   }
}