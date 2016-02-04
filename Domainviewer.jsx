Domainviewer = React.createClass({
  componentDidMount: function() {
    var el = this.getDOMNode();
    domainviewer.create(el, {
      width: '600',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = this.getDOMNode();
    domainviewer.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      symbol: this.props.symbol
    };
  },

  componentWillUnmount: function() {
    var el = this.getDOMNode();
    domainviewer.destroy(el);
  },

  render: function() {
    return (
      <div className="Domainviewer"></div>
    );
  }
});