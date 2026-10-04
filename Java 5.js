function validateSchema(obj, schema) {
  const errors = [];

  for (const key in schema) {
    if (!Object.hasOwn(obj, key)) {
      errors.push(`Missing key: ${key}`);
    } else if (typeof obj[key] !== schema[key]) {
      errors.push(
        `Type mismatch for ${key}: expected ${schema[key]}, got ${typeof obj[key]}`
      );
    }
  }

  return errors;
}