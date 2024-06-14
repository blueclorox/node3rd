import { resumesRepository } from "../repositories/resumes.repository.js";

export class resumesService {
    resumesRepository = new resumesRepository();

    postResumes = async (authorId, title, content) => {

        const data = { authorId, title, content }

        const postResumes = await this.resumesRepository.postResumes(data)

        return postResumes
    }

    detailResumes = async (id) => {

        const detailResumes = await this.resumesRepository.detailResumes(id)

        return detailResumes
    }

    putResumes = async (authorId, id, title, content) => {

        const putResumes = await this.resumesRepository.putResumes(authorId, id, title, content)

        return putResumes
    }

    deleteResumes = async (id) => {

        const deleteResumes = await this.resumesRepository.deleteResumes(id)

        return deleteResumes
    }
}