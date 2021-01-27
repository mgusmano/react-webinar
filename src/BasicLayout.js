import React from "react";
import _ from "lodash";
import RGL from "react-grid-layout";
import ChildWindow from './ChildWindow'

//const ReactGridLayout = WidthProvider(RGL);

export default class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    items: 9,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 6
  };

  constructor(props) {
    super(props);

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    return _.map(_.range(this.props.items), function(i) {
      var text = 'Ext JS Panel ' + i
      return (
        <div style={{border:'1px solid gray'}} key={i}>
          <ChildWindow xstyle={{width:'100%',height:'100%',border:'1px solid red'}} text={text}></ChildWindow>
        </div>
      );
    });
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.items), function(item, i) {
      var r = Math.ceil(Math.random() * 8) + 2
      console.log(r)
      //const y = _.result(p, "y") || Math.ceil(Math.random() * 8) + 1;
      return {
        x: (i * 2) % 6,
        //y: Math.floor(i / 6) * y,
        y: r,
        w: 2,
        h: 8,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    console.log('onLayoutChange',layout)
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <RGL
        layout={this.state.layout}
        width={1000}
        onResize={(layout, oldResizeItem, l, placeholder, e, node)=>{
          //console.log('onResize',layout, oldResizeItem, l, placeholder, e, node)
          //this.generateLayout();
          this.setState({layout: layout})
        }}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </RGL>
    );
  }
}
