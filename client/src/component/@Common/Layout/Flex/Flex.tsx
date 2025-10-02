import React from 'react';
import { FlexProps as Props } from './Flex.types';
import Box from '../Box';
import './Flex.scss';

export const Flex = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      // display
      inline,
      // flexDirection
      row,
      reverse,
      // flexWrap
      wrap,
      // alignItems
      center,
      stretchAlign,
      startAlign,
      endAlign,
      flexStartAlign,
      flexEndAlign,
      selfStartAlign,
      selfEndAlign,
      baselineAlign,
      // justifyContent
      centerJustify,
      startJustify,
      endJustify,
      flexStartJustify,
      flexEndJustify,
      leftJustify,
      rightJustify,
      spaceBetweenJustify,
      spaceAroundJustify,
      spaceEvenlyJustify,
      // alignItems and justifyContent
      centerCenter,
      // others
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        className={classnames(
          className,
          'Flex',
          // display
          inline && 'Flex-inline',
          // flexDirection
          row && !reverse && 'Flex-row',
          row && reverse && 'Flex-row-reverse',
          !row && reverse && 'Flex-column-reverse',
          // flexWrap
          wrap && 'Flex-wrap',
          // alignItems
          center && 'Flex-center-a',
          stretchAlign && 'Flex-stretch-a',
          startAlign && 'Flex-start-a',
          endAlign && 'Flex-end-a',
          flexStartAlign && 'Flex-flex-start-a',
          flexEndAlign && 'Flex-flex-end-a',
          selfStartAlign && 'Flex-self-start-a',
          selfEndAlign && 'Flex-self-end-a',
          baselineAlign && 'Flex-baseline-a',
          // justifyContent
          centerJustify && 'Flex-center-j',
          startJustify && 'Flex-start-j',
          endJustify && 'Flex-end-j',
          flexStartJustify && 'Flex-flex-start-j',
          flexEndJustify && 'Flex-flex-end-j',
          leftJustify && 'Flex-left-j',
          rightJustify && 'Flex-right-j',
          spaceBetweenJustify && 'Flex-space-between-j',
          spaceAroundJustify && 'Flex-space-around-j',
          spaceEvenlyJustify && 'Flex-space-evenly-j',
          // alignItems and justifyContent
          centerCenter && 'Flex-center-a-j'
        )}
        {...props}
      />
    );
  }
);

export default Flex;
