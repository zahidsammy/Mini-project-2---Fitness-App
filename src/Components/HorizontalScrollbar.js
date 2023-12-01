import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

// Component for the Left Arrow in the horizontal scroll menu
const LeftArrow = () => {
  const { scrollPrev } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

// Component for the Right Arrow in the horizontal scroll menu
const RightArrow = () => {
  const { scrollNext } = React.useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

// Component for the Horizontal Scrollbar using ScrollMenu
export const HorizontalScrollbar = ({ data, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {/* Mapping through the data to create the horizontal scrollable menu */}
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px" // Margin between items
        >
          {/* Using the BodyPart component to display each item */}
          <BodyPart item={item} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};
