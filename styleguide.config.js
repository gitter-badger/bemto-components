// Only until https://github.com/styled-components/styled-components/issues/945#issuecomment-340166853 would be merged

const path = require('path');

const defaultResolver = require("react-docgen").resolver.findAllExportedComponentDefinitions;
const annotationResolver = require("react-docgen-annotation-resolver").default;

module.exports = {
  title: 'Bemto-components 🍱',
  showCode: true,
  sections: [
    {
      name: 'Introduction',
      content: './docs/0_introduction.md'
    },
    {
      name: 'Installation',
      content: './docs/1_installation.md'
    },
    {
      name: 'Features',
      content: './docs/2_0_features.md',
      sections: [
        {
          name: 'HTML Structure',
          content: './docs/2_1_html.md'
        },
        {
          name: 'BEM',
          content: './docs/2_2_bem.md'
        },
        {
          name: 'Styled-Components',
          content: './docs/2_3_styled.md'
        }
      ]
    },
    {
      name: 'Meta',
      sections: [
        {
          name: 'Readme',
          content: './README.md'
        },
        {
          name: 'Changelog',
          content: './Changelog.md'
        },
        {
          name: 'Code of Conduct',
          content: './Code_of_Conduct.md'
        }
      ]
    }
  ],

  styles: {
    SectionHeading: {
      root: {
        marginBottom: '-24px'
      },
      heading: {
        display: 'none'
      }
    }
  },

  context: {
    styled: path.resolve(__dirname, 'docs/styled-default.js'),
    bemto: path.resolve(__dirname, 'lib/index.js')
  },

  compilerConfig: {
    objectAssign: 'Object.assign',
    transforms: { dangerousTaggedTemplateString: true }
  },

  resolver: (ast, recast) => {
    const annotatedComponents = annotationResolver(ast, recast);
    const defaultComponents = defaultResolver(ast, recast);

    return annotatedComponents.concat(defaultComponents);
  }
};
