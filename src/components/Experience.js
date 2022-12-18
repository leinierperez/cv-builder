import React from 'react';

function Experience({ experienceGroups, setExperienceGroups }) {
  const addGroup = () => {
    setExperienceGroups((prevGroup) => [
      ...prevGroup,
      {
        id: crypto.randomUUID(),
        companyName: '',
        position: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const removeGroup = (id) => {
    setExperienceGroups((prevGroup) =>
      [...prevGroup].filter((group) => group.id !== id)
    );
  };

  const handleChange = (event, id) => {
    setExperienceGroups((prevGroup) => {
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
        <h2>Work Experience</h2>
        <button onClick={addGroup}>Add</button>
      </div>
      <div className='field-groups'>
        {experienceGroups.map(
          ({ id, companyName, position, startDate, endDate }) => {
            return (
              <div key={id} className='group'>
                <input
                  name='companyName'
                  type='text'
                  placeholder='Company Name'
                  value={companyName}
                  onChange={(event) => handleChange(event, id)}
                />
                <input
                  name='position'
                  type='text'
                  placeholder='Position'
                  value={position}
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

export default Experience;
