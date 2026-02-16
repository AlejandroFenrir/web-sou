<template>
  <!-- Team -->
  <section class="team careers section-padding">
    <div class="container">
      <div class="section-linetitle">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>{{ team.sectionLetter }}</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">{{ team.sectionSubtitle }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 mb-30">
          <div class="section-title">{{ team.title }}</div>
          <p class="mb-30">{{ team.description }}</p>
        </div>
        <div class="col-lg-12 col-md-12">
          <div v-for="(member, index) in team.members" :key="index" class="item">
            <a class="link" :href="member.href"></a>
            <div class="title">{{ member.name }} <span>{{ member.role }}</span></div>
            <div class="location">
              <span>{{ team.labels.university }}</span> {{ member.university }}
            </div>
            <div class="time">
              {{ team.labels.specialty }} <span>{{ member.specialty }}</span>
            </div>
            <div v-if="member.experience" class="experience">
              {{ team.labels.experience }} <span>{{ member.experience }}</span>
            </div>
            <div v-if="member.achievements && member.achievements.length" class="metrics">
              <div v-for="(achievement, aIndex) in member.achievements" :key="aIndex" class="metric">
                {{ achievement }}
              </div>
            </div>
            <div class="icon"><i class="ti-arrow-top-right"></i></div>
          </div>
          <a :href="team.cta.href" class="durubtn mt-60">
            <span class="text-wrapper">
              <span class="text slide-up">{{ team.cta.text }}</span>
              <span class="text slide-down">{{ team.cta.text }}</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import team from '../../data/nosotros/NosotrosTeam.js';
</script>
