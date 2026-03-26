import { reactive, ref } from 'vue';
import { sendContactForm } from '../services/contact';

const initialFields = () => ({
  name: '',
  email: '',
  subject: '',
  message: '',
});

export const useContactForm = () => {
  const fields = reactive(initialFields());
  const isSubmitting = ref(false);
  const status = ref('idle');
  const feedback = ref('');

  const submit = async () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    status.value = 'idle';
    feedback.value = '';

    try {
      const response = await sendContactForm({ ...fields });

      status.value = 'success';
      feedback.value =
        response?.message || 'Tu mensaje fue enviado correctamente. Te responderemos a la brevedad.';

      Object.assign(fields, initialFields());
    } catch (error) {
      status.value = 'error';

      const validationMessage = error?.data?.errors
        ? Object.values(error.data.errors).flat()[0]
        : null;

      feedback.value =
        validationMessage || error?.message || 'No se pudo enviar el mensaje. Intentalo nuevamente.';
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    feedback,
    fields,
    isSubmitting,
    status,
    submit,
  };
};
