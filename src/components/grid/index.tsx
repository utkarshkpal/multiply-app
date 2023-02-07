import { useState, useMemo, useCallback, useRef } from "react";
import { GridCell } from "components/grid-cell";
import "./grid.css";
import { findMultiplesInRange } from "components/utils/utils";

export interface GridProps {
  numCells: number;
}

const Grid: React.FC<GridProps> = ({ numCells }) => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const cache = useRef(new Map());

  const handleCellClick = useCallback((cellNumber: number) => {
    setSelectedNumber(cellNumber);
  }, []);

  const gridCells = useMemo(() => {
    const createGridCells = (numCells: number): number[] => {
      const gridCells = new Array(numCells);
      gridCells.fill(0);
      return gridCells.map((elem, index) => index + 1);
    };

    return createGridCells(numCells);
  }, [numCells]);

  const cellsToHighlight: Set<number> = useMemo(() => {
    if (cache.current.has(selectedNumber)) {
      return cache.current.get(selectedNumber);
    }
    const multipleSet = findMultiplesInRange(selectedNumber, numCells);
    cache.current.set(selectedNumber, multipleSet);
    return multipleSet;
  }, [selectedNumber, numCells]);

  return (
    <section className="grid-container">
      {gridCells.map((cellNumber) => (
        <GridCell
          key={cellNumber}
          isSelected={selectedNumber === cellNumber}
          cellNumber={cellNumber}
          handleCellClick={handleCellClick}
          isHighlighted={cellsToHighlight.has(cellNumber)}
        />
      ))}
    </section>
  );
};

export { Grid };
