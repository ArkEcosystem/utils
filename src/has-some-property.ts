export const hasSomeProperty = (object, props): boolean =>
    props.some(prop => Object.prototype.hasOwnProperty.call(object, prop));
