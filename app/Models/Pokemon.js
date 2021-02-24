export default class Pokemon {
   constructor({name, url}) {
      this.name = name
      this.url = url
   }

   get ListTemplate() {
      let result = `<div>${this.name}</div>`
      return result
   }
}