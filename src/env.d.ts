declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}
declare module '*?raw' {
  const s: string;
  export default s;
}
declare module '*?inline' {
  const s: string;
  export default s;
}
