import View from './abstract'

export default class extends View {
  constructor() {
    super()
    this.setTitle('API')
  }

  async getHtml() {
    <div>
      <h1>API</h1>
      <p>body text</p>
    </div>
  }
}
