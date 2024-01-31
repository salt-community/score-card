import { DeveloperData, Scores, SimpleTableEntry } from "./types";

export const isExcellent = (average: number) => {
  return levelVariant(average) === 3;
};

/* export const getAverageValue = (data: SimpleTableEntry) => {
  let sum = 0;
  let count = 0;
  for (const key in data) {
    if (typeof data[key] === "number") {
      sum += data[key] as number;
      count++;
    }
  }
  return sum / count;
}; */

export const colorVariant = (value: number) => {
  if (value >= 90) {
    return "secondary";
  } else if (value > 70) {
    return "primary";
  } else {
    return "warning";
  }
};
export const levelVariant = (value: number) => {
  if (value >= 90) {
    return 3;
  } else if (value > 70) {
    return 2;
  } else {
    return 1;
  }
};

export function capitalizeEveryWord(inputString: string): string {
  return inputString.replace(/\b\w/g, (match) => match.toUpperCase());
}

/* export const getAllAverageValue = (scoreData: Scores[]) => {
  const allAveNum: number[] = [];
  scoreData
    ? scoreData.map((item) => allAveNum.push(getAverageValue(item.data)))
    : allAveNum.push(0);
  const sum = allAveNum.reduce((acc, curr) => acc + curr, 0);
  return sum / allAveNum.length;
}; */
