import View from './abstract'

export default class extends View {
  constructor() {
    super()
    this.setTitle('Settings')
  }

  async getHtml() {
    <div>
      <h1>Settings</h1>
      <p>body text</p>
    </div>
  }
}
