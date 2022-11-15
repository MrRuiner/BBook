import { addUser, allUsers } from "../repositories/users.respository.js"

export const registerpage=(req,res)=>{
    res.render('register')
}

export const mainPage = (req, res) => {
    res.render('main')
}

export const admin = (req, res) => {
    res.render('admin')
}

export const singUp=(req,res)=>{
    const {firstname,lastname,age,
        phone,password,confirmPassword
    }=req.body
    // if(password!=confirmPassword){
    //     res.render('register',{
    //         error:'idi parolni dogirla'
    //     })
    // return
    // }
const users=allUsers()

const user=users.find(u=>u.phone==phone)
if(user){
    res.render('register',{
        error:phone+'boshqasini yoz bi nomer bo' 
    })
    return
}
addUser({
    firstname,lastname,age,phone,password
})
res.send('molodes ammalading mujik')
}