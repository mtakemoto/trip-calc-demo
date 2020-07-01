import React from 'react';
import Typography from '@material-ui/core/Typography';

const personRender = (person, split) => {
    return (
        <li key={person.name}>
            <h5>{person.name}</h5>
            <p>Expenses: {person.expenses.join(", ")}</p>
            <p>
                Total: {person.total}
            </p>
            <p>
                Owes: ${(person.total - split) < 0 ? -(person.total - split) : 0}
            </p>
        </li>
    );
}

const Ledger = (props) => {
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
            <ul>
                {Object.values(people).map((person) => personRender(person, split))}
            </ul>
        </>
    )
}

export default Ledger;