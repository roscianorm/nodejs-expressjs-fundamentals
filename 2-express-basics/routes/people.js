const express = require('express')
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  removePerson,
} = require('../controllers/people')

const router = express.Router()

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', removePerson)

// ----------------------------------------------------------------

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(removePerson)

module.exports = router
