import React, { useState } from 'react';
import { useMinimalSelectStyles } from '@mui-treasury/styles/select/minimal';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Original design here: https://github.com/siriwatknp/mui-treasury/issues/540

const MinimalSelect = () => {
  const [val,setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const minimalSelectClasses = useMinimalSelectStyles();

  const iconComponent = (props) => {
    return (
      <ExpandMoreIcon className={props.className + " " + minimalSelectClasses.icon}/>
    )};

  // moves the menu below the select input
  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list
    },
    anchorOrigin: {
      vertical: "bottom",
        horizontal: "left"
    },
    transformOrigin: {
      vertical: "top",
        horizontal: "left"
    },
    getContentAnchorEl: null
  };


  return (
    <FormControl>
      <Select
        disableUnderline
        classes={{ root: minimalSelectClasses.select }}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
        onChange={handleChange}
      >
        {/* <MenuItem value={0}>Principle</MenuItem>
        <MenuItem value={1}>Sketch</MenuItem>
        <MenuItem value={2}>Photoshop</MenuItem>
        <MenuItem value={3}>Framer</MenuItem> */}

        <MenuItem value={"a1t"}>A1T - Tecon</MenuItem>
                      <MenuItem value={"b3"}>B3-Celulose</MenuItem>
                      <MenuItem value={"b13"}>B13-Toras</MenuItem>
                      <MenuItem value={"b90"}>B90-Conexo</MenuItem>          
                      <MenuItem value={"c3"}>C3-Agrícola/Granel</MenuItem>
                      <MenuItem value={"c6"}>C6-Adubo</MenuItem>
                      <MenuItem value={"c7"}>C7-Cavaco</MenuItem>
                      <MenuItem value={"a1"}>A1</MenuItem>
                      <MenuItem value={"a2"}>A2</MenuItem>
                      <MenuItem value={"b1"}>B1</MenuItem>          
                      <MenuItem value={"b2"}>B2</MenuItem>
                      <MenuItem value={"b4"}>B4</MenuItem>
                      <MenuItem value={"b5"}>B5</MenuItem>
                      <MenuItem value={"a6"}>B6</MenuItem>
                      <MenuItem value={"b7"}>B7</MenuItem>          
                      <MenuItem value={"b8"}>B8</MenuItem>
                      <MenuItem value={"b9"}>B9</MenuItem>
                      <MenuItem value={"b10"}>B10</MenuItem>
                      <MenuItem value={"b11"}>B11</MenuItem>
                      <MenuItem value={"c1"}>C1</MenuItem>          
                      <MenuItem value={"c2"}>C2</MenuItem>
                      <MenuItem value={"c4"}>C4</MenuItem>  
                      <MenuItem value={"c5"}>C5</MenuItem>






      </Select>
    </FormControl>
  );
};


export default MinimalSelect;