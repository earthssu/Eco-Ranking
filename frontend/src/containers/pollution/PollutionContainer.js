import React, { useState } from 'react';
import axios from 'axios';
import PollutionForm from '../../components/pollution/PollutionForm';

const PollutionContainer = () => {
  const [pollution, setPollution] = useState([]);

  async function fetchPolluton() {
    const result = await axios.get('http://localhost:8000/pollution');
    console.log(result.data);
    setPollution(result.data);
  }

  fetchPolluton();

  return <PollutionForm pollution={pollution} />;
};

export default PollutionContainer;
