import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import './Share.css'
import { Box } from '@mui/material';

function SearchBox() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [options, setOptions] = useState([
        'Atharva Khule',
        'Jiju Thomas',
        'Intiant',
        'ReactJs',
        'Frontend',
    ]);

    const handleOptionSelected = (event, value) => {
        setSelectedOptions(value);
    };

    const handleOptionDelete = (index) => {
        const updatedOptions = selectedOptions.filter((_, chipIndex) => chipIndex !== index);
        setSelectedOptions(updatedOptions);
    };

    return (
        <div>
            <div className='search'>
                <div className='searchContainer'>
                    <Autocomplete
                        sx={{ width: '100%' }}
                        multiple
                        options={options}
                        onChange={handleOptionSelected}
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
                    <button id='invite'>Invite</button>
                </div>
            </div>
            <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
                <div className='foot'>
                    <a href='#' id='learn'>Learn about sharing</a>
                    <a href='#' id='link'>Copy link</a>
                </div>
            </Box>
        </div>
    );
}

export default SearchBox;