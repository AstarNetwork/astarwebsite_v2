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
      ja: "Astar zkEVMとは何ですか？ Astar zkEVMの主な特徴は何ですか？",
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
      ja: `<p>Astar zkEVMは、グローバル企業にとって多目的なソリューションとして、日本だけでなく世界的な規模でブロックチェーン技術の採用を加速することを目的としています。特に、国際的なゲームやエンターテインメント企業が利益の高い日本市場に参入するためのゲートウェイとして位置付けられています。Astarのイノベーションの中心には、Ethereum Layer-2 Scalingソリューションの採用があります。</p>
      <p>Astar zkEVMの主な特徴は以下の通りです：</p>
      <ul>
        <li>ゼロ知識技術によるスケーラビリティにより、高い取引量でもスムーズな操作を保証</li>
        <li>EVM相当性</li>
        <li>Ethereumからのセキュリティメカニズムの派生により、堅牢で安全なフレームワークが実現</li>
        <li>Ethereumとの信頼性のある相互運用性を確保し、多様な統合をスムーズに行う</li>
        <li>Ethereumに比べて取引コストを大幅に削減し、ユーザーにとって経済的に有利</li>
      </ul>`,
    },
  },
  {
    question: {
      en: "What is unique about Astar zkEVM?",
      ja: "Astar zkEVMのユニークな点は何ですか？",
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
      ja: `<p>Astar zkEVMにはいくつかの主要な特徴があります：</p>
      <ul>
        <li>日本の市場とグローバルなプロジェクト、企業、開発者との連携</li>
        <li>Ethereumから受け継いだセキュリティ</li>
        <li>高いEVM相当性</li>
        <li>ゼロ知識テクノロジーを通じた高いスケーラビリティ</li>
        <li>Ethereumとの信頼性のある相互運用性</li>
        <li>Ethereumメインネットと比較して大幅に低いトランザクションコスト</li>
      </ul>`,
    },
  },
  {
    question: {
      en: "What is Astar zkEVM’s gas option?",
      ja: "Astar zkEVMのガスオプションとは何ですか？",
    },
    answer: {
      en: "sETH is the gas token option on Astar zkEVM testnet.",
      ja: "sETHは、Astar zkEVMテストネット上のガストークンオプションです。",
    },
  },
  {
    question: {
      en: "What is the difference between Astar zkEVM and Ethereum mainnet?",
      ja: "Astar zkEVMとEthereumメインネットの違いは何ですか？",
    },
    answer: {
      en: `Astar zkEVM distinguishes itself from the Ethereum mainnet primarily by offering a much lower transaction cost (gas fees) and a greater transaction throughput. <br />
      This enhanced throughput, combined with reduced transaction costs, provides developers with the ideal environment to create applications demanding high transaction speeds without the burden of high costs.`,
      ja: `Astar zkEVMは、主にトランザクションコスト（ガス料金）がはるかに低く、トランザクションスループットが大きいことによって、Ethereumメインネットとは異なります。<br />この向上したスループットと低いトランザクションコストを組み合わせることで、高いトランザクション速度を必要とするアプリケーションを開発する開発者にとって、高いコストの負担がない理想的な環境を提供します。`,
    },
  },
  {
    question: {
      en: "What is the benefit for the Astar ecosystem?",
      ja: "Astarエコシステムにとっての利益は何ですか？",
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
      ja: `<p>イーサリアム上でレイヤー2を展開することは、Astarエコシステムにいくつかの利点をもたらします：</p>
      <ul>
        <li><strong>ビルダーにとってより多くの選択肢</strong>：Astar Substrate（レイヤー1）とAstar zkEVM（レイヤー2）があるため、開発者はより多くの場所とツールを使って作成/構築することができます。</li>
        <li>より大きなコミュニティへの拡大！</li>
        <li>Astarは、イーサリアムのTier 1プロジェクトとより密接に協力することができます。これは、Astarの独自の機能、たとえばAstarのdAppステーキングから利益を得ることができることを意味します。</li>
        <li>Astarエコシステムは、取引の増加、アクティブユーザーの増加、流動性の増加から利益を得ることができます。すべてがネットワークの成功にとって重要な要因です。</li>
        <li>より多くの日本の企業や実世界のユースケースがAstarエコシステムに参加する予定です。</li>
      </ul>`,
    },
  },
  {
    question: {
      en: "How does gas pricing on Astar zkEVM compare to Ethereum and Polygon?",
      ja: "Astar zkEVMのガス価格は、EthereumやPolygonと比べてどうですか？",
    },
    answer: {
      en: "Though transactions on Astar zkEVM will be significantly cheaper than those on Ethereum mainnet, it is nonetheless going be more expensive compared to Astar Substrate on Polkadot. The reason is that as Astar zkEVM is a Layer 2 solution of Ethereum, the cost of the network is largely affected by the cost of Ethereum mainnet, which is significantly higher than Astar Substrate.",
      ja: "Astar zkEVM上での取引は、Ethereumメインネット上の取引よりも大幅に安くなりますが、Astar Substrate on Polkadotと比較すると、それでもより高価になる可能性があります。その理由は、Astar zkEVMがEthereumのLayer 2ソリューションであるため、ネットワークのコストがEthereumメインネットのコストに大きく影響を受けるためです。Ethereumメインネットのコストは、Astar Substrateよりもはるかに高いためです。",
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
