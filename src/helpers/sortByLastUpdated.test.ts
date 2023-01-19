import { sortByLastUpdated } from "./sortByLastUpdated";

describe("sortByLastUpdated", () => {
  it("sorts an array with in order of last updated property", () => {
    const arrayToSort = [
      { last_updated: "2025-01-01T12:00:00" },
      { last_updated: "2021-01-01T12:00:00" },
      { last_updated: "2024-01-01T12:00:00" },
      { last_updated: "2022-01-01T12:00:00" },
      { last_updated: "2021-01-01T12:00:01" },
    ];
    const result = sortByLastUpdated(arrayToSort);

    expect(result).toEqual([
      { last_updated: "2025-01-01T12:00:00" },
      { last_updated: "2024-01-01T12:00:00" },
      { last_updated: "2022-01-01T12:00:00" },
      { last_updated: "2021-01-01T12:00:01" },
      { last_updated: "2021-01-01T12:00:00" },
    ]);
  });
});
