import config from '../utils/config';

export default function themeTypography(theme) {
  return {
    fontFamily: 'inherit',
    h6: {
      fontWeight: 500,
      color: theme.heading,
      fontSize: '0.75rem'
    },
    h5: {
      fontSize: '0.875rem',
      color: theme.heading,
      fontWeight: 500
    },
    h4: {
      fontSize: '1rem',
      color: theme.heading,
      fontWeight: 600
    },
    h3: {
      fontSize: '1.25rem',
      color: theme.heading,
      fontWeight: 600
    },
    h2: {
      fontSize: '1.5rem',
      color: theme.heading,
      fontWeight: 700
    },
    h1: {
      fontSize: '2.125rem',
      color: theme.heading,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: theme.textDark
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: theme.darkTextSecondary
    },
    caption: {
      fontSize: '0.75rem',
      color: theme.darkTextSecondary,
      fontWeight: 400
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em'
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: theme.darkTextPrimary
    },
    button: {
      textTransform: 'capitalize'
    },
    mainContent: {
      backgroundColor: theme.backgroundDefault,
      width: '100%',
      minHeight: 'calc(100vh - 88px)',
      flexGrow: 1,
      padding: '20px',
      marginTop: '80px',
      marginRight: '0px', // 20px
      borderRadius: `${config.borderRadius}px`
    }
  };
}
