import React from 'react';
import './App.css';
// import Layout from './container/layout';
// import Header from './components/toolbar/ToolBar';
import Header from './components/header/header'
import Body from './components/body/body'
import Footer from './components/footer/footer'
function App() {
  return (
      // <Layout >
      //     <Header />
      //     <div>body components</div>
      //     <div>footer components</div>
      // </Layout>
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
  );
}

export default App;
