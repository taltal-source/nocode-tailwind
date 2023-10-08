module.exports = [
  {
    type: 'select',
    name: 'dir',
    message: 'ディレクトリを選択してください',
    choices: ['base', 'ui', 'templates'],
  },
  {
    type: 'input',
    name: 'name',
    message: 'コンポーネント名を入力してください',
    validate: (input) => input !== '',
  },
];
