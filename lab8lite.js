function fibrecurs (a, b, target) {
console.log(a)
if (b > target) return;
    
fibrecurs (b, a + b, target)  
}
    
fibrecurs (0, 1, 53453)