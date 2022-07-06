import {
  findAllByAltText,
  render,
  screen,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { Options } from "../Options";
import { store } from "../../../store/store";

describe("Test option component", () => {
  test("displays image for each scoop option from server", async () => {
    render(
      <Provider store={store}>
        <Options optionType={"scoops"} />
      </Provider>
    );
    const scoopImages = await screen.findAllByRole("img", {
      name: /scoop$/i,
    });
    expect(scoopImages).toHaveLength(2);

    // check that the images are the correct alt text
    // const scoopText2 = scoopImages.map((img) =>
    //   img.getAttribute("alt")
    // );

    const scoopText = scoopImages.map((img) => img.alt);
    expect(scoopText).toEqual(["Vanilla scoop", "Chocolate scoop"]);
  });

  test("displays image for each topping option from server", async () => {
    render(
      <Provider store={store}>
        <Options optionType={"toppings"} />
      </Provider>
    );
    // const toppingsImages = await screen.findAllByRole(
    //   "img",
    //   /topping$/i
    // );
    const toppingsImages = await screen.findAllByAltText(/topping$/i);
    expect(toppingsImages).toHaveLength(3);
    const toppingText = toppingsImages.map((img) => img.alt);
    expect(toppingText).toEqual([
      "Cherries topping",
      "M&Ms topping",
      "Hot fudge topping",
    ]);
  });
});
