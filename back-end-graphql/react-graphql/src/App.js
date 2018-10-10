import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Offers from './Offers';
import Navigation from './Nav';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Campaigns from './Campaigns';


const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
  <BrowserRouter>
  <ApolloProvider client={client}>
    <div className="App">
      <div>
        <Route path="/" component={Navigation}/>
        <Route path="/campaigns" component={Campaigns}/>
        <Route path="/offers" component={Offers}/>
      </div>
    </div>
  </ApolloProvider>
  </BrowserRouter>
);
}
}


export default App;
