// Utility function to normalize dates to UTC and remove time component
const normalizeDate = (date: string): string => {
  const parsedDate = new Date(date);
  const utcDate = new Date(
    Date.UTC(
      parsedDate.getUTCFullYear(),
      parsedDate.getUTCMonth(),
      parsedDate.getUTCDate()
    )
  );
  return utcDate.toISOString().split("T")[0];
};

export { normalizeDate };
