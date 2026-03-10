import { trackRequest } from '../stores/appLoader';

const normalizeBaseUrl = (baseUrl) => {
  if (!baseUrl) return '';
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_URL);

const buildUrl = (path) => {
  if (!API_BASE_URL) return path;
  if (!path.startsWith('/')) return `${API_BASE_URL}/${path}`;
  return `${API_BASE_URL}${path}`;
};

export const apiGet = async (path) => {
  return trackRequest(async () => {
    const response = await fetch(buildUrl(path), {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    return response.json();
  });
};

export { API_BASE_URL };
