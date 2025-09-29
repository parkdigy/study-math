import React from 'react';
import { Dev_CodeProps as Props } from './Dev_Code.types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { makeProps } from './Dev_Code.functions';

export const Dev_Code = ({ children, propsMap, customStyle }: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const theme = useTheme();

  /********************************************************************************************************************
   * Variable
   * ******************************************************************************************************************/

  let code = '';
  const match = children?.match(/(?<=```\w+\n)[\s\S]*?(?=```)/);
  if (match) {
    code = match[0].trim();
  }

  // code 안에서 $[...] 형태를 찾아서 propsMap에서 치환
  if (propsMap) {
    code = code.replace(/\s\$\[([^\]]+)\]/g, (_, key) => {
      let result = '';
      if (propsMap[key]) {
        result = makeProps(propsMap[key]);
      }
      return notEmpty(result) ? ` ${result}` : '';
    });
  }

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return children ? (
    <SyntaxHighlighter
      language='typescript'
      style={theme.dark ? darcula : docco}
      customStyle={{ border: '1px solid var(--color-opacity-20)', padding: 10, borderRadius: 4, ...customStyle }}
    >
      {code}
    </SyntaxHighlighter>
  ) : null;
};

export default Dev_Code;
