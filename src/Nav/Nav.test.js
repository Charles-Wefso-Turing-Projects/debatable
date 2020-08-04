import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Nav from "../Nav/Nav";

describe("Nav", () => {
  it("should display all nav elements on load", () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    const pageTitle = getByLabelText("debatable");
    expect(pageTitle).toBeInTheDocument();
  });
});
