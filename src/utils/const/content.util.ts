import {
  BasketballIcon,
  CameraIcon,
  DiscordIcon,
  GlobeIcon,
  InstagramIcon,
  MagicWandIcon,
  MusicNotesIcon,
  PainBrushIcon,
  PlanetIcon,
  SwatchesIcon,
  TwitterIcon,
  VideoIcon,
  YoutubeIcon
} from '@/components'
import { Artist, Nft, NftDetail } from '@/models'

export const stats = [
  {
    value: '240k+',
    title: 'Total Sale'
  },
  {
    value: '100k+',
    title: 'Auctions'
  },
  {
    value: '240k+',
    title: 'Artists'
  }
]

export const trendingCollections = [
  {
    image: '/assets/tc-img.png',
    imageTwo: '/assets/tc-img2.png',
    imageThree: '/assets/tc-img3.png',
    count: '1025+',
    title: 'DSGN Animals',
    artist: 'MrFox',
    avatar: '/assets/tc-avatar.png'
  },
  {
    image: '/assets/tc-img4.png',
    imageTwo: '/assets/tc-img5.png',
    imageThree: '/assets/tc-img6.png',
    count: '1025+',
    title: 'Magic Mushrooms',
    artist: 'Shroomie',
    avatar: '/assets/tc-avatar2.png'
  },
  {
    image: '/assets/tc-img7.png',
    imageTwo: '/assets/tc-img8.png',
    imageThree: '/assets/tc-img9.png',
    count: '1025+',
    title: 'Disco Machines',
    artist: 'BeKind2Robots',
    avatar: '/assets/tc-avatar3.png'
  }
]

export const topCreators = [
  {
    ranking: 1,
    avatar: '/assets/c-avatar.png',
    name: 'Keepitreal',
    price: 34.53
  },
  {
    ranking: 2,
    avatar: '/assets/c-avatar2.png',
    name: 'DigiLab',
    price: 12.31
  },
  {
    ranking: 3,
    avatar: '/assets/c-avatar3.png',
    name: 'GravityOne',
    price: 92.12
  },
  {
    ranking: 4,
    avatar: '/assets/c-avatar4.png',
    name: 'Juanie',
    price: 45.12
  },
  {
    ranking: 5,
    avatar: '/assets/c-avatar5.png',
    name: 'BlueWhale',
    price: 23.33
  },
  {
    ranking: 6,
    avatar: '/assets/c-avatar6.png',
    name: 'Mr Fox',
    price: 34.12
  },
  {
    ranking: 7,
    avatar: '/assets/c-avatar7.png',
    name: 'Shroomie',
    price: 63.12
  },
  {
    ranking: 8,
    avatar: '/assets/c-avatar8.png',
    name: 'Robotica',
    price: 12.11
  },
  {
    ranking: 9,
    avatar: '/assets/c-avatar9.png',
    name: 'RustyRobot',
    price: 19.21
  },
  {
    ranking: 10,
    avatar: '/assets/c-avatar10.png',
    name: 'Animakid',
    price: 20.12
  },
  {
    ranking: 11,
    avatar: '/assets/c-avatar11.png',
    name: 'Dotgu',
    price: 92.12
  },
  {
    ranking: 12,
    avatar: '/assets/c-avatar12.png',
    name: 'Ghiblier',
    price: 22.92
  }
]

export const categories = [
  {
    title: 'Art',
    icon: PainBrushIcon,
    image: '/assets/bc-category.png'
  },
  {
    title: 'Collectibles',
    icon: SwatchesIcon,
    image: '/assets/bc-category2.png'
  },
  {
    title: 'Music',
    icon: MusicNotesIcon,
    image: '/assets/bc-category3.png'
  },
  {
    title: 'Photography',
    icon: CameraIcon,
    image: '/assets/bc-category4.png'
  },
  {
    title: 'Video',
    icon: VideoIcon,
    image: '/assets/bc-category5.png'
  },
  {
    title: 'Utility',
    icon: MagicWandIcon,
    image: '/assets/bc-category6.png'
  },
  {
    title: 'Sport',
    icon: BasketballIcon,
    image: '/assets/bc-category7.png'
  },
  {
    title: 'Virtual Worlds',
    icon: PlanetIcon,
    image: '/assets/bc-category8.png'
  }
]

