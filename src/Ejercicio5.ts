export function DNAtoRNA(dna: string): string {
    //return dna.split("T").join("U");
    return dna.replace(/T/g, "U"); 
  }
  console.log(DNAtoRNA("TTTT"))