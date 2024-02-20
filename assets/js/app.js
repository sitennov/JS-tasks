const dnaToRna = (dna) => {
	const dnaMap = { 'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U' };
	if (dna === '') return '';
	const rna = dna.split('').map((nucleotide) => dnaMap[nucleotide] || null);
	if (rna.includes(null)) return null;
	return rna.join('');
};

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
