import Cookies from 'js-cookie'


export const setToken = (accesToken)=>{
    Cookies.set("accessToken",accesToken,{})
}

export const getToken = () =>{
    return Cookies.get('accessToken');
}

export const remove = () =>{
    Cookies.remove("accesToken")
}

export const isAuthenticated =()=>{
    console.log(getToken());
    
    return getToken() !== undefined;
}