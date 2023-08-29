


export const getCartLocal =() =>{
    return JSON.parse(localStorage.getItem("cart"))
}


export const setCartLocal =(data:any) =>{

    return localStorage.setItem("cart",JSON.stringify(data))
}