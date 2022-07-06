import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "../SummaryForm";

describe("test the component SummaryForm", () => {
  test("Checkbox is unchecked by default", () => {
    render(<SummaryForm />);
    const checkboxTermsAndConditions = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const buttonSubmit = screen.getByRole("button", {
      name: /confirm order/i,
    });
    expect(checkboxTermsAndConditions).not.toBeChecked();
    expect(buttonSubmit).toBeDisabled();
  });
  test("Checking checkbox enable button on first click and disable on second click", async () => {
    render(<SummaryForm />);
    const checkboxTermsAndConditions = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const buttonSubmit = screen.getByRole("button", {
      name: /confirm order/i,
    });
    await userEvent.click(checkboxTermsAndConditions);
    // fireEvent.click(checkboxTermsAndConditions);
    expect(buttonSubmit).toBeEnabled();
    await userEvent.click(checkboxTermsAndConditions);
    // fireEvent.click(checkboxTermsAndConditions);
    expect(buttonSubmit).toBeDisabled();
  });
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);
  // popover is not visible by default
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  // popover appears on hover
  const termsAndConditions = screen.getByText(
    /terms and conditions/i
  );
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(
    /no ice cream will actually be delivered/i
  );
  expect(popover).toBeInTheDocument();
  // popover disappears when we move the mouse out of the popover
  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i)
  );
});
