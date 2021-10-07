import React from "react";
import { Text, View } from "react-native";
import { ShipmentTableType } from "./types";
import { tableStyles, TABLE_CELL_WIDTH } from "./styles";

const INBOUND_SHIPMENT_TABLE_MOCK: ShipmentTableType = {
  tableName: "Inbound shipment",
  columnNames: ["Time", "Company"],
  rows: [
    { time: "10/01/2021", company: "IBM" },
    { time: "10/01/2021", company: "Microsoft" },
  ],
};

const OUTBOUND_SHIPMENT_TABLE_MOCK: ShipmentTableType = {
  tableName: "Outbound shipment",
  columnNames: ["Time", "Company"],
  rows: [
    { time: "10/01/2021", company: "Tesla" },
    { time: "10/01/2021", company: "Amazon" },
  ],
};

class ShipmentTableDrawer extends React.Component<{
  tableData: ShipmentTableType;
}> {
  render() {
    const { tableData } = this.props;
    return (
      <View style={{ marginBottom: 20 }}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          {tableData.tableName}
        </Text>
        <View style={tableStyles.tableHeaderContainer}>
          {tableData.columnNames.map((cm, index) => (
            <View
              key={index}
              style={{
                width: TABLE_CELL_WIDTH,
                ...tableStyles.tableColumnNamesContainer,
              }}
            >
              <Text>{cm}</Text>
            </View>
          ))}
        </View>
        <View style={tableStyles.tableBodyContainer}>
          {tableData.rows.map((r, index) => (
            <View
              key={index}
              style={{
                width: tableData.columnNames.length * TABLE_CELL_WIDTH,
                ...tableStyles.tableRowContainer,
              }}
            >
              <View style={tableStyles.tableCell}>
                <Text>{r.company}</Text>
              </View>
              <View style={tableStyles.tableCell}>
                <Text>{r.time}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default class ShipmentTable extends React.Component {
  render() {
    return (
      <View style={tableStyles.tableContainer}>
        <ShipmentTableDrawer tableData={INBOUND_SHIPMENT_TABLE_MOCK} />
        <ShipmentTableDrawer tableData={OUTBOUND_SHIPMENT_TABLE_MOCK} />
      </View>
    );
  }
}
