import { Grid } from ".";
import { gridData } from "./mocks";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { findMultiplesInRange } from "components/utils/utils";

test("renders number of buttons equal to the numCell props passed ", () => {
  render(<Grid {...gridData} />);

  expect(screen.queryAllByRole("button")).toHaveLength(144);
});

test("highlights multiples of selected number", () => {
  render(<Grid {...gridData} />);

  const selectedNumber = 12;

  const multiplesSet = findMultiplesInRange(selectedNumber, gridData.numCells);

  userEvent.click(
    screen.getByRole("button", {
      name: selectedNumber.toString(),
    })
  );
  const highlightedCells = screen.queryAllByRole("button").filter((cell) => {
    return cell.classList.contains("highlighted");
  });

  expect(highlightedCells.length).toBe(multiplesSet.size);
});
