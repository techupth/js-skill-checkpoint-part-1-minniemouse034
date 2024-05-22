// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(password) {
  for (let i = 0; i < password.length; i++) {
    if (password.length < 6) {
      return "Low";
    } else if (password.length >= 6 && password.length < 10) {
      return "Medium";
    } else {
      return "Strong";
    }
  }
}
userPassword = "swnalWadqQ";
console.log(checkPasswordStrength(userPassword));
userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword));
userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));
