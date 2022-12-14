import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className='section-header'>
          <h2>Education</h2>
          <button onClick={() => this.props.addGroup('educationGroups')}>
            Add
          </button>
        </div>
        <div className='field-groups'>
          {this.props.educationGroups.map((group) => {
            return (
              <div key={group.id} className='group'>
                <input
                  name='degree'
                  type='text'
                  placeholder='Degree'
                  value={group.data.degree}
                  onChange={(event) =>
                    this.props.handleChange(
                      event,
                      'education',
                      group.id,
                      'educationGroups'
                    )
                  }
                />
                <input
                  name='universityName'
                  type='text'
                  placeholder='University Name'
                  value={group.data.universityName}
                  onChange={(event) =>
                    this.props.handleChange(
                      event,
                      'education',
                      group.id,
                      'educationGroups'
                    )
                  }
                />
                <input
                  name='startDate'
                  type='text'
                  placeholder='Start Date'
                  value={group.data.startDate}
                  onChange={(event) =>
                    this.props.handleChange(
                      event,
                      'education',
                      group.id,
                      'educationGroups'
                    )
                  }
                />
                <input
                  name='endDate'
                  type='text'
                  placeholder='End Date'
                  value={group.data.endDate}
                  onChange={(event) =>
                    this.props.handleChange(
                      event,
                      'education',
                      group.id,
                      'educationGroups'
                    )
                  }
                />
                <button
                  onClick={() =>
                    this.props.removeGroup(group.id, 'educationGroups')
                  }
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Education;