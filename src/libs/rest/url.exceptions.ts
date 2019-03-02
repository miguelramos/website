export class UrlResolverValidationError extends Error {
  /**
   * The validation error type.
   *
   * @see PropertyError
   */
  type: string;

  /**
   * Construct a property validation error.
   *
   * @param type The validation error type.
   * @param message The error message.
   */
  constructor(type: string, message: string) {
    super(message);

    this.name = 'UrlResolverValidationError';
    this.stack = new Error().stack;
    this.type = type;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = UrlResolverValidationError.prototype;
  }
}

export class UrlResolverTestError extends Error {
  /**
   * The validation error type.
   *
   * @see PropertyError
   */
  type: string;

  /**
   * Construct a property validation error.
   *
   * @param type The validation error type.
   * @param message The error message.
   */
  constructor(type: string, message: string) {
    super(message);

    this.name = 'UrlResolverTestError';
    this.stack = new Error().stack;
    this.type = type;

    // Required in order for error instances to be able to use instanceof.
    // SEE: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md
    (this as any).__proto__ = UrlResolverTestError.prototype;
  }
}
