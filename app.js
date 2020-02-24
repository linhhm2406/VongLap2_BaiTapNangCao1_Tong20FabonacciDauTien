let i=1;
let j=1;
let count=0;
let sum=0;
while (count<=20) {
    sum +=i;
    count++
    i=i+j;
    j=i-j;
}
document.write('Tong cua 20 so dau tien trong day fabonacci la ' + sum);