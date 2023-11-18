const hero = {
  nome: "Chubaca",
  xp: 6300,
};

function heroLevelMsg(msg) {
  console.log(`O Herói de nome ${hero.nome} está no nivel de ${msg}`);
}

if (hero.xp <= 1000) {
  return heroLevelMsg("Ferro");
} else if (hero.xp >= 1001 && hero.xp <= 2000) {
  return heroLevelMsg("Bronze");
} else if (hero.xp >= 2001 && hero.xp <= 5000) {
  return heroLevelMsg("Prata");
} else if (hero.xp >= 5001 && hero.xp <= 6000) {
  return heroLevelMsg("Ouro");
} else if (hero.xp >= 6001 && hero.xp <= 7000) {
  return heroLevelMsg("Platina");
} else if (hero.xp >= 7001 && hero.xp <= 8000) {
  return heroLevelMsg("Ascendente");
} else if (hero.xp >= 8001 && hero.xp <= 9000) {
  return heroLevelMsg("Imortal");
} else if (hero.xp >= 9001) {
  return heroLevelMsg("Radiante");
}
