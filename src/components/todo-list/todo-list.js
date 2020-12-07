import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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
                <Box p={15}>
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
        height: "70vh"
    },
    tabs: {
        minWidth: 230,
        borderRight: `1px solid ${theme.palette.divider}`,
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

export default function ToDoList({tasksList, removeTask, editTask}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const editTodo=(id, e)=>{
       return()
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {tasksList.map(({id, title}) => (
                    <Tab
                        onClick={(event) => handleChange(event, id - 1)}
                        removeTask={removeTask}
                        editTask={editTask}
                        label={title}
                        key={id}
                        id={id}
                        icon={<>
                            <DeleteIcon
                                className={classes.DeleteIcon}
                                onClick={() => removeTask(id)}/>
                            <EditIcon
                                className={classes.EditIcon}
                                onClick={() => editTodo(id)}/>
                        </>
                        }
                    />
                ))}
            </Tabs>
            {tasksList.map(({id, content}) => (
                <TabPanel
                    value={value}
                    key={id}
                    index={id - 1}
                >
                    <Typography variant={"h5"} align={"center"}> {content}</Typography>
                </TabPanel>
            ))}

        </div>
    );
}