const consoleColor = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
};

export const PORT = 3333;
export const startedServerMessage = () => {
  // eslint-disable-next-line no-console
  console.log('🚀 Server running on ' + consoleColor.green + `http://localhost:${PORT}` + consoleColor.reset);
};