const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

class ListStudentUseCase {
    async execute({
        aluno_id
    }) {
        
        const student = await prisma.aluno.findFirst({
            where: {
                aluno_id
            }
        })

        if (!student) {
            throw new Error('Student not found!')
        }

        const students = await prisma.$queryRaw`
         select * from aluno where aluno_id = ${student.aluno_id}
        `

        return students;
    }
}

module.exports = ListStudentUseCase;