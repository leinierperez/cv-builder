import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
    };
  }

  addGroup = () => {
    const { companyName, position, startDate, endDate } = this.props.experience;
    this.setState({
      groups: [
        ...this.state.groups,
        {
          id: crypto.randomUUID(),
          data: { companyName, position, startDate, endDate },
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
          <h2>Work Experience</h2>
          <button onClick={this.addGroup}>Add</button>
        </div>
        <div className='field-groups'>
          {this.state.groups.map((group) => {
            return (
              <div key={group.id} className='group'>
                <input
                  name='companyName'
                  type='text'
                  placeholder='Company Name'
                  value={group.companyName}
                  onChange={(event) =>
                    this.props.handleChange(event, 'experience')
                  }
                />
                <input
                  name='position'
                  type='text'
                  placeholder='Position'
                  value={group.position}
                  onChange={(event) =>
                    this.props.handleChange(event, 'experience')
                  }
                />
                <input
                  name='startDate'
                  type='text'
                  placeholder='Start Date'
                  value={group.startDate}
                  onChange={(event) =>
                    this.props.handleChange(event, 'experience')
                  }
                />
                <input
                  name='endDate'
                  type='text'
                  placeholder='End Date'
                  value={group.endDate}
                  onChange={(event) =>
                    this.props.handleChange(event, 'experience')
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

export default Experience;
