import { watch, nextTick } from 'vue'
import axios from 'axios'
import { setTitle } from '@/utils/setTitle'
import pkg from '../../package.json'
const { version } = pkg

export function usePageData(category, onData) {
  function load(cat) {
    axios
      .get(`/data/${cat.replace('.html', '')}.json?v=${version}`)
      .then((r) => {
        onData(r.data)
        setTitle(r.data.title)
      })
      .finally(() => {
        nextTick(() => document.dispatchEvent(new Event('x-app-rendered')))
      })
  }

  watch(category, load)
  load(category.value)
}
