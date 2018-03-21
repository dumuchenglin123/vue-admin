const getters = {
  sideBarShow: state => state.app.sideBarShow,
  tabViews: state => {
    console.log('getters', state.tabsView.visitedViews)
    if (!state.tabsView.visitedViews.length) {
      state.tabsView.visitedViews.push({
        path: '/admin',
        title: '首页'
      })
    }
    console.log('getters', 2222,state.tabsView.visitedViews)
    return state.tabsView.visitedViews;
  }
}

export default getters
