import View from './abstract'

export default class extends View {
  constructor() {
    super()
    this.setTitle('Home')
  }

  async getHtml() {
    <div>
      <h1>Home</h1>
      <p>body text</p>
    </div>
  }
}
