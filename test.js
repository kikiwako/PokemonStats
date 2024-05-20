const types = {
    normal: {
        noEffect: ["ghost"],
        notVeryEffective: ["rock", "steel"],
    },
    fire: {
        notVeryEffective: ["fire", "water", "rock", "dragon"],
        superEffective: ["grass", "ice", "bug", "steel"],
    },
    water: {
        notVeryEffective: ["water", "grass", "dragon"],
        superEffective: ["fire", "ground", "rock"],
    },
    electric: {
        noEffect: ["ground"],
        notVeryEffective: ["electric", "grass", "dragon"],
        superEffective: ["water", "flying"],
    },
    grass: {
        notVeryEffective: [
            "fire",
            "grass",
            "poison",
            "flying",
            "bug",
            "dragon",
            "steel",
        ],
        superEffective: ["water", "ground", "rock"],
    },
    ice: {
        notVeryEffective: ["fire", "water", "ice", "steel"],
        superEffective: ["grass", "ground", "flying", "dragon"],
    },
    fighting: {
        noEffect: ["ghost"],
        notVeryEffective: ["poison", "flying", "psychic", "bug", "fairy"],
        superEffective: ["normal", "ice", "rock", "dark", "steel"],
    },
    poison: {
        noEffect: ["steel"],
        notVeryEffective: ["poison", "ground", "rock", "ghost"],
        superEffective: ["grass", "fairy"],
    },
    ground: {
        noEffect: ["flying"],
        notVeryEffective: ["grass", "bug"],
        superEffective: ["fire", "electric", "poison", "rock", "steel"],
    },
    flying: {
        notVeryEffective: ["electric", "rock", "steel"],
        superEffective: ["grass", "fighting", "bug"],
    },
    psychic: {
        noEffect: ["dark"],
        notVeryEffective: ["psychic", "steel"],
        superEffective: ["fighting", "poison"],
    },
    bug: {
        notVeryEffective: [
            "fire",
            "fighting",
            "poison",
            "flying",
            "ghost",
            "steel",
            "fairy",
        ],
        superEffective: ["grass", "psychic", "dark"],
    },
    rock: {
        notVeryEffective: ["fighting", "ground", "steel"],
        superEffective: ["fire", "ice", "flying", "bug"],
    },
    ghost: {
        noEffect: ["normal"],
        notVeryEffective: ["dark"],
        superEffective: ["psychic", "ghost"],
    },
    dragon: {
        noEffect: ["fairy"],
        notVeryEffective: ["steel"],
        superEffective: ["dragon"],
    },
    dark: {
        notVeryEffective: ["fighting", "dark", "fairy"],
        superEffective: ["psychic", "ghost"],
    },
    steel: {
        notVeryEffective: ["fire", "water", "electric", "steel"],
        superEffective: ["ice", "rock", "fairy"],
    },
    fairy: {
        notVeryEffective: ["fire", "poison", "steel"],
        superEffective: ["fighting", "dragon", "dark"],
    },
};

const typeChart = [];

const getDefenses = () => {};
