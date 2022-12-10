import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        title: '',
        address: '',
        description: '',
      },
    };
  }

  handleInputChange = (event, section) => {
    const value = event.target.value;
    this.setState({
      [section]: {
        ...this.state[section],
        [event.target.name]: value,
      },
    });
  };

  render() {
    return (
      <div>
        <GeneralInfo
          handleChange={this.handleInputChange}
          generalInfo={this.state.generalInfo}
        />
      </div>
    );
  }
}

export default Main;
