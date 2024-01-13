export interface Cover {
  src: string
  alt: string
  type: 'mobile' | 'tablet' | 'desktop'
}

interface Author {
  avatar: string
  username: string
}

interface Link {
  title: string
  url: string
}

export interface NftInfo {
  title: string
  date: string
  author: Author
  description: string
  links: Link[]
  tags: string[]
}

export interface Nft {
  image: string
  title: string
  avatar: string
  name: string
  price: number
  bid: number
}

export interface NftDetail {
  id: string
  covers: Cover[]
  info: NftInfo
  nfts: Nft[]
}
