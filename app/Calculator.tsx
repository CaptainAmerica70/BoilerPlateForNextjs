'use client'
import { Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';

export default function PercentageCalculator() {
  const [part, setPart] = useState<number | ''>('');
  const [whole, setWhole] = useState<number | ''>('');
  const [percentage, setPercentage] = useState<string | ''>('');

  const calculatePercentage = () => {
    if (part && whole) {
      const result = (part / whole) * 100;
      setPercentage(result.toFixed(2));
    }
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<number | ''>>
  ) => {
    setState(event.target.value ? Number(event.target.value) : '');
  };

  return (
    <div>
      <input
        type="number"
        value={part}
        onChange={(e) => handleInputChange(e, setPart)}
        placeholder="Part (e.g., 464)"
      />
      <input
        type="number"
        value={whole}
        onChange={(e) => handleInputChange(e, setWhole)}
        placeholder="Whole (e.g., 1512)"
      />
      <button onClick={calculatePercentage} style={{ backgroundColor: 'blueviolet' }}>Calculate</button>
      <Text className='bg-green-600 text-green-100'>{percentage && <p>{percentage}%</p>}</Text>
    </div>
  );
}
