export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // A server-side validation error occurred.
    // Server side validation returns a string error message, so we parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error('Network response was not ok.');
}

// This should call an error logging service ideally.
export function handleError(error) {
  // eslint-disable-next-line no-console
  // console.error(`API call failed. ${error}`);
  throw error;
}
