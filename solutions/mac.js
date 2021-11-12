const checkMac = macNumber => /^([0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}$/.test(macNumber);

export default checkMac;