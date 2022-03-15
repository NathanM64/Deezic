import './App.css';
import Header from './Components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header />
            </div>
        </ThemeProvider>
    );
}

export default App;
