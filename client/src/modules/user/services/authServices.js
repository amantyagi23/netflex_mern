import Cookies from 'js-cookie'


export const setToken = (accesToken)=>{
    Cookies.set("accessToken",accesToken,{})
}

export const getToken = () =>{
    return Cookies.get('accessToken');
}

export const removeToken = () =>{
    console.log("in remove");
    
    Cookies.remove("accessToken")
}

export const isAuthenticated =()=>{
    return getToken() !== undefined;
}