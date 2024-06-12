import { resumesRepository } from "../repositories/resumes.repository.js";

export class resumesService {
    resumesRepository = new resumesRepository();

    postResumes = async () => {
        const resumes = await this.resumesRepository.postResumes()
    }

    getResumes = async () => {
        const resumes = await this.resumesRepository.getResumes()
    }

    detailResumes = async () => {
        const resumes = await this.resumesRepository.detailResumes()
    }

    patchResumes = async () => {
        const resumes = await this.resumesRepository.patchResumes()
    }

    deleteResumes = async () => {
        const resumes = await this.resumesRepository.deleteResumes()
    }
}