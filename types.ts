// ==== WORKERS ====
export type WorkersTableType = {
  tableName: string;
  columnNames: string[];
  rows: WorkersTableRowType[];
};

export type WorkersTableRowType = {
  workerName: string;
  numberOfTasks: number;
  lastActivityDate: string;
};

// ==== TASKS ====
export type TasksTableType = {
  tableName: string;
  columnNames: string[];
  rows: TasksTableRowType[];
};

export type TasksTableRowType = {
  taskType: "Load" | "Pick" | "Putaway" | "Reverse";
  id: number;
  // Holds name who has that task
  holderName: string;
  // Holds time date as string when task was taken
  taskWasTaken: string;
};

// ==== SHIPMENT ====
export type ShipmentTableType = {
  tableName: string;
  columnNames: string[];
  rows: ShipmentTableRowType[];
};

export type ShipmentTableRowType = {
  time: string;
  company: string;
};
