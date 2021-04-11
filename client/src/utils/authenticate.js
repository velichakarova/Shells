const authenticate = async (url,body,onSucces, onFailere)=>{

    try {
        const promise = await fetch(url, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const authToken = promise.headers.get("Authorization");
        console.log(authToken);
        document.cookie = `x-auth-token=${authToken}`;
        // console.log(document.cookie);
  
        const response = await promise.json();
  
        if (response.username && authToken) {
          onSucces({
            username:response.username,
            id:response._id
          })
        }else{
            onFailere()
        }
      } catch (error) {
        onFailere()
      }
}
 export default authenticate;