// In day so fibonacci (FOR IF)
const number = prompt("nhap so ")
let n1 = 0, n2 = 1, nextNumber;
for (let i = 1; i <= number; i++) {
    document.write(n1)
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
}