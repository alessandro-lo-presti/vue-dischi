var app = new Vue({
  el: "#app",
  data: {
    cd: []
  },
  mounted() {
    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((results) => {
      this.cd = results.data.response;
    });

  }
});
