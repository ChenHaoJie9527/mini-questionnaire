## 玩转React Hooks

在如今的 React 中，Hooks 已经逐渐取代了 Class 的地位，成了主导。正所谓明其象意，知其本质，要想更好地玩转 Hooks，我们首先要了解组件的通信方式、强化方式，从而明确 Hooks 的优势所在。

#### 组件的通信方式

​	React组件分为两大类，分别是 **Class** 组件 与 **Function** 组件，在与 JavaScript 中普通的 Class 和 函数有本质的区别，即 React 中的 类 和 函数组件都承载着 渲染UI和更新UI的功能。

由于组件化开发，即每个组件都可以抽象成独立的个体，那么将线串联起来，就涉及到组件之间的通信机制。

​	React中一共有五种通信方式：**Props 和 Callback**、**Context 跨层级**、**Event事件**、**Ref传递**、状态管理（如**Redux、Mobx、Recolu、Jotai**），常用的主要有 第一种和第二种

1. **Props** 和 **Callback**

   父传子，子传父。

   a. 父组件传递子组件，通过Props传递参数，那么如果是context或者元素组件等则通过Childer方式传递

   ```tsx
       import { useState } from "react";
       import { Button } from "antd";
   
       const Index: React.FC<any> = () => {
         const [flag, setFlag] = useState<boolean>(true);
   
         return (
           <>
             <div>我是父组件</div>
             <Button type="primary" onClick={() => setFlag((v) => !v)}>
               切换状态
             </Button>
             <Child flag={flag}>大家好，我是小杜杜，一起玩转Hooks吧！</Child>
           </>
         );
       };
   
       const Child: React.FC<any> = (props) => {
         const { flag, children } = props;
         return (
           <div style={{ border: "1px solid #000", padding: 20 }}>
             <div>我是子组件</div>
             <div>父组件传递的flag：{JSON.stringify(flag)}</div>
             <div>父组件传递的children：{children}</div>
           </div>
         );
       };
   
       export default Index;
   ```

   ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/150bfc79e87142f5a544b61272466f4b~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

   b. 子传父

   子组件传父组件：子传父，也称状态提升，通过父组件传递的 callback 函数，通知父组件。如：

   ```tsx
       import { useState } from "react";
       import { Button } from "antd";
   
       const Index: React.FC<any> = () => {
         const [number, setNumber] = useState<number>(0);
   
         return (
           <>
             <div>我是父组件</div>
             <div>子组件的number：{number}</div>
   
             <Child
               getNumber={(v: number) => {
                 setNumber(v);
               }}
             >
               大家好，我是小杜杜，一起玩转Hooks吧！
             </Child>
           </>
         );
       };
   
       const Child: React.FC<any> = ({ getNumber }) => {
         const [number, setNumber] = useState<number>(0);
   
         return (
           <div style={{ border: "1px solid #000", padding: 20 }}>
             <div>我是子组件</div>
             <Button
               type="primary"
               onClick={() => {
                 const res = number + 1;
                 setNumber(res);
                 getNumber(res);
               }}
             >
               点击加一{number}
             </Button>
           </div>
         );
       };
   
       export default Index;
   
   ```

   ![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bc73db1878304cf39330483372256741~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)

2. Contexte 方式