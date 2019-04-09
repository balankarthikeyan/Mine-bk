import React, { Component } from "react";
import { ButtonIcon, mycomponent, styled } from "bk-my-material";
const HeartinIcon = styled(ButtonIcon)`background: black;`;
class App extends Component {
  render() {
    const text = "My " + mycomponent.name;
    return (
      <div className="App">
        <h1>UI Customization</h1>
        <ButtonIcon icon="settings" align="right" text={"IRONMAN"} />
        <HeartinIcon align="right" text={text} />
      </div>
    );
  }
}

export default App;
