import { describe, test, expect } from "vitest";
import { AttendanceLogResponseItem } from "./types/AttendanceLogResponseItem";
import getRecentClockIn from "./getRecentClockIn";

describe("getRecentClockIn", () => {
  test("should return the most recent clock-in log from the attendance logs", () => {
    const expectedRecentClockIn: AttendanceLogResponseItem = {
      logID: 1698988,
      machineNo: 1,
      bioEmpID: 1152,
      id: 4075,
      firstName: "KENNETH KEN",
      lastName: "TAN",
      verifyMode: 1,
      inOutMode: 0,
      logTime: "2026-03-04T08:24:17.393",
      notes: "Logged In via Ecosystem dashboard",
    };
    const attendanceLogs: AttendanceLogResponseItem[] = [
      {
        logID: 1698246,
        machineNo: 1,
        bioEmpID: 1152,
        id: 4075,
        firstName: "KENNETH KEN",
        lastName: "TAN",
        verifyMode: 1,
        inOutMode: 0,
        logTime: "2026-03-03T08:31:44.153",
        notes: "Logged In via Ecosystem dashboard",
      },
      {
        logID: 1698718,
        machineNo: 1,
        bioEmpID: 1152,
        id: 4075,
        firstName: "KENNETH KEN",
        lastName: "TAN",
        verifyMode: 1,
        inOutMode: 1,
        logTime: "2026-03-03T22:11:32.507",
        notes: "Logged Out via Ecosystem dashboard",
      },
      expectedRecentClockIn,
    ];

    const recentClockIn = getRecentClockIn(attendanceLogs);

    expect(recentClockIn).toEqual(expectedRecentClockIn);
  });
});
