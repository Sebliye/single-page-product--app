import React from 'react';
import './App.css';
import Layout from './container/layout';
import Header from './components/toolbar/ToolBar';
function App() {
  return (
      <Layout >
          <Header />
          <div>body components</div>
          <div>footer components</div>
      </Layout>
  );
}

export default App;
