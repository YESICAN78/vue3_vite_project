// 语音播报

export default function Voice_Broadcast(app: any) {
  app.directive("voiceBroadcast", {
    mounted(el: any, binding: any) {
      const { text } = binding.arg;
      el.addEventListener("click", () => {
        if (!text) return;
        const speech = new SpeechSynthesisUtterance();
        // 设置播放内容
        speech.text = text;
        // 设置话语的音调(0-2 默认1，值越大越尖锐,越低越低沉)
        speech.pitch = 0.8;
        // 设置说话的速度(0.1-10 默认1，值越大语速越快,越小语速越慢)
        speech.rate = 2;
        // 设置说话的音量
        speech.volume = 100;
        // 设置播放语言
        speech.lang = "zh-CN";
        speech.onend = (_eve) => {
          if (binding.value) {
            binding.value();
          }
        };
        // 加入播放队列
        window.speechSynthesis.speak(speech);
      });
    },
  });
}
