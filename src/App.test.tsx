import { render } from "@testing-library/react";
import { getRandomColor } from "./components/HomePage";
import App from "./App";

test("renders without crashing", () => {
  const { baseElement } = render(<App />);
  expect(baseElement).toBeDefined();
});

test("Random color returns an empty string", () => {
  const color = getRandomColor();
  expect(color).not.toEqual("");
});
