const transData = ({phone,name:{first,last}}) => ({
  phone,
  name:`${first} ${last}`
})
export const getList = async( ) => {
  const res = await fetch('https://randomuser.me/api?results=1000');
  const {results} =  await res.json();
  return results.map(transData);
}