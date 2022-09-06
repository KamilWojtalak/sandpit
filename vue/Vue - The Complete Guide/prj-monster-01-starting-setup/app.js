function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyles() {
        return {width: this.monsterHealth + '%'}
    },
    playerBarStyles() {
        return {width: this.playerHealth + '%'}
    },
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= getRandomNumber(5, 12);
      this.attackPlayer();
    },
    attackPlayer() {
      this.playerHealth -= getRandomNumber(7, 13);
    },
    specialAttackMonster() {
        this.monsterHealth -= getRandomNumber(10, 25);
        this.attackPlayer();
    },
    healPlayer() {
        this.playerHealth += getRandomNumber(7, 15);
    },
    surrender() {
        console.log('surrender');
    }
  },
});

app.mount("#game");
