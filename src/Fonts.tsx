import { createGlobalStyle } from 'styled-components'

import OpenSansBold from './assets/fonts/OpenSans-Bold.ttf'
import OpenSansRegular from './assets/fonts/OpenSans-Regular.ttf'
import OpenSansSemiBold from './assets/fonts/OpenSans-SemiBold.ttf'
import RobotoBold from './assets/fonts/Roboto-Bold.ttf'
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf'
import RobotoRegular from './assets/fonts/Roboto-Regular.ttf'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: "Open Sans";
    font-weight: normal;
    font-style: normal;
    src: url(${OpenSansRegular}) format("truetype")
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 600;
    font-style: normal;
    src: url(${OpenSansSemiBold}) format("truetype")
  }

  @font-face {
    font-family: "Open Sans";
    font-weight: 700;
    font-style: normal;
    src: url(${OpenSansBold}) format("truetype")
  }

  @font-face {
    font-family: "Roboto";
    font-weight: normal;
    font-style: normal;
    src: url(${RobotoRegular}) format("truetype")
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 600;
    font-style: normal;
    src: url(${RobotoMedium}) format("truetype")
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 700;
    font-style: normal;
    src: url(${RobotoBold}) format("truetype")
  }
  
`

export default Fonts
