import React, { Component } from 'react';

class Preview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const generalInfo = this.props.generalInfo;
    return (
      <div className='preview'>
        <div className='top-header'>
          <div className='left'>
            <h1 className='firstName'>{generalInfo.name}</h1>
            <h4 className='title'>{generalInfo.title}</h4>
          </div>
          <div className='right'>
            <div>icon{generalInfo.phone}</div>
            <div>icon{generalInfo.email}</div>
            <div>icon{generalInfo.address}</div>
          </div>
        </div>

        <div className='description'></div>
        {this.props.experienceGroups.map((group) => {
          return (
            <div key={group.id} className='experience'>
              <p>{group.data.companyName}</p>
              <p>
                {group.data.position} | {group.data.startDate} -{' '}
                {group.data.endDate}
              </p>
            </div>
          );
        })}
        {this.props.educationGroups.map((group) => {
          return (
            <div key={group.id} className='education'>
              <p>{group.data.degree}</p>
              <p>
                {group.data.universityName} | {group.data.startDate} -{' '}
                {group.data.endDate}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Preview;
