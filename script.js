// Etape 1
function sommes(array) {
	let number = 0;
	for (let i = 0; i < array.length; i++) {
		number += array[i];
	}
	return number;
}

console.log(sommes([1, 2, 3, 4])); // Devrait retourner 10
console.log(sommes([1, 2])); // Devrait retourner 3
console.log(sommes([0])); // Devrait retourner 0
console.log(sommes([1, 0])) // Devrait retourner 1

// Etape 2

console.log(sommes([1], "Haha")) // Devrait retourner 1
console.log(sommes()) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres"
console.log(sommes("Huhu")) // Devrait retourner "Erreur: Vous devez passer un tableau de nombres" 