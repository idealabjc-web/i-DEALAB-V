const WEB3FORMS_ACCESS_KEY = 'c2ef6b31-ade9-48e0-908b-177c78b30d44';

export async function submitWeb3Form(payload) {
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      botcheck: '',
      ...payload,
    }),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to send your submission.');
  }

  return result;
}
