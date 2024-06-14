import { HTTP_STATUS } from '../constants/http-status.constant.js'
import { resumesService } from '../services/resumes.service.js'
import { resumesRepository } from '../repositories/resumes.repository.js'
import { MESSAGES } from '../constants/message.constant.js'


export class resumesController {
    resumesService = new resumesService()
    resumesRepository = new resumesRepository()

    postResumes = async (req, res, next) => {
        try{
            const user = req.user
            const { title, content } = req.body
            const authorId = user.id

            const postResumes = await this.resumesService.postResumes(authorId, title, content)

            return res.status(HTTP_STATUS.CREATED).json({
                status : HTTP_STATUS.CREATED,
                message : MESSAGES.RESUMES.CREATE.SUCCEED,
                postResumes
            })
        }catch(error){
            next(error)
        }
    }
    
    getResumes = async (req, res, next) => {
        try {
            const getResumes = await this.resumesRepository.getResumes()

            return res.status(HTTP_STATUS.OK).json({ data: getResumes })
        }catch(error){
            next(error)
        }
    }
    
    putResumes = async (req, res, next) => {
        try {
            const user = req.user;
            const authorId = user.id;
            const { id } = req.params;
            const { title, content } = req.body;

            const putResumes = await this.resumesService.putResumes(authorId, id, title, content)
            
            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.RESUMES.UPDATE.SUCCEED,
                putResumes,
              });
        }catch(error){
            next(error)
        }
    }

    detailResumes = async (req, res, next) => {
        try {
            const user = req.user
            const id = user.id

            const detailResumes = await this.resumesService.detailResumes(id)

            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.RESUMES.READ_DETAIL.SUCCEED,
                detailResumes
              });
        }catch(error){
            next(error)
        }
    }

    deleteResumes = async (req, res, next) => {
        try {

            const id = req.params
            const deleteResumes = await this.resumesService.deleteResumes(id)

            return res.status(HTTP_STATUS.OK).json({
                status: HTTP_STATUS.OK,
                message: MESSAGES.RESUMES.DELETE.SUCCEED,
                deleteResumes,
              });
        }catch(error){
            next(error)
        }
    }
}