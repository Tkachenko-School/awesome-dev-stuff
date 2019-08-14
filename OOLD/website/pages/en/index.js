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


class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href}
          target={this.props.target}>
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













// https://raw.githubusercontent.com/GroceriStar/creative/master/illustrations/Vegetables_Tomato%20(1).png

// @TODO will deploy break this hardcoded links?
// I think yes
const TableOfContents = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{ textAlign: 'center' }}>


    <h2>Table of contents</h2>
    <div className="tableofcontents" >

    <ul className="border-bottom-3px">

      <li>
        <a href="/awesome-dev-stuff/docs/jobs/jobs-section">Jobs index</a>
      </li>
        <li><a href="/awesome-dev-stuff/docs/jobs/tech-job">Startup Jobs</a></li>
        <li><a href="/awesome-dev-stuff/docs/jobs/internships">Internships</a></li>
        <li><a href="/awesome-dev-stuff/docs/jobs/job-boards">Tech Job Boards</a></li>
        <li><a href="/awesome-dev-stuff/docs/jobs/jobs">Remote Jobs</a></li>
    </ul>

    <ul class="border-bottom-3px">

        <li>
        <a href="/awesome-dev-stuff/docs/create-npm-module/create-npm-module-section">
        Publishing your module at NPM index</a></li>
          <li><a href="/awesome-dev-stuff/docs/create-npm-module/create-npm-module">First articles to read</a></li>
          <li><a href="/awesome-dev-stuff/docs/create-npm-module/create-npm-module-babel">Connect Babel to your project</a></li>
          <li><a href="/awesome-dev-stuff/docs/create-npm-module/create-npm-module-rollup">RollupJS</a></li>
          <li><a href="/awesome-dev-stuff/docs/create-npm-module/create-npm-module-rollup-react">Rollup + React configuration</a></li>
    </ul>

    <ul class="border-bottom-3px">
      <li><a href="/awesome-dev-stuff/docs/js/js-section">JavaScript index</a></li>
        <li><a href="/awesome-dev-stuff/docs/js/js">JS articles</a></li>
        <li><a href="/awesome-dev-stuff/docs/js/complex-structures">Complex structures</a></li>
        <li><a href="/awesome-dev-stuff/docs/js/nodejs-corb-cors">NodeJS CORB CORS</a></li>
      </ul>

    <ul class="border-bottom-3px">
        <li><a href="/awesome-dev-stuff/docs/react/react-section">React index</a></li>
          <li><a href="/awesome-dev-stuff/docs/react/awesome-react-book">Awesome React Book by Flavio Copes</a></li>
          <li><a href="/awesome-dev-stuff/docs/react/react">Different articles related to React ecosystem</a></li>
          <li><a href="/awesome-dev-stuff/docs/react/react-children">React Children components</a></li>
          <li><a href="/awesome-dev-stuff/docs/react/styling">Styled Components</a></li>
          <li><a href="/awesome-dev-stuff/docs/react/react-best-practices">React best practices</a></li>
          <li><a href="/awesome-dev-stuff/docs/react/project-structure">React project structure</a></li>
    </ul>

    <ul class="border-bottom-3px">
    <li><a href="/awesome-dev-stuff/docs/css/ss-section">CSS index</a></li>
      <li><a href="/awesome-dev-stuff/docs/css/css">CSS</a></li>
      <li><a href="/awesome-dev-stuff/docs/css/css-grid">CSS Grid</a></li>
      <li><a href="/awesome-dev-stuff/docs/css/flexbox">Flexbox</a></li>
      </ul>

    <ul class="border-bottom-3px">
      <li>
      <a href="/awesome-dev-stuff/docs/stories/stories">
        Stories for developers</a>
        </li>
    </ul>

    <ul class="border-bottom-3px">
        <li><a href="/awesome-dev-stuff/docs/unsorted/unsorted-section">Unsorted content</a></li>
        <li><a href="/awesome-dev-stuff/docs/courses">Free code courses</a></li>
        <li><a href="/awesome-dev-stuff/docs/open-source/open-source">Open source</a></li>
        <li><a href="/awesome-dev-stuff/docs/product-hunt/launch-producthunt">Launch your project on ProductHunt Articles Collection</a></li>

        <li><a href="/awesome-dev-stuff/docs/machine-learning/machine-learning">Machine learning</a></li>
        <li><a href="/awesome-dev-stuff/docs/design/design">Design</a></li>
        <li><a href="/awesome-dev-stuff/docs/git/git">Mastering Git</a></li>
        <li><a href="/awesome-dev-stuff/docs/github/cool-github-repositories">Cool Github Repositories</a></li>
        <li><a href="/awesome-dev-stuff/docs/graphql/graphql">GraphQL</a></li>
        <li><a href="/awesome-dev-stuff/docs/indie-hackers/indie-hackers">IndieHackers articles/podcasts collection</a></li>
        <li><a href="/awesome-dev-stuff/docs/images">Credits: Images</a></li>
    </ul>


    </div>
  </div>
);





const MainPage = props => (
  <div
    className="showcaseSection paddingBottom"
    style={{ textAlign: 'center' }}>
    <div className="tableofcontents" style={{ textAlign: 'center' }}>

      <p>
        Welcome to awesome-dev-stuff website(yeah, I should find a better name).
      </p>
      <p>
        It's a place, where our team keeping different articles,
      </p>
      <p>
       related to software development.
      </p>
      <p>
        We sharing those links frequently with beginners, interns, juniors
      </p>
      <p>
      and you may like it interesting as well.
      </p>
      <p>
        There a lot of cool information, sorted by different topics.
      </p>
    </div>
  </div>
);


//--

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="center"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Perfect your React skills!',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,
        imageAlign: 'left',
        title: 'React Best practices',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="white">
    {[
      {
        content: 'How to find tech job or land an internship in tech company?',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/astronaut.svg?sanitize=true`,
        imageAlign: 'right',
        title:  'How to find coding job',
      },
    ]}
  </Block>
);

const Description2 = () => (
  <Block background="white">
    {[
      {
        content: 'Just want to read hand-picked, interesting stories?',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/wireframe.svg?sanitize=true`,
        imageAlign: 'left',
        title:  'Handpicked stories',
      },
    ]}
  </Block>
);

const Description3 = () => (
  <Block background="white">
    {[
      {
        content: 'Different stories to read - give them a chance!',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/mind_map.svg?sanitize=true`,
        imageAlign: 'right',
        title: 'Different topics like GraphQL, Open Source movement, CSS, Design,  and many more',
      },
    ]}
  </Block>
);

class Index extends React.Component {



  render() {
    let language = this.props.language || '';


    const { baseUrl } = siteConfig;



    // const FeatureCallout = () => (
    //   <div
    //     className="productShowcaseSection paddingBottom"
    //     style={{textAlign: 'center'}}>
    //     <h2>Feature Callout</h2>
    //     <MarkdownBlock>These are features of this project</MarkdownBlock>
    //   </div>
    // );


    // image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,
    // image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/astronaut.svg?sanitize=true`,











    return (
      <div>
        <div className="mainContainer">
          <Container padding={['bottom']}>
            <MainPage />


            {/*<FeatureCallout />*/}

            <TryOut />
            <Description />
            <Description2 />
            <Description3 />

            <TableOfContents />

          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
