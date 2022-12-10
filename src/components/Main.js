import React, { Component } from 'react';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';
import Preview from './Preview';

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
      experience: {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
      },
      education: {
        degree: '',
        universityName: '',
        startDate: '',
        endDate: '',
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
        <Experience
          handleChange={this.handleInputChange}
          experience={this.state.experience}
        />
        <Education
          handleChange={this.handleInputChange}
          education={this.state.education}
        />
        <Preview data={this.state} />
      </div>
    );
  }
}

export default Main;
