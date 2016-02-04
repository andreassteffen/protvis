// App component - represents the whole app
Protvis = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <h1>Protvis</h1>
        </header>
        <Proteinviewer symbol={this.props.symbol} />
        <Domainviewer symbol={this.props.symbol} />
      </div>
    );
  }
});