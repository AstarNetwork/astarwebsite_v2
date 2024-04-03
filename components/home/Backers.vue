<template>
  <div class="container-lg py-20 sm:py-40">
    <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-16 sm:mb-24">
      {{ $t("home.backers.title") }}
    </h2>

    <div
      class="grid gap-x-6 sm:gap-x-8 gap-y-8 grid-cols-3 sm:gap-y-16 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
    >
      <div
        v-for="item in projects"
        :key="item.attributes.name"
        class="flex items-center justify-center"
      >
        <NuxtLink
          :to="item.attributes.website"
          target="_blank"
          class="hover:opacity-80"
        >
          <img
            :src="useStrapiMedia(item.attributes.logo.data.attributes.url)"
            :alt="item.attributes.name"
            class="h-12 w-32 lg:w-48 object-contain"
          >
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from 'graphql-tag'

type Attributes = {
  name: string
  website: string
  description: string
  logo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

const query = gql`
  query getAllData {
    projects(
      pagination: { page: 1, pageSize: 100 }
      filters: { project_categories: { id: { eq: 9 } } }
    ) {
      data {
        attributes {
          name
          website
          description
          logo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`
const { data }: {
  data: {
    value: {
      projects: {
        data: {
          attributes: Attributes
        }[]
      }
    }
  }
} = await useAsyncQuery({ query, clientId: 'community' })

let projects: Array<{ attributes: Attributes }> = []

if (data.value !== null) {
  projects = data.value.projects.data.sort((a, b) => {
    if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
      return 1
    }
    else {
      return -1
    }
  })
}
</script>
