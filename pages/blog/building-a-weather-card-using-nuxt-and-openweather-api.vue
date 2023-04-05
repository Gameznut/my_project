<template>
  <div class="bg-[#e9d7fa] min-h-screen h-full">
    <BlogHomeButton />

    <div class="py-[4rem] px-[1rem] max-w-[1000px] mx-auto">
      <main>
        <ContentDoc />
      </main>
    </div>
  </div>
</template>



<style scoped>
main :deep(h1) {
  margin-top: 2rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #3d3d3d;
  margin-bottom: 1rem;
}

main :deep(h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3d3d3d;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

main :deep(p) {
  font-size: 1.1rem;
  color: #3d3d3d;
}

main :deep(img){
  max-width: 100%;
  margin: 10px auto;
  display: block;
  border-radius: 20px;
}


</style>
