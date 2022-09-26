import './App.css';
import Portfolio from './components/portfolio.js';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

function App() {
  return (
    <div className="portfolio">
      <ApolloProvider client={ApolloClient}>
        <Portfolio />
      </ApolloProvider>
    </div>
  );
}


export default App;
