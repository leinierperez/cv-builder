import React from 'react';

function GeneralInfo({
  generalInfo: { name, email, phone, title, address, description },
  setGeneralInfo,
}) {
  const handleChange = (event) => {
    setGeneralInfo((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  };
  return (
    <section>
      <div className='section-header'>
        <h2>General Info</h2>
      </div>
      <input
        name='name'
        type='text'
        value={name}
        onChange={handleChange}
        placeholder='Name'
      />
      <input
        name='email'
        type='email'
        value={email}
        onChange={handleChange}
        placeholder='Email'
      />
      <input
        name='phone'
        type='text'
        value={phone}
        onChange={handleChange}
        placeholder='Phone Number'
      />
      <input
        name='title'
        type='text'
        value={title}
        onChange={handleChange}
        placeholder='Title'
      />
      <input
        name='address'
        type='text'
        value={address}
        onChange={handleChange}
        placeholder='Address'
      />
      <textarea
        name='description'
        value={description}
        onChange={handleChange}
        placeholder='Description'
      />
    </section>
  );
}

export default GeneralInfo;
