import { Temporal } from "@js-temporal/polyfill";

export default function calculateRenderedTimeInSeconds(
  clockinAsText: string,
  clockOut: Temporal.Instant,
) {
  const clockIn = Temporal.Instant.from(clockinAsText);

  const differenceInSeconds = clockOut.since(clockIn).total("seconds");
  return differenceInSeconds;
}
