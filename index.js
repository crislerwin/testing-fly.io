import express from 'express'


const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => { 
  res.send({crislerwintler: true})
})
app.listen(port, (err) => {
  if (err) {
    console.log("Error...")
  }
  console.log('Listening on port ' + port)
})
