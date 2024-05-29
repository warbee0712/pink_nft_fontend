import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		mode: 'dark', 
		background: {
			default: '#000', // Black background color
		},
		primary: {
			main: '#90caf9',
		},
		secondary: {
			main: '#ffcc80',
		},
		error: {
			main: '#ed63f7'
		}
	},
	components: {
	  MuiButton: {
		styleOverrides: {
		  contained: {
			color: '#fff', // White font color
		  },
		},
	  },
	}
});

export default theme;
