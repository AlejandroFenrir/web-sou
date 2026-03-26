<template>
  <!-- Contact -->
  <section class="contact section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ contact.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ contact.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-12 mb-30">
          <div class="section-title">{{ contact.title }}</div>
          <p class="mb-30">{{ contact.description }}</p>
        </div>
        <div class="col-lg-6 offset-lg-1 col-md-12">
          <div class="contact-form">
            <form method="post" @submit.prevent="submit">
              <div class="row">
                <div v-for="(field, index) in contact.formFields" :key="index" :class="`col-md-${field.col}`">
                  <div class="form-group" :class="{ 'form-textarea': field.type === 'textarea' }">
                    <span class="form-icon"><i :class="field.iconClass"></i></span>
                    <input
                      v-if="field.type !== 'textarea'"
                      v-model="fields[field.name]"
                      :type="field.type"
                      :name="field.name"
                      :id="field.name"
                      :placeholder="field.placeholder"
                      :disabled="isSubmitting"
                      required
                    />
                    <textarea
                      v-else
                      v-model="fields[field.name]"
                      :name="field.name"
                      :id="field.name"
                      cols="30"
                      :rows="field.rows || 3"
                      :placeholder="field.placeholder"
                      :disabled="isSubmitting"
                      required
                    ></textarea>
                  </div>
                </div>
                <div v-if="feedback" class="col-md-12">
                  <div class="form-status" :class="status">{{ feedback }}</div>
                </div>
                <div class="col-md-12">
                  <button class="durubtn" type="submit" :disabled="isSubmitting">
                    <span class="text-wrapper">
                      <span class="text slide-up">{{ isSubmitting ? 'Enviando...' : contact.submitText }}</span>
                      <span class="text slide-down">{{ isSubmitting ? 'Enviando...' : contact.submitText }}</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import contact from '../../data/home/HomeContact.js';
import { useContactForm } from '../../composables/useContactForm';

const { feedback, fields, isSubmitting, status, submit } = useContactForm();
</script>

<style scoped>
.form-status {
  margin: 0 0 18px;
  padding: 14px 18px;
  border-radius: 14px;
  font-size: 14px;
}

.form-status.success {
  background: rgba(39, 129, 98, 0.12);
  color: #278162;
}

.form-status.error {
  background: rgba(190, 24, 93, 0.12);
  color: #be185d;
}
</style>
