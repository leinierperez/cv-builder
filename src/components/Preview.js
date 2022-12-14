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
            <h1 className='name'>{generalInfo.name}John Doe</h1>
            <h4 className='title'>{generalInfo.title}Software Engineer</h4>
          </div>
          <div className='right'>
            <div>
              <FaPhoneSquareAlt />
              {generalInfo.phone}564564564565
            </div>
            <div>
              <IoMdMail />
              {generalInfo.email}fhfg@fdg.com
            </div>
            <div>
              <GrMapLocation />
              {generalInfo.address}gjghj 657 fgh 8888
            </div>
          </div>
        </div>

        <div className='description'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          quae, eum libero quisquam cupiditate rerum nesciunt deserunt vel quia
          ea obcaecati assumenda quos alias accusamus consequatur officia,
          quibusdam totam molestias.
        </div>
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
