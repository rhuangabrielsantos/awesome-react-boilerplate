export default function (plop) {
  plop.setGenerator('components', {
    description: 'application components logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'components name please'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}Component/{{pascalCase name}}Component.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },

      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}Component/{{pascalCase name}}Component.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },

      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}Component/{{pascalCase name}}Component.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}Component/{{pascalCase name}}Component.test.tsx',
        templateFile: 'templates/tests.tsx.hbs'
      }
    ]
  });
}
