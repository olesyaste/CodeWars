function expandedForm(num) {
    let n = num.toString();
     let result = [];
     while (n.length > 1) {
         let exp = n.charAt(0) + '0'.repeat(n.length - 1);
         result.push(exp);
         n =  (+n - +exp).toString();
     }  
     if (n !== '0') result.push(n);        
     return result.join(' + ');
}

expandedForm(12)//, '10 + 2');
expandedForm(42)//, '40 + 2');
expandedForm(70304)//, '70000 + 300 + 4');