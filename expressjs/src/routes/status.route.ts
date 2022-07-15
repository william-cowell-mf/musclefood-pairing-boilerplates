import express, {Router, Request, Response, NextFunction} from 'express'

const router = Router()

router.get('/', function(request: Request, response: Response, next: NextFunction) {
  response.send()
});

export default router
