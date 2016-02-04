// Task component - represents a single todo item
Proteinviewer = React.createClass({
  componentDidMount: function() {
    var el = this.getDOMNode();
    var options = {
      width: 600,
      height: 300,
      antialias: true,
      quality : 'medium'
    };
    var viewer = pv.Viewer(el, options);
    pv.io.fetchPdb('/pdbs/1r6a.pdb', function(structure) {
      viewer.cartoon('protein', structure, { color : color.ssSuccession() });
      var ligands = structure.select({ rnames : ['SAH', 'RVP'] });
      viewer.ballsAndSticks('ligands', ligands);
      viewer.centerOn(structure);
    });
  },
  render() {
    return (
      <div id="proteinviewer"></div>
    );
  }
});