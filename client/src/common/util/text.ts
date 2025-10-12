export const text = {
  camelToSnakeCase(str: string, divider = '_') {
    const text = str.replace(/[A-Z]/g, (letter) => `${divider}${letter.toLowerCase()}`);
    return text.charAt(0) === divider ? text.slice(1) : text;
  },

  snakeToCamelCase(str: string, divider = '_') {
    return str.replace(new RegExp(`${divider}(.)`, 'g'), (match, group1) => group1.toUpperCase());
  },
};

export default text;
