const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

//数字
function isInteger(e){
  var reg = /^[-+]?\d*$/;  
  if (!reg.test(e)) {
    return false;
  }
  else return true;
}
//邮箱
function isEmail(e){
  var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!reg.test(e)) {
         return false;
  }
  else return true;
}
function isPhone(e) {
  var reg = /^1[3456789]\d{9}$/;
  if (!reg.test(e)) {
    return false;
  }
  else return true;
}

// function pwdNumberOrLetter(e){
//   var reg =/^[0-9a-zA-Z]{6,16}$/;
//   if(!reg.test(e)){return false}
//   else{ return true}
// }


module.exports = {
  isInteger:isInteger,
  isEmail:isEmail,
  isPhone:isPhone,
  // pwdNumberOrLetter:pwdNumberOrLetter
}

