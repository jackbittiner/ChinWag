import { render, screen, within } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import App from "./App";

describe("App", () => {
  it("renders a list of conversations", async () => {
    render(<App />);

    expect(await screen.findByText("Conversation 1")).toBeInTheDocument();
    expect(await screen.findByText("Conversation 2")).toBeInTheDocument();
    expect(await screen.findByText("Conversation 3")).toBeInTheDocument();
    expect(await screen.findByText("Conversation 4")).toBeInTheDocument();
    expect(await screen.findByText("Conversation 5")).toBeInTheDocument();
  });

  it("should open up a the most recently updated chat feed when clicking on the first conversation", async () => {
    render(<App />);

    const conversationText = await screen.findByText("Conversation 1");

    await userEvent.click(conversationText);

    expect(screen.getByText("qui sint irure sunt")).toBeInTheDocument();
  });

  it("should open up a the second most recently updated chat feed when clicking on the second conversation", async () => {
    render(<App />);

    const conversationText = await screen.findByText("Conversation 2");

    await userEvent.click(conversationText);

    expect(screen.getByText("Lorem labore ea et")).toBeInTheDocument();
  });

  it("should show messages with the last updated first", async () => {
    render(<App />);

    const conversationText = await screen.findByText("Conversation 1");

    await userEvent.click(conversationText);

    const lastUpdatedElements = screen.getAllByTestId("message-last-updated");

    expect(
      within(lastUpdatedElements[0]).getByText("2020-02-24T03:21:14")
    ).toBeInTheDocument();
    expect(
      within(lastUpdatedElements[1]).getByText("2020-05-14T12:24:10")
    ).toBeInTheDocument();
    expect(
      within(lastUpdatedElements[2]).getByText("2020-07-13T12:50:37")
    ).toBeInTheDocument();
  });
});
