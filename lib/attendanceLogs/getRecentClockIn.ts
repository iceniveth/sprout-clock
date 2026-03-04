import {
  AttendanceLogResponseItem,
  InOutModeEnum,
} from "./types/AttendanceLogResponseItem";

/**
 * Retrieves the most recent clock-in record from attendance logs.
 * @param attendanceLogs - Array of attendance log entries to search through
 * @returns The most recent clock-in log entry, or undefined if no clock-in records exist
 */
export default function getRecentClockIn(
  attendanceLogs: AttendanceLogResponseItem[],
): AttendanceLogResponseItem | undefined {
  return attendanceLogs
    .filter((log) => log.inOutMode === InOutModeEnum.In)
    .at(-1);
}
