function parseTime(time: Date) {
  const year: number = time.getFullYear();
  const month: string = time.toLocaleString("default", { month: "long" });
  const day: number = time.getDate();
  const hour: number = time.getUTCHours();
  const min: number = time.getMinutes();
  return `${day} ${month}, ${year} ${hour.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}`;
}

export default parseTime;
