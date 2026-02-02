const User = 
    {
    "username": "admin",
    "password": "admin123"
    }


async function createUser() {
    const exist = await User.includes("admin")
    if(!exist){
        User.username = "admin"
        User.password = "admin123"
    }else{
        console.log("user already exist")
    }
}

createUser()

// console.log(User)
