var app = new Vue({
  el: "#app",
  data: {
    cd: [],
    genre: [],
    visible: "all"
  },
  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((results) => {

      this.cd = results.data.response;

      this.cd.forEach((e) => {
        if(!this.genre.includes(e.genre)) {
          this.genre.push(e.genre);
        }
      });
    });
  }
});
