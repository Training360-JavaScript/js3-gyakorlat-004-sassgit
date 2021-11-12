const checkVisa = visaNumber => /^4[0-9]{15}$/.test(visaNumber);

export default checkVisa;