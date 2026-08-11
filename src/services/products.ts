import prisma from "../lib/prisma"
import {Router,Request,Response} from 'express'
const router = Router()
// for post new product
router.post("/", async (req:Request, res:Response) => {
    const productData = req.body;
    const data = await prisma.product.create({data:req.body})
    res.json({
        success: true,
        message:"product created!",
        data,
    })
})
export default router
  
    







