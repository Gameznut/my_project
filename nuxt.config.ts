import { ThemeConfig } from "tailwindcss/types/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My project',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1', },
                { hid: 'description', name: 'description', content: 'Nuxt Icon' },

            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css' },
            ],
        }
    },
    css: ['~/assets/css/main.css'],
    modules: ['nuxt-icon', "@nuxt/content", '@vueuse/nuxt',],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        weatherApi: "1afcfea69e6424cf14395026269e10a8"

    },
    content: {
        highlight: {
            // Theme used in all color schemes.
            theme: "one-dark-pro"
        }
    }
})
