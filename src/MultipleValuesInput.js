import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function MultipleValuesInput({values, setValues}) {
  return (
      <Autocomplete
        multiple
        freeSolo
        options={[]}
        open={false}
        onChange={(e, values) => setValues(values)}
        clearOnBlur={true}
        value={values}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            label="Multiple values input"
          />
        )}
      />
  );
}