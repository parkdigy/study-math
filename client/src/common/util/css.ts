export const css = {
  /********************************************************************************************************************
   * CSS 이름으로 변경 (opacityReverse50 -> opacity-reverse-50)
   * @param text 변경할 텍스트
   * ******************************************************************************************************************/
  toCssName(text: string) {
    let replacedText = text.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/_/g, '-');
    replacedText = replacedText.replace(/([a-z][0-9][0-9])/g, (letter) => {
      return `${letter[0]}-${letter[1]}${letter[2]}`;
    });
    return replacedText.charAt(0) === '-' ? replacedText.slice(1) : replacedText;
  },

  /********************************************************************************************************************
   * CSS 변수 이름으로 변경 (opacityReverse50 -> var(--%group%-opacity-reverse-50)
   * @param text 변경할 텍스트
   * @param group 그룹 이름
   * ******************************************************************************************************************/
  toCssVarName(text: string, group: 'color' | 'size' | 'screen') {
    let replacedText = text.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`).replace(/_/g, '-');
    replacedText = replacedText.replace(/([a-z][0-9][0-9])/g, (letter) => {
      return `${letter[0]}-${letter[1]}${letter[2]}`;
    });
    return `var(--${group}-${replacedText.charAt(0) === '-' ? replacedText.slice(1) : replacedText})`;
  },

  /********************************************************************************************************************
   * 변수 이름으로 변경 (opacity-reverse-50 -> opacityReverse50)
   * @param text 변경할 텍스트
   * @param firstCharUpperCase 첫 글자 대문자 여부 (클래스 이름 등으로 사용할 때)
   * ******************************************************************************************************************/
  toVariableName(text: string, firstCharUpperCase = false) {
    const divider = '-';
    const replacedText = text.replaceAll(divider, '_').replace(/_([a-z0-9])/g, (match, char) => char.toUpperCase());
    return firstCharUpperCase ? replacedText.charAt(0).toUpperCase() + replacedText.slice(1) : replacedText;
  },
};

export default css;
