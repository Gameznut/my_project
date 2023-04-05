<template>
  <div class="flex items-center justify-center min-h-screen bg-[#b7faf1]">
    <div class="flex items-center justify-center gap-11">
      <NuxtLink class="link" to="/weather"> Weather Card </NuxtLink>
      <NuxtLink class="link" to="/blog"> Blog </NuxtLink>
    </div>
  </div>
</template>
<script setup>
useHead(
  () => ({
    title: "My Project 🚀🚀",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page",
      },
    ],
  }),
  []
);
</script>

<style scoped>
.link{
  transition-duration: 300ms;
  text-decoration: none;
  color: #352f2f;
  font-size: 1.5rem;
  font-weight: 700;
  background: #bbda92;
  padding: 10px 40px;
  border-radius: 10px;
}
.link:hover{
  text-decoration: none;
  color: #2c2b2b;
  font-size: 1.5rem;
  font-weight: 700;
  background: #e7d6d6;
  padding: 10px 40px;
  border-radius: 10px;
  transform: scale(1.1);
}
</style>
