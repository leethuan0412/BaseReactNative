import i18next from '../language/index';
const Strings = () => {
  return {
    hello: i18next.t('hello', {defaultValue: ''}),
    language: i18next.t('language', {defaultValue: ''}),
  };
};
export default Strings;
