var idCardNumber = '1929900280512';
sum = 0;
for (var i = 0; i < idCardNumber.length-1; i++) {
  var num = parseInt(idCardNumber[i]);
  sum += num*(13-i);
}
var checkDigit = 11 - sum%11;
if (parseInt(idCardNumber[12]) == checkDigit) console.log('Valid');
else console.log('NOT Valid');
