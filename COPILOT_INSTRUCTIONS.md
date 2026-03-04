# GitHub Copilot Instructions for sprout-clock

This project uses `@js-temporal/polyfill` for all date and time handling. When Copilot or any AI-assisted tooling generates code or suggestions involving dates, times, durations, or time zones, it should follow these guidelines:

1. **Prefer Temporal APIs**
   - Use objects from `@js-temporal/polyfill`, such as `Temporal.Instant`, `Temporal.ZonedDateTime`, `Temporal.PlainDate`, `Temporal.PlainTime`, `Temporal.Duration`, etc.
   - Avoid using the built-in `Date` constructor or related methods unless absolutely necessary. If legacy `Date` objects are referenced, they should be converted to/from Temporal types.

2. **Import Polyfill Explicitly**
   - All modules that work with time should import the polyfill at the top when needed:
     ```ts
     import { Temporal } from "@js-temporal/polyfill";
     ```
   - If using only specific Temporal classes, import them directly:
     ```ts
     import { ZonedDateTime, Duration } from "@js-temporal/polyfill";
     ```

3. **Time zone awareness**
   - Ensure time zone handling uses `Temporal.ZonedDateTime` or appropriate functions.
   - When converting between local and UTC times, use Temporal APIs rather than manual arithmetic.

4. **Consistent formatting and parsing**
   - Use Temporal's `toString()` or `from()` helpers for parsing and formatting.
   - Avoid `Date.prototype.toLocaleString()` or similar unless wrapping Temporal values.

5. **Testing**
   - Tests should create and manipulate Temporal objects rather than `Date` objects.
   - Follow existing patterns in the `lib/attendanceLogs` tests.

> **Note:** Copilot should treat this repository as opinionated toward Temporal; suggestions that introduce `Date` should be replaced with Temporal equivalents.

Additional context:

- The project uses TypeScript and Vitest for testing.
- Keeping all date/time code Temporal-based ensures consistency and avoids timezone bugs.

Thanks for adhering to the Temporal-first guideline! 🎯
