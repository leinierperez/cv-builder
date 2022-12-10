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
                  value={group.degree}
                  onChange={(event) =>
                    this.props.handleChange(event, 'education')
                  }
                />
                <input
                  name='universityName'
                  type='text'
                  placeholder='University Name'
                  value={group.universityName}
                  onChange={(event) =>
                    this.props.handleChange(event, 'education')
                  }
                />
                <input
                  name='startDate'
                  type='text'
                  placeholder='Start Date'
                  value={group.startDate}
                  onChange={(event) =>
                    this.props.handleChange(event, 'education')
                  }
                />
                <input
                  name='endDate'
                  type='text'
                  placeholder='End Date'
                  value={group.endDate}
                  onChange={(event) =>
                    this.props.handleChange(event, 'education')
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
