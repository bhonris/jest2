import { isPalindrome } from './isPalindrome.js'
import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/palindrome', (req, res) => {
    const inputString = req.query.input
    const result = isPalindrome(inputString)
    res.send(result)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})