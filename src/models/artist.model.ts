interface Cover {
  src: string
  alt: string
  type: 'mobile' | 'tablet' | 'desktop'
}

export interface Images {
  covers: Cover[]
  avatar: string
}

export interface Stats {
  value: string
  title: string
}

interface Biography {
  title: string
  description: string
}

interface Link {
  title: string
  icon: () => JSX.Element
  url: string
}

export interface ArtistInfo {
  name: string
  code: string
  stats: Stats[]
  biography: Biography
  links: Link[]
}

export interface Artist {
  id: string
  images: Images
  info: ArtistInfo
}
