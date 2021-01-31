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
    const layout = this.generateLayout();
    this.state = { layout };
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
    return _.map(_.range(this.props.items), function(i) {
      var text = 'Ext JS Child ' + i
      console.log(text)
      return (
        <div style={{border:'1px solid lightgray',boxShadow:'5px 5px 5px #888888'}} key={i}>
          <ChildWindow text={text}></ChildWindow>
        </div>
      );
    });
  }

  generateLayout() {
    var layout = [
      {"x":0,"y":0,"w":2,"h":5,"i":"0"},
      {"x":2,"y":0,"w":2,"h":5,"i":"1"},
      {"x":4,"y":0,"w":2,"h":5,"i":"2"},
      {"x":0,"y":5,"w":3,"h":5,"i":"3"},
      {"x":3,"y":5,"w":3,"h":5,"i":"4"},
    ]
    return layout
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
        {this.state.width !== null &&
        <ReactGridLayout
          layout={this.state.layout}
          width={this.state.width}
          onResize={(layout, oldResizeItem, l, placeholder, e, node)=>{
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



  // generateLayout2() {
  //   const p = this.props;
  //   return _.map(new Array(p.items), function(item, i) {
  //     var r = Math.ceil(Math.random() * 8) + 2
  //     //console.log(r)
  //     //const y = _.result(p, "y") || Math.ceil(Math.random() * 8) + 1;
  //     return {
  //       x: (i * 2) % 6,
  //       //y: Math.floor(i / 6) * y,
  //       y: r,
  //       w: 2,
  //       h: 8,
  //       i: i.toString()
  //     };
  //   });
  // }
