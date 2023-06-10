import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';

// Example component
function SearchBox() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [options, setOptions] = useState([
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
        'Option 5',
    ]);

    const handleOptionSelected = (event, value) => {
        setSelectedOptions([...selectedOptions, value]);
    };

    const handleInputChange = (event, value) => {
        // Filter options based on the input value
        const filteredOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'].filter(
            option => option.toLowerCase().includes(value.toLowerCase())
        );
        setOptions(filteredOptions);
    };


    const handleOptionDelete = (index) => {
        const updatedOptions = selectedOptions.filter((_, chipIndex) => chipIndex !== index);
        setSelectedOptions(updatedOptions);
      };

    return (
        <Autocomplete
            multiple
            options={options}
            onChange={handleOptionSelected}
            onInputChange={handleInputChange}
            value={selectedOptions}
            renderInput={(params) => (
                <TextField {...params} label="Search" variant="outlined" />
            )}
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        key={index}
                        label={option}
                        onDelete={() => handleOptionDelete(index)}
                        {...getTagProps({ index })}
                    />
                ))
            }
        />
    );
}

export default SearchBox;
