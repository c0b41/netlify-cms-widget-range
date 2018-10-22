import Control from './control'
import Preview from './preview'

if (typeof window !== 'undefined') {
  window.netlifyCmsRangeControl = Control
  window.netlifyCmsRangePreview = Preview
}

export { Control as netlifyCmsRangeControl, Preview as netlifyCmsRangePreview }
