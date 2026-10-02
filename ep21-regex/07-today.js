// "Today we'd write" split: same regex features, modern variable keywords.
// const/let arrive in episode thirty-two; the regex syntax itself is unchanged.

const zip = "94043";
const fiveDigits = /^\d{5}$/; // {5} quantifier: same idea as \d\d\d\d\d, just shorter

console.log(fiveDigits.test(zip));
