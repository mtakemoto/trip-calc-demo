import React from 'react';
import Typography from '@material-ui/core/Typography';

const personRender = (data, person) => {
    return (
        <li key={person}>
            <h5>{person}</h5>
            <p>Expenses: {data[person].expenses.join(", ")}</p>
            <p>
                Total: {data[person].total}
            </p>
        </li>
    );
}

const Ledger = (props) => {
    let data = props.data;
    return (
        <>
            <Typography variant="h4">
                Ledger
            </Typography>
            <ul>
                {Object.keys(data).map((person) => personRender(data, person))}
            </ul>
        </>
    )
}

export default Ledger;