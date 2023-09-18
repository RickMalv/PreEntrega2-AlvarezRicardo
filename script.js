const pokemons = [
  {
    id: 1,
    name: "Pikachu",
    attackName: "Thunderbolt",
    attackDamage: 40,
    hp: 100
  },
  {
    id: 2,
    name: "Charizard",
    attackName: "Flamethrower",
    attackDamage: 85,
    hp: 150
  },
  {
    id: 3,
    name: "Bulbasaur",
    attackName: "Vine Whip",
    attackDamage: 45,
    hp: 100
  },
  {
    id: 5,
    name: "Raichu",
    attackName: "Cut",
    attackDamage: 45,
    hp: 100
  }
];

function displayPokemonList() {
  let pokemonList = "";
  pokemons.forEach((pokemon)=>{
    pokemonList += `${pokemon.id}: ${pokemon.name}\n`;
  });
  return pokemonList;
}

const userInput = prompt(`Elige un Pokémon para jugar:\n${displayPokemonList()}`);

switch (userInput) {
  case null:
    alert("Elección cancelada. El juego ha terminado.");
    break;
  case "":
    alert("Elección cancelada. El juego ha terminado.");
    break;
  default:
    const chosenPokemon = pokemons.find(pokemon => pokemon.id === parseInt(userInput));
    if (chosenPokemon) {
      const randomIndex = Math.floor(Math.random() * pokemons.length);
      const adversaryPokemon = pokemons[randomIndex];
      alert(`Has elegido jugar con ${chosenPokemon.name}!\nTu adversario es: ${adversaryPokemon.name}`);
      combat(chosenPokemon, adversaryPokemon);
    } else {
      alert("Elección inválida. El juego ha terminado.");
    }
    break;
}

function determineTurn() {
  return Math.random() < 0.5;
}

function combat (chosenPokemon, adversaryPokemon) {
  let playerTurn = determineTurn();
  while (chosenPokemon.hp > 0 && adversaryPokemon.hp > 0) {
    if (playerTurn) {
      const damage = chosenPokemon.attackDamage;
      adversaryPokemon.hp -= damage;
      if (adversaryPokemon.hp <= 0){
        adversaryPokemon.hp = 0
      } else (adversaryPokemon.hp)
      alert(`Es tu turno.\n${chosenPokemon.name} ataca a ${adversaryPokemon.name} con ${chosenPokemon.attackName} y causa ${damage} de daño. Su HP restante es de ${adversaryPokemon.hp}`);
      if (adversaryPokemon.hp <= 0) {
        alert(`${adversaryPokemon.name} ha sido derrotado. ¡Tú ganas!`);
        return;
      }
    } else {
      const damage = adversaryPokemon.attackDamage;
      chosenPokemon.hp -= damage;
      //La vida de un pokemon no puede ser menor a 0 
      if (chosenPokemon.hp <= 0){
        chosenPokemon.hp = 0
      } else (chosenPokemon.hp)
      alert(`Es el turno de la CPU.\n${adversaryPokemon.name} ataca a ${chosenPokemon.name} con ${adversaryPokemon.attackName} y causa ${damage} de daño. Tu HP restante es de ${chosenPokemon.hp}`);
      if (chosenPokemon.hp <= 0) {
        alert(`${chosenPokemon.name} ha sido derrotado. ¡La CPU gana!`);
        return;
      }
    }
    playerTurn = !playerTurn;
  }
}
