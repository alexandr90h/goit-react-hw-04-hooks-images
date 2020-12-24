const { useState } = require("react");
// import PropTypes from 'prop-types';

export default function Button(props) {
    console.log(props);
    const [page, setPage] = useState(2);
       const onLoadMore = () => {
        setPage(prev => prev + 1 );
        props.onSubPageNum(page);
    }
return(<button type="button" onClick={onLoadMore} className="Button">Load more</button>)
};

// Button.propTypes = {
//     onSubPageNum: PropTypes.func,
// };