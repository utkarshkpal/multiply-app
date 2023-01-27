import "./gridCell.css";

export interface GridCellProps {
  cellNumber: number;
  isSelected: boolean;
  isHighlighted: boolean;
  handleCellClick: (cellNumber: number) => void;
}

const GridCell: React.FC<GridCellProps> = ({
  cellNumber,
  isHighlighted,
  isSelected,
  handleCellClick,
}: GridCellProps) => {
  return (
    <button
      aria-label={cellNumber.toString()}
      className={`grid-item ${isHighlighted ? "highlighted" : ""} ${
        isSelected ? "selected" : ""
      }`}
      onClick={() => handleCellClick(cellNumber)}
    >
      {cellNumber}
    </button>
  );
};

export { GridCell };
