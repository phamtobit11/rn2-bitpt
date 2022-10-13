// Kiểm tra số chẵn hoặc lẻ (IF)
function kiemtrasochanle(n){
    let sole = 1;
    if(n % 2 == 0) sole = 0;{
        return sole;
    }
}
let n = prompt("nhap so = ");
let x = kiemtrasochanle(n);
if (x == 0) {
    alert(n + " la so chan ");
}
else{
    alert(n + " la so le ");
}




