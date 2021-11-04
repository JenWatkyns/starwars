import { connect } from 'react-redux';
import getCharacterInfoAction from '../../store/get-character-info/get-character-info.action';
import DropDown from '.';


const mapStateToProps = ({ films = {} }) => {
    return ({
        films: films?.model || [],
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchCharacterInfo: (characters) => dispatch(getCharacterInfoAction(characters)),
    });
};

const connectedDropDown = connect(mapStateToProps, mapDispatchToProps)(DropDown);

export default connectedDropDown;
