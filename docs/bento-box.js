const styled = require('styled-components').default;
const bemto = require('../');

const Bento = styled(bemto({
  content: [
    { elem: 'Github' },
    {
      elem: 'Section',
      list: true
    }
  ]
}))`
  position: relative;
  display: flex;
  padding: 1px 1px 0;
  margin: -17px -35px 0;
  border: 4px solid;
  border-color: green;
  background: #E0EDF1;
  box-shadow: 0 20px 0;
  border-radius: 10px;
  font: 20px/1.4 Helvetica Neue, Arial, sans-serif;

  &__Github {
    position: absolute;
    left: 100%;
  }

  &__Section {
    display: flex;
    flex-grow: 1;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0.5em 1em;
    margin: 1px 2px 0;
    color: #FFF;
    background: #0F2000;
    text-decoration: underline;
    border-radius: 4px 4px 2px 2px;
  }

  &_red {
    border-color: #B40700 #FD2F16 #FF6443;
  }

  &_red > &__Section {
    background: #2E0301;
  }
`;

Bento.Section = bemto.elem(Bento, 'Section');

module.exports = Bento;
