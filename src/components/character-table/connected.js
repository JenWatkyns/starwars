import { connect } from 'react-redux';
import CharacterTable from '.';


const mapStateToProps = ({ filmInfo = {} }) => {
    return({
        filmInfo: filmInfo?.model || [],
        status: filmInfo.meta?.status,
    });
};

const connectedCharacterTable = connect(mapStateToProps)(CharacterTable);

export default connectedCharacterTable;
