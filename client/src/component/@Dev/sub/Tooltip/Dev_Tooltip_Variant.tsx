import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { PlacesType } from 'react-tooltip';
import { DefaultColors } from '@theme';

const Dev_Tooltip_Variant = () => {
  return (
    <Stack spacing={20}>
      <Dev_Panel>
        <Dev_PanelItem title='위치별' spacing={10}>
          <Divider />

          <Grid cols={3} spacing={10} mt={5}>
            <Col cols={3}>
              <Stack row center centerJustify spacing={10}>
                {['top-start', 'top', 'top-end'].map((place, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <Divider vertical />}
                    <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                      <T cursor='default'>{place}</T>
                    </Tooltip>
                  </React.Fragment>
                ))}
              </Stack>
            </Col>
            <Col>
              <Stack alignItems='flex-end' spacing={8}>
                {['left-start', 'left', 'left-end'].map((place, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <Divider width={55} />}
                    <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                      <T cursor='default'>{place}</T>
                    </Tooltip>
                  </React.Fragment>
                ))}
              </Stack>
            </Col>
            <Col>
              <Flex center centerJustify fullHeight>
                <Tooltip content='<Tooltip>...</Tooltip>'>
                  <T cursor='default'>기본</T>
                </Tooltip>
              </Flex>
            </Col>
            <Col display='flex' flexDirection='row'>
              <Stack spacing={8}>
                {['right-start', 'right', 'right-end'].map((place, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <Divider width={55} />}
                    <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                      <T cursor='default'>{place}</T>
                    </Tooltip>
                  </React.Fragment>
                ))}
              </Stack>
            </Col>
            <Col cols={3}>
              <Stack row center centerJustify spacing={10}>
                {['bottom-start', 'bottom', 'bottom-end'].map((place, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <Divider vertical />}
                    <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                      <T cursor='default'>{place}</T>
                    </Tooltip>
                  </React.Fragment>
                ))}
              </Stack>
            </Col>
          </Grid>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='색상별' spacing={10}>
          <Divider />

          <Stack row center centerJustify spacing={10} wrap mt={5}>
            {DefaultColors.map((color, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <Divider vertical />}
                <Tooltip key={idx} color={color} content={`<Tooltip color="${color}">...</Tooltip>`}>
                  <T color={color} cursor='default'>
                    {color}
                  </T>
                </Tooltip>
              </React.Fragment>
            ))}
          </Stack>
        </Dev_PanelItem>
      </Dev_Panel>
    </Stack>
  );
};

export default React.memo(Dev_Tooltip_Variant);
