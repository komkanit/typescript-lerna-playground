import {hello} from '@tslerna/common'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send(hello('cal'))
})

app.listen(3000, () => {
  console.log('listening port 3000')
})
