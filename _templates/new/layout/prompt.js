// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDirectories } = require('../../utils')

module.exports = {
  prompt: async ({ prompter }) => {
    const { pathname } = await prompter.prompt({
      type: 'input',
      name: 'pathname',
      message: 'Enter the page path:',
    })

    const { package } = await prompter.prompt({
      type: 'select',
      name: 'package',
      message: 'Package',
      choices: getDirectories('apps'),
    })

    const basePath = `apps/${package}/app/(site)/${pathname}`
    console.log({ basePath })

    return {
      path: basePath,
      pathname,
    }
  },
}
