<template>
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
          <div v-for="(group, groupIndex) in team.groups" :key="groupIndex" class="team-group">
            <div v-if="group.title" class="team-group__title">{{ group.title }}</div>
            <div v-for="(member, index) in group.members" :key="`${groupIndex}-${index}`" class="item">
              <a class="link" :href="member.href"></a>
              <div class="title">
                {{ member.name }} <span>{{ member.role }}</span>
                <div v-if="member.position" class="member-position">{{ member.position }}</div>
              </div>
              <div v-if="member.education" class="location">
                <span class="label">{{ team.labels.education }}</span>
                <span class="value">{{ member.education }}</span>
              </div>
              <div v-if="member.specialty" class="time">
                <span class="label">{{ team.labels.specialty }}</span>
                <span class="value">{{ member.specialty }}</span>
              </div>
              <div v-if="member.experience" class="experience">
                <span class="label">{{ team.labels.experience }}</span>
                <span class="value">{{ member.experience }}</span>
              </div>
              <div class="icon"><i class="ti-arrow-top-right"></i></div>
            </div>
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

<style scoped>
.team-group + .team-group {
  margin-top: 3rem;
}

.team-group__title {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #278162;
}

.member-position {
  margin-top: 0.65rem;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
}
</style>
