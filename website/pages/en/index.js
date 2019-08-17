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

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">
            {props.children}
          </div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

// default block section
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

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>These are features of this project</MarkdownBlock>
      </div>
    );

const MainPage = props => (

    <div
        className="productShowcaseSection paddingBottom showcaseSection"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <MarkdownBlock>
        These are features of this project
        </MarkdownBlock>
      </div>




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


const ReactSkills = () => (
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

const FindTechJob = () => (
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

const Stories = () => (
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

const Unsorted = () => (
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



//
// <TableOfContents />
// image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,


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

const Showcase = () => {
    if ((siteConfig.users || []).length === 0) {
    return null;
    }

    const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
        <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
    ));

    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    return (
    <div className="productShowcaseSection paddingBottom">
        <h2>Who is Using This?</h2>
        <p>This project is used by all these people</p>
        <div className="logos">{showcase}</div>
        <div className="more-users">
        <a className="button" href={pageUrl('users.html')}>
            More {siteConfig.title} Users
        </a>
        </div>
    </div>
    );
};

const Features = () => (
    <Block layout="fourColumn">
    {[
        {
        content: 'This is the content of my feature',
        image: `${baseUrl}img/undraw_react.svg`,
        imageAlign: 'top',
        title: 'Feature One',
        },
        {
        content: 'The content of my second feature',
        image: `${baseUrl}img/undraw_operating_system.svg`,
        imageAlign: 'top',
        title: 'Feature Two',
        },
    ]}
    </Block>
);

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;







    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );



    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );



    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );


    return (
      <div>
        <HomeSplash
          siteConfig={siteConfig}
          language={language} />

          <div className="mainContainer">

            <MainPage />
            <ReactSkills />
            <FindTechJob />
            <Stories />
            <Unsorted />
            <TableOfContents />


            {/*
            <Features />
            <FeatureCallout />
            <LearnHow />
            <TryOut />
            <Description />
            <Showcase />
            */}


          </div>

      </div>
    );
  }
}

module.exports = Index;
