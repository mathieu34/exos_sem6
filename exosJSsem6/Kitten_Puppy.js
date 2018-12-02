var kittenYears = prompt ("Kitten: ");
var puppyYears = prompt ("Puppy: ");

function possess (Kitten, Puppy) {
	var ownedCat ;
	if (Kitten <=15) {
		ownedCat = "quelques mois";
	} 
	else if (Kitten >=16 && Kitten <= 24) {
		ownedCat = 1 ;
	}
	else {
		ownedCat = 2 + ( ( Kitten - 24 ) / 4 );
	}

	var ownedDog ;
	if (Puppy <=15) {
		ownedDog = "quelques mois";
	} 
	else if (Puppy >=16 && Puppy <= 24) {
		ownedDog = 1 ;
	}
	else {
		ownedDog = 2 + ( ( Puppy - 24 ) / 5 );
	}

	return [ownedCat, ownedDog];
}
var res = possess(kittenYears, puppyYears);
console.log ("ownedCat: " + res[0] + ", ownedDog: " + res[1]);