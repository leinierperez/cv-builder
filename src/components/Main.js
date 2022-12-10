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
      experienceGroups: [],
      educationGroups: [],
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

  addGroup = (groupName) => {
    const { degree, universityName, startDate, endDate } = this.state.education;
    this.setState({
      [groupName]: [
        ...this.state[groupName],
        {
          id: crypto.randomUUID(),
          data: { degree, universityName, startDate, endDate },
        },
      ],
    });
  };

  removeGroup = (id, groupName) => {
    const groups = [...this.state[groupName]];
    const index = groups.findIndex((group) => group.id === id);
    groups.splice(index, 1);
    this.setState({ [groupName]: groups });
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
          addGroup={this.addGroup}
          removeGroup={this.removeGroup}
          experienceGroups={this.state.experienceGroups}
        />
        <Education
          handleChange={this.handleInputChange}
          education={this.state.education}
          addGroup={this.addGroup}
          removeGroup={this.removeGroup}
          educationGroups={this.state.educationGroups}
        />
        <Preview data={this.state} />
      </div>
    );
  }
}

export default Main;
