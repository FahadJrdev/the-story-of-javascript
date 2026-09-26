// From Netscape's JavaScript Handbook (Navigator 2.0, 1996)
i = 0
n = 0
while (i < 5) {
   i++
   if (i == 3)
      continue
   n += i
   console.log(n)
}
