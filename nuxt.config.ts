// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@element-plus/nuxt"],

  css: ["~/assets/styles/main.css"],

  imports: {
    autoImport: true,
  },

  components: [
    {
      path: "@/components",
    },
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,
});
