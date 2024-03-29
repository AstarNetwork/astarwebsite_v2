<template>
  <div class="px-4 sm:px-6 relative z-10">  
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="font-bold text-3xl sm:text-4xl mb-6 sm:mb-10 leading-tight">
        {{ $t("community.online_community.social.title") }}
      </h3>
      <p class="mb-16">
        {{ $t("community.online_community.social.description") }}
      </p>
    </div>

    <table class="mx-auto w-full max-w-3xl border-collapse border border-slate-300 table-auto inline-table sm:table">
      <thead>
        <tr>
          <th class="border border-slate-300 p-5 text-left font-medium text-slate-950 bg-slate-50">{{ $t('community.communities.table.columns.language') }}</th>
          <th class="border border-slate-300 p-5 text-left font-medium text-slate-950 bg-slate-50">
            <span class="flex flex-row align-center gap-[6px]">
              <Telegram class="h-6 w-6 text-[#0088CC]" />
              {{ $t('community.communities.table.columns.telegram') }}
            </span>
          </th>
          <th class="border border-slate-300 p-5 text-left font-medium text-slate-950 bg-slate-50">
            <span class="flex flex-row align-center gap-[6px]">
              <X class="h-6 w-6 text-black" />
            {{ $t('community.communities.table.columns.twitter') }}
          </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="community in communities" :key="community.id">
          <td class="border border-slate-300 p-5 font-medium text-slate-950">{{ community.name }}</td>
          <td class="border border-slate-300 p-5">
            <NuxtLink :href="community.telegram" target='_blank'>{{ community.telegram }}</NuxtLink>
          </td>
          <td class="border border-slate-300 p-5">
            <NuxtLink :href="`https://twitter.com/${community.twitter}`" target='_blank'>@{{ community.twitter }}</NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const Telegram = resolveComponent("IconTelegram");
const X = resolveComponent("IconX");

const communities = [
  {
    id: "turkish",
    name: `🇹🇷 ${t('community.communities.table.rows.turkish')}`,
    telegram: "https://t.me/AstarTurkiye",
    twitter: "AstarNetworkTr_",
  },
  {
    id: 'portuguese',
    name: `🇧🇷🇵🇹 ${t('community.communities.table.rows.portuguese')}`,
    telegram: "https://t.me/AstarNetwork_BR",
    twitter: "AstarNetworkBR",
  },
  {
    id: 'vietnamese',
    name: `🇻🇳 ${t('community.communities.table.rows.vietnamese')}`,
    telegram: "https://t.me/PlasmOfficialVietnam",
    twitter: "AstarNetworkVN",
  },
  {
    id: 'japanese',
    name: `🇯🇵 ${t('community.communities.table.rows.japanese')}`,
    telegram: 'https://t.me/AstarJapan',
    twitter: 'AstarNetwork_JP',
  },
  {
    id: 'korean',
    name: `🇰🇷 ${t('community.communities.table.rows.korean')}`,
    telegram: 'https://t.me/astar_kr',
    twitter: 'AstarNetwork_KR'
  }
]
</script>

<style lang="postcss" scoped></style>