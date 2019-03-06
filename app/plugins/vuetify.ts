import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

const zh = {
  dataIterator: {
    rowsPerPageText: '每页记录数：',
    rowsPerPageAll: '全部',
    pageText: '{0}-{1} 共 {2} 条',
    noResultsText: '没有找到匹配记录',
    nextPage: '下一页',
    prevPage: '上一页'
  },
  dataTable: {
    rowsPerPageText: '每页行数：'
  },
  noDataText: '无可用数据'
};

const theme = {
  primary: '#00bcd4',
  secondary: '#e57373',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#ff9800',
  info: '#00bcd4',
  success: '#4caf50'
};

Vue.use(Vuetify, {
  lang: { locales: { zh }, current: 'zh' },
  icons: { expand: 'arrow_drop_down' },
  theme
});
