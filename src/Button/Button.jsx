const { useState } = require("react");


export default function Button(props) {
    const [page, setPage] = useState(2);
       const onLoadMore = () => {
        setPage(prev => prev + 1 );
        props.onSubPageNum(page);
    }
return(<button type="button" onClick={onLoadMore} className="Button">Load more</button>)
};
