<template>
  <div class="bg-[#e9d7fa] min-h-screen">
    <HomeButton />
    <div class="py-[4rem] px-[1rem] max-w-[1200px] mx-auto">
      <div><ContentDoc /></div>
      <ContentNavigation v-slot="{ navigation }">
        <p class="text-[30px]">Table of Content</p>
        <ul class="flex flex-col gap-5">
          <li v-for="link in navigation[0].children" :key="link._path">
            <NuxtLink
              class="bg-[#968e8e] hover:bg-white duration-300 px-[20px] block py-[10px] rounded-xl w-max text-white hover:text-black"
              :to="link._path"
            >
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul>
      </ContentNavigation>
    </div>
  </div>
</template>

<script setup>
useHead(() => ({
  title: "Welcome to my Blog",
  meta: [
    {
      hid: "description",
      name: "description",
      content: "This is my blog",
    },
  ],
}));
</script>
