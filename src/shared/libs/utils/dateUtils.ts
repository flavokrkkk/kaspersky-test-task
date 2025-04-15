import { format, formatDistanceToNow, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatNewsDate = (isoDate: string): string => {
  return format(parseISO(isoDate), "dd MMM yyyy", {
    locale: enUS,
  });
};

export const formatNewsDateWithRelative = (isoDate: string): string => {
  const date = parseISO(isoDate);
  return `${format(date, "dd MMM yyyy")} • ${formatDistanceToNow(date, {
    addSuffix: true,
    locale: enUS,
  })}`;
};
