<template>
    <div id="app">
  <v-app light>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="125px">
                <img
                  class="img-circle elevation-7 mb-1"
                  src="https://randomuser.me/api/portraits/men/81.jpg"
                >
              </v-avatar>
              <div class="headline">KiTae <span style="font-weight:bold">Kim</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">부가설명</div>
              <v-layout justify-space-between>
                <a href="javascript:;" class="body-2">Home</a>
                <a href="javascript:;" class="body-2">About</a>
                <a href="javascript:;" class="body-2">Github</a>
                <a href="javascript:;" class="body-2">Other</a>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <div v-for="post in posts" :key="post.title">
              <v-card class="my-3" hover>
                <v-card-media
                  class="white--text"
                  height="170px"
                  :src="post.imgUrl"
                >
                  <v-container fill-height fluid>
                    <v-layout>
                      <v-flex xs12 align-end d-flex>
                        <span class="headline">{{ post.title }}</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-text>
                  {{ post.content }}
                </v-card-text>
                <v-card-actions>
                  <v-btn icon class="red--text">
                    <v-icon medium>reddit</v-icon>
                  </v-btn>
                  <v-btn icon class="light-blue--text">
                    <v-icon medium>twitter</v-icon>
                  </v-btn>
                  <v-btn icon class="blue--text text--darken-4">
                    <v-icon medium>facebook</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn flat class="blue--text">Enter</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
 </div>
</template>

 <script>
    export default {
    data: () => ({
        title: 'Your Logo',
        posts: [
          {
            title: 'Code Room 1',
            content: 'description 1',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
          },
          {
            title: 'Code Room 2',
            content: 'description 2',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
          },
          {
            title: 'Code Room 3',
            content: 'description 3',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
          }
        ]
      }
    )}
 </script>