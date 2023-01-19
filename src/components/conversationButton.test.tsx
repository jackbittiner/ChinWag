import { render, screen } from "@testing-library/react";

import { ConversationButton } from "./conversationButton";
import { Conversation } from "../types";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders the chat number", () => {
    render(
      <ConversationButton
        conversation={{} as Conversation}
        chatNumber={100}
        openConversationHandler={vi.fn()}
      />
    );

    expect(screen.getByText("Conversation 100")).toBeInTheDocument();
  });

  it("calls the openConversationHandler with the conversation when clicked", async () => {
    const conversation = { id: "some-id", name: "Bob Loblaw" } as Conversation;
    const mockOpenConversationHandler = vi.fn();

    render(
      <ConversationButton
        conversation={conversation}
        chatNumber={100}
        openConversationHandler={mockOpenConversationHandler}
      />
    );

    const conversationText = screen.getByText("Conversation 100");

    await userEvent.click(conversationText);

    expect(mockOpenConversationHandler).toHaveBeenCalledWith(conversation);
  });
});
