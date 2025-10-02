/********************************************************************************************************************
 * makeValue
 * ******************************************************************************************************************/
export const makeValue = (value: unknown) => {
  let valueText: string | undefined;
  if (isNotNullAndUndefined(value)) {
    switch (typeof value) {
      case 'string':
        if (value.startsWith('{') && value.endsWith('}')) {
          valueText = value;
        } else {
          valueText = `"${value}"`;
        }
        break;
      case 'number':
        valueText = value.toString();
        break;
      case 'boolean':
        valueText = value ? 'true' : 'false';
        break;
      case 'object':
        if (Array.isArray(value)) {
          const values: string[] = [];
          value.forEach((v) => {
            const madeV = makeValue(v);
            if (madeV === undefined) {
              values.push('undefined');
            } else if (madeV === null) {
              values.push('null');
            } else {
              values.push(madeV);
            }
          });
          valueText = `[${values.join(', ')}]`;
        } else {
          valueText = makeRecordValue(value as Dict);
        }
        break;
    }
  }
  return valueText;
};

/********************************************************************************************************************
 * makeRecordValue
 * ******************************************************************************************************************/
export const makeRecordValue = (value: Dict | undefined) => {
  let valueText: string | undefined;
  if (isNotNullAndUndefined(value)) {
    valueText = '';
    Object.entries(value).forEach(([key, v]) => {
      if (v != null) {
        if (notEmpty(valueText)) {
          valueText = `${valueText}, `;
        }
        valueText += `${key}: ${makeValue(v)}`;
      }
    });
    valueText = `{ ${valueText} }`;
  }
  return valueText;
};

/********************************************************************************************************************
 * makePropValue
 * ******************************************************************************************************************/
export const makePropValue = (value: unknown) => {
  let valueText: string | undefined;
  if (value != null) {
    switch (typeof value) {
      case 'string':
        if (value.startsWith('{') && value.endsWith('}')) {
          valueText = `=${value}`;
        } else {
          valueText = `="${value}"`;
        }
        break;
      case 'number':
        valueText = `={${value.toString()}}`;
        break;
      case 'boolean':
        if (value) {
          valueText = '';
        }
        break;
      case 'object':
        if (Array.isArray(value)) {
          valueText = JSON.stringify(value);
        } else {
          valueText = makeRecordValue(value as Dict);
        }
        if (valueText != null) {
          valueText = `={${valueText}}`;
        }
        break;
    }
  }
  return valueText;
};

/********************************************************************************************************************
 * makeProp
 * ******************************************************************************************************************/
export const makeProp = (name: string, value: unknown) => {
  if (isNotNullAndUndefined(value)) {
    const valueText = makePropValue(value);
    if (valueText != null) {
      return `${name}${valueText}`;
    } else {
      return '';
    }
  } else {
    return '';
  }
};

/********************************************************************************************************************
 * makeProps
 * ******************************************************************************************************************/
export const makeProps = (data: Dict) => {
  const values: string[] = [];
  Object.entries(data).forEach(([key, value]) => {
    const prop = makeProp(key, value);
    if (notEmpty(prop)) {
      values.push(prop);
    }
  });
  return values.join(' ');
};
