import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };
  }

  addGroup = () => {
    const { degree, universityName, startDate, endDate } = this.props.education;
    this.setState({
      groups: [
        ...this.state.groups,
        {
          id: crypto.randomUUID(),
          data: { degree, universityName, startDate, endDate },
        },
      ],
    });
  };

  removeGroup = (id) => {
    const groups = [...this.state.groups];
    const index = groups.findIndex((group) => group.id === id);
    groups.splice(index, 1);
    this.setState({ groups });
  };

  render() {
    return (
      <section>
        <div className='section-header'>
          <h2>Education</h2>
          <button onClick={this.addGroup}>Add</button>
        </div>
        <div className='field-groups'>
          {this.state.groups.map((group) => {
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
                <button onClick={() => this.removeGroup(group.id)}>
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
