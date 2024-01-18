import debounce from "./directives/debounce";
import Voice_Broadcast from "./directives/voiceBroadcast";
export default function registerDirectives(app: any) {
  debounce(app);
  Voice_Broadcast(app);
}
