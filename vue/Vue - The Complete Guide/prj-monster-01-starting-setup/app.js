function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 1,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    disabledSpecialAttackButton() {
        return (this.currentRound - 1) % 3;
    },
    disabledHealthButton() {
        return (this.currentRound - 1) % 4;
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      this.monsterHealth -= getRandomNumber(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomNumber(7, 13);
    },
    specialAttackMonster() {
      this.currentRound++;
      this.monsterHealth -= getRandomNumber(10, 25);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      this.playerHealth += getRandomNumber(7, 15);
    },
    surrender() {
      this.currentRound++;
      console.log("surrender");
    },
  },
});

app.mount("#game");
