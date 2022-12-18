import React from 'react';

function Education({ educationGroups, setEducationGroups }) {
  const addGroup = () => {
    setEducationGroups((prevGroup) => [
      ...prevGroup,
      {
        id: crypto.randomUUID(),
        degree: '',
        universityName: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const removeGroup = (id) => {
    setEducationGroups((prevGroup) =>
      [...prevGroup].filter((group) => group.id !== id)
    );
  };

  const handleChange = (event, id) => {
    setEducationGroups((prevGroup) => {
      const value = event.target.value;
      const prevGroupCopy = [...prevGroup];
      const index = prevGroupCopy.findIndex((group) => group.id === id);
      prevGroupCopy[index][event.target.name] = value;
      return prevGroupCopy;
    });
  };

  return (
    <section>
      <div className='section-header'>
        <h2>Education</h2>
        <button onClick={addGroup}>Add</button>
      </div>
      <div className='field-groups'>
        {educationGroups.map(
          ({ id, degree, universityName, startDate, endDate }) => {
            return (
              <div key={id} className='group'>
                <input
                  name='degree'
                  type='text'
                  placeholder='Degree'
                  value={degree}
                  onChange={(event) => handleChange(event, id)}
                />
                <input
                  name='universityName'
                  type='text'
                  placeholder='University Name'
                  value={universityName}
                  onChange={(event) => handleChange(event, id)}
                />
                <input
                  name='startDate'
                  type='text'
                  placeholder='Start Date'
                  value={startDate}
                  onChange={(event) => handleChange(event, id)}
                />
                <input
                  name='endDate'
                  type='text'
                  placeholder='End Date'
                  value={endDate}
                  onChange={(event) => handleChange(event, id)}
                />
                <button onClick={() => removeGroup(id)}>Remove</button>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Education;
