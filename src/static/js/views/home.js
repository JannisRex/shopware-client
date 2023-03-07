import View from './abstract.js'

export default class extends View {
  constructor() {
    super()
    this.setTitle('Home')
  }

  async getHtml() {
    return `
      <h1>Home</h1>
      <p>body text</p>
    `
  }
}
