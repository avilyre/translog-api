export class SetupEnvironmentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'SetupEnvironmentError';
    this.message = message;
  }
}