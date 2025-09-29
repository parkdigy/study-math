import React from 'react';
import { ImgProps as Props } from './Img.types';
import { CustomComponent } from '../CustomComponent';

export const Img = ({
  // padding
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  // margin
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  // border
  border,
  borderWidth,
  borderStyle,
  borderColor,
  borderLeft,
  borderLeftWidth,
  borderLeftStyle,
  borderLeftColor,
  borderRight,
  borderRightWidth,
  borderRightStyle,
  borderRightColor,
  borderTop,
  borderTopWidth,
  borderTopStyle,
  borderTopColor,
  borderBottom,
  borderBottomWidth,
  borderBottomStyle,
  borderBottomColor,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  // background
  background,
  backgroundColor,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  backgroundRepeat,
  // position
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  // size
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  // custom
  p,
  ph,
  pv,
  pl,
  pr,
  pt,
  pb,
  m,
  mh,
  mv,
  ml,
  mr,
  mt,
  mb,
  fullWidth,
  fullHeight,
  // img Props
  ...props
}: Props) => {
  /********************************************************************************************************************
   * Render
   * ******************************************************************************************************************/

  return (
    <CustomComponent
      component='img'
      // padding
      padding={padding}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      // margin
      margin={margin}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
      // border
      border={border}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      borderLeft={borderLeft}
      borderLeftWidth={borderLeftWidth}
      borderLeftStyle={borderLeftStyle}
      borderLeftColor={borderLeftColor}
      borderRight={borderRight}
      borderRightWidth={borderRightWidth}
      borderRightStyle={borderRightStyle}
      borderRightColor={borderRightColor}
      borderTop={borderTop}
      borderTopWidth={borderTopWidth}
      borderTopStyle={borderTopStyle}
      borderTopColor={borderTopColor}
      borderBottom={borderBottom}
      borderBottomWidth={borderBottomWidth}
      borderBottomStyle={borderBottomStyle}
      borderBottomColor={borderBottomColor}
      borderRadius={borderRadius}
      borderTopLeftRadius={borderTopLeftRadius}
      borderTopRightRadius={borderTopRightRadius}
      borderBottomLeftRadius={borderBottomLeftRadius}
      borderBottomRightRadius={borderBottomRightRadius}
      // background
      background={background}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      backgroundRepeat={backgroundRepeat}
      // position
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      zIndex={zIndex}
      // size
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      height={height}
      maxHeight={maxHeight}
      minHeight={minHeight}
      // custom
      p={p}
      ph={ph}
      pv={pv}
      pl={pl}
      pr={pr}
      pt={pt}
      pb={pb}
      m={m}
      mh={mh}
      mv={mv}
      ml={ml}
      mr={mr}
      mt={mt}
      mb={mb}
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      // img Props
      {...props}
    />
  );
};

export default Img;
