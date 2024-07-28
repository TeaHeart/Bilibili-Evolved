import {
  OptionsOfMetadata,
  defineComponentMetadata,
  defineOptionsMetadata,
} from '@/components/define'
import { ComponentEntryContext } from '@/components/types'

const options = defineOptionsMetadata({
  changeDelay: {
    defaultValue: 2000,
    displayName: '变更延迟 (ms)',
  },
  maxHeight: {
    defaultValue: 600,
    displayName: '最大高度 (px)',
  },
})

type VideoListOptions = OptionsOfMetadata<typeof options>

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const entry = async (context: ComponentEntryContext<VideoListOptions>) => {
  const { changeDelay } = context.settings.options
  const maxHeight = `${context.settings.options.maxHeight}px`

  // console.log('视频列表样式', JSON.stringify(context.settings.options))
  await sleep(changeDelay)

  // 为什么一个视频列表还有好几种 🙂

  // div 式
  {
    const list = dq('.video-sections-content-list') as HTMLMetaElement
    if (list) {
      const items = dqa('.video-episode-card__info-title') as HTMLMetaElement[]
      items.forEach(e => {
        e.style.width = '100%'
      })
      list.style.maxHeight = maxHeight
      list.style.height = '100%'
    }
  }

  // ul li 式
  {
    const list = dq('.cur-list') as HTMLMetaElement
    if (list) {
      list.style.maxHeight = maxHeight
      list.style.height = '100%'
    }
  }
}

export const component = defineComponentMetadata({
  author: {
    name: 'TeaHeart',
    link: 'https://github.com/TeaHeart',
  },
  name: 'videoListStyle',
  displayName: '视频列表样式',
  description: {
    'zh-CN': '视频列表样式, 可以设置显示高度',
  },
  options,
  tags: [componentsTags.style, componentsTags.video],
  entry,
  reload: () => {
    location.reload()
  },
  unload: () => {
    location.reload()
  },
})
