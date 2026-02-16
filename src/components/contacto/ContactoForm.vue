<template>
  <!-- Contact -->
  <div class="info-box section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="section-title mb-30 text-center">{{ form.title }}</div>
          <div class="contact-form">
            <form method="post">
              <div class="row">
                <div v-for="(field, index) in form.formFields" :key="index" :class="`col-md-${field.col}`">
                  <div class="form-group" :class="{ 'form-textarea': field.type === 'textarea' }">
                    <span class="form-icon"><i :class="field.iconClass"></i></span>
                    <input
                      v-if="field.type !== 'textarea'"
                      :type="field.type"
                      :name="field.name"
                      :id="field.name"
                      :placeholder="field.placeholder"
                      required
                    />
                    <textarea
                      v-else
                      :name="field.name"
                      :id="field.name"
                      cols="30"
                      :rows="field.rows || 3"
                      :placeholder="field.placeholder"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="col-md-12">
                  <button class="durubtn">
                    <span class="text-wrapper">
                      <span class="text slide-up">{{ form.submitText }}</span>
                      <span class="text slide-down">{{ form.submitText }}</span>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import form from '../../data/contacto/ContactoForm.js';
</script>
