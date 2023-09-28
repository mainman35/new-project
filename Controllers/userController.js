const home = (req,res)=>{
    res.send('Hello World')
}

const register = (req,res)=>{
    res.send('Hi')
}

const login = (req,res)=>{
    res.send('Top')
}


module.exports={home, register, login}