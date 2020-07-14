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
    let amtOwed = (person.total - split).toFixed(2);
    let resultText = amtOwed > 0 ? `Owed $${amtOwed}` : `Owes: -$${amtOwed*-1}`

    return (
        <Card key={person.name} className={classes.card}>
            <Typography gutterBottom variant="h5" component="h2">{person.name}</Typography>
            <Typography variant="body1" color="textSecondary">
                Expenses: {person.expenses.join(", ")}
                <br />
                Total: ${person.total.toFixed(2)}
                <br />
                {resultText}
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
    let titleText = peopleCount > 0 ? "Ledger" : "";

    return (
        <>
            <Typography variant="h4">{titleText}</Typography>
            <Grid container spacing={3} className={classes.grid}>
                {Object.values(people).map((person) => personRender(person, split, classes))}
            </Grid>
        </>
    )
}

export default Ledger;