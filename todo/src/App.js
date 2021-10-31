import React from "react";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import Todo from "../src/components/Todo";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Todo />
        <Footer />
      </>
    );
  }
}

