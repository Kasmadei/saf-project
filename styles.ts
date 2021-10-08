import { StyleSheet } from "react-native";

export const TABLE_CELL_WIDTH = 90;
export const TABLE_CELL_HEIGHT = 52;

export const TABLE_CELL_WIDTH_MIN = 65;

const customGrey = "#D5D5D9";

export const tableStyles = StyleSheet.create({
  tableContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tableHeaderContainer: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    flexDirection: "row",
  },
  tableCell: {
    width: TABLE_CELL_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: customGrey,
  },
  tableCellMin: {
    width: TABLE_CELL_WIDTH_MIN,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderColor: customGrey,
  },
  tableColumnNamesContainer: {
    minHeight: TABLE_CELL_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  tableRowContainer: {
    minHeight: TABLE_CELL_HEIGHT,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: customGrey,
  },
  tableBodyContainer: {
    borderLeftWidth: 1,
    borderColor: customGrey,
  },
});
