export const santimentColorCheck = (santiment: string) => {
  const colorSan = {
    negative: "red-inverse",
    positive: "lime-inverse",
  };

  return (
    colorSan[santiment.toLowerCase() as keyof typeof colorSan] ?? "lime-inverse"
  );
};
