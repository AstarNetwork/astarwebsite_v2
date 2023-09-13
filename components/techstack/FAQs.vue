<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>FAQs</span>
    </h2>
    <dl
      class="space-y-6 sm:space-y-10 divide-y divide-white/20 border-t border-b border-white/20 pb-6 sm:pb-10"
    >
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question"
        v-slot="{ open }"
      >
        <dt class="pt-6 sm:pt-10">
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-white"
          >
            <span class="text-base sm:text-xl font-medium">
              {{ locale === "ja" ? faq.question.ja : faq.question.en }}
            </span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-6 pr-12 techstack-faqs__answer">
          <div v-html="locale === 'ja' ? faq.answer.ja : faq.answer.en" />
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const { locale } = useI18n();

const props = defineProps({
  application: {
    type: String,
    default: "",
  },
});

const { t } = useI18n();

const faqs = [
  {
    question: {
      en: "What is Astar zkEVM? What are the main features of Astar zkEVM?",
      ja: "Astar zkEVMとは？Astar zkEVMの主な特徴は？",
    },
    answer: {
      en: `<p>Astar zkEVM serves as a versatile solution for global enterprises, accelerating the adoption of blockchain technology not just in Japan, but on a global scale. It particularly positions itself as a gateway for international gaming and entertainment ventures to tap into the lucrative Japanese market. Central to Astar's innovation is its adoption of Ethereum Layer-2 Scaling solution.</p>
      <p>Key attributes of the Astar zkEVM include:</p>
      <ul>
        <li>Scalability that ensures smooth operations even during high transaction volumes via zero-knowledge technology</li>
        <li>EVM equivalency</li>
        <li>Deriving its security mechanisms from Ethereum, ensuring a robust and secure framework</li>
        <li>Trustless interoperability with Ethereum and making diverse integrations smoother</li>
        <li>Significantly reduced transaction costs compared to Ethereum, making it economically advantageous for users</li>
      </ul>`,
      ja: `<p>Astar zkEVMは、Web3の社会実装を実現するグローバル企業向けの汎用的なソリューションです。特にゲームやエンターテインメントを含む、グローバルに展開している企業がWeb3市場に参入するためのゲートウェイとして位置づけられています。Ethereumレイヤー2ソリューションの実装はAstarにとって革新的なアップデートです。Astar zkEVMの主な特徴は以下の通りです：</p>
      <ul>
        <li>ZKテクノロジーにより、大量のトランザクションが発生してもスムーズな運用を保証する拡張性（スケーラビリティ）</li>
        <li>EVM等価性を備え、EthereumやPolygon等の既存のコントラクトをコードの変更なしに使用可能</li>
        <li>Ethereumからセキュリティメカニズムを継承し、堅牢で安全なフレームワークを実現</li>
        <li>Ethereumとの高い相互運用性により、様々な統合をよりスムーズに実現可能</li>
        <li>Ethereumと比較してガス代が大幅に削減され、ユーザーにとって経済的なUXを実現</li>
      </ul>`,
    },
  },
  {
    question: {
      en: "What is unique about Astar zkEVM?",
      ja: "Astar zkEVMのユニークな点は？",
    },
    answer: {
      en: `<p>Astar zkEVM has several key features:</p>
      <ul>
      <li>Bridging the Japanese market with global projects, enterprises, and developers</li>
      <li>Inherited security from Ethereum</li>
      <li>High EVM equivalency</li>
      <li>High scalability via zero-knowledge technology</li>
      <li>Trustless interoperability with Ethereum</li>
      <li>Significantly reduced transaction cost compared to Ethereum mainnet</li>
    </ul>`,
      ja: `<p>Astar zkEVMには複数のユニークな点があります：</p>
      <ul>
        <li>日本市場におけるグローバルプロジェクト、企業、開発者の架け橋</li>
        <li>Ethereumから継承した高いセキュリティ</li>
        <li>高いEVM等価性</li>
        <li>ZKテクノロジーによる高い拡張性</li>
        <li>Ethereumとのトラストレスな相互運用性</li>
        <li>Ethereumメインネットと比較して格段に安いガス代</li>
      </ul>`,
    },
  },
  {
    question: {
      en: "What is Astar zkEVM’s gas option?",
      ja: "Astar zkEVMのガス代にはどのトークンが使用されますか？",
    },
    answer: {
      en: "We will use ETH as the gas token on Astar zkEVM testnet.",
      ja: "Astar zkEVMのテストネットでは、ETHをガス代として使用します。",
    },
  },
  {
    question: {
      en: "What is the difference between Astar zkEVM and Ethereum mainnet?",
      ja: "Astar zkEVMとEthereumメインネットの違いは？",
    },
    answer: {
      en: `Astar zkEVM distinguishes itself from the Ethereum mainnet primarily by offering a much lower transaction cost (gas fees) and a greater transaction throughput. <br />
      This enhanced throughput, combined with reduced transaction costs, provides developers with the ideal environment to create applications demanding high transaction speeds without the burden of high costs.`,
      ja: `Astar zkEVMは、安いガス代（トランザクションコスト）やより高い処理能力を提供することで、Ethereumのメインネットとの差別化を図っています。これにより、開発者はアプリケーションをこれまで以上に理想的な環境で構築することができます。`,
    },
  },
  {
    question: {
      en: "What is the benefit for the Astar ecosystem?",
      ja: "Astarエコシステムにとって、どのような利益がありますか？",
    },
    answer: {
      en: `<p>Launching a layer 2 on Ethereum offers several advantages for the Astar ecosystem:</p>
      <ul>
        <li><strong>More Choices for Builders</strong>: With both Astar Substrate (layer 1) and Astar zkEVM (layer 2), developers have more places and tools to create/build with.</li>
        <li>Expanding to a bigger community!</li>
        <li>Astar can work more closely with Tier 1 projects on Ethereum. This means they can benefit from Astar's unique features, for example: Astar's dApp Staking.</li>
        <li>The Astar ecosystem will benefit from increased growth in transactions, active users, and liquidity. All are key factors for network success.</li>
        <li>More Japanese enterprises and real-world use cases are coming to the Astar ecosystem</li>
      </ul>`,
      ja: `<p>Ethereum上でレイヤー2を展開することは、Astarエコシステムにいくつかの利点をもたらします：</p>
      <ul>
        <li><strong>豊富な開発環境</strong>：Astar Substrate（レイヤー1）とAstar zkEVM（レイヤー2）があるため、開発者はより多くの環境とツールを使って開発・構築することができます。</li>
        <li>Astarがより大きなコミュニティへ拡大します。</li>
        <li>Ethereumのトッププロジェクトとの協力を深めることができます。これらのプロジェクトは、dAppステーキングをはじめとするAstarのさまざまな独自機能の恩恵を受けることができるようになり、また既存のAstarコミュニティはEthereumコミュニティとの信仰を深めることができます。</li>
        <li>ネットワークの成功にとって重要な要因であるトランザクション・アクティブユーザー・流動性の増加などの恩恵を受けることができます。</li>
        <li>より多くの日本企業などのユースケースがAstarエコシステムに参加します。</li>
      </ul>`,
    },
  },
  {
    question: {
      en: "What is the value of Astar zkEVM for ASTR token holders?",
      ja: "ASTRトークン所有者にとって、Astar zkEVMの価値は何ですか?",
    },
    answer: {
      en: `<p>Astar zkEVM uses the ASTR token in three new ways: as the gas fee for tooling, in the burning mechanism with the sequencer, and burning incentivized tokens to the network aggregator. This model will be evaluated on our testnet to maximize the value for ASTR holders. The final design is subject to change based on analysis from testing the model.</p>
      <img
      class="w-full"
      src="/images/techstack/astar-value.webp"
      alt="Astar zkEVM Value"
      data-not-lazy
      />`,
      ja: `<p>Astar zkEVMは、ASTRトークンを3つの新しい方法で使用します。ツールのガス料金として、シーケンサーによる書き込みメカニズムで、およびネットワークアグリゲーターへのインセンティブ付きトークンの書き込みです。このモデルは、ASTR保有者の価値を最大化するためにテストネットで評価されます。最終的な設計は、モデルのテストからの分析に基づいて変更される可能性があります。</p>
      <img
      class="w-full"
      src="/images/techstack/astar-value.webp"
      alt="Astar zkEVM Value"
      data-not-lazy
      />`,
    },
  },
  {
    question: {
      en: "How does gas pricing on Astar zkEVM compare to Ethereum?",
      ja: "Astar zkEVMのガス代は、Ethereumと比較してどうなりますか？",
    },
    answer: {
      en: "Though transactions on Astar zkEVM will be significantly cheaper than those on Ethereum mainnet, it is nonetheless going be more expensive compared to Astar Substrate on Polkadot. The reason is that as Astar zkEVM is a Layer 2 solution of Ethereum, the cost of the network is largely affected by the cost of Ethereum mainnet, which is significantly higher than Astar Substrate.",
      ja: "Astar zkEVMはEthereumメインネットに比べて格段に安くになる一方で、Polkadot上のAstar Substrateに比べると高くなる可能性があります。Astar zkEVMはEthereumのレイヤー2ソリューションであるため、Ethereum メインネットのガス代に大きく影響されます。",
    },
  },
];
</script>

<style lang="postcss">
.techstack-faqs__answer {
  @apply text-gray-300;
  p,
  ul {
    @apply my-6;
  }
  ul {
    @apply pl-4 list-disc;
  }
  ul li {
    @apply my-2;
  }
  a {
    @apply text-space-cyan hover:underline hover:text-space-cyan-lighter;
  }
}
</style>
