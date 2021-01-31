import React, {useRef, useEffect} from 'react';

const ChildWindow = (props) => {
  const contentRef = useRef();
  const extContainer = { current: null }

  const doResize = (entries) => {
    if (extContainer.current !== null) {
      if (extContainer.current.updateLayout !== undefined) {
        extContainer.current.updateLayout()
      }
    }
    else {
      console.log('newWidgetContainer is null')
    }
  }

  useEffect(() => {
    const Ext = window['Ext']
    extContainer.current = Ext.create('Ext.Container', {
      width: '100%',
      height: '100%',
      layout: 'fit',
      renderTo: contentRef.current
    });
    // extContainer.current.add({
    //   xtype: 'panel',
    //   title: props.text,
    //   layout: 'fit',
    //   items: [
    //     {xtype: 'button', text: 'Ext JS Button', border: true}
    //   ]
    // });

    extContainer.current.add({
        xtype: 'grid',
        title: props.text,
        store: {
          data: [
          {firstname:'Marc',lastname:'Gusmano',email:'something@somewhere.com'},
          {firstname:'Nick',lastname:'Gusmano',email:'something@somewhere.com'},
          {firstname:'Andy',lastname:'Gusmano',email:'something@somewhere.com'},
          {firstname:'Nikki',lastname:'Gusmano',email:'something@somewhere.com'},
          {firstname:'Bob',lastname:'Smith',email:'something@somewhere.com'},
          {firstname:'John',lastname:'Jones',email:'something@somewhere.com'},
        ]},
        columns: [
          {text: 'First',dataIndex: 'firstname'},
          {text: 'Last',dataIndex: 'lastname'},
          {text: 'Email',dataIndex: 'email', flex: 1},
        ]
    });

    var lro = new ResizeObserver(doResize);
    lro.observe(contentRef.current)
    //setRo(lro)
    return () => lro.unobserve(contentRef.current);
  }, []);

  return (
    <div
      className="rgl-rendered-ext-container"
      ref={contentRef}
      style={{
        fontSize: '11px',
        width: '100%',
        height: '100%',
        border: '0px solid blue',
        boxSizing: 'border-box'
      }}
    >
    </div>
  );
};

export default ChildWindow;