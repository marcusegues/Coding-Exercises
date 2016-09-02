import React from 'react';
import Note from './../../util/note';
import { NOTE_NAMES, TONES } from './../../util/tones';
import $ from 'jquery';
import NoteKey from './note_key';

export default class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map((note_name, idx) => {
      return new Note(TONES[note_name]);
    });
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  onKeyDown(e) {
    const { keyPressed, addNotes } = this.props;
    keyPressed(e.key);
    if (this.props.isRecording) {
      addNotes(this.props.notes);
    }
  }

  onKeyUp(e) {
    const { keyReleased, addNotes } = this.props;
    keyReleased(e.key);
    if (this.props.isRecording) {
      addNotes(this.props.notes);
    }
  }

  playNotes() {
    const { notes } = this.props;
    this.notes.forEach((note, idx) => {
      if (notes.indexOf(NOTE_NAMES[idx]) !== -1) {
        note.start();
      } else {
        note.stop();
      }
    });
  }

  render() {
    this.playNotes();
    const notes = NOTE_NAMES.map((note, idx) => {
      return <NoteKey key={idx} note={note} />;
    });
    return (
      <ul>
        {notes}
      </ul>
    );
  }
}
