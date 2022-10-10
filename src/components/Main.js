import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
    );
  }
}

export default Main;
