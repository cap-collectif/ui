import * as React from 'react';
import { Flex, FlexProps } from '../../layout/Flex'
import {CapUIIconSize, CapUIIcon, Icon} from "../../icon";

type DetailDrawerHeaderProps = {
  readonly showBackArrow?: boolean,
  readonly onClose?: () => void
} & FlexProps

const DetailDrawerHeader: React.FC<DetailDrawerHeaderProps> = ({ children, onClose, showBackArrow = true, ...props }) => {
  return (
    <Flex display="flex" align="center" p={6} {...props}>
      {showBackArrow && (
        <Icon
          onClick={onClose}
          css={{ '&:hover': { cursor: 'pointer' } }}
          color="blue.500"
          size={CapUIIconSize.Lg}
          className="detail__drawer--back-arow"
          name={CapUIIcon.LongArrowLeft}
        />
      )}
      {children}
    </Flex>
  );
};

DetailDrawerHeader.displayName = 'DetailDrawer.Header';

export default DetailDrawerHeader;
