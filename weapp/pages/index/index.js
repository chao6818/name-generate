const { generateNames, getReferencePrompt, STYLE_OPTIONS } = require("../../utils/generator");

Page({
  data: {
    father: "",
    mother: "",
    generationChar: "",
    surnameSource: "none",
    surnameOptions: [
      { label: "父姓", value: "father" },
      { label: "母姓", value: "mother" },
      { label: "不显示", value: "none" }
    ],
    birthDate: "2026-08-24",
    birthTime: "08:00",
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
    if (wx.showShareMenu) {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ["shareAppMessage", "shareTimeline"]
      });
    }
    const styleOptions = STYLE_OPTIONS.map((style) => ({
      id: style.id,
      label: style.label,
      active: true
    }));
    this.setData({
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

  onGenerationCharInput(event) {
    this.setData({ generationChar: event.detail.value });
    clearTimeout(this._generationCharTimer);
    this._generationCharTimer = setTimeout(() => this.generate(), 250);
  },

  onSurnameTap(event) {
    const value = event.currentTarget.dataset.value;
    this.setData({ surnameSource: value });
    this.generate();
  },

  onBirthDateChange(event) {
    this.setData({ birthDate: event.detail.value });
    this.generate();
  },

  onBirthTimeChange(event) {
    this.setData({ birthTime: event.detail.value });
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

  onShareAppMessage() {
    return {
      title: "灵名起名：输入父母姓名，参考起名",
      path: "/pages/index/index",
      imageUrl: "/assets/lingming-ai-avatar-v3.png"
    };
  },

  onShareTimeline() {
    return {
      title: "灵名起名：输入父母姓名，参考起名",
      imageUrl: "/assets/lingming-ai-avatar-v3.png"
    };
  },

  generate() {
    const data = this.data;
    const dateParts = data.birthDate.split("-");
    const timeParts = data.birthTime.split(":");
    const config = {
      father: data.father,
      mother: data.mother,
      generationChar: data.generationChar,
      surnameSource: data.surnameSource,
      birthDate: data.birthDate,
      birthTime: data.birthTime,
      birthYear: Number(dateParts[0]),
      birthMonth: Number(dateParts[1]),
      birthDay: Number(dateParts[2]),
      birthHour: Number(timeParts[0]),
      birthMinute: Number(timeParts[1]),
      gender: data.gender,
      styles: data.styleOptions.filter((style) => style.active).map((style) => style.id),
      length: data.length,
      count: data.count
    };
    const names = generateNames(config);
    const referencePrompt = getReferencePrompt(config);
    const styleLabels = config.styles.length
      ? STYLE_OPTIONS.filter((style) => config.styles.includes(style.id)).map((style) => style.label).join("、")
      : "不限风格";
    this.setData({
      names,
      referencePrompt,
      subtitle: `已推荐 ${names.length} 个名字 · ${config.birthDate} ${config.birthTime} · ${styleLabels}`
    });
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
    const dateParts = data.birthDate.split("-");
    const timeParts = data.birthTime.split(":");
    const config = {
      father: data.father,
      mother: data.mother,
      generationChar: data.generationChar,
      surnameSource: data.surnameSource,
      birthDate: data.birthDate,
      birthTime: data.birthTime,
      birthYear: Number(dateParts[0]),
      birthMonth: Number(dateParts[1]),
      birthDay: Number(dateParts[2]),
      birthHour: Number(timeParts[0]),
      birthMinute: Number(timeParts[1]),
      gender: data.gender,
      styles: data.styleOptions.filter((style) => style.active).map((style) => style.id),
      length: data.length,
      count: data.count
    };
    const singleConfig = Object.assign({}, config, { count: 1 });
    const others = data.names.filter((_, itemIndex) => itemIndex !== index);
    const excludeChars = [];
    others.forEach((item) => {
      (item.given || []).forEach((char) => excludeChars.push(char));
    });
    singleConfig.excludeChars = excludeChars;
    let single = generateNames(singleConfig)[0];
    let attempts = 0;
    while (data.names.some((item) => item.text === single.text) && attempts < 80) {
      single = generateNames(singleConfig)[0];
      attempts++;
    }
    const names = data.names.slice();
    names[index] = single;
    this.setData({ names });
  }
});
