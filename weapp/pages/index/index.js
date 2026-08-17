const { generateNames, getGroupedReferencePrompt, STYLE_OPTIONS } = require("../../utils/generator");

Page({
  data: {
    father: "",
    mother: "",
    surnameSource: "none",
    surnameOptions: [
      { label: "父姓", value: "father" },
      { label: "母姓", value: "mother" },
      { label: "不显示", value: "none" }
    ],
    birthYears: [],
    birthYearIndex: 11,
    birthMonths: [],
    birthMonthIndex: 7,
    gender: "neutral",
    genderOptions: [
      { label: "不限", value: "neutral" },
      { label: "男孩", value: "male" },
      { label: "女孩", value: "female" }
    ],
    styleOptions: [],
    length: "any",
    lengthOptions: [
      { label: "两字", value: "short" },
      { label: "不限", value: "any" },
      { label: "三字", value: "long" }
    ],
    count: 12,
    names: [],
    referencePrompt: "",
    subtitle: ""
  },

  onLoad() {
    const years = [];
    for (let year = 2015; year <= 2030; year++) {
      years.push(`${year}年`);
    }
    const months = [];
    for (let month = 1; month <= 12; month++) {
      months.push(`${month}月`);
    }
    const styleOptions = STYLE_OPTIONS.map((style) => ({
      id: style.id,
      label: style.label,
      active: true
    }));
    this.setData({
      birthYears: years,
      birthMonths: months,
      styleOptions
    });
    this.generate();
  },

  onFatherInput(event) {
    this.setData({ father: event.detail.value });
    this.generate();
  },

  onMotherInput(event) {
    this.setData({ mother: event.detail.value });
    this.generate();
  },

  onSurnameTap(event) {
    const value = event.currentTarget.dataset.value;
    this.setData({ surnameSource: value });
    this.generate();
  },

  onBirthYearChange(event) {
    this.setData({ birthYearIndex: Number(event.detail.value) });
    this.generate();
  },

  onBirthMonthChange(event) {
    this.setData({ birthMonthIndex: Number(event.detail.value) });
    this.generate();
  },

  onGenderTap(event) {
    const value = event.currentTarget.dataset.value;
    this.setData({ gender: value });
    this.generate();
  },

  onStyleTap(event) {
    const id = event.currentTarget.dataset.id;
    const styleOptions = this.data.styleOptions.map((style) => {
      if (style.id === id) {
        return Object.assign({}, style, { active: !style.active });
      }
      return style;
    });
    this.setData({ styleOptions });
    this.generate();
  },

  onLengthTap(event) {
    const value = event.currentTarget.dataset.value;
    this.setData({ length: value });
    this.generate();
  },

  onCountChange(event) {
    this.setData({ count: Number(event.detail.value) });
    this.generate();
  },

  onGenerate() {
    this.generate();
  },

  generate() {
    const data = this.data;
    const config = {
      father: data.father,
      mother: data.mother,
      surnameSource: data.surnameSource,
      birthYear: 2015 + Number(data.birthYearIndex),
      birthMonth: Number(data.birthMonthIndex) + 1,
      gender: data.gender,
      styles: data.styleOptions.filter((style) => style.active).map((style) => style.id),
      length: data.length,
      count: data.count
    };
    const names = generateNames(config);
    const referencePrompt = getGroupedReferencePrompt(config);
    const zodiac = this.getZodiacLabel(config.birthYear);
    const styleLabels = config.styles.length
      ? STYLE_OPTIONS.filter((style) => config.styles.includes(style.id)).map((style) => style.label).join("、")
      : "不限风格";
    this.setData({
      names,
      referencePrompt,
      subtitle: `已生成 ${names.length} 个名字 · ${config.birthYear}年${config.birthMonth}月 · ${zodiac} · ${styleLabels}`
    });
  },

  getZodiacLabel(year) {
    const list = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
    return list[(((Number(year) - 4) % 12) + 12) % 12] + "年";
  },

  onCopy(event) {
    const index = Number(event.currentTarget.dataset.index);
    const item = this.data.names[index];
    if (!item) return;
    wx.setClipboardData({
      data: item.text,
      success() {
        wx.showToast({ title: "已复制", icon: "none" });
      }
    });
  },

  onRefresh(event) {
    const index = Number(event.currentTarget.dataset.index);
    const data = this.data;
    const config = {
      father: data.father,
      mother: data.mother,
      surnameSource: data.surnameSource,
      birthYear: 2015 + Number(data.birthYearIndex),
      birthMonth: Number(data.birthMonthIndex) + 1,
      gender: data.gender,
      styles: data.styleOptions.filter((style) => style.active).map((style) => style.id),
      length: data.length,
      count: data.count
    };
    const singleConfig = Object.assign({}, config, { count: 1 });
    const single = generateNames(singleConfig)[0];
    const names = data.names.slice();
    names[index] = single;
    this.setData({ names });
  }
});
