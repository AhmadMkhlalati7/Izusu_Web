export const extractFilename = (path: string) => {
  // Get the part after the last slash
  const parts = path.split("/");
  return parts[parts.length - 1];
};