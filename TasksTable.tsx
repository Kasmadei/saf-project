import React from "react";
import { TasksTableType } from "./types";
import { tableStyles, TABLE_CELL_WIDTH, TABLE_CELL_WIDTH_MIN } from "./styles";
import { Text, View } from "react-native";

const TASKS_TABLE_MOCK: TasksTableType = {
  tableName: "Tasks",
  columnNames: ["Task type", "ID", "Task holder", "Took time"],
  rows: [
    {
      taskType: "Load",
      id: 1111,
      holderName: "John Smith",
      taskWasTaken: "10/01/2021",
    },
    {
      taskType: "Pick",
      id: 2222,
      holderName: "Olivia Brown",
      taskWasTaken: "09/30/2021",
    },
  ],
};

export default class TasksTable extends React.Component {
  render() {
    return (
      <View style={tableStyles.tableContainer}>
        <Text style={{ fontWeight: "bold" }}>{TASKS_TABLE_MOCK.tableName}</Text>
        <View style={tableStyles.tableHeaderContainer}>
          {TASKS_TABLE_MOCK.columnNames.map((cm, index) => (
            <View
              key={index}
              style={{
                width: index === 1 ? TABLE_CELL_WIDTH_MIN : TABLE_CELL_WIDTH,
                ...tableStyles.tableColumnNamesContainer,
              }}
            >
              <Text>{cm}</Text>
            </View>
          ))}
        </View>
        <View style={{ borderLeftWidth: 1 }}>
          {TASKS_TABLE_MOCK.rows.map((r, index) => (
            <View
              key={index}
              style={{
                width:
                  TASKS_TABLE_MOCK.columnNames.length * TABLE_CELL_WIDTH -
                  TABLE_CELL_WIDTH_MIN,
                ...tableStyles.tableRowContainer,
              }}
            >
              <View style={tableStyles.tableCell}>
                <Text>{r.holderName}</Text>
              </View>
              <View style={tableStyles.tableCellMin}>
                <Text>{r.id}</Text>
              </View>
              <View style={tableStyles.tableCell}>
                <Text>{r.taskType}</Text>
              </View>
              <View style={tableStyles.tableCell}>
                <Text>{r.taskWasTaken}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
