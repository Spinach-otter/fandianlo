"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      info: []
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://localhost:8080/test/",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.info = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    b: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    c: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    d: common_vendor.f($data.info, (item, i, i0) => {
      return {
        a: common_vendor.t(item.content),
        b: common_vendor.t(item.num),
        c: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
