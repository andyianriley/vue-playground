<template>
    <div class="root">
    <template v-if="loading > 0">
      Loading ...
    </template>
    <template v-else>
      <div class="title">
        The best films ever
      </div>
      <div class="items">
            <ul id="example-1">
                <li v-for="film in allFilms.films" :key="film.id">
                  {{ film.title }}
                </li>
            </ul>
      </div>
    </template>
  </div>
</template>

<script>
import FIND_SW_FILM_NAMES from "../graphql/StarWars.gql";

export default {
  name: 'StarWars',
  data: () => ({
    allFilms: {
      films: []
    },
    loading: 0,
  }),
  apollo: {
    allFilms  : {
      query: FIND_SW_FILM_NAMES,
      loadingKey: 'loading',
      result ({ data }) {
        this.allFilms = data.allFilms
      }
    },
  }
}
</script>

<style scoped>
.root {
  text-align: center;
  padding: 20px;
}
.title {
  padding: 40px;
  display: block;
  color: #7F7F7F;
  font-size: 32px;
  font-weight: 300;
}
</style>
