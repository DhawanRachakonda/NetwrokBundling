import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import withImageCDN from "../stock/image";

const styles = theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing.unit * 2,
    margin: '0 auto',
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing.unit,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
  image: {
    width: "100%",
  },
});

class SimpleSlide extends React.Component {
  images = [
      "/hue-of-green-syngonium-plant_3.jpg",
      "/hue-of-green-syngonium-plant_5.jpg",
      "/chocolate-truffle-cream-cake-half-kg_2.jpg",
      "/chocolate-truffle-cream-cake-half-kg_5.jpg",
      "/special-surprise-arrangement_5.jpg",
    ];
  counter = 0;

  constructor(props) {
      super(props);
      this.state = {
          imageName: this.images[this.counter],
      };
      this.interValId = setInterval(() => {
          this.counter = this.counter == 5 ? 0 : this.counter % 5;
          this.setState({
            imageName: this.images[this.counter],
          }, () => {
              this.counter += 1;
          })
      }, 5000);
  }
  changeImage = (imageName) => {
    this.setState({

    });
  };
  componentWillUnmount() {
      clearInterval(this.interValId);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <img className={classes.image} src={this.props.imageCDN+this.state.imageName}/>
            </Paper>
          </Slide>
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withImageCDN(SimpleSlide));