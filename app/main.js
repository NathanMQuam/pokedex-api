// import ValuesController from "./Controllers/ValuesController.js";

import PokedexController from "./Controllers/PokedexController.js";

class App {
  // valuesController = new ValuesController()
  pokedexController = new PokedexController()
  
}

window["app"] = new App();
