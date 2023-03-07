import View from './abstract'

export default class extends View {
  constructor() {
    this.setTitle('Home')
  }

  async getHtml() {
    <div>
      <h1>API</h1>
      <p>body text</p>
    </div>
  }
}
