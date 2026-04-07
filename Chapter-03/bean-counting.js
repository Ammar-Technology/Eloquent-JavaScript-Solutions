function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted++;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

// اختبار الدالة
console.log(countBs("BBC"));         // 2
console.log(countChar("kakkerlak", "k")); // 4
