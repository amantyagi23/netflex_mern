import bcrypt from 'bcrypt'


// plain password - > orignal pwd
// hash password - > random string convert orignal ->   
// salt -> no. of times hash , 10

// 100 trillen

export const hashPwd = (plainPwd) =>{
    return  bcrypt.hashSync(plainPwd,10)
}

export const verifiyPwd = (plainPwd, hashedPwd)=>{
    return bcrypt.compareSync(plainPwd,hashedPwd);
}