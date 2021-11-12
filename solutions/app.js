import checkIP from "./ip";
import checkMac from "./mac";
import checkVisa from "./visa";

const checker = {
  rules: {
    visa: checkVisa,
    ip: checkIP,
    mac: checkMac,
  },
  validate: function(str, type) {
    return this.rules[type](str);
  },
};


export default checker;