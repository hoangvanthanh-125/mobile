const transData = ({phone,name:{first,last}}) => ({
  phone,
  name:`${first} ${last}`
})
export const getList = async( ) => {
  const res = await fetch('https://randomuser.me/api?results=1000');
  const {results} =  await res.json();
  return results.map(transData);
}
export const loginApi = async(email,pass) => {
 const respon = fetch('fakeApi',{
   method:'POST',
   headers:{
     'content-type':'application/json'
   },
   body:JSON.stringify({email,pass})
 })
//  if(respon.ok){
//    const {token} = await respon.json();
//    return token;
//  }
//  else{
//    const text= await (await respon).text();
//    throw new Error(text) 
//  }
return "fakeToken";
}