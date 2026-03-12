async function mainData() {
  const localUrl = "./db.json";

  const response = await fetch(localUrl);

  if (!response.ok) {
    throw new Error(response.status);
  }

  return await response.json();
}

export { mainData };