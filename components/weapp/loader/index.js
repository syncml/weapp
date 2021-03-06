import WeAppComponent from '../weappComponent';

class Loader extends WeAppComponent {
  /**
   * 默认参数
   * @param {String} id 组件id
   * @param {String} iconType 微信icon组件的type类型
   * @param {String} status 组件的状态
   * @param {String} emptyTxt `暂无数据`状态显示的文案
   * @param {String} loadingTxt `加载中`状态显示的文案
   * @param {String} noMoreTxt `没有更多数据了`状态显示的文案
   */
  static defaultOptions = {
    id: 'WeApp_Loader',
    iconType: 'search',
    status: 'loading',// loading, nomore, empty
    emptyTxt: '暂无数据',
    loadingTxt: '正在加载',
    noMoreTxt: '没有更多数据了'
  }
  constructor(options) {
    super(options, Loader);
  }
  /**
   * 设置组件状态
   * @param {String} status 状态参数，可选loading、nomore、empty
   */
  setStatus(status) {
    let componentData = this._componentData_(this);
    
    componentData.status = status || '';

    this._componentData_(this, componentData);
  }
}

module.exports = Loader;