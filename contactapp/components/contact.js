const contactNumber = 100;
const firstName = ['Hoàng','Nguyễn','Lê','Trần','Vũ','Vương','Phan'];
const lastName = ['Thành','Tùng','Hùng','Hà','Huyền','Nga','Anh','Nhung','Sơn','Trung','Thịnh','Trí','Tân','Quỳnh','Oanh','Tiến','Uyên','Phúc','Lộc','Thọ'];
const rand  = (max,min=0) => Math.floor(Math.random()*(max-min + 1) )+ min;
const createName = () => (firstName[rand(firstName.length - 1)] + " " + lastName[rand(lastName.length - 1)])
const createPhoneNumber = () => `${rand(99,1000)} - ${rand(99,1000)}-${rand(99,1000)}`;
const createContact = () => ({name:createName() ,phone:createPhoneNumber()});
export const compareName = (ct1,ct2) => ct1.name > ct2.name;
const addKeys = (val,key) =>({key,...val});
export default Array.from({length:contactNumber},createContact).map(addKeys); 

