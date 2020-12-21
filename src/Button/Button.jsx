const { Component } = require("react");

class Button extends Component {
    state = {
        page: 2,
    }
    onLoadMore = e => {
        this.setState(prev => ({ page: prev.page + 1 }));
        this.props.onSubPageNum(this.state.page);
    }
    render() {
        return(<button type="button" onClick={this.onLoadMore} className="Button">Load more</button>)
    }
}
export default Button;