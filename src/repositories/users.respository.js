import { LowSync } from "lowdb";
import { JSONFileSync }from'lowdb/node'

const users=new LowSync(new JSONFileSync('./users.list'))

users.read()

if(users.data==null){
users.data=[]
users.write()
}

//add user

export const addUser=(user)=>{
    users.data.push(user)
    users.write()
}

export const allUsers=()=>{
    return users.data
}