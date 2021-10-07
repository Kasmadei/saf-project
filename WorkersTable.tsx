import React from "react";
import { Text, View } from "react-native";
import { WorkersTableType } from "./types";
import { tableStyles, TABLE_CELL_WIDTH } from "./styles";

const WORKERS_TABLE_MOCK: WorkersTableType = {
  tableName: "Workers",
  columnNames: ["Worker name", "Number of tasks", "Last active time"],
  rows: [
    { workerName: "John", numberOfTasks: 2, lastActivityDate: "10/01/2021" },

    { workerName: "Mark", numberOfTasks: 3, lastActivityDate: "10/02/2021" },
  ],
};

export default class WorkersTable extends React.Component {
  render() {
    return (
      <View style={tableStyles.tableContainer}>
        <Text style={{ fontWeight: "bold" }}>
          {WORKERS_TABLE_MOCK.tableName}
        </Text>
        <View style={tableStyles.tableHeaderContainer}>
          {WORKERS_TABLE_MOCK.columnNames.map((cm, i) => (
            <View
              key={i}
              style={{
                width: TABLE_CELL_WIDTH,
                ...tableStyles.tableColumnNamesContainer,
              }}
            >
              <Text style={{ textAlign: "center" }}>{cm}</Text>
            </View>
          ))}
        </View>
        <View style={tableStyles.tableBodyContainer}>
          {WORKERS_TABLE_MOCK.rows.map((r, index) => (
            <View
              key={index}
              style={{
                width: WORKERS_TABLE_MOCK.columnNames.length * TABLE_CELL_WIDTH,
                ...tableStyles.tableRowContainer,
              }}
            >
              <View style={tableStyles.tableCell}>
                <Text>{r.workerName}</Text>
              </View>
              <View style={tableStyles.tableCell}>
                <Text>{r.numberOfTasks}</Text>
              </View>
              <View style={tableStyles.tableCell}>
                <Text>{r.lastActivityDate}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
