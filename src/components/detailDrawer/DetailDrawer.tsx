import * as React from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import {createPortal} from 'react-dom';
import Box from '../box/Box';
import DetailDrawerHeader from './header/DetailDrawerHeader';
import DetailDrawerBody from './body/DetailDrawerBody';
import {cleanChildren} from '../../utils/jsx'
import {useHotkeys} from "react-hotkeys-hook";
import {ease} from '../../utils/motion'
import {canUseDOM} from '../../utils/dom'

type SubComponents = {
  Header: typeof DetailDrawerHeader
  Body: typeof DetailDrawerBody
}

export type DetailDrawerProps = {
  readonly isOpen: boolean,
  readonly onClose?: () => void,
  readonly children: React.ReactNode
}

const DRAWER_CONTAINER_ID = 'drawer-container';

let portal: HTMLDivElement;

if (canUseDOM && document) {
  portal = document.createElement('div');
  portal.id = DRAWER_CONTAINER_ID;
  if (document.body && !document.getElementById(DRAWER_CONTAINER_ID)) {
    document.body.appendChild(portal);
  }
}

const DetailDrawerInner = styled(motion(Box)).attrs({
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  bg: 'white',
  zIndex: 1030,
  display: 'flex',
  flexDirection: 'column',
})``;

export const DetailDrawer: React.FC<DetailDrawerProps> & SubComponents = ({isOpen, onClose = () => undefined, children}) => {

  React.useEffect(() => {
    if (!window.document.body) return;
    if (isOpen) {
      window.document.body.style.setProperty('overflow', 'hidden');
    } else {
      window.document.body.style.removeProperty('overflow');
    }
    return () => {
      if (window.document.body) {
        window.document.body.style.removeProperty('overflow');
      }
    };
  }, [isOpen]);

  useHotkeys('escape', onClose, [onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <DetailDrawerInner
          initial={{opacity: 0, x: '100vw'}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.3, ease}}
          exit={{opacity: 0, x: '100vw'}}>
          {cleanChildren<any>(children).map((child) => React.cloneElement(child, { onClose }))}
        </DetailDrawerInner>
      )}
    </AnimatePresence>,
    portal,
  );
};

DetailDrawer.Header = DetailDrawerHeader;
DetailDrawer.Body = DetailDrawerBody;

DetailDrawer.displayName = 'DetailDrawer';

export default DetailDrawer;
