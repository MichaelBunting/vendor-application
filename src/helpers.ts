export function capitalize(string: string): string {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function camelCase(string: string): string {
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');
}
