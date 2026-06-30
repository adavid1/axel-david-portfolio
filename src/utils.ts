export function parseDate(date: string): Date {
    const [day, month, year] = date.split("-")
    return new Date(Number(year), Number(month) - 1, Number(day))
}

/**
 * Whole years elapsed since a dd-mm-yyyy date — i.e. completed anniversaries.
 * Used for the "N years of experience" copy so it never goes stale.
 */
export function yearsSince(date: string, now: Date = new Date()): number {
    const start = parseDate(date)
    let years = now.getFullYear() - start.getFullYear()
    const monthDiff = now.getMonth() - start.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
        years--
    }
    return years
}

function intlLocale(locale: string): string {
    return locale.startsWith("fr") ? "fr-FR" : "en-US"
}

/**
 * Formats a "MMM YYYY - MMM YYYY" (or single month) range, localized.
 * Accepts dd-mm-yyyy strings; a null/undefined end date renders `presentLabel`.
 */
export function formatDateRange(
    startDate: string,
    endDate: string | null | undefined,
    locale: string,
    presentLabel: string,
    monthFormat: "short" | "long" = "short",
): string {
    const format = (d: Date) =>
        d.toLocaleDateString(intlLocale(locale), { month: monthFormat, year: "numeric" })

    const start = format(parseDate(startDate))
    const end = endDate ? format(parseDate(endDate)) : presentLabel

    return start === end ? start : `${start} - ${end}`
}

/** Same as formatDateRange but for already-parsed timestamps (used by grouped timeline). */
export function formatTimestampRange(
    startTs: number,
    endTs: number,
    locale: string,
    presentLabel: string,
): string {
    const format = (d: Date) =>
        d.toLocaleDateString(intlLocale(locale), { month: "short", year: "numeric" })

    const now = Date.now()
    const start = format(new Date(startTs))
    const end = endTs > now - 86_400_000 ? presentLabel : format(new Date(endTs))

    return start === end ? start : `${start} - ${end}`
}
