import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {addTask, editTask, removeTask} from "../../store/actions/actionCreator";

function TabPanel(props) {
  const {children, value, index, id, ...other} = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={10}>
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
    height: "60vh"
  },
  tabs: {
    minWidth: 230,
    borderRight: `1px solid ${theme.palette.divider}`
  },

  DeleteIcon: {
    position: "absolute",
    right: 10,
    fontSize: 20,
    "&:hover": {
      color: 'red'
    }
  },
  EditIcon: {
    position: "absolute",
    right: 30,
    fontSize: 20,
    "&:hover": {
      color: 'green'
    }
  }
}));

function ToDoList({tasksList, removeTask, editTask}) {

  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [TaskText, setTaskText] = useState('');
  const [editId, setEditId] = useState('');

  const handleChange = (event, index) => {
    setValue(index);
  };

  const editTodo = (id, title) => {
    setIsVisible(true);
    setTaskText(title);
    setEditId(id);
  }

  const inputChange = ({target: {value}}) => {
    setTaskText(value);
  }

  const addEditTask = ({key}) => {
    if (TaskText.length > 3 && key === 'Enter') {
      editTask(editId, TaskText);
      setIsVisible(false);
    }
  }

  return (
    <>
      {isVisible ?
        <TextField
          style={{marginLeft: 30}}
          onChange={inputChange}
          onKeyPress={addEditTask}
          value={TaskText}
          label="Edit Task"/>
        : ''}
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {tasksList.map((el, index) => (
            <Tab
              onClick={(event) => handleChange(event, index)}
              removeTask={removeTask}
              editTask={editTask}
              label={el.title}
              key={el.id}
              icon={<>
                <DeleteIcon
                  className={classes.DeleteIcon}
                  onClick={
                    () => {
                      removeTask(el.id);
                      setIsVisible(false)
                    }
                  }/>
                <EditIcon
                  className={classes.EditIcon}
                  onClick={() => editTodo(el.id, el.title)}/>
              </>
              }
            />
          ))}
        </Tabs>
        {tasksList.map((el, index) => (
          <TabPanel
            value={value}
            key={el.id}
            id={el.id}
            index={index}>
            <Typography variant={"h5"} align={"center"} color={"primary"}> {el.content}</Typography>
          </TabPanel>
        ))}

      </div>
    </>
  );
}

export default connect(
  state => ({
    tasks: state.tasks,
  }), {addTask, removeTask, editTask})(ToDoList)