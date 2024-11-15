module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {runtime: 'automatic'}],        // babel is a transpiler, it converts code from one form to another, this @babel/preset-react is helping the testing library to convert jsx code into html so that it can read properly 
    ],
  };