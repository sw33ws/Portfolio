import React from 'react';
import './App.css';

import NavTabs from './components/NavTabs'
import Aboutme from './components/pageParts/aboutme';
import Work from './components/pageParts/work';
import Skills from './components/pageParts/skills';
import Contact from './components/pageParts/contactinfo';
import Footer from './components/pageParts/footer';

import {ApolloClient,InMemoryCache,ApolloProvider,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Construct our main GraphQL API endpoint
const httpLink = 
createHttpLink({
  uri: 'https://guarded-brushlands-90727.herokuapp.com/graphql',
})

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log(window.location)
  return (
    <div className="portfolio">
      <ApolloProvider client={client}>
            <NavTabs />
            <Aboutme />
            <Work />
            <Skills />
            <Contact />
            <Footer />
      </ApolloProvider>
    </div>
  );
}


export default App;
