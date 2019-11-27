import * as fs from 'fs'

export const privateKey = fs.readFileSync('private.pem')

export const publicKey = fs.readFileSync('public.pem')