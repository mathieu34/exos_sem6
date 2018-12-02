var humanYear ;
var cat_year ;
var dog_year;

humanYearVar = prompt ("humanYear: ");

function possess (humanYear) {

	if (humanYear == 1) {
		cat_year = 15 
		dog_year = 15 ;
		
	}

	if (humanYear == 2) {
		cat_year = 15 + 9 
		dog_year = 15 + 9 ;
	}

	if (humanYear >= 3) {
			cat_year = 15 + 9 + 4 * (humanYear - 2) 
			dog_year = 15 + 9 + 5 * (humanYear - 2)
		}

	return [cat_year,dog_year];
}

res = possess (humanYearVar);
console.log ("humanYear: " + humanYearVar, "cat_year : " + res[0], "dog_year : " + res[1]);
