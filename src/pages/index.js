import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Layout from "../components/layout";
import React from "react"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ledger: {} }
  }

  componentDidUpdate() {
    console.log(JSON.stringify(this.state));
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleAmtChange = (e) => {
    this.setState({ amt: e.target.value });
  }

  handleSubmit = (event) => {
    const { name, amt } = this.state;
    const ledger = this.state.ledger;

    if (!(name in ledger)) {
      ledger[name] = [amt]
    }
    else {
      ledger[name].push(amt);
    }

    this.setState({ "ledger": ledger })
  }

  render() {
    return (
      <Layout>
        <Container>
          <Typography variant="h4">
            Add Expense
        </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField id="name" value={this.state.name} onChange={this.handleNameChange} label="Name" />
            <TextField id="amt" value={this.state.amt} onChange={this.handleAmtChange} label="Amount" />
            <Button onClick={this.handleSubmit}>Add</Button>
          </form>
        </Container>
      </Layout>
    );
  }
}

export default IndexPage;
