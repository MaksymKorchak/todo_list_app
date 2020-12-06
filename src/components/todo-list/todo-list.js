import React from "react";
import ToDoItem from '../todo-item/todo-item'
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Container from "@material-ui/core/Container";

function TabPanel(props) {
  const {children, value, index, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={15} >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 20,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 400,
  },
  tabs: {
    minWidth: 200,
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  singleTab: {}

}));

export default function ToDoList({tasksList, removeTask, editTask}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >

        {tasksList.map(({id, text,index}) => (
            <Tab
              onClick={(event)=>handleChange(event,id-1)}
                 className={classes.singleTab}
                 removeTask={removeTask}
                 editTask={editTask}
                 label={text}
                 key={id}
                 id={id}
            />
          ))}

      </Tabs>
      {tasksList.map(({id, text}) => (
        <TabPanel
          value={value}
          key={id}
          index={id-1}
        >{text}</TabPanel>
      ))}

    </div>
  );
}