/*
 * @Author: SunFulin
 * @Date: 2023-10-09 09:25:10
 * @LastEditTime: 2023-10-18 10:11:33
 * @LastEditors: Dragon
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import fs from "fs";
import pxtoviewport from "postcss-px-to-viewport";
const resolve = (s:string) => path.resolve(__dirname, s);
const sites = fs.readdirSync(resolve("./src/views"));
console.log(sites);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxtoviewport({
          viewportWidth: 1920,
          viewportUnit: "vw",
          // 忽略
          exclude: [/node_modules/],
        }),
      ],
    },
  },

});
