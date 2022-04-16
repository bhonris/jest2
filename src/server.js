import { isPalindrome } from './isPalindrome.js'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/palindrome', (req, res) => {
  const inputString = req.query.input
  const result = isPalindrome(inputString)
  res.send(result)
  })

app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})

export default app;