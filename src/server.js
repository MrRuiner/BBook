import express from 'express'
import { engine } from 'express-handlebars'
import registerRoutes from './routes/register.routes.js'

const app = express()

app.use(express.static('./static'))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// regiter routes

app.use(registerRoutes)

const port = 8080
app.listen(port, () => {
    console.log('Server is running on localhost:' + port);
})
// const port =2007
// app.listen(port,()=>{
//     console.log('server is runing on http://localhost:'+port);
// })