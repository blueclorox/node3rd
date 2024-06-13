import { HTTP_STATUS } from '../constants/http-status.constant.js'
import { resumesService } from '../services/resumes.service.js'


export class resumesController {
    resumesService = new resumesService()

    postResumes = async (req, res, next) => {
        try{
            const user = req.user
            const { title, content } = req.body
            const authorId = user.id

            const postResumes = await this.resumesService.postResumes()
        }catch(error){
            next(error)
        }
    }
    
    getResumes = async (req, res, next) => {
        try {
            const getResumes = await this.resumesService.getResumes()

            return res.status(HTTP_STATUS.OK).json({ data: getResumes })
        }catch(error){
            next(error)
        }
    }
    
    patchResumes = async (req, res, next) => {
        try {
            const patchResumes = await this.resumesService.patchResumes()
        }catch(error){
            next(error)
        }
    }

    detailResumes = async (req, res, next) => {
        try {
            const detailResumes = await this.resumesService.detailResumes()
        }catch(error){
            next(error)
        }
    }

    deleteResumes = async (req, res, next) => {
        try {
            const deleteResumes = await this.resumesService.deleteResumes()
        }catch(error){
            next(error)
        }
    }
}