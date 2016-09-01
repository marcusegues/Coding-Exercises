import React from 'react';

export default class NoteKey extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { note } = this.props
    return (
      <li>{note}</li>
    )
  }
}
