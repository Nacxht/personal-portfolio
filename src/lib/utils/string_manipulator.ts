export function snakeToNormal(str: string) {
  const result = str.replaceAll("_", " ");

  return result;
}
