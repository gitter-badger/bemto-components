# bemto-components 🍱

Smart components for using [BEM methodology](https://en.bem.info/methodology/quick-start/) with [React](https://reactjs.org/). Best used together with [styled-components](https://www.styled-components.com/).

    const Bento = require('./bento-box.js');
    
    <Bento _red __Section={[
      {
        props: { href: '#html-structure' },
        content: 'Reusable, configurable, easy to create components with HTML structure of any complexity. 🍢'
      },
      {
        props: { href: '#bem' },
        content: 'Elements and Modifiers from BEM. 🍙 🍣'
      },
      {
        props: { href: '#styled-components' },
        content: 'Full support of 💅styled-components from the box (pun intended).'
      }
    ]} />
