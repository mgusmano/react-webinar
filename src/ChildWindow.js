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
    const currentRef = contentRef.current
    if (Ext === undefined) {
      const newDiv = document.createElement("div");
      newDiv.style.width = "200px";
      newDiv.style.height = "200px";
      newDiv.style.background = "red";
      newDiv.style.color = "white";
      const newContent = document.createTextNode("Child div of Grid Item");
      newDiv.appendChild(newContent);
      contentRef.current.appendChild(newDiv);
      return
    }

    extContainer.current = Ext.create('Ext.Container', {
      width: '100%',
      height: '100%',
      layout: 'fit',
      renderTo: contentRef.current
    });
    extContainer.current.add(props.widget.renderable)

    var ro = new ResizeObserver(doResize);
    ro.observe(contentRef.current)
    return () => ro.unobserve(currentRef);
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
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
    </div>
  );
};

export default ChildWindow;