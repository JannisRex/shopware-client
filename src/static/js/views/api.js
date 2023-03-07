import View from './abstract.js'

export default class extends View {
  constructor() {
    super()
    this.setTitle('API')
  }

  async getHtml() {
    return `
      <h1>API</h1>
      <p>body text</p>
    `
  }
}
