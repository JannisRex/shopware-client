import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(path.join(__dirname, 'src', 'static')))

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('./src/static', 'index.html'))
})

app.listen(process.env.PORT || 3000, () => console.log('App started!'))
