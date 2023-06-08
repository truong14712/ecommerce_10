 function capitalizeString(str:any) {
   var capitalizedStr = "";
   
   for (var i = 0; i < str.length; i++) {
     var char = str.charAt(i);
     if (char >= 'a' && char <= 'z') {
       char = char.toUpperCase();
     }
     capitalizedStr += char;
   }
   
   return capitalizedStr;
 }
export default capitalizeString