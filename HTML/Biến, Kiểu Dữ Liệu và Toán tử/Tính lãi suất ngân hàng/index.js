var amount = prompt('xin nhập số tiền vay');
var interest = prompt('xin nhập lãi suất vay');
var  year = prompt('xin nhập số năm vay');

var output = parseInt(amount) + (year * amount * interest / 100);
document.write('số tiền phải trả sau '+year+' năm là '+output)
