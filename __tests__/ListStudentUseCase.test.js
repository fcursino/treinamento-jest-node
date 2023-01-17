const ListStudentUseCase = require('../src/modules/student/useCases/ListStudentUseCase')

let listStudentUseCase;

describe('ListStudents', () => {
    beforeEach(() => {
        listStudentUseCase = new ListStudentUseCase();
    })

    it('tem que listar os estudantes', async () => {
        const students = await listStudentUseCase.execute({
            aluno_id: 16556757,
        })

        expect(students).not.toBe([])
    })
})