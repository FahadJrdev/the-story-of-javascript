// throw lets YOUR code decide something has gone wrong, on purpose.
// This is checking a number typed into a 1999-style HTML form.

function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    return age;
}

try {
    console.log(checkAge(-5));
} catch (e) {
    console.log("Form error: " + e.message);
}
