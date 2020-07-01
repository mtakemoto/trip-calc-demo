import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Layout from "../components/layout";
import Ledger from '../components/ledger';
import React from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      amt: "",
      people: {},
      allTotal: 0,
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleAmtChange = (e) => {
    this.setState({ amt: parseFloat(e.target.value) });
  }

  handleSubmit = (event) => {
    const { name, amt, people, allTotal } = this.state;

    if (!(name in people)) {
      let newPerson = { "name": name, "expenses": [amt], "total": amt };
      people[name] = newPerson;
    }
    else {
      people[name].expenses.push(amt);
      people[name].total += amt;
    }

    let newTotal = allTotal + amt;

    this.setState(prevState => ({
      people: people,
      allTotal: newTotal,
    }));
  }

  render() {
    return (
      <Layout>
        <Container>
          <Typography variant="h4" gutterBottom>
            Add Expense
        </Typography>
          <form>
            <TextField id="name" value={this.state.name} onChange={this.handleNameChange} label="Name" type="text"/>
            <TextField id="amt" value={this.state.amt} onChange={this.handleAmtChange} label="Amount" type="number" />
            <Button onClick={this.handleSubmit}>Add</Button>
          </form>
          <Ledger people={this.state.people} allTotal={this.state.allTotal} />
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;
