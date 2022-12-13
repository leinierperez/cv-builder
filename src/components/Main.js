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
        name: '',
        email: '',
        phone: '',
        title: '',
        address: '',
        description: '',
      },
      experienceGroups: [],
      educationGroups: [],
    };
  }

  handleInputChange = (event, section, groupId = '', groupName = '') => {
    const value = event.target.value;
    if (section === 'experience' || section === 'education') {
      const groups = [...this.state[groupName]];
      const index = groups.findIndex((group) => group.id === groupId);
      groups[index].data[event.target.name] = value;
      this.setState({ [groupName]: groups });
      return;
    }
    this.setState({
      [section]: {
        ...this.state[section],
        [event.target.name]: value,
      },
    });
  };

  addGroup = (groupName) => {
    let data;
    if (groupName === 'experienceGroups') {
      data = {
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
      };
    } else if (groupName === 'educationGroups') {
      data = {
        degree: '',
        universityName: '',
        startDate: '',
        endDate: '',
      };
    }
    this.setState({
      [groupName]: [
        ...this.state[groupName],
        {
          id: crypto.randomUUID(),
          data: data,
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
        <Preview
          generalInfo={this.state.generalInfo}
          experienceGroups={this.state.experienceGroups}
          educationGroups={this.state.educationGroups}
        />
      </div>
    );
  }
}

export default Main;
