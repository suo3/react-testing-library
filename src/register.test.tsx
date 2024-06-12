import { render, screen, fireEvent } from "@testing-library/react";
import { vi, expect, it, describe } from "vitest";
import user from "@testing-library/user-event";
import Register from "./register";

describe("Register", () => {
  it("given submitted form, invokes handleRegister", async () => {
    const mockHandleRegister = vi.fn();
    const mockValues = {
      email: "john@mail.com",
      password: "123",
    };

    render(<Register handleRegister={mockHandleRegister} />);
    const emailInput = screen.getByLabelText("email");
    const passwordInput = screen.getByLabelText("password");
    const submitButton = screen.getByTestId("submit");

    /* fireEvent.change(emailInput, { target: { value: mockValues.email } });
    fireEvent.change(passwordInput, { target: { value: mockValues.password } });
    fireEvent.click(submitButton); */

    await user.type(emailInput, mockValues.email);
    await user.type(passwordInput, mockValues.password);
    await user.click(submitButton);
    expect(mockHandleRegister).toHaveBeenCalledTimes(1);
    expect(mockHandleRegister).toHaveBeenCalledWith({
      email: mockValues.email,
      password: mockValues.password,
    });

    expect(emailInput.value).toBe(mockValues.email);
    expect(passwordInput.value).toBe(mockValues.password);
  });
});
