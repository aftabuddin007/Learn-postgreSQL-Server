


import cors from 'cors'
import express, { Router } from 'express'
import router from './router/router';
const app = express()
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/",router)
app.get('/', (req, res) => {
    res.json({
        success:true,
        message:'Server is running'
    
})
})
// const startServer = async ()=>{
//     app.listen(process.env.PORT || 5000)    
// }
export default app