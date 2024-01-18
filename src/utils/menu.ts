interface MenuItem {
  title:string,
route:string
}
const MenuList:Array<MenuItem> = [
   {
    title: "自定义指令",
    route: "/voiceBroadcast",
  },
  {
    title: "TS泛型",
    route: "/tst",
  },
  {
    title: "拖拽生成表单",
    route: "/draggable"
  }
]
export default MenuList


