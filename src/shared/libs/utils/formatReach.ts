export const formatReach = (reach: number, useComma: boolean = false): string =>
  useComma ? `${reach.toLocaleString()}k` : `${reach}K`;
