import React, { useState } from 'react';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';
import Preview from './Preview';
import '../Main.css';

function Main() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    address: '',
    description: '',
  });
  const [experienceGroups, setExperienceGroups] = useState([]);
  const [educationGroups, setEducationGroups] = useState([]);

  return (
    <div className='main'>
      <div className='editor'>
        <GeneralInfo
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Experience
          experienceGroups={experienceGroups}
          setExperienceGroups={setExperienceGroups}
        />
        <Education
          educationGroups={educationGroups}
          setEducationGroups={setEducationGroups}
        />
      </div>
      <Preview
        generalInfo={generalInfo}
        experienceGroups={experienceGroups}
        educationGroups={educationGroups}
      />
    </div>
  );
}

export default Main;
