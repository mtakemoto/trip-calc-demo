import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    form: {
        width: "100%"
    },
    fields: {
        padding: "5px",
        minWidth: "100%"
    },
    button: {
        width: "100%",
        marginTop: "10px"
    }
}));

const ExpenseForm = (props) => {
    const { name, amt, handleNameChange, handleAmtChange, handleSubmit } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={0}>
            <Grid item xs={12}>
                <Typography variant="h4">Add Expense</Typography>
            </Grid>
            <form className={classes.form}>
                <Grid item xs={12} md={6}>
                    <TextField id="name" className={classes.fields} value={name} onChange={handleNameChange} label="Name" type="text" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="amt" className={classes.fields} value={amt} onChange={handleAmtChange} label="Amount" type="number" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button onClick={handleSubmit} className={classes.button} variant="contained" color="primary">
                        Add
                    </Button>
                </Grid>
            </form>
        </Grid>
    );
}

export default ExpenseForm;