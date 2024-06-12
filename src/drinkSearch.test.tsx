import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import DrinkSearch from "./drinkSearch";
import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { mockServer } from "./mocks/server";
beforeAll(() => mockServer.listen());
afterEach(() => mockServer.resetHandlers());
afterAll(() => mockServer.close());

describe(() => {
  it("renders mock drink data", async () => {
    render(<DrinkSearch />);
    const searchInput = screen.getByRole("searchbox");

    user.type(searchInput, "vodka, {enter}");
    expect(
      await screen.findByRole("img", { name: /test drink/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /test drink/i })
    ).toBeInTheDocument();

    expect(screen.getByText(/test ingredient/i)).toBeInTheDocument();
    expect(screen.getByText(/test instructions/i)).toBeInTheDocument();
  });

  it("renders no drink results", async () => {
    mockServer.use(
      rest.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              drinks: null,
            })
          );
        }
      )
    );
    render(<DrinkSearch />);
    const searchInput = screen.getByRole("searchbox");

    user.type(searchInput, "vodka, {enter}");

    expect(
      await screen.findByRole("heading", { name: /no drinks found/i })
    ).toBeInTheDocument();
  });
  it("renders service unavailable", async () => {
    mockServer.use(
      rest.get(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php",
        (req, res, ctx) => {
          return res(ctx.status(503));
        }
      )
    );

    render(<DrinkSearch />);
    const searchInput = screen.getByRole("searchbox");
    user.type(searchInput, "vodka, {enter}");
    expect(
      await screen.findByRole("heading", { name: /service unavailable/i })
    ).toBeInTheDocument();
  });

  it("prevents GET request when search input is empty", async () => {
    () => {
      render(<DrinkSearch />);
      const searchInput = screen.getByRole("searchbox");
      user.type(searchInput, "{enter}");
      expect(screen.queryByRole("heading")).not.toHaveBeenCalled();
    };
  });
});
