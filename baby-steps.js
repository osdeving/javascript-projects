const [nodename, filename, ...args] = process.argv

const sum = args.reduce((e, a) => a = parseInt(a) + parseInt(e))

console.log(sum)