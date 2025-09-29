export const text = {
  camelToSnakeCase(str: string, divider = '_') {
    const text = str.replace(/[A-Z]/g, (letter) => `${divider}${letter.toLowerCase()}`);
    return text.charAt(0) === divider ? text.slice(1) : text;
  },
};

export default text;
