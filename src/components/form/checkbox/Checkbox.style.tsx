import styled from 'styled-components'

import colors from '../../../styles/modules/colors'
import { Box } from '../../box'

export const CheckboxContainer = styled(Box)`
  position: relative;
  min-height: 24px;

  input {
    position: absolute;
    opacity: 0;
    left: 5px;
    top: 5px;
    height: 14px;
    width: 14px;
    border-radius: 4px;
    z-index: 2;
    cursor: pointer;
  }

  label {
    display: block;
    padding-left: 24px;
    ::before {
      border: 1px solid ${colors.gray[500]};
      border-radius: 4px;
      content: '';
      height: 14px;
      position: absolute;
      left: 5px;
      top: 5px;
      width: 14px;
    }
    ::after {
      content: '';
      border: 1px solid;
      border-left: 0;
      border-top: 0;
      height: 6px;
      left: 10px;
      opacity: 0;
      position: absolute;
      top: 8px;
      transform: rotate(45deg);
      width: 4px;
      color: white;
    }
  }

  .cap-checkbox:checked + label::after {
    opacity: 1;
  }

  .cap-checkbox:checked + label::before {
    background: ${colors.blue[500]};
    border: 1px solid ${colors.blue[500]};
  }

  .cap-checkbox:focus + label::before {
    box-shadow: 0 0 2px 2px ${colors.blue[300]};
  }

  .cap-checkbox[aria-invalid='true'] + label::before {
    background: ${colors.red[150]};
    border: 1px solid ${colors.red[500]};
  }

  .cap-checkbox[aria-invalid='true'] + label::after {
    color: ${colors.red[500]};
  }

  .cap-checkbox:disabled {
    cursor: auto;
  }

  .cap-checkbox:disabled + label::before {
    background: ${colors.gray[150]};
    border: 1px solid ${colors.gray[300]};
  }

  .cap-checkbox:disabled:checked + label::before {
    background: ${colors.gray[100]};
    border: 1px solid ${colors.gray[300]};
  }

  .cap-checkbox:disabled:checked + label::after {
    color: ${colors.gray[300]};
  }
`
