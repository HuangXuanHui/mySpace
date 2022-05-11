<template>
    <section data-v-4bc385c4 class="el-container container-wrapper">
      <aside data-v-4bc385c4 class="el-aside aside" style="width: 260px;">
        <div data-v-4bc385c4 class="profile">
          <svg data-v-4bc385c4 aria-hidden="true" class="icon avatar">
            <use xlink:href="#icon-avatar"></use>
          </svg>
          <div data-v-4bc385c4 class="profile-operate"><span data-v-4bc385c4="" class="real-name">黄轩辉</span>
            <svg data-v-4bc385c4 aria-hidden="true" class="icon logout-icon">
              <use xlink:href="#icon-logout"></use>
            </svg>
          </div>
        </div>
        <ul data-v-4bc385c4 role="menubar" class="menu el-menu">
          <div data-v-a5c4d182 data-v-4bc385c4="" class="menu-wrapper">
            <li data-v-a5c4d182 role="menuitem" tabindex="-1" class="el-menu-item is-active"
                style="padding-left: 20px;">
              <svg data-v-a5c4d182 aria-hidden="true" class="icon menu-icon">
                <use xlink:href="#icon-private-repo-menu"></use>
              </svg>
              <span data-v-a5c4d182>个人空间</span></li>
          </div>
          <div data-v-a5c4d182 data-v-4bc385c4="" class="menu-wrapper">
            <li data-v-a5c4d182 role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
              <svg data-v-a5c4d182 aria-hidden="true" class="icon menu-icon">
                <use xlink:href="#icon-cooperative-repo-menu"></use>
              </svg>
              <span data-v-a5c4d182>部门空间</span></li>
          </div>
          <div data-v-a5c4d182 data-v-4bc385c4="" class="menu-wrapper">
            <li data-v-a5c4d182 role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
              <svg data-v-a5c4d182 aria-hidden="true" class="icon menu-icon">
                <use xlink:href="#icon-public-repo-menu"></use>
              </svg>
              <span data-v-a5c4d182>公共空间</span></li>
          </div>
          <div data-v-a5c4d182 data-v-4bc385c4="" class="menu-wrapper">
            <li data-v-a5c4d182 role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
              <svg data-v-a5c4d182 aria-hidden="true" class="icon menu-icon">
                <use xlink:href="#icon-share-menu"></use>
              </svg>
              <span data-v-a5c4d182>文件共享</span></li>
          </div>
          <div data-v-a5c4d182 data-v-4bc385c4="" class="menu-wrapper">
            <li data-v-a5c4d182 role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
              <svg data-v-a5c4d182 aria-hidden="true" class="icon menu-icon">
                <use xlink:href="#icon-org-menu"></use>
              </svg>
              <span data-v-a5c4d182>组织架构</span></li>
          </div>
          <div data-v-a5c4d182 data-v-4bc385c4="" class="menu-wrapper">
            <li data-v-a5c4d182 role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 20px;">
              <svg data-v-a5c4d182 aria-hidden="true" class="icon menu-icon">
                <use xlink:href="#icon-recycle-menu"></use>
              </svg>
              <span data-v-a5c4d182>回收站</span></li>
          </div>
        </ul>
        <div data-v-4bc385c4 class="icon-btn-container">
          <svg data-v-4bc385c4 aria-hidden="true" class="icon download-apk-icon">
            <use xlink:href="#icon-download-apk"></use>
          </svg>
          <div data-v-4bc385c4 class="el-badge upload-badge">
            <svg data-v-4bc385c4 aria-hidden="true" class="icon upload-list-icon">
              <use xlink:href="#icon-upload-list"></use>
            </svg>
            <sup class="el-badge__content el-badge__content--undefined is-fixed">0</sup></div>
          <svg data-v-4bc385c4 aria-hidden="true" class="icon user-manual-icon">
            <use xlink:href="#icon-user-manual"></use>
          </svg>
        </div>
      </aside
      <main data-v-4bc385c4 class="el-main main">
        <div data-v-5ea21fcc data-v-4bc385c4="" class="repo-container">
          <div data-v-5ea21fcc class="operation-header">
            <div data-v-5ea21fcc class="btn-left"><span data-v-5ea21fcc="" class="header-repo-name">个人空间</span></div>
            <div data-v-5ea21fcc>
              <button data-v-5ea21fcc type="button" class="el-button el-button--primary el-button--medium"><!---->
                <!----><span>新建空间</span></button>
              <button data-v-5ea21fcc disabled="disabled" type="button"
                      class="el-button el-button--danger el-button--medium is-disabled"><!----><!----><span>批量删除</span>
              </button>
            </div>
          </div>
          <div data-v-788f49fb data-v-5ea21fcc="" class="repo-table flex-table">
            <div data-v-788f49fb
                 class="el-table table-custom el-table--fit el-table--striped el-table--enable-row-hover el-table--medium undefined header-highlight"
                 element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading">
              <div class="hidden-columns"><!---->
                <div data-v-788f49fb></div>
                <div data-v-5ea21fcc></div>
                <div data-v-5ea21fcc></div> <!---->
                <div data-v-788f49fb></div>
                <div data-v-5ea21fcc></div>
              </div>
              <div class="el-table__header-wrapper">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 2300px;">
                  <colgroup>
                    <col name="el-table_1_column_1" width="50">
                    <col name="el-table_1_column_2" width="1321">
                    <col name="el-table_1_column_3" width="160">
                    <col name="el-table_1_column_4" width="609">
                    <col name="el-table_1_column_5" width="160">
                    <col name="gutter" width="0">
                  </colgroup>
                  <thead class="has-gutter">
                  <tr class="">
                    <th colspan="1" rowspan="1"
                        class="el-table_1_column_1  is-center el-table-column--selection  is-leaf table-custom-header-cell el-table__cell">
                      <div class="cell"><label class="el-checkbox is-disabled"><span
                        class="el-checkbox__input is-disabled"><span class="el-checkbox__inner"></span><input
                        type="checkbox" aria-hidden="false" disabled="disabled" class="el-checkbox__original" value=""></span>
                        <!----></label></div>
                    </th>
                    <th colspan="1" rowspan="1"
                        class="el-table_1_column_2     is-leaf is-sortable table-custom-header-cell el-table__cell">
                      <div class="cell">空间名<span class="caret-wrapper"><i class="sort-caret ascending"></i><i
                        class="sort-caret descending"></i></span></div>
                    </th>
                    <th colspan="1" rowspan="1"
                        class="el-table_1_column_3     is-leaf is-sortable table-custom-header-cell el-table__cell">
                      <div class="cell">大小<span class="caret-wrapper"><i class="sort-caret ascending"></i><i
                        class="sort-caret descending"></i></span></div>
                    </th>
                    <th colspan="1" rowspan="1"
                        class="el-table_1_column_4 descending is-left   is-leaf is-sortable table-custom-header-cell el-table__cell">
                      <div class="cell">更新时间<span class="caret-wrapper"><i class="sort-caret ascending"></i><i
                        class="sort-caret descending"></i></span></div>
                    </th>
                    <th colspan="1" rowspan="1"
                        class="el-table_1_column_5   table-opt  is-leaf table-custom-header-cell el-table__cell">
                      <div class="cell">操作</div>
                    </th>
                    <th class="el-table__cell gutter" style="width: 0px; display: none;"></th>
                  </tr>
                  </thead>
                </table>
              </div>
              <div class="el-table__body-wrapper is-scrolling-none">
                <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 2300px;">
                  <colgroup>
                    <col name="el-table_1_column_1" width="50">
                    <col name="el-table_1_column_2" width="1321">
                    <col name="el-table_1_column_3" width="160">
                    <col name="el-table_1_column_4" width="609">
                    <col name="el-table_1_column_5" width="160">
                  </colgroup>
                  <tbody><!----></tbody>
                </table>
                <div class="el-table__empty-block" style="height: 100%; width: 2300px;"><span
                  class="el-table__empty-text">暂无数据</span></div><!----></div><!----><!----><!----><!---->
              <div class="el-table__column-resize-proxy" style="display: none;"></div>
              <div class="el-loading-mask" style="display: none;">
                <div class="el-loading-spinner"><i class="el-icon-loading"></i>
                  <p class="el-loading-text">拼命加载中</p></div>
              </div>
            </div>
            <div data-v-22921d72 data-v-788f49fb="" class="pagination pagination-custom el-pagination is-background">
              <span class="el-pagination__total">共 0 条</span><span class="el-pagination__sizes"><div
              class="el-select el-select--mini"><!----><div
              class="el-input el-input--mini el-input--suffix"><!----><input type="text" readonly="readonly"
                                                                             autocomplete="off" placeholder="请选择"
                                                                             class="el-input__inner"><!----><span
              class="el-input__suffix"><span class="el-input__suffix-inner"><i
              class="el-select__caret el-input__icon el-icon-arrow-up"></i><!----><!----><!----><!----><!----></span>
              <!----></span><!----><!----></div><div class="el-select-dropdown el-popper"
                                                     style="display: none; min-width: 110px;"><div class="el-scrollbar"
                                                                                                   style=""><div
              class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -10px; margin-right: -10px;"><ul
              class="el-scrollbar__view el-select-dropdown__list"><!----><li
              class="el-select-dropdown__item"><span>5条/页</span></li><li
              class="el-select-dropdown__item"><span>10条/页</span></li><li
              class="el-select-dropdown__item selected"><span>15条/页</span></li><li
              class="el-select-dropdown__item"><span>20条/页</span></li></ul></div><div
              class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb"
                                                           style="transform: translateX(0%);"></div></div><div
              class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb"
                                                         style="transform: translateY(0%);"></div></div></div>
              <!----></div></div></span>
              <button type="button" disabled="disabled" class="btn-prev"><i class="el-icon el-icon-arrow-left"></i>
              </button>
              <ul class="el-pager">
                <li class="number active">1</li><!----><!----><!----></ul>
              <button type="button" disabled="disabled" class="btn-next"><i class="el-icon el-icon-arrow-right"></i>
              </button>
              <span class="el-pagination__jump">前往<div
                class="el-input el-input--medium el-pagination__editor is-in-pagination"><!----><input type="number"
                                                                                                       autocomplete="off"
                                                                                                       min="1" max="1"
                                                                                                       class="el-input__inner">
                <!----><!----><!----><!----></div>页</span></div>
          </div>
          <div data-v-54c64fd5 data-v-5ea21fcc class="el-dialog__wrapper" style="display: none;">
            <div role="dialog" aria-modal="true" aria-label="新增undefined" class="el-dialog" style="margin-top: 15vh;">
              <div class="el-dialog__header"><span class="el-dialog__title">新增undefined</span>
                <button type="button" aria-label="Close" class="el-dialog__headerbtn"><i
                  class="el-dialog__close el-icon el-icon-close"></i></button>
              </div><!---->
              <div class="el-dialog__footer"><span data-v-54c64fd5><button data-v-54c64fd5 type="button"
                                                                              class="el-button el-button--primary el-button--medium"><!---->
                <!----><span>确定</span></button> <button data-v-54c64fd5 type="button"
                                                        class="el-button el-button--default el-button--medium"><!---->
                <!----><span>取消</span></button></span></div>
            </div>
          </div>
        </div>
      </main>
    </section>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
@import '../assets/css/app.css';
</style>
