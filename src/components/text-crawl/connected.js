import { connect } from 'react-redux';
import TextCrawl from '.';


const mapStateToProps = ({ films }) => {
    return({ films: films?.model || [] });
};

const connectedTextCrawl = connect(mapStateToProps)(TextCrawl);

export default connectedTextCrawl;
