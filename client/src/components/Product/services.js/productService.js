//  import { getCookie } from "../../../utils/cookie";
//  const getAll =()=>{
//     return fetch('http://localhost:5000/api/product/')
//     .then((res)=>res.json())
//     .catch((err)=>console.log(err))
  const getAll=  async () => {
        const promise = await fetch(`http://localhost:5000/api/product/`)
        const products = await promise.json()
        return products

    // return fetch("http://localhost:5000/api/product/",{
    //     method:'GET',
        
    //     headers:{
    //       'Content-Type':'application/json',
    //       'Authorization': getCookie('x-auth-token')
    //     }
    //   }).then(promise=>{
    //     console.log(promise);
    //     return promise.json()
    //   }).then(data=>{
    //     console.log(data);
    //   })
  
     
}
export default getAll;
