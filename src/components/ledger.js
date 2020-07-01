import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    grid: {
        margin: "10px 0"
    },
    card: {
        minWidth: 275,
        margin: "5px",
        padding: "5px 10px"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const personRender = (person, split, classes) => {

    return (
        <Card key={person.name} className={classes.card}>
            <Typography gutterBottom variant="h5" component="h2">{person.name}</Typography>
            <Typography variant="body1" color="textSecondary">
                Expenses: {person.expenses.join(", ")}
                <br />
                Total: {person.total}
                <br />
                Owes: ${(person.total - split) < 0 ? -(person.total - split) : 0}
            </Typography>
        </Card>
    );
}

const Ledger = (props) => {
    const classes = useStyles();

    let { people, allTotal } = props;
    let peopleCount = Object.keys(people).length;
    let split = peopleCount > 0
        ? allTotal / peopleCount
        : 0;

    return (
        <>
            <Typography variant="h4">
                Ledger
            </Typography>
            <Grid container spacing={3} className={classes.grid}>
                {Object.values(people).map((person) => personRender(person, split, classes))}
            </Grid>
        </>
    )
}

export default Ledger;