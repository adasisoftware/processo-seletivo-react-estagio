export function isObjectEmpty(object: object) {
  return (
    object && Object.keys(object).length === 0 && object.constructor === Object
  );
}
