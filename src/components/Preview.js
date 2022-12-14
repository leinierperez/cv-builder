import React, { Component } from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { IoMdMail } from 'react-icons/io';
import '../Preview.css';

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
            <h1 className='name'>{generalInfo.name}</h1>
            <h4 className='title'>{generalInfo.title}</h4>
          </div>
          <div className='right'>
            <div>
              <FaPhoneSquareAlt />
              {generalInfo.phone}
            </div>
            <div>
              <IoMdMail />
              {generalInfo.email}
            </div>
            <div>
              <GrMapLocation />
              {generalInfo.address}
            </div>
          </div>
        </div>

        <div className='description'>{generalInfo.description}</div>
        <div className='experience'>
          <h2>Work Experience</h2>
          {this.props.experienceGroups.map((group) => {
            return (
              <div key={group.id} className='group'>
                <p>{group.data.companyName}</p>
                <p>
                  {group.data.position} | {group.data.startDate} -{' '}
                  {group.data.endDate}
                </p>
              </div>
            );
          })}
        </div>
        <div className='education'>
          <h2>Education</h2>
          {this.props.educationGroups.map((group) => {
            return (
              <div key={group.id} className='group'>
                <p>{group.data.degree}</p>
                <p>
                  {group.data.universityName} | {group.data.startDate} -{' '}
                  {group.data.endDate}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