export const discoverMoreNfts: Nft[] = [
  {
    image: '/assets/dmn-img.png',
    title: 'Distant Galaxy',
    avatar: '/assets/c-avatar.png',
    name: 'MoonDancer',
    price: 1.63,
    bid: 0.33
  },
  {
    image: '/assets/dmn-img2.png',
    title: 'Life On Edena',
    avatar: '/assets/c-avatar2.png',
    name: 'NebulaKid',
    price: 2.31,
    bid: 0.21
  },
  {
    image: '/assets/dmn-img3.png',
    title: 'AstroFiction',
    avatar: '/assets/c-avatar3.png',
    name: 'Spaceone',
    price: 5.21,
    bid: 2.93
  }
]

export const works = [
  {
    image: '/assets/hiw-info.png',
    imageAlt: 'wallet card image',
    title: 'Setup Your Wallet',
    description:
      'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
  },
  {
    image: '/assets/hiw-info2.png',
    imageAlt: 'multimedia collection image',
    title: 'Create Collection',
    description: 'Upload your work and setup your collection. Add a description, social links and floor price.'
  },
  {
    image: '/assets/hiw-info3.png',
    imageAlt: 'online store collection image',
    title: 'Start Creating',
    description:
      'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
  }
]

export const socialIcons = [
  {
    title: 'Discord Icon',
    icon: DiscordIcon,
    url: 'https://discord.com'
  },
  {
    title: 'Youtube Icon',
    icon: YoutubeIcon,
    url: 'https://youtube.com'
  },
  {
    title: 'Instagram Icon',
    icon: InstagramIcon,
    url: 'https://instagram.com'
  },
  {
    title: 'Twitter Icon',
    icon: TwitterIcon,
    url: 'https://twitter.com'
  }
]

export const artists: Artist[] = [
  {
    id: '2',
    images: {
      covers: [
        {
          src: '/assets/ad-cover-mobile.png',
          alt: 'cover image',
          type: 'mobile'
        },
        {
          src: '/assets/ad-cover-tablet.png',
          alt: 'cover image',
          type: 'tablet'
        },
        {
          src: '/assets/ad-cover-desktop.png',
          alt: 'cover image',
          type: 'desktop'
        }
      ],
      avatar: '/assets/ad-avatar.png'
    },
    info: {
      name: 'MarioCarl',
      code: 's0klhn2...BA1d1',
      stats: [
        {
          value: '22k+',
          title: 'Volume'
        },
        {
          value: '400k+',
          title: 'NFTs Sold'
        },
        {
          value: '820+',
          title: 'Followers'
        }
      ],
      biography: {
        title: 'Bio',
        description: 'Animakid is an artist based in London who loves to create and sell NFTs.'
      },
      links: [
        {
          title: 'Website Icon',
          icon: GlobeIcon,
          url: 'https://website.com'
        },
        {
          title: 'Discord Icon',
          icon: DiscordIcon,
          url: 'https://discord.com'
        },
        {
          title: 'Youtube Icon',
          icon: YoutubeIcon,
          url: 'https://youtube.com'
        },
        {
          title: 'Twitter Icon',
          icon: TwitterIcon,
          url: 'https://twitter.com'
        },
        {
          title: 'Instagram Icon',
          icon: InstagramIcon,
          url: 'https://instagram.com'
        }
      ]
    },
    posts: [
      {
        image: '/assets/dmn-img.png',
        title: 'Distant Galaxy',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/dmn-img2.png',
        title: 'Life On Edena',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 2.31,
        bid: 0.21
      },
      {
        image: '/assets/dmn-img3.png',
        title: 'AstroFiction',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img.png',
        title: 'ColorfulDog 0524',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img2.png',
        title: 'Space Tales',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img3.png',
        title: 'Cherry Blossom Girl',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img4.png',
        title: 'Dancing Robots',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img5.png',
        title: 'IceCream Ape',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img6.png',
        title: 'CryptoCity',
        avatar: '/assets/hero-avatar.png',
        name: 'MarioCarl',
        price: 5.21,
        bid: 2.93
      }
    ]
  },
  {
    id: '1',
    images: {
      covers: [
        {
          src: '/assets/ad-cover-mobile.png',
          alt: 'cover image',
          type: 'mobile'
        },
        {
          src: '/assets/ad-cover-tablet.png',
          alt: 'cover image',
          type: 'tablet'
        },
        {
          src: '/assets/ad-cover-desktop.png',
          alt: 'cover image',
          type: 'desktop'
        }
      ],
      avatar: '/assets/ad-avatar.png'
    },
    info: {
      name: 'Animakid',
      code: '0xc0E3...B79C',
      stats: [
        {
          value: '250k+',
          title: 'Volume'
        },
        {
          value: '50k+',
          title: 'NFTs Sold'
        },
        {
          value: '3000+',
          title: 'Followers'
        }
      ],
      biography: {
        title: 'Bio',
        description: "The internet's friendliest designer kid."
      },
      links: [
        {
          title: 'Website Icon',
          icon: GlobeIcon,
          url: 'https://website.com'
        },
        {
          title: 'Discord Icon',
          icon: DiscordIcon,
          url: 'https://discord.com'
        },
        {
          title: 'Youtube Icon',
          icon: YoutubeIcon,
          url: 'https://youtube.com'
        },
        {
          title: 'Twitter Icon',
          icon: TwitterIcon,
          url: 'https://twitter.com'
        },
        {
          title: 'Instagram Icon',
          icon: InstagramIcon,
          url: 'https://instagram.com'
        }
      ]
    },
    posts: [
      {
        image: '/assets/dmn-img.png',
        title: 'Distant Galaxy',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/dmn-img2.png',
        title: 'Life On Edena',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 2.31,
        bid: 0.21
      },
      {
        image: '/assets/dmn-img3.png',
        title: 'AstroFiction',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img.png',
        title: 'ColorfulDog 0524',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img2.png',
        title: 'Space Tales',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img3.png',
        title: 'Cherry Blossom Girl',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img4.png',
        title: 'Dancing Robots',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img5.png',
        title: 'IceCream Ape',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      },
      {
        image: '/assets/nc-img6.png',
        title: 'CryptoCity',
        avatar: '/assets/hero-avatar.png',
        name: 'Animakid',
        price: 5.21,
        bid: 2.93
      }
    ]
  }
]

