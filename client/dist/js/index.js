const $h1 = document.querySelector("h1");

$h1.addEventListener("click", handleClick);

async function handleClick() {
  const response = await fetch("http://localhost:4000/api");
  const data = await response.json();

  console.log(data.name);
}
