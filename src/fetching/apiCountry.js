async function getData() {
  const response = await fetch('/data.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

export { getData };
