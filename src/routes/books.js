const express = require('express')
const router = express.Router()



//GET books page
router.get('/', (request, response, next) => {
  res.render('index')
})

router.get('/create', (request, response, next) => {
  res.render('create')
})

router.get('/:id', (request, response, next) => {
  res.render('index')
})

router.post('/', (request, response, next) => {
  response.send('Sending to POSTMAN')
})

router.put('/:id', (request, response, next) => {
})

router.delete('/:id', (request, response, next) => {
});



module.exports = router