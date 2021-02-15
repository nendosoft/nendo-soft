import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
// import GlobalStyles from 'src/components/GlobalStyles';
// import 'src/mixins/chartjs';
// import theme from 'src/theme';
// import routes from 'src/routes';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  // const routing = useRoutes(routes);

  // return (
    // <ThemeProvider theme={theme}>
    //   <GlobalStyles />
    //   {routing}
    // </ThemeProvider>
  // );
}

export default App;
