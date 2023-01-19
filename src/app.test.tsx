import { render, screen } from "@testing-library/react";

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
});
