import React from 'react';
import PropTypes from 'prop-types';

const BaseItem = ({ ...props }) => {
  return <input {...props} />;
};

export default BaseItem;

BaseItem.displayName = 'BaseItem';

BaseItem.propTypes = {
  type: PropTypes.string.isRequired,
};
