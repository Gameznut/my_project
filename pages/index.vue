<template>
  <div class="bg-[#c2f3fc] min-h-screen grid place-items-center">
    <div>
      <p v-if="loading" class="text-center w-full mb-[10px]">Getting the data</p>
      <div class="w-[500px] bg-[#6f6fa0] rounded-[10px] overflow-hidden">
        <div class="bg-[#928d8d] flex items-center">
          <div class="w-full bg-[#928d8d] flex items-center px-[10px]">
            <input
              class="outline-none bg-[#928d8d] w-full text-white font-bold placeholder:text-[#d8d5d5]"
              type="text"
              placeholder="Search for other locations"
              v-model="searchWeather"
              name=""
              id=""
              @keydown="keyboard"
            />
          </div>
          <button
            :disabled="searchWeather.trim() == ''"
            :class="
              searchWeather.trim() == ''
                ? 'bg-[#928d8d] cursor-not-allowed'
                : 'bg-[white] hover:bg-[black] hover:text-[white]'
            "
            class="bg-[white] p-[10px] duration-500"
            @click="fetchWeather"
          >
            <Icon name="ri:search-2-line" size="20" />
          </button>
        </div>

        <div class="p-[10px] text-white">
          <div class="flex justify-between w-full items-center mb-[30px]">
            <div>
              <p class="text-[20px]">
                {{ (newLocation == "" ? "Lagos" : newLocation).toUpperCase() }}
              </p>

              <p class="text-[20px]">
                {{ result.description }}
              </p>
            </div>
            <img id="wicon" class="w-[70px]" :src="result.icon" alt="weather icon" />
          </div>

          <div class="text-[40px] flex justify-between">
            <div class="flex flex-col items-center">
              <p>{{ (result.temp - 273).toFixed(1) }}°C</p>
              <p class="text-sm">Temperature</p>
            </div>
            <div class="flex flex-col items-center">
              <p>{{ result.pressure }}hPa</p>
              <p class="text-sm">Pressure</p>
            </div>
            <div class="flex flex-col items-center">
              <p>{{ result.humidity }}%</p>
              <p class="text-sm">Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const loading = ref(false);
const searchWeather = ref("");
const newLocation = ref("");
const result = ref({
  temp: 0,
  pressure: 0,
  humidity: 0,
  description: "",
  condition: "",
  icon: "",
});

const { data } = await useFetch(
  `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=1afcfea69e6424cf14395026269e10a8`
);
result.value = data.value.main;
result.value.temp = data.value.main.temp;
result.value.description = data.value.weather[0].description;
result.value.icon = `http://openweathermap.org/img/w/${data.value.weather[0].icon}.png`;

const fetchWeather = async () => {
  loading.value = true;
  const { data, error } = await useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchWeather.value.trim()}&appid=1afcfea69e6424cf14395026269e10a8`
  );

  console.log(loading.value);
  if (error.value) {
    useNuxtApp().$toast.error(error.value.data.message);
    loading.value = false;
  } else {
    newLocation.value = searchWeather.value;
    searchWeather.value = "";
    loading.value = false;

    let res = data.value;
    result.value = res.main;
    result.value.temp = res.main.temp;
    result.value.description = data.value.weather[0].description;
    result.value.icon = `http://openweathermap.org/img/w/${data.value.weather[0].icon}.png`;
  }
};

const keyboard = (e) => {
  if (e.key === "Enter" && searchWeather.value.trim() != "") {
    fetchWeather();
  }
};
</script>
