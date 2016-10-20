import React, { Component } from 'react';
import './TemplateViewer.css';
import _ from 'lodash';

const parseTemplate = (template, values) => {
  const compiled = _.template(template);
  return compiled(values);
};

class TemplateViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: parseTemplate(props.template, props.values),
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      text: parseTemplate(newProps.template, newProps.values)
    });
  }

  render() {
    return (
      <div className="template-viewer">
        <p>{ this.state.text }</p>
      </div>
    );
  }
};

export default TemplateViewer;
