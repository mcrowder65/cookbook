import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
/**/
import {toggleCheck, incNumber, decNumber} from '../actions';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/**/}
        <h1>Hello <a href={'https://github.com/electrode-io'}>{'Electrode'}</a></h1>
        <div>
          <h2>Managing States with Redux</h2>
          <label>
            <input onChange={this.props.onChangeCheck} type={'checkbox'}
                   checked={this.props.checked}/>
            Checkbox
          </label>
          <div>
            <button type={'button'} onClick={this.props.onDecrease}>-</button>
            &nbsp;{this.props.value}&nbsp;
            <button type={'button'} onClick={this.props.onIncrease}>+</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.number.isRequired,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  onChangeCheck: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    checked: state.checkBox.checked,
    value: state.number.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeCheck: () => {
      dispatch(toggleCheck());
    },
    onIncrease: () => {
      dispatch(incNumber());
    },
    onDecrease: () => {
      dispatch(decNumber());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
