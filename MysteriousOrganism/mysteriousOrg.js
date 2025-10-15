// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (id, dnaStrand) => {
  return {
    specimenNum: id,
    dna: dnaStrand,

    mutate() {
      const index = Math.floor(Math.random() * 15);
      const newBase = returnRandBase();
      while(this.dna[index] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[index] = newBase;
      return this.dna;
    },

    compareDNA(pAequor) {
      let commonBases = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonBases++;
        }
      }
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${(commonBases / 15) * 100}% DNA in common`);

      return ((commonBases / 15) * 100);
    },

    willLikelySurvive() {
      let count = 0;
      for(let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          count++;
        }
      }

      if ((count / 15) * 100 >= 60) {
        return true;
      } else {
        return false;
      }
    },

    complementStrand() {
      const complement = [];
      for(let i = 0; i < this.dna.length; i++) {
        switch(this.dna[i]) {
          case 'A':
            complement.push('T');
            break;
          case 'T':
            complement.push('A');
            break;
          case 'C':
            complement.push('G');
            break;
          case 'G':
            complement.push('C');
            break;
        }
      }
      return complement;
    }
  }
}

const survivors = []
while(survivors.length < 30) {
  let specimen = pAequorFactory(survivors.length + 1, mockUpStrand());
  if (specimen.willLikelySurvive()) {
    survivors.push(specimen);
  }
}

let mostCommon = 0;
let common1;
let common2;

for(let i = 0; i < survivors.length; i++) {
  for(let j = i + 1; j < survivors.length; j++) {
    const relation = survivors[i].compareDNA(survivors[j]);
    if (relation > mostCommon) {
      mostCommon = relation;
      common1 = survivors[i].specimenNum;
      common2 = survivors[j].specimenNum;
    }
  }
}
console.log(`Specimen #${common1} and Speciment #${common2} are the two most related specimens and share ${mostCommon}% DNA.`);



/*
// Test Mutate - Step 4
let p1 = pAequorFactory(1, mockUpStrand());
console.log(p1.dna);
p1.mutate();
console.log(p1.dna);

// Test compareDNA - Step 5
let s1 = pAequorFactory(1, mockUpStrand());
let s2 = pAequorFactory(2, mockUpStrand());
console.log(s1.dna);
console.log(s2.dna);
s1.compareDNA(s2);
s2.compareDNA(s1);

// Test willLikelySurvive - Step 6
let s1 = pAequorFactory(1, mockUpStrand());
console.log(s1.dna);
console.log(s1.willLikelySurvive());

// Test Survivors - Step 7
for(let i = 0; i < survivors.length; i++) {
  console.log(survivors[i].specimenNum);
  console.log(survivors[i].willLikelySurvive());
}

// Test Complement - Step 9A
const s1 = pAequorFactory(1, mockUpStrand());
console.log(s1.dna);
console.log(s1.complementStrand());
*/