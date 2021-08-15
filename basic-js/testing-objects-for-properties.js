/* Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). 
If the property is found, return that property's value. If not, return "Not Found". 
*/

function checkObj(obj, checkProp) {
    return obj.hasOwnProperty(checkProp) 
    ? obj[checkProp] : 'Not Found'; // You have to use bracket notation to access a property which is stored as the value of a variable!!
}
