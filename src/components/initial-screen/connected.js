import { connect } from 'react-redux';
import getFilmsAction from '../../store/get-films/get-films.action';
import InitialScreen from '.';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => {
    dispatch(getFilmsAction());
  },
});

const connectedInitialScreen = connect(mapStateToProps, mapDispatchToProps)(InitialScreen);

export default connectedInitialScreen;
