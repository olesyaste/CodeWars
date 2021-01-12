function diamond(n) {
    if (n % 2 === 0 || n < 0) return null;
    let d = "";
    for (let i = 1; i <= n; i++) {
      if (i <= Math.round(n / 2)) {
        d += `${" ".repeat(Math.round(n / 2) - i) + "*".repeat(2 * i - 1)}\n`;
      } else {
        d += `${" ".repeat(i - Math.round(n / 2)) +
          "*".repeat(2 * Math.round(n / 2) - 1 - 2 * (i - Math.round(n / 2)))}\n`;
      }
    }
    return d;
  }
  
  diamond(1)//, "*\n")
  diamond(3)//, " *\n***\n *\n")
  diamond(5)//, "  *\n ***\n*****\n ***\n  *\n")
  diamond(2)//, null)