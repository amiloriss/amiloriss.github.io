import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData, getRepos } from '../actions/action';
import GitHubRepos from './GitHubRepos';
import PropTypes from 'prop-types';

const AboutMe = ({
  aboutMeTitle,
  myData: { data, repos },
  getData,
  getRepos,
  isDark,
}) => {
  useEffect(() => {
    getRepos();
    getData();
    // eslint-disable-next-line
  }, []);
  return (
    <section className="about-me" id="about-me">
      <h2>
        {aboutMeTitle} <i className="fas fa-user"></i>
      </h2>
      <div className="information">
        <img src={data.avatar} alt="" />
        <p style={{ transition: 'all 0.15s', color: isDark && '#a8dadc' }}>
          {data.text}
        </p>
      </div>

      <div className="contacts">
        <ul>
          <li>
            <i className="fab fa-discord"></i>
            {data.contacts.discord}
          </li>
          <li>
            <i className="fab fa-telegram-plane"></i>
            {data.contacts.telegram}
          </li>
          <li>
            <i className="fab fa-whatsapp-square"></i>
            {data.contacts.whats_up}
          </li>
        </ul>
      </div>
      <div className="github-repos">
        <ul>
          {repos !== null
            ? repos.map((repo) => {
                return (
                  <GitHubRepos isDark={isDark} key={repo.id} repo={repo} />
                );
              })
            : null}
        </ul>
      </div>
    </section>
  );
};

AboutMe.defaultProps = {
  aboutMeTitle: 'About me',
};

AboutMe.propTypes = {
  aboutMeTitle: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    myData: state.myData,
    myRepos: state.myData,
    isDark: state.myData.theme,
  };
};

export default connect(mapStateToProps, { getData, getRepos })(AboutMe);
