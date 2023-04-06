<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 text-center">
    <h2 class="title text-center mb-4 sm:mb-8">
      <span>Registered Members</span>
    </h2>
    <p class="mb-12 max-w-3xl mx-auto text-sm sm:text-base">
      Companies and communities that wish to join our organization and have been
      approved by the participating companies in the organization.
    </p>

    <div v-for="member in members" class="mb-20 sm:mb-28">
      <h3 class="font-bold text-xl sm:text-3xl text-gray-900 mb-8 sm:mb-12">
        {{ member.category }}
      </h3>
      <div
        class="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-8 lg:gap-y-20 sm:grid-cols-5"
      >
        <div
          v-for="item in member.logos"
          class="flex items-center justify-center"
        >
          <NuxtLink :to="item.href" target="_blank">
            <img
              class="h-16 sm:h-20 lg:sm:h-24 w-44 lg:w-48 object-contain"
              :src="useAsset('japan/members/' + item.image)"
              :alt="item.name"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const members = [
  {
    category: "Companies",
    logos: [
      {
        name: "DENTSU INC.",
        image: "dentsu.png",
        href: "https://www.dentsu.co.jp/",
      },
      {
        name: "HAKUHODO Inc.",
        image: "hakuhodo.png",
        href: "https://www.hakuhodo.co.jp/",
      },
      {
        name: "Microsoft",
        image: "microsoft.png",
        href: "https://www.microsoft.com/",
      },
      {
        name: "Amazon Web Services (AWS)",
        image: "aws.png",
        href: "https://aws.amazon.com/",
      },
      {
        name: "Mitsubishi UFJ Trust and Banking",
        image: "mufg.png",
        href: "https://www.tr.mufg.jp/",
      },
      {
        name: "SMBC Nikko Securities Inc.",
        image: "smbcnikko.png",
        href: "https://www.smbcnikko.co.jp/",
      },
      {
        name: "SoftBank",
        image: "softbank.png",
        href: "https://www.softbank.jp/",
      },
      {
       name: "SB PaymentService",
       image: "SB PaymentService.jpg",
       href: "http://www.sbpayment.jp/",
      },
      {
        name: "Accenture",
        image: "accenture.png",
        href: "https://www.accenture.com/",
      },
      {
        name: "PwC",
        image: "pwc.png",
        href: "https://www.pwc.com/",
      },
      {
        name: "ABeam",
        image: "ABeam.png",
        href: "https://www.abeam.com/jp/ja",
      },
      {
        name: "Mori Building Co., Ltd.",
        image: "mori.png",
        href: "https://www.mori.co.jp/",
      },
      {
        name: "TIS Inc.",
        image: "tis.png",
        href: "https://www.tis.co.jp/",
      },
      {
        name: "Nudge Inc.",
        image: "nudge.png",
        href: "https://nudge.works/",
      },
      {
        name: "HARTi Inc.",
        image: "harti.png",
        href: "https://harti.tokyo/",
      },
      {
        name: "Sun Asterisk Inc.",
        image: "sun.png",
        href: "https://sun-asterisk.com/",
      },
      {
        name: "Fujitsu Inc.",
        image: "Fujitsu.png",
        href: "https://www.fujitsu.com/jp/",
      },
      {
        name: "NISSAY Inc.",
        image: "NISSAY.jpg",
        href: "https://www.nissay.co.jp/kaisha/nipponlifex/",
      },
      {
        name: "TOPPAN Inc.",
        image: "TOPPAN.jpeg",
        href: "https://www.toppan.co.jp/",
      },
      {
        name: "Tokai-Tokyo-fh.",
        image: "Tokai-Tokyo.png",
        href: "https://www.tokaitokyo-fh.jp/",
      },
      {
        name: "secom Inc.",
        image: "SECOM.png",
        href: "https://www.secomtrust.net/",
      },
      {
        name: "TMJ",
        image: "TMJ.png",
        href: "https://www.tmj.jp/",
      },
      {
        name: "JMACS",
        image: "JMACS.png",
        href: "https://www.jmacs-j.co.jp",
      },
      {
        name: "SOLIZE",
        image: "SOLIZE.png",
        href: "https://www.solize.com/",
      },
      {
       name: "Deloitte Tohmatsu Consulting LLC",
       image: "Deloitte.jpg",
       href: "https://www2.deloitte.com/jp/ja.html",
      },
      {
       name: "vector",
       image: "vector.png",
       href: "https://vectorinc.co.jp/",
      },
      {
        name: "F Ventures",
        image: "f-ventures.png",
        href: "https://f-ventures.vc/",
      },
      {
        name: "GLOBIS CAPITAL PARTNERS",
        image: "globiscapital.png",
        href: "https://www.globiscapital.co.jp/",
      },
      {
        name: "ANOBAKA",
        image: "anobaka.png",
        href: "https://anobaka.jp/",
      },
      {
        name: "ABC DREAM VENTURES, Inc.",
        image: "adventures.png",
        href: "http://adventures.co.jp/",
      },
      {
        name: "So & Sato",
        image: "innovationlaw.png",
        href: "https://innovationlaw.jp/",
      },
      {
       name: "ZeLo",
       image: "ZeLo.jpg",
       href: "https://zelojapan.com/",
      },
      {
        name: "AMT",
        image: "AMT.png",
        href: "https://www.amt-law.com/",
      },
      {
        name: "double jump.tokyo",
        image: "doublejump.png",
        href: "https://www.doublejump.tokyo/",
      },
      {
        name: "SUSHI TOP MARKETING 株式会社",
        image: "sushitopmarketing.png",
        href: "https://www.sushitopmarketing.com/",
      },
      {
        name: "tofuNFT.com",
        image: "tofunft.png",
        href: "https://tofunft.com/astar",
      },
      {
        name: "AstarGames",
        image: "AstarGames.png",
        href: "https://cryptogames.co.jp/astargames",
      },
      {
        name: "JPYC inc.",
        image: "jpyc.png",
        href: "https://jpyc.co.jp/",
      },
      {
        name: "BOBG",
        image: "bobg.png",
        href: "https://www.bobg.xyz/",
      },
      {
        name: "Neweconomy",
        image: "neweconomy.png",
        href: "https://www.neweconomy.jp/",
      },
      {
        name: "TEMPURA",
        image: "Tempuradao.png",
        href: "https://tempuradao.xyz/",
      },
      {
        name: "UHS Corp.",
        image: "uhs.png",
        href: "https://uhs.company/",
      },
      {
        name: "belmo",
        image: "belmo.png",
        href: "http://www.belmo.com/",
      },
      {
        name: "ZENKEI corporation",
        image: "zenkei.png",
        href: "https://www.zenkei.com/",
      },
      {
        name: "Tech.st",
        image: "tech-st.png",
        href: "https://www.tech-st.com/",
      },
      {
        name: "PENTA",
        image: "penta.png",
        href: "",
      },
      {
        name: "Woollet",
        image: "woollet.png",
        href: "https://woollet.network/",
      },
      {
        name: "CryptoGames Inc.",
        image: "cryptogames.png",
        href: "https://cryptogames.co.jp/",
      },
      {
        name: "Asapika inc.",
        image: "asapika.png",
        href: "https://asapika.tech/",
      },
      {
        name: "Mountain View",
        image: "mountain-view.png",
        href: "https://www.mountain-view.biz/",
      },
      {
        name: "HEAL-Ⅲ",
        image: "HEAL-III.png",
        href: "https://heal-3.net/",
      },
      {
        name: "memoria",
        image: "memoria.png",
        href: "https://memoria-inc.jp/",
      },
      {
        name: "MATCHA NFT",
        image: "matcha.png",
        href: "https://matcha-nft.com/",
      },
      {
        name: "TARIFFLABO",
        image: "tarifflabo.png",
        href: "https://lp.tarifflabo.com/",
      },
      {
        name: "DMTP",
        image: "DMTP.png",
        href: "https://dmtp.tech/",
      },
      {
        name: "Synamon Inc.",
        image: "synamon.png",
        href: "https://www.synamon.jp/",
      },
      {
        name: "ZATSUDAN",
        image: "zatsudan.png",
        href: "https://zatsudan.com/",
      },
      {
        name: "Hotto Link Inc.",
        image: "hottolink.png",
        href: "https://www.hottolink.co.jp/",
      },
      {
        name: "PLAYTHINK,Inc.",
        image: "playthink.png",
        href: "https://playthink.co.jp/",
      },
      {
        name: "PHARUMO,Inc.",
        image: "pharumo.png",
        href: "https://pharumo.jp/",
      },
      {
        name: "NFTimes",
        image: "nf-times.png",
        href: "https://nf-times.com/",
      },
      {
       name: "LATEGRA",
       image: "lategra.jpg",
       href: "https://lategra.co.jp/",
      },
      {
        name: "58",
        image: "58web3.png",
        href: "https://58web3.io/",
      },
      {
        name: "Nextage",
        image: "nextage.png",
        href: "https://i-nextage.co.jp/",
      },
      {
        name: "AGI Creative Labo",
        image: "AGI Creative Labo (1).jpg",
        href: "https://agi-cl.com/",
      },
      {
        name: "Ginco Inc.",
        image: "ginco.png",
        href: "https://www.ginco.co.jp/",
      },
      {
        name: "PIXEL Inc.",
        image: "pixel.png",
        href: "https://pixel-inc.jp/",
      },
      {
        name: "giftee, Inc.",
        image: "giftee.png",
        href: "https://giftee.co.jp/",
      },
      {
        name: "Cloud Ace",
        image: "cloud-ace.png",
        href: "https://cloud-ace.jp/",
      },
      {
        name: "Shinto Tsushin Co., Ltd.",
        image: "shinto-tsushin.png",
        href: "https://www.shinto-tsushin.co.jp/",
      },
      {
        name: "LLC Ango-ya",
        image: "ango-ya.png",
        href: "https://www.ango-ya.org/",
      },
      {
        name: "enish,inc.",
        image: "enish.png",
        href: "https://www.enish.com/",
      },
      {
        name: "V-cube,Inc.",
        image: "vcube.png",
        href: "https://www.vcube.com/",
      },
      {
        name: "Synergy Research Corporation",
        image: "synergy.png",
        href: "https://synergy-res.co.jp/",
      },
      {
        name: "Utoniq,Inc.",
        image: "utoniq.png",
        href: "https://about.utoniq.com/",
      },
      {
        name: "Slash Fintech",
        image: "slash.png",
        href: "https://slash.fi/",
      },
      {
        name: "D Inc.",
        image: "Dinc.png",
        href: "https://decentralizedpro.io/",
      },
      {
        name: "Crypto Lab Inc.",
        image: "CryptoLab.png",
        href: "https://cryptolab.jp/",
      },
      {
        name: "Fukuripa Inc.",
        image: "fukuripa.png",
        href: "https://fukuoka-leapup.jp/",
      },
      {
        name: "Magpy",
        image: "Magpy.png",
        href: "https://www.magpy.xyz/",
      },
      {
        name: "Pacific Meta Inc.",
        image: "Pacific-Meta.png",
        href: "https://pacific-meta.co.jp/",
      },
      {
        name: "ArtiLamps Inc.",
        image: "ArtiLamps.png",
        href: "https://www.artilamps.com",
      },
      {
        name: "ShortShort",
        image: "SHORTSHORT.jpg",
        href: "https://shortshorts.org/",
      },
      {
        name: "Parallax Network",
        image: "Parallax.png",
        href: "https://parallaxnetwork.io/",
      },
      {
        name: "Straym Inc.",
        image: "STRAYM.png",
        href: "https://straym.co.jp",
      },
      {
        name: "z game studio Inc.",
        image: "Z-Game-Studio.png",
        href: "https://www.z-gamestudio.com/",
      },
      {
        name: "OMG LCC.",
        image: "OMG.png",
        href: "http://omg-llc.net/",
      },
      {
        name: "NFT Studio24 Inc.",
        image: "NFTStudio24.png",
        href: "https://nftstudio24.com/",
      },
      {
        name: "MAGHUB",
        image: "maghub.png",
        href: "https://www.mugenart.io/",
      },
      {
        name: "Paima Studios",
        image: "paima.png",
        href: "http://paimastudios.com/",
      },
      {
        name: "POLYGLOTS",
        image: "POLYGLOTS.png",
        href: "https://www.polyglots.net/",
      },
      {
        name: "Sanka",
        image: "Sanka.png",
        href: "https://sanka.io/",
      },
      {
        name: "XYLOCOPA",
        image: "XYLOCOPA.png",
        href: "https://xylocopa.xyz",
      },
      {
        name: "Sense It Smart",
        image: "Sense It Smart.jpg",
        href: "https://www.senseitsmart.com",
      },
      {
        name: "goeswell",
        image: "goezwell.png",
        href: "https://goeswell.co.jp/",
      },
      {
        name: "COSMIZE",
        image: "COSMIZE.png",
        href: "https://app.cosmize.io/",
      },
       {
        name: "KiHeiTai",
        image: "KiHeiTai.png",
        href: "https://kiheitai.co.jp/ja/homepage/",
      },
      {
       name: "ORPHE",
       image: "orphe.png",
       href: "https://orphe.io/",
      },
      {
       name: "EXGroundswell",
       image: "EXGroundswell.png",
       href: "https://www.exgroundswell.com/",
      },
      {
       name: "UPBOND",
       image: "UPBOND.png",
       href: "https://www.upbond.io/",
      },
      {
       name: "HANNON",
       image: "hann.jpeg",
       href: "https://funandnatural.com/smp/product/list/58",
      },
      {
       name: "GEOMETRON",
       image: "geometron.png",
       href: "https://www.geometron.jp/",
      },
      {
       name: "kyotoma",
       image: "kyotoma.png",
       href: "http://www.kyotoma.co.jp/",
      },
    ],
  },
  {
    category: "Government",
    logos: [
      {
        name: "Fukuoka City",
        image: "fukuoka.png",
        href: "https://www.city.fukuoka.lg.jp/keizai/r-support/sougyou/index.html",
      },
      {
        name: "Sendai City",
        image: "sendai.png",
        href: "https://www.city.sendai.jp/",
      },
      {
        name: "Shibuya",
        image: "Shibuya.png",
        href: "https://www.city.shibuya.tokyo.jp/",
      },
    ],
  },
  {
    category: "Communities",
    logos: [
      {
        name: "SoudanNFT",
        image: "soudan.png",
        href: "https://soudan-nft.xyz/",
      },
      {
        name: "Flower Lolita NFT",
        image: "flowerlolita.png",
        href: "https://www.flowerlolita.io/",
      },
      {
        name: "Astar Sign Witch",
        image: "sign-witch.png",
        href: "https://sign-witch.vercel.app/",
      },
      {
        name: "Rodos Alchemy Star",
        image: "rodos.png",
        href: "http://rodos.tech/",
      },
    ],
  },
];
</script>
