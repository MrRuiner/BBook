import { Router } from "express";
import { registerpage, singUp, admin, mainPage } from '../controllers/register.controller.js'

const router = Router()

router.get('/reg', registerpage)
router.get('/reg', singUp)
router.get('/admin', admin)
router.get('/', mainPage)

export default router