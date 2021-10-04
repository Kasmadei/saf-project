import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";
import ShipmentTable from "./ShipmentTable";
import TasksTable from "./TasksTable";
import WorkersTable from "./WorkersTable";

type TabTypes = "WORKERS" | "TASKS" | "SHIPMENT";

const tabs: TabTypes[] = ["WORKERS", "TASKS", "SHIPMENT"];

type StateType = { selectedTab: TabTypes };

export default class App extends React.Component<{}, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedTab: "WORKERS",
    };
  }

  render() {
    return (
      <>
        <SafeAreaView style={{ flex: 0, backgroundColor: "#E7C966" }} />
        <SafeAreaView style={styles.container}>
          <View style={styles.navPanel}>
            {tabs.map((tab, index) => {
              let style =
                index === 0
                  ? styles.leftButton
                  : index === 1
                  ? styles.centralButton
                  : styles.rightButton;
              const isActive = tab === this.state.selectedTab;

              return (
                <TouchableOpacity
                  key={index}
                  style={{
                    ...styles.defaultButton,
                    ...style,
                    backgroundColor: isActive ? "#ffefba" : "#F2E3B1",
                  }}
                  onPress={() => this.setState({ selectedTab: tab })}
                >
                  <Text style={{ color: "black" }}>{tab}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={{ marginTop: 20 }}>
            {this.state.selectedTab === "WORKERS" && <WorkersTable />}
            {this.state.selectedTab === "TASKS" && <TasksTable />}
            {this.state.selectedTab === "SHIPMENT" && <ShipmentTable />}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  defaultButton: {
    height: 32,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  leftButton: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  centralButton: {
    marginHorizontal: 2,
  },
  rightButton: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  navPanel: {
    height: 40,
    backgroundColor: "#EBD07B",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
