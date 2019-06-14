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

      <ul>
        <li><a href="/awesome-dev-stuff/docs/best-practices/react-best-practices">Best practices</a></li>
        <li><a href="/awesome-dev-stuff/docs/free-code-courses">Free code courses</a></li>
        <li><a href="/awesome-dev-stuff/docs/create-npm-module/create-npm-module">Create npm module</a></li>
        <li><a href="/awesome-dev-stuff/docs/css/css">CSS</a></li>
        <li><a href="/awesome-dev-stuff/docs/css-grid/css-grid">CSS Grid</a></li>
        <li><a href="/awesome-dev-stuff/docs/design/design">Design</a></li>
        <li><a href="/awesome-dev-stuff/docs/flexbox/flexbox">Flexbox</a></li>
        <li><a href="/awesome-dev-stuff/docs/git/git">Git</a></li>
        <li><a href="/awesome-dev-stuff/docs/github/cool-github-repositories">cool-github-repositories</a></li>
        <li><a href="/awesome-dev-stuff/docs/graphql/graphqh">Graphqh</a></li>
        <li><a href="/awesome-dev-stuff/docs/images">images</a></li>
        <li><a href="/awesome-dev-stuff/docs/jest/jest">Jest</a></li>

        <li>
        <a href="">Jobs</a>
          <ul>
            <li><a href="/awesome-dev-stuff/docs/jobs/jobs">Startup Jobs</a></li>
            <li><a href="/awesome-dev-stuff/docs/jobs/internships">Internships</a></li>
          </ul>
        </li>
        <li>
        <a href="">JS</a>
          <ul>
            <li><a href="/awesome-dev-stuff/docs/js/js">JS</a></li>
            <li><a href="/awesome-dev-stuff/docs/js/complex-structures">Complex structures</a></li>
            <li><a href="/awesome-dev-stuff/docs/js/nodejs-corb-cors">NodeJS corb cors</a></li>
          </ul>
        </li>

        <li><a href="/awesome-dev-stuff/docs/machine-learning/machine-learning">Machine learning</a></li>
        <li><a href="/awesome-dev-stuff/docs/open-source/open-source">Open source</a></li>
        <li><a href="/awesome-dev-stuff/docs/product-hunt/launch-producthunt">Launch producthunt</a></li>
        <li><a href="/awesome-dev-stuff/docs/project-structure/project-structure">Project structure</a></li>

        <li>
          <a href="">React</a>
          <ul>
            <li><a href="/awesome-dev-stuff/docs/react/react">React</a></li>
            <li><a href="/awesome-dev-stuff/docs/react/styling">Styling</a></li>
          </ul>
        </li>

        <li>
          <a href="/awesome-dev-stuff/docs/stories/stories">Stories</a>
        </li>

      </ul>


    </div>
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
//--




class Index extends React.Component {



  render() {
    let language = this.props.language || '';


    const { baseUrl } = siteConfig;

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

       // const FeatureCallout = () => (
       //   <div
       //     className="productShowcaseSection paddingBottom"
       //     style={{textAlign: 'center'}}>
       //     <h2>Feature Callout</h2>
       //     <MarkdownBlock>These are features of this project</MarkdownBlock>
       //   </div>
       // );


// Read / Learn about Jest testing / React
// React best practices
// How to find a job or land an internship
// Just want to read hand-picked, interesting stories

// image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,
// image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/astronaut.svg?sanitize=true`,


       const TryOut = () => (
         <Block id="try">
           {[
             {
               content: 'Talk about trying this out',
               image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,
               imageAlign: 'left',
               title: 'Try it Out',
             },
           ]}
         </Block>
       );

       const Description = () => (
         <Block background="white">
           {[
             {
               content:
                 'This is another description of how this project is useful',
               image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/astronaut.svg?sanitize=true`,
               imageAlign: 'right',
               title: 'Description',
             },
           ]}
         </Block>
       );









    return (
      <div>
        <div className="mainContainer">
          <Container padding={['bottom']}>
            <MainPage />


              {/*<FeatureCallout />*/}

              <TryOut />
              <Description />

            <TableOfContents />

          </Container>
        </div>
      </div>
    );
  }
}

module.exports = Index;
