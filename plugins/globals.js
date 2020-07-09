import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import DateFilter from '@/common/filters/date.filter'

Vue.use(Element, { locale })

Vue.filter('date', DateFilter)
