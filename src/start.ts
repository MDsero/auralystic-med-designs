import { renderErrorPage } from "./lib/error-page";

export const startInstance = {
  requestMiddleware: [],
};

export function createErrorResponse(message = "Unexpected error") {
  console.error(message);
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}
