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
    this.state = { people: {}, allTotal: 0 }
  }

  componentDidUpdate() {
    console.log(JSON.stringify(this.state));
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleAmtChange = (e) => {
    this.setState({ amt: parseFloat(e.target.value) });
  }

  handleSubmit = (event) => {
    const { name, amt } = this.state;
    const people = this.state.people;

    if (!(name in people)) {
      let newPerson = { expenses: [amt], total: amt };
      people[name] = newPerson;
    }
    else {
      people[name].expenses.push(amt);
      people[name].total += amt;
    }

    let newTotal = this.state.allTotal += amt;
    let peopleCount = Object.keys(people).length;
    let split = peopleCount > 0
      ? newTotal / peopleCount
      : 0;

    this.setState(prevState => ({
      people: people,
      allTotal: newTotal,
      split: split
    }));
  }

  render() {
    return (
      <Layout>
        <Container>
          <Typography variant="h4">
            Add Expense
        </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField id="name" value={this.state.name} onChange={this.handleNameChange} label="Name" type="text"/>
            <TextField id="amt" value={this.state.amt} onChange={this.handleAmtChange} label="Amount" type="number" />
            <Button onClick={this.handleSubmit}>Add</Button>
          </form>
          <Ledger data={this.state.people} />
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;
