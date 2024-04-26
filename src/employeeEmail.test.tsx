import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EmployeeEmail from "./employeeEmail";
import user from "@testing-library/user-event";

describe("EmployeeEmail", () => {
  it("renders the EmployeeEmail component", () => {
    const { container } = render(<EmployeeEmail />);
    expect(container).toBeInTheDocument();
  });

  it("it accepts a username and displays it to the screen", async () => {
    render(<EmployeeEmail />);
    const input = screen.getByTestId("input");

    await user.type(input, "John Smith");
    expect(input).toHaveValue("John Smith");
    screen.debug();
  });
});
