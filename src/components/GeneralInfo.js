import React, { Component } from 'react';

class GeneralInfo extends Component {
  render() {
    const { firstName, lastName, email, phone, title, address, description } =
      this.props.generalInfo;

    return (
      <section>
        <div className='section-header'>
          <h2>General Info</h2>
        </div>
        <input
          name='firstName'
          type='text'
          value={firstName}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='First Name'
        />
        <input
          name='lastName'
          type='text'
          value={lastName}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='Last Name'
        />
        <input
          name='email'
          type='email'
          value={email}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='Email'
        />
        <input
          name='phone'
          type='text'
          value={phone}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='Phone Number'
        />
        <input
          name='title'
          type='text'
          value={title}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='Title'
        />
        <input
          name='address'
          type='text'
          value={address}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='Address'
        />
        <textarea
          name='description'
          value={description}
          onChange={(event) => this.props.handleChange(event, 'generalInfo')}
          placeholder='Description'
        />
      </section>
    );
  }
}

export default GeneralInfo;
