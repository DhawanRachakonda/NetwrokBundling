import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

import CakesListing from "../cakes-listing.jsx";
import Describe from "./describe.jsx";

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class CustomizedExpansionPanel extends React.Component {

  constructor(props) {
    super(props);
    window.scrollTo(0,0);
  }
  handleChange = panel => (event, expanded) => {
    this.props.history.push(panel);
  };

  render() {
    return (
      <div>
        <Describe itemName="Choco Cake" itemPrice="529" itemQuantity="1" daysRequired="1 day"/>
        <ExpansionPanel
          square
          expanded={false}
          onChange={this.handleChange('/flowers')}
        >
          <ExpansionPanelSummary>
            <Typography>Flowers</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={false}
          onChange={this.handleChange('/plants')}
        >
          <ExpansionPanelSummary>
            <Typography>Plants</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={true}
          onChange={this.handleChange('/cakes')}
        >
          <ExpansionPanelSummary>
            <Typography>Cakes</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
                <CakesListing/>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withRouter(CustomizedExpansionPanel);
