/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

// https://raw.githubusercontent.com/GroceriStar/creative/master/illustrations/Vegetables_Tomato%20(1).png


class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const MainPage = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{ textAlign: 'center' }}>
    <div className="tableofcontents">
      <p>
        Food Tech related static data in json arrays, like recipes, ingredients, recipes, diets, allergies, etc.
      </p>
      <p>
        In a few our projects we have a similar files. And we always copy-paste code between them. So by moving this code into separated place - i hope we'll make our projects better.
      </p>
    </div>
  </div>
);

const FeatureCallout = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{ textAlign: 'center' }}>
    <h2>Table of contents</h2>
    <div className="tableofcontents" style={{ margin: '0px 150px' }}>
      <ul>
        <li><a href="/docs/best-practices/articles">articles</a></li>
        <li><a href="/docs/create-npm-module/doc1">Latin-ish</a></li>
        <li><a href="/docs/css/doc1">Latin-ish</a></li>
        <li><a href="/docs/css-grid/doc1">CSS Grid</a></li>
        <li><a href="/docs/design/doc1">Latin-ish</a></li>
        <li><a href="/docs/doc1">Latin-ish</a></li>
        <li><a href="/docs/doc2">document number 2</a></li>
        <li><a href="/docs/doc4">Other Document</a></li>
        <li><a href="/docs/doc5">Fifth Document</a></li>
        <li><a href="/docs/flexbox/doc1">Latin-ish</a></li>
        <li><a href="/docs/git/doc1">Latin-ish</a></li>
        <li><a href="/docs/github/doc1">Latin-ish</a></li>
        <li><a href="/docs/graphql/doc1">Latin-ish</a></li>
        <li><a href="/docs/jest/doc1">Latin-ish</a></li>
        <li><a href="/docs/jobs/articles">Latin-ish</a></li>
        <li><a href="/docs/jobs/internships">Latin-ish</a></li>
        <li><a href="/docs/js/doc1">Latin-ish</a></li>
        <li><a href="/docs/js/complex-structures">complex-structures</a></li>
        <li><a href="/docs/machine-learning/doc1">Latin-ish</a></li>
        <li><a href="/docs/open-source/doc1">Latin-ish</a></li>
        <li><a href="/docs/product-hunt/doc1">Latin-ish</a></li>
        <li><a href="/docs/project-structure/doc1">Latin-ish</a></li>
        <li><a href="/docs/react/articles">Latin-ish</a></li>
        <li><a href="/docs/react/doc1">Latin-ish</a></li>
        <li><a href="/docs/stories/doc1">Latin-ish</a></li>
      </ul>
    </div>
  </div>
);


class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <div className="mainContainer">
          <Container padding={['bottom']}>
            <MainPage />
            <FeatureCallout />
          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
