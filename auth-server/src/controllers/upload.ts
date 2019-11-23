import * as cloudinary from 'cloudinary'
import * as multer from 'multer'
import * as tmp from 'tmp'
import { Request, Response } from 'express'
import errorHandler from '../model/errors'

const uploadProfilePic = (filePath) => {
	return new Promise((resolve, reject) => {
		cloudinary.v2.uploader.upload(filePath, (error, result) => {
			if (error) {
				reject(error)
			} else {
				resolve(result)
			}
		})
	})
}

export const upload = multer({
	dest: tmp.dirSync({ unsafeCleanup: true }).name
})

export const uploadController = async (req, res: Response) => {
	try {
		res.json(await uploadProfilePic(req.file.path))
	} catch (err) {
		errorHandler(err, res)
	}
}