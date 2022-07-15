import express, {Router, Request, Response, NextFunction} from 'express'

const router = Router()

router.post('/', function(request: Request, response: Response, next: NextFunction) {
  throw new Error('Not implemented.')
});

export default router
