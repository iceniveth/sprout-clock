import { describe, it, expect, vi, beforeEach, afterEach, test } from "vitest";

import calculateRenderedTimeFromNowInSeconds from "./calculateRenderedTime";
import { Temporal } from "@js-temporal/polyfill";

describe("calculateRenderedTimeFromNowInSeconds", () => {
  test("calculates the difference in seconds between the clock-in time and the current time", () => {
    // Set the system clock to a fixed point in time
    const clockIn = "2025-01-01T12:00:00Z";
    const clockOut = Temporal.Instant.from("2025-01-01T14:30:50Z");

    const renderedTime = calculateRenderedTimeFromNowInSeconds(
      clockIn,
      clockOut,
    );

    expect(renderedTime).toBe(2 * 60 * 60 + 30 * 60 + 50); // 2 hours, 30 minutes, and 50 seconds in seconds
  });
});
