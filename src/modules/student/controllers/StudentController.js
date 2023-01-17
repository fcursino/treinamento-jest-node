const ListStudentUseCase = require("../useCases/ListStudentUseCase");

module.exports = class StudentController {

    async list (req, res) {

        const listStudentUseCase = new ListStudentUseCase();
        const aluno_id = req.params.aluno_id

        return await listStudentUseCase.execute({
            aluno_id
        })
    }
}