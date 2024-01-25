import { Router } from 'express'
const router = Router()

import * as VideoCtrl from './videos.controller'

router.get('/videos', VideoCtrl.getVideos)

router.get('/videos/:id', VideoCtrl.getVideo)

router.post('/videos', VideoCtrl.createVideo)

router.delete('/videos/:id', VideoCtrl.deleteVideo)

router.put('/videos/:id', VideoCtrl.updateVideo)

export default router