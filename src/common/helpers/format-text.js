const uppercase = (str) => str.toUpperCase();
const lowercase = (str) => str.toLowerCase();
const uppercaseFirstCharacter = (str) => `${uppercase(str[0])}${str.slice(1)}`;

const formatText = (text, option) => {
  if (option === 'uppercase') return uppercase(text);
  if (option === 'lowercase') return lowercase(text);
  if (option === 'uppercaseFirstCharacter') return uppercaseFirstCharacter(text);
};

export default formatText;
