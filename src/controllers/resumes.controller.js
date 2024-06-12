import { resumesService } from '../services/resumes.service.js'


export class resumeController {
    postResumes = async (req, res, next) => {
        try{
            const postResumes = await resumesService.postResumes()
        }catch(error){
            next(error)
        }
    }
    
    getResumes = async (req, res, next) => {
        try {
            const getResumes = await resumesService.getResumes()
        }catch(error){
            next(error)
        }
    }
    
    patchResumes = async (req, res, next) => {
        try {
            const patchResumes = await resumesService.patchResumes()
        }catch(error){
            next(error)
        }
    }

    detailResumes = async (req, res, next) => {
        try {
            const detailResumes = await resumesService.detailResumes()
        }catch(error){
            next(error)
        }
    }

    deleteResumes = async (req, res, next) => {
        try {
            const deleteResumes = await resumesService.deleteResumes()
        }catch(error){
            next(error)
        }
    }
}