import "@testing-library/jest-dom";
import "whatwg-fetch";
import {expect, afterEach} from "vitest";
import {cleanup} from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import {server} from "./src/mocks/server.ts";

expect.extend(matchers);

afterEach(() => {
    cleanup();
});

beforeAll(() => server.listen({onUnhandledRequest: "error"}));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());