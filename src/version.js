import execa from 'execa'

function callExecSync(command, params) {
  let result = null
  try {
    result = execa.sync(command, params)
    return result.stdout
  } catch (error) {
    console.log(error)
    return result
  }
}

export const getVersion = function(req, res) {
  console.log('get /version')

  const node = callExecSync('node', ['--version'])
  const npm = callExecSync('npm', ['--version'])
  const pwd = callExecSync('pwd')
  res.json({ node, npm, pwd })
}
