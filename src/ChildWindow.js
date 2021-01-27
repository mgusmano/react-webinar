import React, {useRef, useState, useEffect} from 'react';

const ChildWindow = (props) => {
  const [ nwc, setNwc ] = useState(null)



  const Ext = window['Ext']
    const contentRef = useRef();
    var newWidgetContainer = null;

    const doResize = () => {
      console.log('newWidgetContainer',newWidgetContainer)

      //call this only for classic toolkit
      if (newWidgetContainer !== null) {
        if (newWidgetContainer.updateLayout !== undefined) {
          console.log('ChildWindow - resize')
          newWidgetContainer.updateLayout()
        }
      }
    }

    // console.log(props.widthchange)
    // if (props.widthchange !== 0) {
    //   //doResize()
    //   setWidthChange(props.widthchange)
    // }



    const doResize2 = () => {
      console.log('ChildWindow - resize2')
      //call this only for classic toolkit
      if (newWidgetContainer.updateLayout !== undefined) {
          newWidgetContainer.updateLayout()
      }
  }

    useEffect(() => {
        newWidgetContainer = Ext.create('Ext.Container', {
          width: '100%',
          height: '100%',
          layout: 'fit',
          renderTo: contentRef.current
        });
        //console.log('setNwc',newWidgetContainer)
        setNwc(newWidgetContainer)
        //newWidgetContainer.add(props.item);

        newWidgetContainer.add({
          xtype: 'panel',
          title: props.text,
          layout: 'fit',
          items: [
            {xtype: 'button', text: 'Ext JS Button', border: true}
          ]
        });

        //console.log(contentRef.current)
        contentRef.current.addEventListener("resize", doResize2);
        window.addEventListener("resize", doResize);
        return () => {
          window.removeEventListener('resize', doResize);
          contentRef.current.removeEventListener('resize', doResize2);
        }

    }, []);

      //console.log(nwc)
  if (nwc !== null) {
    nwc.updateLayout()
  }

    // TODO: I think this should be controlled by a flag passed in from SDM or something like manuallyHandleResize or something
    // IF on line 10 should cover this
    return (
            // TODO: pull styles out.
            <div className="rgl-rendered-ext-container" ref={contentRef} style={{
                fontSize: '11px',
                width: '100%',
                height: '100%',
                border: '0px solid blue',
                boxSizing: 'border-box'
                }}>


            </div>
        );
};

export default ChildWindow;