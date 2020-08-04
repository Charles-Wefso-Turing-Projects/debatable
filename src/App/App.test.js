import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { MemoryRouter, Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../App/App";

describe("App", () => {
  it("should display a splash screen on load", () => {
    const useTopics = jest.fn();
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const pageTitle = getByRole("heading");
    const button = getByRole("link", { name: "click to start" });
    expect(button).toBeInTheDocument();
  });

  it("should display a splash screen on load", () => {
    const { getByLabelText, getByRole } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const pageTitle = getByRole("heading");
    const button = getByRole("link", { name: "click to start" });
    expect(pageTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("should change to the route path of /instructions when the `click to start` button is clicked", async () => {
    const testHistoryObject = createMemoryHistory();
    const { getByRole } = render(
      <Router history={testHistoryObject}>
        <App />
      </Router>
    );
    expect(testHistoryObject.location.pathname).toEqual("/");
    const button = getByRole("link", { name: "click to start" });
    fireEvent.click(button);
    expect(testHistoryObject.location.pathname).toEqual("/instructions");
  });

  it("should display instructions when the `/instructions` route is accessed", async () => {
    const testHistoryObject = createMemoryHistory();
    const { getByRole, getAllByRole } = render(
      <Router history={testHistoryObject}>
        <App />
      </Router>
    );
    expect(testHistoryObject.location.pathname).toEqual("/");
    const button = getByRole("link", { name: "click to start" });
    fireEvent.click(button);
    expect(testHistoryObject.location.pathname).toEqual("/instructions");
    const heading = getByRole("heading");
    const list = getAllByRole("list");
    const beginButton = getByRole("link", { name: "BEGIN" });
    expect(heading).toBeInTheDocument();
    expect(list).toHaveLength(1);
    expect(beginButton).toBeInTheDocument();
  });

  it("should change to the route path of /names when the `click to start` button is clicked", async () => {
    const testHistoryObject = createMemoryHistory();
    const { getByRole } = render(
      <Router history={testHistoryObject}>
        <App />
      </Router>
    );
    expect(testHistoryObject.location.pathname).toEqual("/");
    const button = getByRole("link", { name: "click to start" });
    fireEvent.click(button);
    expect(testHistoryObject.location.pathname).toEqual("/instructions");
    const beginButton = getByRole("link", { name: "BEGIN" });
    expect(beginButton).toBeInTheDocument();
    fireEvent.click(beginButton);
    expect(testHistoryObject.location.pathname).toEqual("/names");
  });

  it("should render the `names` component when the route is `names`", async () => {
    const testHistoryObject = createMemoryHistory();
    const { getByRole, getAllByRole } = render(
      <Router history={testHistoryObject}>
        <App />
      </Router>
    );
    expect(testHistoryObject.location.pathname).toEqual("/");
    const button = getByRole("link", { name: "click to start" });
    fireEvent.click(button);
    expect(testHistoryObject.location.pathname).toEqual("/instructions");
    const beginButton = getByRole("link", { name: "BEGIN" });
    expect(beginButton).toBeInTheDocument();
    fireEvent.click(beginButton);
    expect(testHistoryObject.location.pathname).toEqual("/names");
    const inputs = getAllByRole("textbox");
    const warning = getByRole("heading", { name: "Please Add Five Names" });
    expect(warning).toBeInTheDocument();
    expect(inputs).toHaveLength(5);
  });
});
