//bài tập 1
let i = 10;
document.write('i='+i);
document.write('<br/>');
let f = 20.5;
document.write('f='+f);
document.write('<br/>');
let b = true;
document.write('b='+b);
document.write('<br/>');
let s = 'Hà Nội';
document.write('s='+s)
document.write('<br/>');


//bài tập 2:
let width = 20;
let height = 10;
area = width * height;
document.write('area ='+area)

// bài tập 3
let numA = prompt('xin vui lòng nhập a = ')
let numB = prompt('xin vui lòng nhập b = ')
if(numA % numB === 0){
    alert('a là bội số của b')
}else{
    alert('a không phải là bội số của b')
}
