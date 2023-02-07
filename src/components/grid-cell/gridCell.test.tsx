import { GridCell } from ".";
import { render, screen } from "@testing-library/react";
import { gridCellData } from "./mocks";
import userEvent from "@testing-library/user-event";

test("renders button with correct gridCell number", () => {
  render(<GridCell {...gridCellData} />);

  expect(
    screen.getByRole("button", {
      name: `${gridCellData.cellNumber}`,
    })
  ).toBeInTheDocument();
});

test("cell does not have highlighted class if highlighted prop is not passed", () => {
  render(<GridCell {...gridCellData} />);

  expect(
    screen
      .getByRole("button", {
        name: `${gridCellData.cellNumber}`,
      })
      .classList.contains("highlighted")
  ).toBe(false);
});

test("cell has highlighted class if highlighted prop is passed", () => {
  render(<GridCell {...gridCellData} isHighlighted />);

  expect(
    screen
      .getByRole("button", {
        name: `${gridCellData.cellNumber}`,
      })
      .classList.contains("highlighted")
  ).toBe(true);
});

test("cell has selected class if highlighted prop is passed", () => {
  render(<GridCell {...gridCellData} isSelected />);

  expect(
    screen
      .getByRole("button", {
        name: `${gridCellData.cellNumber}`,
      })
      .classList.contains("selected")
  ).toBe(true);
});

test("calls handleCellClick with correct cell number", () => {
  render(<GridCell {...gridCellData} />);

  userEvent.click(
    screen.getByRole("button", {
      name: `${gridCellData.cellNumber}`,
    })
  );
  expect(gridCellData.handleCellClick).toHaveBeenCalledTimes(1);
  expect(gridCellData.handleCellClick).toHaveBeenCalledWith(
    gridCellData.cellNumber
  );
});
