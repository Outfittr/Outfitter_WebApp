import {createMuiTheme} from '@material-ui/core/styles'
import {grey, lightGreen} from '@material-ui/core/colors'

const palette = {
    primary: {
        light: grey[600],
        main: grey[800],
        dark: grey[900],
      },
      secondary: {
          main: lightGreen[500],
      },
      text: {
        primary: "rgba(255, 255, 255, 255)",
      },
}

const mainTheme = createMuiTheme({
    palette: palette,

    overrides: {
        MuiInputLabel: {
            root: {
                color: palette.primary.light,
            },

            shrink: {
                '&$shrink': {
                    transform: "translate(14px, -10px) scale(0.75)!important",
                }
            },
        },
    }
  });

export function getMainTheme() { 
    return mainTheme;
}