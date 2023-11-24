import { type App, h, type AppContext } from "vue";
import Message from "./src/index";

Message.install = (app: App) => {
  app.component(Message.name, Message);
};

function MessageBox(message: string | Record<string, any>, _ctx: AppContext) {
  if (typeof message === "string") {
    h(Message, { message: message });
  } else {
    h(Message, message);
  }
}

export default MessageBox;
