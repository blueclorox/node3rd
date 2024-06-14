import { prisma } from '../utils/prisma.util.js'

export class resumesRepository {
    getResumes = () => {
        const getResumes = prisma.resume.findMany()
        
        return getResumes
    }

    detailResumes = (id) => {
        const detailResumes = prisma.resume.findUnique({where : { id }})

        return detailResumes
    }

    postResumes = (data) => {
        const postResumes = prisma.resume.create({data : data})

        return postResumes
    }

    putResumes = (id, data) => {
        const putResumes = prisma.resume.upsert({
            where : { id },
            data : { data },
            })
        return putResumes
        }


    deleteResumes = (id) => {
        const deleteResumes = prisma.resume.delete({where : { id }})

        return deleteResumes
    }
}