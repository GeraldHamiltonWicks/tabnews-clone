function sum(arg1, arg2) {
  const numericArgs1 = Number(arg1);
  const numericArg2 = Number(arg2);

  if (Number.isNaN(numericArgs1) || Number.isNaN(numericArg2)) {
    return NaN;
  }

  return arg1 + arg2;
}

module.exports = {
  sum,
};
