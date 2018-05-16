<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p1>Les frères Orville Wright (19 août 1871 - 30 janvier 1948) et Wilbur Wright (16 avril 1867 - 30 mai 1912) sont deux célèbres pionniers américains de l'aviation, à la fois chercheurs1, ingénieurs, concepteurs, constructeurs et pilotes. </p1>
  </div>
</template>

<script>
  export default {
    name: 'Hello',
    data () {
      return {
        msg: 'Les Freres Wright'
      }
    }
  }
</script>
