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

// showcaseSection

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />

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


          <PromoSection>
            <Button href="#TOC">
              Table Of Contents
            </Button>

            {/*
            <Button href={docUrl('doc1.html')}>
              Example Link
            </Button>

            <Button href={docUrl('doc2.html')}>
              Example Link 2
            </Button>
            */}

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

const BlockToc = props => (
    <Container
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
    <MarkdownBlock>
    These are features of this project
    </MarkdownBlock>
  </div>
);



const ReactSkills = () => (
  <Block id="reactSkills">
    {[
      {
        // content: '!',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,
        imageAlign: 'left',
        title: 'React Best practices - Perfect your React skills',
      },
    ]}
  </Block>
);

const FindTechJob = () => (
  <Block background="white" id="techJob">
    {[
      {
        // content: 'How to find tech job or land an internship in tech company?',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/interviewing.svg?sanitize=true`,
        imageAlign: 'right',
        title:  'How to find tech job or land an internship in tech company?',
      },
    ]}
  </Block>
);

const Stories = () => (
  <Block background="white" id="stories">
    {[
      {
        // content: 'Just want to read hand-picked, interesting stories?',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/wireframe.svg?sanitize=true`,
        imageAlign: 'left',
        title:  'Just want to read hand-picked, interesting stories?',
      },
    ]}
  </Block>
);


const Unsorted = () => (
  <Block background="white" id="unsorted">
    {[
      {
        // content: 'Different stories to read - give them a chance!',
        image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/mind_map.svg?sanitize=true`,
        imageAlign: 'right',
        title: 'Different topics like GraphQL, Open Source movement, CSS, Design,  and many more',
      },
    ]}
  </Block>
);



// image: `https://raw.githubusercontent.com/GroceriStar/creative/master/website-illustrations/moving_forward.svg?sanitize=true`,


// https://raw.githubusercontent.com/GroceriStar/creative/master/illustrations/Vegetables_Tomato%20(1).png


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

const jobsLink =
'[**Startup Jobs**](/awesome-dev-stuff/docs/jobs/tech-job)<br />' +
'[**Internships**](/awesome-dev-stuff/docs/jobs/internships)<br />' +
'[**Tech Job Boards**](/awesome-dev-stuff/docs/jobs/job-boards)<br />' +
'[**Remote Jobs**](/awesome-dev-stuff/docs/jobs/jobs)<br />'
;

const npmModule =
'[**First articles to read**](/awesome-dev-stuff/docs/create-npm-module/create-npm-module)<br />' +
'[**Use Babel at your project**](/awesome-dev-stuff/docs/create-npm-module/create-npm-module-babel)<br />' +
'[**RollupJS**](/awesome-dev-stuff/docs/create-npm-module/create-npm-module-rollup)<br />' +
'[**Rollup + React configuration**](/awesome-dev-stuff/docs/create-npm-module/create-npm-module-rollup-react)<br />'
;


const jsLinks =
'[**JS articles**](/awesome-dev-stuff/docs/js/js)<br />' +
'[**Complex structures**](/awesome-dev-stuff/docs/js/complex-structures)<br />' +
'[**NodeJS CORB CORS**](/awesome-dev-stuff/docs/js/nodejs-corb-cors)<br />'
;

const reactLinks =
'[**Awesome React Book by Flavio Copes**](/awesome-dev-stuff/docs/react/awesome-react-book)<br />' +
'[**Different articles related to React ecosystem**](/awesome-dev-stuff/docs/react/react)<br />' +
'[**React Children components**](/awesome-dev-stuff/docs/react/react-children)<br />' +
'[**Styled Components**](/awesome-dev-stuff/docs/react/styling)<br />' +
'[**React best practices**](/awesome-dev-stuff/docs/react/react-best-practices)<br />' +
'[**React project structure**](/awesome-dev-stuff/docs/react/project-structure)<br />'
;


const cssLinks =
'[**CSS**](/awesome-dev-stuff/docs/css/css)<br />' +
'[**CSS Grid**](/awesome-dev-stuff/docs/css/css-grid)<br />' +
'[**Flexbox**](/awesome-dev-stuff/docs/css/flexbox)<br />'
;

const stories =
'[**Read Stories**](/awesome-dev-stuff/docs/stories/stories)<br />';

const unsortedLinks =
'[**Free code courses**](/awesome-dev-stuff/docs/courses)<br />' +
'[**Open source**](/awesome-dev-stuff/docs/open-source/open-source)<br />' +
'[**Launch your project on ProductHunt**](/awesome-dev-stuff/docs/product-hunt/launch-producthunt)<br />' +
'[**Machine learning**](/awesome-dev-stuff/docs/machine-learning/machine-learning)<br />' +
'[**Design**](/awesome-dev-stuff/docs/design/design)<br />' +
'[**Mastering Git**](/awesome-dev-stuff/docs/git/git)<br />' +
'[**Cool Github Repositories**](/awesome-dev-stuff/docs/github/cool-github-repositories)<br />' +
'[**GraphQL**](/awesome-dev-stuff/docs/graphql/graphql)<br />' +
'[**IndieHackers articles/podcasts**](/awesome-dev-stuff/docs/indie-hackers/indie-hackers)<br />' +
'[**Credits: Images**](/awesome-dev-stuff/docs/images)<br />'
;

// 11  (<-- two spaces)



const TOCC = () => (
  <div id="TOC"
    className="productShowcaseSection"
    style={{textAlign: 'center'}}>
      <h2>Table of contents</h2>
      <BlockToc layout="fourColumn">
      {[
          {
            content: jobsLink,
            imageAlign: 'top',
            title: 'Jobs Index',
          },
          {
            content: npmModule,
            imageAlign: 'top',
            title: 'Publish NPM module',
          },
          {
            content: jsLinks,
            imageAlign: 'top',
            title: 'JavaScript',
          },
          {
            content: stories,
            imageAlign: 'top',
            title: 'Stories with developers',
          },
      ]}
      </BlockToc>
  </div>

);



const TOCCC = () => (
    <BlockToc layout="fourColumn">
    {[

      {
        content: unsortedLinks,
        imageAlign: 'top',
        title: 'Unsorted',
      },
      {
        content: reactLinks,
        imageAlign: 'top',
        title: 'React',
      },
      {
        content: cssLinks,
        imageAlign: 'top',
        title: 'CSS',
      },

    ]}
    </BlockToc>
);

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

            {/*<MainPage />*/}
            <ReactSkills />
            <FindTechJob />
            <Stories />
            <Unsorted />
            <hr />
            <TOCC />
            <TOCCC />
            {/*<TableOfContents />*/}


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
