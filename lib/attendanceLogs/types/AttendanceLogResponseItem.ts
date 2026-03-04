// type InOutModeIn = 0;
// type InOutModeOut = 1;

// type InOutMode = InOutModeIn | InOutModeOut;

export type AttendanceLogResponseItem = {
  logID: number;
  machineNo: number;
  bioEmpID: number;
  id: number;
  firstName: string;
  lastName: string;
  verifyMode: number;
  inOutMode: InOutModeEnum;
  logTime: string; // ISO timestamp
  notes:
    | "Logged In via Ecosystem dashboard"
    | "Logged Out via Ecosystem dashboard";
};

export enum InOutModeEnum {
  In = 0,
  Out = 1,
}
