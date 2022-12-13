import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <div className='section-header'>
          <h2>Work Experience</h2>
          <button onClick={() => this.props.addGroup('experienceGroups')}>
            Add
          </button>
        </div>
        <div className='field-groups'>
          {this.props.experienceGroups.map((group) => {
            return (
              <div key={group.id} className='group'>
                <input
                  name='companyName'
                  type='text'
                  placeholder='Company Name'
                  value={group.data.companyName}
                  onChange={(event) =>
                    this.props.handleChange(
                      event,
                      'experience',
                      group.id,
                      'experienceGroups'
                    )
                  }
                />
                <input
                  name='position'
                  type='text'
                  placeholder='Position'
                  value={group.data.position}
                  onChange={(event) =>
                    this.props.handleChange(
                      event,
                      'experience',
                      group.id,
                      'experienceGroups'
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
                      'experience',
                      group.id,
                      'experienceGroups'
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
                      'experience',
                      group.id,
                      'experienceGroups'
                    )
                  }
                />
                <button
                  onClick={() =>
                    this.props.removeGroup(group.id, 'experienceGroups')
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

export default Experience;
