export default function debounce(app: any) {
  app.directive("debounce", {
    mounted(el: any, binding: any) {
      let timer: any;
      let time: number;
      // 判断传多个参数
      if (
        Object.prototype.toString.call(binding.arg).slice(8, -1) === "Object"
      ) {
        console.log(binding.arg);
        time = binding.arg.time;
      } else {
        time = binding.arg;
      }
      el.addEventListener("click", () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          binding.value();
        }, time);
      });
    },
  });
}
