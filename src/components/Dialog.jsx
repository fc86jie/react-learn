import PropTypes from 'prop-types';
import React from 'react';

const Dialog = function (props) {
  let { title, content, children } = props;
  children = React.Children.toArray(children);

  return (
    <div className="dialog-box" style={{ width: 300 }}>
      <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="title">{title}</h2>
        <span>x</span>
      </div>
      <div className="main">{content}</div>
      {children.length ? <div className="footer">{children}</div> : null}
    </div>
  );
};

Dialog.defaultProps = {
  title: '提示',
};

Dialog.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
};

export default Dialog;
