function palindrome(str) {
  let newStr = str.replace(/[^a-zA-Z0-9]/gi, '');
  let word = newStr.toLowerCase().split('');
  let reversedWord = [...word].reverse();
  return reversedWord.join('') === word.join('');
}

document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("text-input").value;
  const result = document.getElementById("result");

  if (input.trim() === "") {
    result.textContent = "⚠️ Please enter some text.";
    result.style.color = "orange";
    return;
  }

  if (palindrome(input)) {
    result.textContent = "✅ It's a palindrome!";
    result.style.color = "lightgreen";
  } else {
    result.textContent = "❌ Not a palindrome.";
    result.style.color = "#f87171";
  }
});
