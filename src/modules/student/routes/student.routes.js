const {Router} = require('express')

const StudentController = require('../controllers/StudentController')

const studentRouter = Router()
const studentController = new StudentController()

studentRouter.get('/student/:aluno_id',
studentController.list,
)

module.exports = studentRouter;