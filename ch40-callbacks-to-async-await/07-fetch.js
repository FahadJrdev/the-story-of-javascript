fetch("https://api.example.com/users/1")
  .then((res) => {
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  })
  .then((user) => console.log(user.name))
  .catch((err) => console.error(err.message));
