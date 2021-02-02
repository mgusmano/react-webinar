import React from "react";
import _ from "lodash";
import ReactGridLayout from "react-grid-layout";
import ChildWindow from './ChildWindow'

export default class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    compactType: null,
    items: 5,
    rowHeight: 50,
    resizeHandles: ['s','e','se'],
    margin: [30, 30],
    onLayoutChange: function() {},
    cols: 6
  };

  constructor(props) {
    super(props);
    this._div = null;
    this.mounted = false;
    this.state = {
      layouts: this.props.layoutsConfig.layouts,
      widgets: this.props.layoutsConfig.widgets,
    };
  }

  doResize = (entries) => {
    for (let entry of entries) {
      if (this.mounted === true) {
        this.setState({width: entry.contentRect.width});
      }
    }
  };

  componentDidMount() {
    //https://web.dev/resize-observer/
    this.mounted = true;
    this.ro = new ResizeObserver(this.doResize);
    this.ro.observe(this._div);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.mounted = false;
    this.ro.unobserve(this._div)
  }

  generateDOM() {
    var me = this;
    return _.map(_.range(this.props.items), function(i) {
      var text = 'Ext JS Child ' + i
      return (
        <div style={{border:'1px solid lightgray',boxShadow:'5px 5px 5px #888888'}} key={i}>
          <ChildWindow widget={me.state.widgets[i]} id={i} text={text}></ChildWindow>
        </div>
      );
    });
  }

  onLayoutChange(layout) {
    console.log('onLayoutChange',layout)
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <div
        className='grid-layout-root'
        ref={c => (this._div = c)}
        style={{
          height: '100%',
          width: '100%',
          boxSizing: 'border-box',
          border: '1px solid lightgray',
          overflow: 'scroll',
          boxShadow:'5px 10px 18px #888888'
        }}
      >
        {this.state.width !== undefined &&
        <ReactGridLayout
          layout={this.state.layouts}
          width={this.state.width}
          onResize={(layout, oldResizeItem, l, placeholder, e, node)=>{
            console.log('onReszie')
            this.setState({layout: layout})
          }}
          {...this.props}
        >
          {this.generateDOM()}
        </ReactGridLayout>
        }
      </div>
    );
  }
}
