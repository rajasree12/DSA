function convertToRoman(num)
{
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let ans = "";
    for(var i = 0; i<decimal.length; i++)
    {
      while(decimal[i]<=num)
      {
        ans += roman[i];
        num -= decimal[i];
      }
    }
   return ans;
}

console.log(convertToRoman(36));