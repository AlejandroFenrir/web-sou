import { apiPost } from './api';

export const sendContactForm = (payload) => apiPost('/api/contact', payload);
