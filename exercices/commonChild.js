function commonChild(s1, s2) {
  let lookupS1 = {};
  let lookupS2 = {};

  for (let i = 0; i < s1.length; i++) {
    let value1 = lookupS1[s1[i]];
    let value2 = lookupS2[s2[i]];

    lookupS1[s1[i]] = value1 ? [...value1, i] : [i];
    lookupS2[s2[i]] = value2 ? [...value2, i] : [i];
  }

  console.log(lookupS1);
  console.log(lookupS2);

  let commonChildsS1 = 0;
  let cursorS1 = 0;
  let commonChildsS2 = 0;
  let cursorS2 = 0;

  for (let i = 0; i < s2.length; i++) {
    if (lookupS1[s2[i]] && lookupS1[s2[i]].length > 0 && lookupS1[s2[i]][0]) {
      if (cursorS1 === s2.length) break;
      //   console.log("in lookup", lookupS1[s2[i]][0]);
      cursorS1 = lookupS1[s2[i]].shift();
      commonChildsS1++;
      console.log("++ comonchilds S1");
    } else {
      cursorS1++;
    }

    if (lookupS2[s1[i]] && lookupS2[s1[i]].length > 0 && lookupS1[s1[i]][0] >= cursorS2) {
      if (cursorS2 === s1.length) break;
      cursorS2 = lookupS1[s2[i]].shift();
      commonChildsS2++;
      console.log("++ comonchilds S2");
    } else {
      cursorS2++;
    }
  }
  let commonChilds = Math.max(commonChildsS1, commonChildsS2);

  return commonChilds;
}

// let case0 = commonChild("OUDFRMYMAW", "AWHYFCCMQX");
let case2 = commonChild("SHINCHAN", "NOHARAAA");
console.log(case2);
