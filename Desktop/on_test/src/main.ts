import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    text: "new",
    counter: 0,
  },
});

export default app;
