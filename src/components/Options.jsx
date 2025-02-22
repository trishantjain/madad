import { Grid } from '@mui/joy';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { clgList } from '../Data/data';
import Table from './Table'

export default function CheckboxLabels() {

  const [selectedOpt, setSelectedOpt] = useState({
    sports: false,
    incubation: false,
    aiLabs: false
  });

  const [filteredClg, setFilteredClg] = useState([]);

  const handleChange = (event) => {
    setSelectedOpt({ ...selectedOpt, [event.target.value]: event.target.checked });
  }

  useEffect(() => {

    //* object.values() returns if any of the checkbox is selected 
    //*  & returns [true, false, false] if sports is selected

    //* .some() returns true if any of the value is true
    const isAnySelected = Object.values(selectedOpt).some((value) => value);

    if (!isAnySelected) {
      setFilteredClg([]);
      return;
    }

    const clgName = clgList.filter((clg) => {
      return (
        // (!selectedOpt.sports || clg.sports) &&
        // (!selectedOpt.incubation || clg.incubation) &&
        // (!selectedOpt.aiLabs || clg.aiLabs)

        (selectedOpt.sports && clg.sports) ||
        (selectedOpt.incubation && clg.incubation) ||
        (selectedOpt.aiLabs && clg.aiLabs)

      )
    });
    setFilteredClg(clgName);
  }, [selectedOpt]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormGroup row id="flex-container">
            {/* Sports Checkbox */}
            <Grid item xs={4}>
              <FormControlLabel
                value="sports"
                control={
                  <Checkbox
                    checked={selectedOpt.sports}
                    onChange={handleChange}
                  />}
                label="Sports" />
            </Grid>

            {/* Incubation Checkbox */}
            <Grid item xs={4}>
              <FormControlLabel
                value="incubation"
                control={
                  <Checkbox
                    checked={selectedOpt.incubation}
                    onChange={handleChange}
                  />}
                label="Incubation" />
            </Grid>

            {/* AI Labs Checkbox */}
            <Grid item xs={4}>
              <FormControlLabel
                value="aiLabs"
                control={
                  <Checkbox
                    checked={selectedOpt.aiLabs}
                    onChange={handleChange}
                  />}
                label="AI Labs" />
            </Grid>
          </FormGroup >
        </Grid>

        <Grid item xs={12}>
          <ul >
            {filteredClg.map((clg, index) => (
              <li key={index}>
                {clg.name}
              </li>
            ))}
          </ul>
          <Table filteredClg={filteredClg} />
        </Grid>
      </Grid >
    </>
  );
}
