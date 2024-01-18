let currRenderDom: any = null;
interface keepFitPing {
  designWidth: number;
  designHeight: number;
  dom: HTMLElement;
}
interface optionsPing {
  designWidth: number;
  designHeight: number;
  renderDom: string;
  resize?: boolean;
}
function keepFit(parmas: keepFitPing) {
  let clientHeight = document.documentElement.clientHeight;
  let clientWidth = document.documentElement.clientWidth;
  const scale =
    clientWidth / clientHeight < parmas.designWidth / parmas.designWidth
      ? clientWidth / parmas.designWidth
      : clientHeight / parmas.designHeight;
  parmas.dom.style.height = `${clientHeight / scale}px`;
  parmas.dom.style.width = `${clientWidth / scale}px`;
  parmas.dom.style.transform = `scale(${scale})`;
}
const autoFit = {
  init(options: optionsPing) {
    let designWidth = options.designWidth || 1920;
    let designHeight = options.designHeight || 1080;
    let renderDom = options.renderDom || "#app";
    let resize = options.resize || true;
    currRenderDom = renderDom;
    let dom: HTMLElement = document.querySelector(renderDom);
    const style = document.createElement("style");
    style.lang = "text/css";
    style.id = "autofit-style";
    style.innerHTML = `body{
      overflow:hidden;
    }`;
    dom.appendChild(style);
    dom.style.height = `${designHeight}px`;
    dom.style.width = `${designWidth}px`;
    dom.style.transformOrigin = "0 0";
    keepFit({ designWidth, designHeight, dom });
    resize &&
      (window.onresize = () => {
        keepFit({ designWidth, designHeight, dom });
      });
  },
  off(renderDom = "#app") {
    window.onresize = null;
    document.querySelector("#autofit-style").remove();
    document.querySelector(currRenderDom ? currRenderDom : renderDom).style =
      "";
  },
};
export default autoFit;
