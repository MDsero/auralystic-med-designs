import "./lib/error-capture";

import { renderErrorPage } from "./lib/error-page";

export default {
  async fetch(request: Request) {
    try {
      return new Response(`Hello from the Vite app server. ${request.url}`, {
        status: 200,
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
