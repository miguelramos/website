export interface GenericType {
  [key: string]: any;
}

/**
 * Function to generate UUID's
 */
export function uniqueID() {
  function chr4() {
    return Math.random()
      .toString(16)
      .slice(-4);
  }

  return (
    chr4() +
    chr4() +
    '-' +
    chr4() +
    '-' +
    chr4() +
    '-' +
    chr4() +
    '-' +
    chr4() +
    chr4() +
    chr4()
  );
}

/**
 * Calculate interval between two points
 *
 */
export function between(
  num: number,
  min: number,
  max: number,
  inclusive = true
) {
  const minValue = Math.min.apply(Math, [min, max]);
  const maxValue = Math.max.apply(Math, [min, max]);

  return inclusive
    ? num >= minValue && num <= maxValue
    : num > minValue && num < maxValue;
}

/**
 * Function to extract hostname from url.
 *
 */
export function extractHostname(url: string) {
  let hostname;

  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  hostname = hostname.split(':')[0];

  return hostname;
}

/**
 * Creates a pub/sub (publish–subscribe) event hub with emit, on, and off methods.
 *
 * const handler = data => console.log(data);
 * const hub = createEventHub();
 *
 * Subscribe: listen for different types of events
 * hub.on('message', handler);
 * hub.on('message', () => console.log('Message event fired'));
 *
 * Publish: emit events to invoke all handlers subscribed to them, passing the data to them as an argument
 * hub.emit('message', 'hello world');
 * hub.emit('message', { hello: 'world' });
 *
 * Unsubscribe: stop a specific handler from listening to the 'message' event
 * hub.off('message', handler);
 *
 */
export function createEventHub() {
  return {
    hub: Object.create(null),
    emit(event: string, data: any) {
      (this.hub[event] || []).forEach(handler => handler(data));
    },
    // tslint:disable-next-line:ban-types
    on(event: string, handler: Function) {
      if (!this.hub[event]) {
        this.hub[event] = [];
      }
      this.hub[event].push(handler);
    },
    // tslint:disable-next-line:ban-types
    off(event: string, handler: Function) {
      const i = (this.hub[event] || []).findIndex(h => h === handler);

      if (i > -1) {
        this.hub[event].splice(i, 1);
      }
    },
    destroy() {
      (this.hub || []).forEach((item, index) => {
        this.hub[item].splice(index, 1);
      });
    }
  };
}

/**
 * Smooth-scrolls to the top of the page.
 */
export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

/**
 * Validate value if is number.
 *
 */
export function validateNumber(n: any) {
  /* tslint:disable */
  return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
  /* tslint:enable */
}

/**
 * Flatten a deep object into a one level object with it’s path as key
 *
 */
export function flatten(object: object, prefix = '', separator = '.') {
  return Object.keys(object).reduce((prev, element) => {
    return object[element] &&
      typeof object[element] === 'object' &&
      !Array.isArray(element)
      ? {
          ...prev,
          ...flatten(object[element], `${prefix}${element}${separator}`)
        }
      : { ...prev, ...{ [`${prefix}${element}`]: object[element] } };
  }, {});
}

/** Wraps the provided value in an array, unless the provided value is an array. */
export function coerceArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

/** Coerces a data-bound value (typically a string) to a number. */
export function coerceNumberProperty(value: any): number;
export function coerceNumberProperty<D>(value: any, fallback: D): number | D;
export function coerceNumberProperty(value: any, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}

/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
export function _isNumberValue(value: any): boolean {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value));
}

/** Coerces a value to a CSS pixel value. */
export function coerceCssPixelValue(value: any): string {
  if (value == null) {
    return '';
  }

  return typeof value === 'string' ? value : `${value}px`;
}

export function isDotNotation(value: string): boolean {
  return /[\w+]\.[\w+]/gi.test(value) && !/\s+/g.test(value);
}
