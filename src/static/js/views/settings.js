import View from './abstract.js'

export default class extends View {
  constructor() {
    super()
    this.setTitle('Settings')
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>body text</p>
    `
  }
}
