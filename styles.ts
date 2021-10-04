import { StyleSheet } from "react-native";

export const TABLE_CELL_WIDTH = 120;
export const TABLE_CELL_WIDTH_MIN = 60;

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
  },
  tableCellMin: {
    width: TABLE_CELL_WIDTH_MIN,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
  },
  tableColumnNamesContainer: {
    minHeight: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
  },
  tableRowContainer: {
    minHeight: 60,
    flexDirection: "row",
    borderBottomWidth: 1,
  },
});
