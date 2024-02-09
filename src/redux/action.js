export const GET_PRODUCT = "GET_PRODUCT";

const API_URL = 'https://dummyjson.com/products';

export const getProduct = () =>{


    try {

        return async dispatch =>{
            const result =  await fetch(API_URL,{
                method:'GET',
                headers:{
                    'content-Type':'application/json',
                }
            });
        const json = await result.json();

      

        if(json){
            dispatch({
                type:GET_PRODUCT,
                payload:json.products
            })

        }else{
            console.log("unable to fetch")

        }


        }

        
    } catch (error) {

        console.log(error)
        
    }
}