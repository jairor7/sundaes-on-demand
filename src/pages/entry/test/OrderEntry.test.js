import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { Provider } from "react-redux";
import baseUrl from "../../../api/baseUrl";
import { server } from "../../../mocks/server";
import { store } from "../../../store/store";
import { OrderEntry } from "../OrderEntry";

describe("Test <OrderEntry /> component", () => {
  beforeEach(() => {
    server.resetHandlers(
      rest.get(`${baseUrl}/scoops`, (req, res, ctx) => {
        return res(ctx.status(500));
      }),
      rest.get(`${baseUrl}/toppings`, (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
  });
  test("handler error for scoops and toppings", async () => {
    render(
      <Provider store={store}>
        <OrderEntry />
      </Provider>
    );
    const alertError = await screen.findAllByRole("alert");
    expect(alertError).toHaveLength(2);
  });
});
