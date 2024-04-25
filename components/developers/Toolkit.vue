<template>
  <div class="relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-40">
      <h2 class="title text-center mb-8 sm:mb-12 whitespace-pre-wrap">
        <span>{{ $t("developers.toolkit.title") }}</span>
      </h2>
      <div class="mb-12 sm:mb-28 text-center">
        <p>
          {{ $t("developers.toolkit.description") }}
        </p>
        <TextLink href="/ecosystem">
          {{ $t("developers.toolkit.ecosystem") }}
        </TextLink>
      </div>

      <div class="px-4 sm:px-6">
        <div
          class="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-20 sm:grid-cols-4 lg:grid-cols-5"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

import gql from 'graphql-tag'

const query = gql`
  query getAllData {
    projects(
      pagination: { page: 1, pageSize: 100 }
      filters: { project_categories: { id: { eq: 16 } } }
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
          attributes: {
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
        }[]
      }
    }
  }
} = await useAsyncQuery({ query, clientId: 'community' })

let projects: {
  attributes: {
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
}[] = []

if (data.value !== null) {
  projects = data.value.projects.data.sort(
    (a, b) => {
      if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
        return 1
      }
      else {
        return -1
      }
    },
  )
}
</script>
