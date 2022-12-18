import React from 'react';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { IoMdMail } from 'react-icons/io';
import '../Preview.css';

function Preview({
  generalInfo: { name, email, phone, title, address, description },
  experienceGroups,
  educationGroups,
}) {
  return (
    <div className='preview'>
      <div className='top-header'>
        <div className='left'>
          <h1 className='name'>{name}</h1>
          <h4 className='title'>{title}</h4>
        </div>
        <div className='right'>
          <div>
            <FaPhoneSquareAlt />
            {phone}
          </div>
          <div>
            <IoMdMail />
            {email}
          </div>
          <div>
            <GrMapLocation />
            {address}
          </div>
        </div>
      </div>

      <div className='description'>{description}</div>
      <div className='experience'>
        <h2>Work Experience</h2>
        {experienceGroups.map(
          ({ id, companyName, position, startDate, endDate }) => {
            return (
              <div key={id} className='group'>
                <p>{companyName}</p>
                <p>
                  {position} | {startDate} - {endDate}
                </p>
              </div>
            );
          }
        )}
      </div>
      <div className='education'>
        <h2>Education</h2>
        {educationGroups.map(
          ({ id, degree, universityName, startDate, endDate }) => {
            return (
              <div key={id} className='group'>
                <p>{degree}</p>
                <p>
                  {universityName} | {startDate} - {endDate}
                </p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Preview;
