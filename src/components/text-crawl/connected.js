import { connect } from 'react-redux';
import TextCrawl from '.';

const mapStateToProps = ({ films }) => ({ films: films?.model || [] });

const connectedTextCrawl = connect(mapStateToProps)(TextCrawl);

export default connectedTextCrawl;
