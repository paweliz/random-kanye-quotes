export async function fetchQuote(loader) {
  loader.classList.remove('hidden');
  const response = await fetch('https://api.kanye.rest', {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();
  // console.log(data);
  loader.classList.add('hidden');
  return data;
}
