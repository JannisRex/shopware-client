import View from './abstract.js'

// need to add EventListener since onClick cant really be used,
// because we only pass the innerHtml from the template string
// and cannot acces functions pased in this class 

export default class extends View {
  constructor() {
    super()
    this.setTitle('API')
  }

  async getHtml() {
    return `
      <h1>API</h1>
      <p>body text</p>
      <button class="button" role="button" onClick="console.log('this works')">GET</button>
    `
  }
}
