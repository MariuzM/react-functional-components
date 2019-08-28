import React, { useState } from 'react';
import CallBackFunction from './CallBackFunction';

export default function AppCallBackFunction() {
  const handleChange = event => setGreeting(event.target.value);
  const [greeting2, setGreeting] = useState('Hello CallBackFunction Component!');

  return (
    <>
      <CallBackFunction headline={greeting2} onChangeHeadline={handleChange} />
    </>
  );
}
