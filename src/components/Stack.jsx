import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/action';

const Stack = ({ myData: { tech_stack }, isDark }) => {
  useEffect(() => {
    getData();
    // eslint - disable - next - line;
  }, []);
  return (
    <section className="stack" id="stack">
      <h2>
        Tech Stack <i className="fas fa-hammer"></i>
      </h2>
      <ul className="tech-stack-list">
        {Object.values(tech_stack).map((el, id) => {
          return (
            <li key={id}>
              <img width="80px" src={el.logo} alt="logo" />{' '}
              <span
                style={{ transition: 'all 0.15s', color: isDark && '#a8dadc' }}
              >
                {el.name}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { myData: state.myData.data, isDark: state.myData.theme };
};

export default connect(mapStateToProps, { getData })(Stack);