export const nfts: NftDetail[] = [
  {
    id: '1',
    covers: [
      {
        src: '/assets/nft-cover-mobile.png',
        alt: 'nft cover',
        type: 'mobile'
      },
      {
        src: '/assets/nft-cover-tablet.png',
        alt: 'nft cover',
        type: 'tablet'
      },
      {
        src: '/assets/nft-cover-desktop.png',
        alt: 'nft cover',
        type: 'desktop'
      }
    ],
    info: {
      title: 'The Orbitians',
      date: 'Minted on Sep 30, 2022',
      author: {
        avatar: '/assets/hero-avatar.png',
        username: 'Dish Studio'
      },
      description:
        "The Orbitians\nis a collection of 10,000 unique NFTs on the Ethereum blockchain,\n\nThere are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.\n\nThey live in a metal space machines, high up in the sky and only have one foot on Earth.\nThese Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations.\nThe invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.",
      links: [
        { title: 'View on Etherscan', url: 'https://google.com' },
        { title: 'View Original', url: 'https://google.com' }
      ],
      tags: ['Animation', 'Illustration', 'Moon', 'Moon']
    },
    nfts: [
      {
        image: '/assets/nft-img7.png',
        title: 'Foxy Life',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/nft-img.png',
        title: 'Cat from future',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/tc-img.png',
        title: 'Psycho Dog',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/nft-img2.png',
        title: 'Designer Bear',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/nft-img3.png',
        title: 'Dancing Robot 0375',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/nft-img4.png',
        title: 'Dancing Robot 0356',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/nft-img5.png',
        title: 'Dancing Robot 0321',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/tc-img7.png',
        title: 'Dancing Robot 0512',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      },
      {
        image: '/assets/nft-img6.png',
        title: 'Dancing Robot 0024',
        avatar: '/assets/hero-avatar.png',
        name: 'Dish Studio',
        price: 1.63,
        bid: 0.33
      }
    ]
  }
]

export const browseMarketplace = {
  nfts: [
    {
      image: '/assets/nft-img7.png',
      title: 'Foxy Life',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/nft-img.png',
      title: 'Cat from future',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/tc-img.png',
      title: 'Psycho Dog',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/nft-img2.png',
      title: 'Designer Bear',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/nc-img2.png',
      title: 'Colorful Dog 0345',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/nft-img4.png',
      title: 'Dancing Robot 0356',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/nc-img3.png',
      title: 'Cherry Blossom Girl 035',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/dmn-img.png',
      title: 'Space Travel',
      avatar: '/assets/hero-avatar.png',
      name: 'Dish Studio',
      price: 1.63,
      bid: 0.33
    },
    {
      image: '/assets/nc-img5.png',
      title: 'Dancing Robot 0024',
      avatar: '/assets/hero-avatar.png',
      name: 'IceCream Ape 0324',
      price: 1.63,
      bid: 0.33
    }
  ]
}
