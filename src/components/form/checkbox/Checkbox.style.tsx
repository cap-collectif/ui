import styled from 'styled-components'

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
      border: 1px solid #85919d;
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

  input:checked + label::after {
    opacity: 1;
  }
  input:checked + label::before {
    background: #1a88ff;
    border: 1px solid #1a88ff;
  }
  input:focus + label::before {
    box-shadow: 0px 0px 2px 2px #8ac2ff;
  }

  input[aria-invalid='true'] + label::before {
    background: #fae5e7;
    border: 1px solid #dd3c4c;
  }
  input[aria-invalid='true'] + label::after {
    color: #dd3c4c;
  }

  input:disabled {
    cursor: normal;
  }
  input:disabled + label::before {
    background: #e8ebed;
    border: 1px solid #bec4cb;
  }
  input:disabled:checked + label::before {
    background: #f7f7f8;
    border: 1px solid #bec4cb;
  }
  input:disabled:checked + label::after {
    color: #bec4cb;
  }
`
