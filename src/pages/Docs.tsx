import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { string, object, optional } from 'zod';

// Define a Zod schema
const userSchema = object({
  name: string().min(1),
  email: string().email(),
  optional: optional(string()),
});

const Docs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [optional, setOptional] = useState('');

  const handleSubmit = () => {
    const result = userSchema.safeParse({ name, email, optional });

    if (result.success) {
      setMessage('Valid user data!');
    } else {
      setMessage('Invalid user data. ' + result.error.message);
    }
  };

  return (
    <Container>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Optional"
        value={optional}
        onChange={(e) => setOptional(e.target.value)}
      />
      <button onClick={handleSubmit}>Validate</button>
      <p>{message}</p>
    </Container>
  );
};

export default Docs;
