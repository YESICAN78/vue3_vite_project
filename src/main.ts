/*
 * @Author: SunFulin
 * @Date: 2023-10-09 09:25:10
 * @LastEditTime: 2023-10-17 10:29:04
 * @LastEditors: Dragon
 */
import { createApp } from "vue";
import "./assets/style/common.less"
import 'vant/lib/index.css'
import router from "./router/index";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import registerDirectives from "./registerDirectives/index";
import autoFit from "./utils/adaptiveLayout";
import { Button, Field, Slider, Badge, Icon, Space, Rate, Stepper } from 'vant'
const app = createApp(App);
registerDirectives(app);
app.use(router);
app.use(ElementPlus);
app.use(Field)
app.use(Slider)
app.use(Badge)
app.use(Icon)
app.use(Space)
app.use(Rate)
app.use(Stepper)
app.use(Button)
app.mount("#app");
autoFit.init({ designHeight: 1080, designWidth: 1920, renderDom: "#app" });
