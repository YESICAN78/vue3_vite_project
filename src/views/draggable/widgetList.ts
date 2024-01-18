
import { generateUUID } from '@/utils/Tool'
import {ComponentItem} from "./interface"
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type removeKey = 'valueKey' | 'id'
type newComponentItem = Optional<ComponentItem, removeKey>
const widgetsMenu:newComponentItem[] = [
  { name: "单行文本", element: 'Input',id:"" },
  { name: "多行文本", element: 'Textarea' ,id:""},
  { name: "计数器", element: 'Stepper' ,id:""},
  { name: "单选框组", element: 'Radio' ,id:""},
  { name: "滑块", element: 'Slider' ,id:""},
  { name: "评分", element: 'Rate' ,id:""},
  { name: "按钮", element: 'Button' ,id:""},
]
export const getWidgetsList = ()=>{
 let list = widgetsMenu.map(item=>{
  item.id = generateUUID()
  return item
 })
 return list
}