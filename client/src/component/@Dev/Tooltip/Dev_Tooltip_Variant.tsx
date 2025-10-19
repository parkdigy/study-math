import React from 'react';
import { Dev_Panel, Dev_PanelItem } from '../@Common';
import { PlacesType } from 'react-tooltip';
import { DefaultColors } from '@theme';

const Dev_Tooltip_Variant = () => {
  return (
    <Flex gap={20}>
      <Dev_Panel>
        <Dev_PanelItem title='위치별' gap={10}>
          <Divider />

          <Grid cols={3} gap={10} mt={5}>
            <Col cols={3} row centerCenter gap={10}>
              {['top-start', 'top', 'top-end'].map((place, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <Divider vertical />}
                  <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                    <T cursor='default'>{place}</T>
                  </Tooltip>
                </React.Fragment>
              ))}
            </Col>
            <Col flexEndAlign gap={8}>
              {['left-start', 'left', 'left-end'].map((place, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <Divider width={55} />}
                  <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                    <T cursor='default'>{place}</T>
                  </Tooltip>
                </React.Fragment>
              ))}
            </Col>
            <Col centerCenter fullHeight>
              <Tooltip content='<Tooltip>...</Tooltip>'>
                <T cursor='default'>기본</T>
              </Tooltip>
            </Col>
            <Col gap={8}>
              {['right-start', 'right', 'right-end'].map((place, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <Divider width={55} />}
                  <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                    <T cursor='default'>{place}</T>
                  </Tooltip>
                </React.Fragment>
              ))}
            </Col>
            <Col cols={3} row centerCenter gap={10}>
              {['bottom-start', 'bottom', 'bottom-end'].map((place, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <Divider vertical />}
                  <Tooltip place={place as PlacesType} content={`<Tooltip place="${place}">...</Tooltip>`}>
                    <T cursor='default'>{place}</T>
                  </Tooltip>
                </React.Fragment>
              ))}
            </Col>
          </Grid>
        </Dev_PanelItem>
      </Dev_Panel>

      <Dev_Panel>
        <Dev_PanelItem title='색상별' gap={10}>
          <Divider />

          <Flex row centerCenter gap={10} wrap mt={5}>
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
          </Flex>
        </Dev_PanelItem>
      </Dev_Panel>
    </Flex>
  );
};

export default React.memo(Dev_Tooltip_Variant);
