async function loadUserName() {
  const res = await fetch("https://api.example.com/users/1");
  if (!res.ok) throw new Error("HTTP " + res.status);
  const user = await res.json();
  return user.name;
}
