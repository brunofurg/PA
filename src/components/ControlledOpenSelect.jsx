// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     button: {
//       display: 'block',
//       marginTop: theme.spacing(2),
//     },
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//   }),
// );

// export default function ControlledOpenSelect() {
//   const classes = useStyles();
//   const [age, setAge] = React.useState<string | number>('');
//   const [open, setOpen] = React.useState(false);

//   function handleChange(event: React.ChangeEvent < { value: unknown } => ) {
//     setAge(event.target.value as number);
//   }

//   function handleClose() {
//     setOpen(false);
//   }

//   function handleOpen() {
//     setOpen(true);
//   }

//   return (
//     <form autoComplete="off">
//       <FormControl className={classes.formControl}>
//         <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
//         <Select
//           open={open}
//           onClose={handleClose}
//           onOpen={handleOpen}
//           value={age}
//           onChange={handleChange}
//           inputProps={{
//             name: 'age',
//             id: 'demo-controlled-open-select',
//           }}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={"a1t"}>A1T</MenuItem>
//           <MenuItem value={"b3"}>B3</MenuItem>
//           <MenuItem value={"b13"}>B13</MenuItem>
//           <MenuItem value={"b90"}>B90</MenuItem>          
//           <MenuItem value={"c3"}>C3</MenuItem>
//           <MenuItem value={"c6"}>C6</MenuItem>
//           <MenuItem value={"c7"}>C7</MenuItem>
//           <MenuItem value={"a1"}>A1</MenuItem>
//           <MenuItem value={"a2"}>A2</MenuItem>
//           <MenuItem value={"b1"}>B1</MenuItem>          
//           <MenuItem value={"b2"}>B2</MenuItem>
//           <MenuItem value={"b4"}>B4</MenuItem>
//           <MenuItem value={"b5"}>B5</MenuItem>
//           <MenuItem value={"a6"}>B6</MenuItem>
//           <MenuItem value={"b7"}>B7</MenuItem>          
//           <MenuItem value={"b8"}>B8</MenuItem>
//           <MenuItem value={"b9"}>B9</MenuItem>
//           <MenuItem value={"b10"}>B10</MenuItem>
//           <MenuItem value={"b11"}>B11</MenuItem>
//           <MenuItem value={"c1"}>C1</MenuItem>          
//           <MenuItem value={"c2"}>C2</MenuItem>
//           <MenuItem value={"c4"}>C4</MenuItem>  
//           <MenuItem value={"c5"}>C5</MenuItem>
//         </Select>
//       </FormControl>
//     </form>
//   );
// }



import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: any) => {
    setAge(event.target.value);
};
  
  // function handleChange(event: React.ChangeEvent<{ value: unknown }>) {
  //   setAge(event.target.value as number);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}