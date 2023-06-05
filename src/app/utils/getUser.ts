export function getUser(){
   const user = localStorage.getItem('user');
   const getUser = user ? JSON.parse(user) : null;
   return getUser
}