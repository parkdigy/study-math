import Color from 'color';
import app from '@app';

export const color = {
  /********************************************************************************************************************
   * 지정된 색상의 On 컬러 반환
   * ******************************************************************************************************************/
  getOnColor(color: string, whiteColor = 'white', blackColor = 'black') {
    const alpha = Color(color).alpha();
    const isDark = Color(color).isDark();

    if (app.getColorScheme() === 'dark') {
      if (isDark) {
        return whiteColor;
      } else if (alpha < 0.5) {
        return whiteColor;
      } else {
        return blackColor;
      }
    } else {
      if (!isDark) {
        return blackColor;
      } else if (alpha < 0.5) {
        return blackColor;
      } else {
        return whiteColor;
      }
    }
  },
};

export default color;
