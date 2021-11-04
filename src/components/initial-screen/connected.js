import { connect } from 'react-redux';
import getFilmsAction from '../../store/get-films/get-films.action';
import InitialScreen from '.';


const mapStateToProps = () => {
    return({});
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchFilms: () => {
            dispatch(getFilmsAction());
        },
    });
};

const connectedInitialScreen = connect(mapStateToProps, mapDispatchToProps)(InitialScreen);

export default connectedInitialScreen;
