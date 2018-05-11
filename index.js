const localToISO = local => new Date(local).toISOString();

const dateToEpoch = date => new Date(date).getTime();

const epochToDate = epoch => new Date(epoch);

const dateToUnixEpoch = date => new Date(date).getTime() / 1000;

const unixEpochToDate = unixEpoch => {
  return new Date(unixEpoch * 1000);
}

const daysSince = (since) => {
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date();
  const startDate = new Date(since);
  const mSecs = startDate.getTime() - today.getTime();
  const diff = Math.abs(Math.ceil(mSecs / (1000 * 60 * 60 * 24)));
  //console.log(`Days since 20170101: ${diff}`);
  return diff
}

const yyyymmdd = (dat) => {
  let d = dat ? new Date(dat) : new Date();
  let yyyy = d.getFullYear();
  //let mm = d.getMonth() + 1;
  //let dd = d.getDate();
  let mm = `0${d.getMonth()}`.slice(-2);
  let dd = `0${d.getDate()}`.slice(-2);
  return `${yyyy}${mm}${dd}`
};

const medium = (dat, useAMPM = true) => {
  console.log(`dat: ${dat}`);
  let d = dat ? new Date(dat) : new Date();
  console.log(`d: ${d}`)
  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1;
  let dd = d.getDate();
  let hr = `0${d.getHours()}`.slice(-2);
  let min = `0${d.getMinutes()}`.slice(-2);
  let sec = `0${d.getSeconds()}`.slice(-2);
  let ampm = hr >= 12 ? 'pm' : 'am';
  let AMPM = useAMPM ? ampm : ''
  return `${mm}-${dd}-${yyyy} ${hr}:${min}${AMPM}`
};

const militaryShort = (dat) => {
  let d = dat ? new Date(dat) : new Date();
  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1;
  let dd = d.getDate();
  let hr = `0${d.getHours()}`.slice(-2);
  let min = `0${d.getMinutes()}`.slice(-2);
  return `${mm}/${dd}/${yyyy} ${hr}:${min}`
};

//return d.setUTCSeconds(utc);
module.exports = {
  daysSince,
  localToISO,
  dateToEpoch,
  dateToUnixEpoch,
  epochToDate,
  unixEpochToDate,
  yyyymmdd,
  medium,
  militaryShort,
};
