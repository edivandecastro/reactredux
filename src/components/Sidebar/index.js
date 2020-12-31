import React, { useState } from 'react';
import { connect } from 'react-redux';

function Sidebar({ modules }) {
  return(
    <aside>
      { modules.map(module => (
        <div key={module.id}>
          <strong>
            {module.title}
          </strong>
          <ul>
            { module.lessons.map(lesson => (
              <li key={lesson.id}>{lesson.title}</li>
            )) }
          </ul>
        </div>
      )) }
    </aside>
  );
}

export default connect(state => ({ modules: state }))(Sidebar);
