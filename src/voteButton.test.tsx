import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import VoteButton from "./voteButton";
import { describe, it, expect, vi } from "vitest";

describe("VoteButton", () => {
  it("renders the VoteButton component", () => {
    const stubHandleVote = vi.fn();

    render(
      <VoteButton
        onClick={stubHandleVote}
        disabled={false}
        testid='like'
        variant='secondary'
        children
      />
    );

    const voteButton = screen.getByRole("button");
    expect(voteButton).toBeInTheDocument();
  });

  it("calls the handleVote function when clicked", async () => {
    const stubHandleVote = vi.fn();
    render(
      <VoteButton
        onClick={stubHandleVote}
        disabled={false}
        testid='like'
        variant='secondary'
        children
      />
    );
    const voteButton = screen.getByRole("button");
    await user.click(voteButton);
    expect(stubHandleVote).toHaveBeenCalled();
    expect(stubHandleVote).toHaveBeenCalledTimes(1);
  });
});
