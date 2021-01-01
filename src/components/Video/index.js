import React from 'react';
import { connect } from 'react-redux';

function Video({ module, lesson, dispatch }) {
  return(
    <div>
      <div>
        <strong>{ module.title }</strong>
      </div>
      <div>
        <span>{ lesson.title }</span>
      </div>
      <br/>
    </div>
  );
}

export default connect(state => ({ module: state.course.activeModule, lesson: state.course.activeLesson }))(Video);
