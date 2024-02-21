function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();
    // Find the index of the first occurrence of s2 in 
    const index = lowerS1.indexOf(lowerS2);

    return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
