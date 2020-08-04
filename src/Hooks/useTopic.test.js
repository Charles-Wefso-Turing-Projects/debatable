import { renderHook } from "@testing-library/react-hooks";
import useTopic from "./useTopic";

describe("the useTopic hook", () => {
  beforeAll(() => {
    jest.spyOn(
      global,
      "fetch"
    )(() =>
      Promise.resolve({
        json: () =>
          Promise.resolved({
            topic: "Pizza",
          }),
      })
    );
    jest.setTimeout(30000);
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });

  it("should make two fetch calls", async () => {
    const { result } = renderHook(() => useTopic(22));
    expect(fetch).toHaveBeenCalledTimes(2);
  });
});
