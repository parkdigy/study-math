import React from 'react';
import { DevButtonsProps as Props } from './DevButtons.types';
import DevButton from './DevButton';
import { useAppState, useScreenSize } from '@context';
import { useLocation } from 'react-router';
import util from '@util';
import './DevButtons.scss';

export const DevButtons = ({}: Props) => {
  /********************************************************************************************************************
   * Use
   * ******************************************************************************************************************/

  const { colorScheme, toggleColorScheme } = useAppState();
  const location = useLocation();
  const screen = useScreenSize();

  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <Flex className='DevButtons' row center gap={10}>
      <T color='success' size='caption' absolute nowrap right={0} top={-20}>
        {util.css.toCssName(screen.sizes[screen.sizes.length - 1])}
      </T>
      {location.pathname !== '/dev/controls' && (
        <DevButton icon='Extension' onClick={() => __navigate('/dev/controls')} />
      )}
      <DevButton icon={colorScheme === 'light' ? 'DarkMode' : 'LightMode'} onClick={toggleColorScheme} />
    </Flex>
  );
};

export default DevButtons;
