import * as React from 'react';
import Box, { BoxProps } from '../../box/Box'

export type DetailDrawerBodyProps = BoxProps

const DetailDrawerBody: React.FC<DetailDrawerBodyProps> = ({ children, ...props }) => {
  return (
    <Box overflow="auto" px={6} {...props}>
      {children}
    </Box>
  );
};

DetailDrawerBody.displayName = 'DetailDrawer.Body';

export default DetailDrawerBody;
