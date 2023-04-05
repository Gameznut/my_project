<template>
  <div class="max-w-[1000px] rounded-lg overflow-hidden my-[10px]">
    <div class="flex justify-end bg-[#555454] text-white px-[20px] py-[10px]">
      <small v-if="copied">Copied</small>

      <small
        v-else
        @click="copy(slots?.children[0].textContent as string)"
        class="block cursor-pointer hover:text-black duration-300"
        ><Icon name="📋" class="mr-[3px]" size="20" /> copy code</small
      >
    </div>
    <div
      ref="slots"
      id="text-to-copy"
      class="bg-black sm:overflow-auto overflow-x-scroll p-[20px]"
    >
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
const slots = ref();
const source = ref(slots);
const { copy, copied, isSupported } = useClipboard({ source });

onMounted(() => {
  if (isSupported.value) {
  } else {
    console.log("Clipboard not supported");
    useNuxtApp().$toast.error("Clipboard not supported");
  }
});
</script>
