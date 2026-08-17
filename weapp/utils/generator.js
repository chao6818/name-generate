const STYLE_OPTIONS = [
  { id: "elegant", label: "雅致" },
  { id: "modern", label: "现代" },
  { id: "bold", label: "大气" },
  { id: "fresh", label: "清新" },
  { id: "classic", label: "古风" },
  { id: "cute", label: "可爱" },
  { id: "cool", label: "酷感" },
  { id: "warm", label: "温暖" }
];

const ZODIAC_LIST = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];

const SURNAME_PINYIN = {
  "王": "wáng", "李": "lǐ", "张": "zhāng", "刘": "liú", "陈": "chén",
  "杨": "yáng", "赵": "zhào", "黄": "huáng", "吴": "wú", "徐": "xú",
  "孙": "sūn", "胡": "hú", "朱": "zhū", "高": "gāo", "何": "hé",
  "郭": "guō", "马": "mǎ", "罗": "luó", "梁": "liáng", "郑": "zhèng",
  "谢": "xiè", "韩": "hán", "冯": "féng", "于": "yú", "董": "dǒng",
  "曹": "cáo", "袁": "yuán", "邓": "dèng", "曾": "zēng", "彭": "péng",
  "吕": "lǚ", "蒋": "jiǎng", "蔡": "cài", "贾": "jiǎ", "丁": "dīng",
  "魏": "wèi", "薛": "xuē", "阎": "yán", "余": "yú", "潘": "pān",
  "杜": "dù", "戴": "dài", "钟": "zhōng", "汪": "wāng", "田": "tián",
  "任": "rén", "范": "fàn", "石": "shí", "姚": "yáo", "谭": "tán",
  "廖": "liào", "邹": "zōu", "熊": "xióng", "金": "jīn", "郝": "hǎo",
  "孔": "kǒng", "崔": "cuī", "康": "kāng", "毛": "máo", "邱": "qiū",
  "史": "shǐ", "侯": "hóu", "邵": "shào", "孟": "mèng", "龙": "lóng",
  "万": "wàn", "段": "duàn", "雷": "léi", "钱": "qián", "汤": "tāng",
  "尹": "yǐn", "易": "yì", "常": "cháng", "武": "wǔ", "赖": "lài",
  "龚": "gōng", "文": "wén", "苏": "sū", "林": "lín", "沈": "shěn",
  "顾": "gù", "陆": "lù", "江": "jiāng", "白": "bái", "周": "zhōu",
  "宋": "sòng", "许": "xǔ", "温": "wēn", "贺": "hè", "程": "chéng",
  "叶": "yè", "夏": "xià", "萧": "xiāo", "唐": "táng", "方": "fāng",
  "姜": "jiāng", "乔": "qiáo", "闻": "wén", "盛": "shèng", "傅": "fù",
  "秦": "qín", "阮": "ruǎn", "黎": "lí", "洛": "luò", "祁": "qí",
  "裴": "péi", "舒": "shū", "尤": "yóu", "席": "xí", "穆": "mù",
  "颜": "yán", "景": "jǐng", "桑": "sāng", "凌": "líng", "楚": "chǔ",
  "纪": "jì", "宁": "níng",
  "褚": "chǔ", "卫": "wèi", "施": "shī", "陶": "táo", "戚": "qī",
  "喻": "yù", "水": "shuǐ", "窦": "dòu", "章": "zhāng", "云": "yún",
  "葛": "gě", "奚": "xī", "郎": "láng", "鲁": "lǔ", "韦": "wěi",
  "昌": "chāng", "苗": "miáo", "凤": "fèng", "花": "huā", "俞": "yú",
  "柳": "liǔ", "酆": "fēng", "鲍": "bào", "费": "fèi", "廉": "lián",
  "岑": "cén", "倪": "ní", "滕": "téng", "殷": "yīn", "毕": "bì",
  "邬": "wū", "时": "shí", "皮": "pí", "卞": "biàn", "齐": "qí",
  "伍": "wǔ", "元": "yuán", "卜": "bǔ", "平": "píng", "和": "hé",
  "湛": "zhàn", "禹": "yǔ", "狄": "dí", "米": "mǐ", "贝": "bèi",
  "明": "míng", "臧": "zāng", "计": "jì", "伏": "fú", "成": "chéng",
  "谈": "tán", "茅": "máo", "庞": "páng", "屈": "qū", "项": "xiàng",
  "祝": "zhù", "蓝": "lán", "闵": "mǐn", "季": "jì", "麻": "má",
  "路": "lù", "娄": "lóu", "危": "wēi", "童": "tóng", "梅": "méi",
  "刁": "diāo", "骆": "luò", "樊": "fán", "霍": "huò", "虞": "yú",
  "支": "zhī", "柯": "kē", "昝": "zǎn", "管": "guǎn", "莫": "mò",
  "房": "fáng", "裘": "qiú", "缪": "miào", "干": "gān", "解": "xiè",
  "应": "yīng", "宗": "zōng", "宣": "xuān", "贲": "bēn", "郁": "yù",
  "单": "shàn", "杭": "háng", "洪": "hóng", "包": "bāo", "诸": "zhū",
  "左": "zuǒ", "吉": "jí", "钮": "niǔ", "嵇": "jī", "邢": "xíng",
  "滑": "huá", "荣": "róng", "翁": "wēng", "荀": "xún", "羊": "yáng",
  "於": "yū", "惠": "huì", "甄": "zhēn", "曲": "qū", "家": "jiā",
  "封": "fēng", "羿": "yì", "储": "chǔ", "靳": "jìn", "汲": "jí",
  "邴": "bǐng", "糜": "mí", "松": "sōng", "井": "jǐng", "富": "fù",
  "巫": "wū", "乌": "wū", "焦": "jiāo", "巴": "bā", "弓": "gōng",
  "牧": "mù", "隗": "kuí", "山": "shān", "谷": "gǔ", "车": "chē",
  "宓": "mì", "蓬": "péng", "全": "quán", "郗": "xī", "班": "bān",
  "仰": "yǎng", "秋": "qiū", "仲": "zhòng", "伊": "yī", "宫": "gōng",
  "仇": "qiú", "栾": "luán", "暴": "bào", "甘": "gān", "斜": "xié",
  "厉": "lì", "戎": "róng", "祖": "zǔ", "符": "fú", "詹": "zhān",
  "束": "shù", "幸": "xìng", "司": "sī", "韶": "sháo", "郜": "gào",
  "蓟": "jì", "薄": "bó", "印": "yìn", "宿": "sù", "怀": "huái",
  "蒲": "pú", "台": "tái", "从": "cóng", "鄂": "è", "索": "suǒ",
  "咸": "xián", "籍": "jí", "蔺": "lìn", "屠": "tú", "蒙": "méng",
  "池": "chí", "阴": "yīn", "胥": "xū", "能": "nài", "苍": "cāng",
  "双": "shuāng", "莘": "shēn", "党": "dǎng", "翟": "zhái", "贡": "gòng",
  "劳": "láo", "逄": "páng", "姬": "jī", "申": "shēn", "扶": "fú",
  "堵": "dǔ", "冉": "rǎn", "宰": "zǎi", "郦": "lì", "雍": "yōng",
  "却": "què", "璩": "qú", "桂": "guì", "濮": "pú", "牛": "niú",
  "寿": "shòu", "通": "tōng", "边": "biān", "扈": "hù", "燕": "yān",
  "冀": "jì", "郏": "jiá", "浦": "pǔ", "农": "nóng", "别": "bié",
  "庄": "zhuāng", "晏": "yàn", "柴": "chái", "瞿": "qú", "充": "chōng",
  "慕": "mù", "连": "lián", "茹": "rú", "习": "xí", "宦": "huàn",
  "艾": "ài", "鱼": "yú", "向": "xiàng", "古": "gǔ", "慎": "shèn",
  "戈": "gē", "庾": "yǔ", "终": "zhōng", "暨": "jì", "居": "jū",
  "步": "bù", "都": "dū", "耿": "gěng", "满": "mǎn", "匡": "kuāng",
  "国": "guó", "寇": "kòu", "广": "guǎng", "禄": "lù", "阙": "què",
  "东": "dōng", "欧": "ōu", "殳": "shū", "沃": "wò", "利": "lì",
  "蔚": "wèi", "越": "yuè", "夔": "kuí", "隆": "lóng", "师": "shī",
  "巩": "gǒng", "厍": "shè", "聂": "niè", "晁": "cháo", "勾": "gōu",
  "敖": "áo", "融": "róng", "冷": "lěng", "訾": "zǐ", "辛": "xīn",
  "阚": "kàn", "那": "nā", "简": "jiǎn", "饶": "ráo", "空": "kōng",
  "毋": "wú", "沙": "shā", "乜": "niè", "养": "yǎng", "鞠": "jū",
  "须": "xū", "丰": "fēng", "巢": "cháo", "关": "guān", "蒯": "kuǎi",
  "相": "xiàng", "查": "zhā", "后": "hòu", "荆": "jīng", "红": "hóng",
  "游": "yóu", "竺": "zhú", "权": "quán", "逯": "lù", "盖": "gě",
  "益": "yì", "桓": "huán", "公": "gōng",
  "万俟": "mò qí", "司马": "sī mǎ", "上官": "shàng guān", "欧阳": "ōu yáng",
  "夏侯": "xià hóu", "诸葛": "zhū gě", "闻人": "wén rén", "东方": "dōng fāng",
  "赫连": "hè lián", "皇甫": "huáng fǔ", "尉迟": "yù chí", "公羊": "gōng yáng",
  "澹台": "tán tái", "公冶": "gōng yě", "宗政": "zōng zhèng", "濮阳": "pú yáng",
  "淳于": "chún yú", "单于": "chán yú", "太叔": "tài shū", "申屠": "shēn tú",
  "公孙": "gōng sūn", "仲孙": "zhòng sūn", "轩辕": "xuān yuán", "令狐": "lìng hú",
  "钟离": "zhōng lí", "宇文": "yǔ wén", "长孙": "zhǎng sūn", "慕容": "mù róng",
  "司徒": "sī tú", "司空": "sī kōng", "闾丘": "lǘ qiū", "子车": "zǐ jū",
  "亓官": "qí guān", "司寇": "sī kòu", "巫马": "wū mǎ", "公西": "gōng xī",
  "颛孙": "zhuān sūn", "端木": "duān mù", "漆雕": "qī diāo", "乐正": "yuè zhèng",
  "壤驷": "rǎng sì", "公良": "gōng liáng", "拓跋": "tuò bá", "夹谷": "jiā gǔ",
  "宰父": "zǎi fǔ", "谷梁": "gǔ liáng", "段干": "duàn gān", "百里": "bǎi lǐ",
  "东郭": "dōng guō", "南门": "nán mén", "呼延": "hū yán", "归海": "guī hǎi",
  "羊舌": "yáng shé", "微生": "wēi shēng", "梁丘": "liáng qiū", "左丘": "zuǒ qiū",
  "东门": "dōng mén", "西门": "xī mén", "南宫": "nán gōng"
};

const COMPOUND_SURNAMES = [
  "万俟", "司马", "上官", "欧阳", "夏侯", "诸葛", "闻人", "东方",
  "赫连", "皇甫", "尉迟", "公羊", "澹台", "公冶", "宗政", "濮阳",
  "淳于", "单于", "太叔", "申屠", "公孙", "仲孙", "轩辕", "令狐",
  "钟离", "宇文", "长孙", "慕容", "司徒", "司空", "闾丘", "子车",
  "亓官", "司寇", "巫马", "公西", "颛孙", "端木", "漆雕", "乐正",
  "壤驷", "公良", "拓跋", "夹谷", "宰父", "谷梁", "段干", "百里",
  "东郭", "南门", "呼延", "归海", "羊舌", "微生", "梁丘", "左丘",
  "东门", "西门", "南宫"
];

const SPECIAL_CHAR_CATEGORIES = {
  "若": ["guofeng"], "兮": ["guofeng"], "璟": ["guofeng"], "砚": ["guofeng"],
  "沐": ["guofeng"], "涵": ["guofeng"], "清": ["guofeng"], "汐": ["guofeng"],
  "予": ["guofeng"], "舒": ["guofeng"],
  "萱": ["zodiac-马"], "茉": ["zodiac-马"], "芮": ["zodiac-马"], "禾": ["zodiac-马"],
  "穗": ["zodiac-马"], "安": ["zodiac-马"], "宇": ["zodiac-马"], "宸": ["zodiac-马"],
  "林": ["zodiac-马"], "柏": ["zodiac-马"],
  "泽": ["unisex"], "霖": ["unisex"], "诺": ["unisex"], "一": ["unisex"],
  "辰": ["unisex"], "佑": ["unisex"], "昕": ["unisex"], "昱": ["unisex"]
};

const SEASON_BONUS_CHARS = {
  spring: ["萱", "茉", "芮", "禾", "穗", "林", "柏", "昕", "曦", "羲", "晗", "若", "兮"],
  summer: ["晴", "夏", "星", "澈", "沐", "芙", "朗", "晗", "航", "曦", "羲"],
  autumn: ["清", "汐", "澄", "澜", "玥", "禾", "穗", "荻"],
  winter: ["初", "安", "宁", "璞", "恬", "元"]
};

const PARENT_REFERENCE = [
  { c: "明", meaning: "光明通达", tags: ["modern", "bold"] },
  { c: "华", meaning: "光华灿烂", tags: ["bold", "classic"] },
  { c: "强", meaning: "刚强有力", tags: ["bold", "modern"] },
  { c: "国", meaning: "胸怀家国", tags: ["bold", "classic"] },
  { c: "建", meaning: "建立远大", tags: ["bold", "modern"] },
  { c: "文", meaning: "文采斐然", tags: ["classic", "elegant"] },
  { c: "平", meaning: "平安顺遂", tags: ["warm", "elegant"] },
  { c: "志", meaning: "志存高远", tags: ["bold", "classic"] },
  { c: "伟", meaning: "伟岸开阔", tags: ["bold", "modern"] },
  { c: "军", meaning: "刚毅担当", tags: ["bold", "classic"] },
  { c: "磊", meaning: "光明磊落", tags: ["bold", "elegant"] },
  { c: "洋", meaning: "洋气开阔", tags: ["modern", "fresh"] },
  { c: "勇", meaning: "勇敢无畏", tags: ["bold", "modern"] },
  { c: "杰", meaning: "杰出卓越", tags: ["bold", "modern"] },
  { c: "涛", meaning: "波涛奔涌", tags: ["bold", "modern"] },
  { c: "斌", meaning: "文武兼备", tags: ["classic", "bold"] },
  { c: "辉", meaning: "光辉闪耀", tags: ["bold", "warm"] },
  { c: "健", meaning: "健康挺拔", tags: ["fresh", "bold"] },
  { c: "鹏", meaning: "鹏程万里", tags: ["bold", "classic"] },
  { c: "超", meaning: "超越向前", tags: ["modern", "bold"] },
  { c: "浩", meaning: "浩荡开阔", tags: ["bold", "classic"] },
  { c: "凯", meaning: "凯旋而归", tags: ["bold", "warm"] },
  { c: "峰", meaning: "登峰造极", tags: ["bold", "classic"] },
  { c: "宇", meaning: "气宇轩昂", tags: ["bold", "modern"] },
  { c: "睿", meaning: "睿智通达", tags: ["elegant", "modern"] },
  { c: "晨", meaning: "晨光熹微", tags: ["fresh", "warm"] },
  { c: "阳", meaning: "阳光明朗", tags: ["fresh", "warm"] },
  { c: "旭", meaning: "旭日东升", tags: ["bold", "warm"] },
  { c: "毅", meaning: "坚毅果敢", tags: ["bold", "modern"] },
  { c: "哲", meaning: "哲思明辨", tags: ["classic", "elegant"] },
  { c: "翰", meaning: "翰墨书香", tags: ["classic", "elegant"] },
  { c: "恩", meaning: "感恩知礼", tags: ["warm", "classic"] },
  { c: "俊", meaning: "俊逸挺拔", tags: ["modern", "elegant"] },
  { c: "鑫", meaning: "财源兴旺", tags: ["bold", "warm"] },
  { c: "铭", meaning: "铭记于心", tags: ["classic", "elegant"] },
  { c: "昊", meaning: "昊天广远", tags: ["bold", "modern"] },
  { c: "辰", meaning: "星辰大海", tags: ["modern", "bold"] },
  { c: "芳", meaning: "芬芳美好", tags: ["fresh", "elegant"] },
  { c: "敏", meaning: "聪敏灵动", tags: ["modern", "fresh"] },
  { c: "静", meaning: "安静从容", tags: ["elegant", "classic"] },
  { c: "丽", meaning: "秀丽明朗", tags: ["elegant", "fresh"] },
  { c: "艳", meaning: "明艳动人", tags: ["fresh", "bold"] },
  { c: "梅", meaning: "梅花高洁", tags: ["classic", "elegant"] },
  { c: "兰", meaning: "兰心蕙质", tags: ["classic", "elegant"] },
  { c: "秀", meaning: "秀外慧中", tags: ["elegant", "fresh"] },
  { c: "英", meaning: "英姿飒爽", tags: ["bold", "classic"] },
  { c: "慧", meaning: "聪慧通透", tags: ["elegant", "modern"] },
  { c: "娟", meaning: "娟秀柔美", tags: ["elegant", "fresh"] },
  { c: "霞", meaning: "霞光漫天", tags: ["bold", "warm"] },
  { c: "萍", meaning: "浮萍自在", tags: ["fresh", "elegant"] },
  { c: "红", meaning: "红润明媚", tags: ["warm", "bold"] },
  { c: "燕", meaning: "燕子衔春", tags: ["fresh", "warm"] },
  { c: "玲", meaning: "玲玲盈耳", tags: ["elegant", "fresh"] },
  { c: "芬", meaning: "芬芳馥郁", tags: ["fresh", "elegant"] },
  { c: "婷", meaning: "亭亭玉立", tags: ["elegant", "fresh"] },
  { c: "雪", meaning: "冰雪纯净", tags: ["fresh", "elegant"] },
  { c: "娜", meaning: "婀娜灵动", tags: ["fresh", "elegant"] },
  { c: "丹", meaning: "丹心赤诚", tags: ["warm", "bold"] },
  { c: "璐", meaning: "美玉温润", tags: ["elegant", "classic"] },
  { c: "萌", meaning: "萌动可爱", tags: ["cute", "fresh"] },
  { c: "萱", meaning: "萱草忘忧", tags: ["classic", "warm"] },
  { c: "欣", meaning: "欣然欢喜", tags: ["fresh", "warm"] },
  { c: "怡", meaning: "心旷神怡", tags: ["elegant", "warm"] },
  { c: "雨", meaning: "润物无声", tags: ["fresh", "elegant"] },
  { c: "思", meaning: "善思明辨", tags: ["elegant", "modern"] },
  { c: "梦", meaning: "梦想可期", tags: ["modern", "elegant"] },
  { c: "琪", meaning: "美玉珍贵", tags: ["elegant", "classic"] },
  { c: "妍", meaning: "妍丽灵动", tags: ["fresh", "elegant"] },
  { c: "诗", meaning: "诗意盎然", tags: ["classic", "elegant"] },
  { c: "涵", meaning: "涵养深厚", tags: ["elegant", "classic"] },
  { c: "佳", meaning: "佳美圆满", tags: ["fresh", "warm"] },
  { c: "瑶", meaning: "瑶光璀璨", tags: ["elegant", "modern"] },
  { c: "菲", meaning: "芳菲满园", tags: ["fresh", "elegant"] },
  { c: "洁", meaning: "洁白纯净", tags: ["fresh", "elegant"] },
  { c: "舒", meaning: "舒展自在", tags: ["warm", "elegant"] },
  { c: "曼", meaning: "曼妙从容", tags: ["elegant", "fresh"] },
  { c: "薇", meaning: "蔷薇明媚", tags: ["fresh", "elegant"] },
  { c: "彤", meaning: "彤云满天", tags: ["bold", "warm"] },
  { c: "依", meaning: "依偎温暖", tags: ["warm", "fresh"] },
  { c: "诺", meaning: "一诺千金", tags: ["bold", "elegant"] },
  { c: "桐", meaning: "梧桐高洁", tags: ["classic", "elegant"] },
  { c: "柔", meaning: "温柔坚定", tags: ["warm", "elegant"] },
  { c: "茜", meaning: "茜草绯红", tags: ["fresh", "elegant"] },
  { c: "岚", meaning: "山岚清润", tags: ["elegant", "fresh"] },
  { c: "溪", meaning: "溪水清冽", tags: ["fresh", "elegant"] },
  { c: "言", meaning: "言而有信", tags: ["elegant", "classic"] },
  { c: "泽", meaning: "润泽万物", tags: ["elegant", "warm"] },
  { c: "航", meaning: "扬帆远航", tags: ["bold", "modern"] },
  { c: "家", meaning: "家和美满", tags: ["warm", "classic"] },
  { c: "兴", meaning: "兴旺发达", tags: ["bold", "warm"] },
  { c: "荣", meaning: "欣欣向荣", tags: ["bold", "warm"] },
  { c: "昌", meaning: "昌盛长久", tags: ["bold", "classic"] },
  { c: "广", meaning: "广阔远大", tags: ["bold", "modern"] },
  { c: "倩", meaning: "倩影灵动", tags: ["fresh", "elegant"] },
  { c: "晓", meaning: "拂晓明亮", tags: ["fresh", "modern"] }
];

const BABY_CHARS = {
  male: [
    { c: "砚", py: "yàn", meaning: "文墨砚台，沉静有度", tags: ["classic", "elegant"] },
    { c: "辰", py: "chén", meaning: "星辰日月，辽阔光明", tags: ["bold", "modern"] },
    { c: "屹", py: "yì", meaning: "屹立挺拔，稳如山岳", tags: ["bold", "modern"] },
    { c: "屿", py: "yǔ", meaning: "岛屿坚韧，独立从容", tags: ["modern", "cool"] },
    { c: "泽", py: "zé", meaning: "润泽万物，仁厚宽广", tags: ["elegant", "warm"] },
    { c: "煜", py: "yù", meaning: "煜煜生辉，温暖明亮", tags: ["bold", "warm"] },
    { c: "川", py: "chuān", meaning: "山河气象，行稳致远", tags: ["bold", "classic"] },
    { c: "霖", py: "lín", meaning: "甘霖润物，福泽深厚", tags: ["elegant", "warm"] },
    { c: "昊", py: "hào", meaning: "昊天广宇，胸怀开阔", tags: ["bold", "modern"] },
    { c: "修", py: "xiū", meaning: "修身明德，涵养深厚", tags: ["classic", "elegant"] },
    { c: "博", py: "bó", meaning: "博学广识，气度不凡", tags: ["bold", "modern"] },
    { c: "弈", py: "yì", meaning: "博弈从容，沉着果敢", tags: ["modern", "cool"] },
    { c: "昭", py: "zhāo", meaning: "昭昭日月，光明磊落", tags: ["classic", "bold"] },
    { c: "恒", py: "héng", meaning: "持之以恒，坚定有力", tags: ["warm", "bold"] },
    { c: "峻", py: "jùn", meaning: "峻岭高山，刚毅挺拔", tags: ["bold", "classic"] },
    { c: "谦", py: "qiān", meaning: "谦和有礼，虚怀若谷", tags: ["elegant", "warm"] },
    { c: "澈", py: "chè", meaning: "清澈坦荡，心志明朗", tags: ["fresh", "modern"] },
    { c: "予", py: "yǔ", meaning: "乐于给予，热忱真诚", tags: ["warm", "modern"] },
    { c: "钧", py: "jūn", meaning: "千钧担当，稳重可靠", tags: ["bold", "classic"] },
    { c: "书", py: "shū", meaning: "书卷气韵，文质彬彬", tags: ["classic", "elegant"] },
    { c: "聿", py: "yù", meaning: "笔聿生花，才华横溢", tags: ["classic", "elegant"] },
    { c: "森", py: "sēn", meaning: "林木繁盛，生机蓬勃", tags: ["fresh", "bold"] },
    { c: "澜", py: "lán", meaning: "波澜壮阔，志向高远", tags: ["bold", "modern"] },
    { c: "彧", py: "yù", meaning: "文采斐然，温润有度", tags: ["classic", "elegant"] },
    { c: "南", py: "nán", meaning: "向阳而生，明朗开阔", tags: ["fresh", "warm"] },
    { c: "卓", py: "zhuó", meaning: "卓尔不群，出类拔萃", tags: ["bold", "modern"] },
    { c: "望", py: "wàng", meaning: "心怀远望，行有方向", tags: ["bold", "classic"] },
    { c: "清", py: "qīng", meaning: "清朗高洁，心性澄明", tags: ["fresh", "elegant"] },
    { c: "航", py: "háng", meaning: "扬帆远航，乘风破浪", tags: ["bold", "modern"] },
    { c: "启", py: "qǐ", meaning: "启程向上，朝气蓬勃", tags: ["modern", "bold"] },
    { c: "铭", py: "míng", meaning: "铭记初心，笃行不怠", tags: ["classic", "warm"] },
    { c: "璟", py: "jǐng", meaning: "玉之光彩，温润贵重", tags: ["elegant", "classic"] },
    { c: "淮", py: "huái", meaning: "淮水澄明，内秀沉稳", tags: ["classic", "fresh"] },
    { c: "桐", py: "tóng", meaning: "梧桐高洁，正直向上", tags: ["classic", "elegant"] },
    { c: "晟", py: "shèng", meaning: "光明兴盛，气象宏大", tags: ["bold", "modern"] },
    { c: "尧", py: "yáo", meaning: "圣明高远，心怀天下", tags: ["classic", "bold"] },
    { c: "岳", py: "yuè", meaning: "高山峻岭，沉稳可靠", tags: ["bold", "classic"] },
    { c: "朗", py: "lǎng", meaning: "明朗开阔，坦荡从容", tags: ["fresh", "modern"] },
    { c: "靖", py: "jìng", meaning: "安定从容，守正笃行", tags: ["classic", "elegant"] },
    { c: "昂", py: "áng", meaning: "气宇昂扬，奋发向上", tags: ["bold", "modern"] },
    { c: "冠", py: "guān", meaning: "卓然出众，独树一帜", tags: ["bold", "modern"] },
    { c: "峥", py: "zhēng", meaning: "峥嵘向上，锐意进取", tags: ["bold", "modern"] },
    { c: "元", py: "yuán", meaning: "一元初始，生生不息", tags: ["classic", "warm"] },
    { c: "弘", py: "hóng", meaning: "宏大深远，器量宽广", tags: ["bold", "classic"] },
    { c: "尚", py: "shàng", meaning: "崇尚高洁，品行端正", tags: ["classic", "elegant"] },
    { c: "蔚", py: "wèi", meaning: "文采蔚然，郁郁葱葱", tags: ["elegant", "classic"] },
    { c: "邈", py: "miǎo", meaning: "高远辽阔，志在千里", tags: ["elegant", "classic"] },
    { c: "璞", py: "pú", meaning: "返璞归真，自然纯粹", tags: ["fresh", "classic"] },
    { c: "铮", py: "zhēng", meaning: "刚正有声，铮铮铁骨", tags: ["bold", "cool"] },
    { c: "琛", py: "chēn", meaning: "珍宝可贵，温润难得", tags: ["elegant", "classic"] },
    { c: "稷", py: "jì", meaning: "五谷丰登，根基深厚", tags: ["classic", "warm"] },
    { c: "乾", py: "qián", meaning: "乾天广大，自强不息", tags: ["bold", "classic"] },
    { c: "彻", py: "chè", meaning: "透彻明达，洞见本真", tags: ["modern", "cool"] },
    { c: "翼", py: "yì", meaning: "展翅高飞，扶摇直上", tags: ["bold", "modern"] },
    { c: "衡", py: "héng", meaning: "持重有衡，张弛有度", tags: ["classic", "elegant"] },
    { c: "羲", py: "xī", meaning: "曦光初照，温润如春", tags: ["classic", "modern"] },
    { c: "若", py: "ruò", meaning: "从容若水，温柔坚定", tags: ["elegant", "modern"] },
    { c: "兮", py: "xī", meaning: "古典诗意，轻灵悠远", tags: ["classic", "elegant"] },
    { c: "沐", py: "mù", meaning: "如沐春风，明朗舒展", tags: ["fresh", "warm"] },
    { c: "涵", py: "hán", meaning: "涵养深厚，包容有度", tags: ["elegant", "classic"] },
    { c: "汐", py: "xī", meaning: "潮汐灵动，自在流转", tags: ["fresh", "elegant"] },
    { c: "舒", py: "shū", meaning: "舒展自在，从容安然", tags: ["warm", "elegant"] },
    { c: "萱", py: "xuān", meaning: "萱草忘忧，安然喜乐", tags: ["classic", "warm"] },
    { c: "茉", py: "mò", meaning: "茉莉清甜，温柔可人", tags: ["fresh", "cute"] },
    { c: "芮", py: "ruì", meaning: "草木繁盛，生机盎然", tags: ["fresh", "cute"] },
    { c: "禾", py: "hé", meaning: "禾苗生长，丰盈喜悦", tags: ["fresh", "warm"] },
    { c: "穗", py: "suì", meaning: "稻穗丰盈，五谷丰登", tags: ["warm", "fresh"] },
    { c: "安", py: "ān", meaning: "平安从容，岁月静好", tags: ["warm", "elegant"] },
    { c: "宇", py: "yǔ", meaning: "气宇轩昂，心怀宽广", tags: ["bold", "modern"] },
    { c: "宸", py: "chén", meaning: "星辰之居，尊贵明澈", tags: ["bold", "classic"] },
    { c: "林", py: "lín", meaning: "林木清秀，生机勃勃", tags: ["fresh", "classic"] },
    { c: "柏", py: "bǎi", meaning: "松柏常青，坚韧挺拔", tags: ["bold", "classic"] },
    { c: "诺", py: "nuò", meaning: "一诺千金，信守不渝", tags: ["bold", "elegant"] },
    { c: "一", py: "yī", meaning: "一生如一，纯粹专注", tags: ["modern", "elegant"] },
    { c: "佑", py: "yòu", meaning: "天佑福泽，平安顺遂", tags: ["warm", "bold"] },
    { c: "昕", py: "xīn", meaning: "黎明初光，朝气蓬勃", tags: ["fresh", "modern"] },
    { c: "昱", py: "yù", meaning: "日光温煦，明亮温暖", tags: ["modern", "warm"] }
  ],
  female: [
    { c: "晚", py: "wǎn", meaning: "温婉安然，岁月从容", tags: ["elegant", "classic", "warm"] },
    { c: "棠", py: "táng", meaning: "海棠明丽，春意丰盈", tags: ["elegant", "classic", "fresh"] },
    { c: "初", py: "chū", meaning: "初心澄澈，返璞归真", tags: ["fresh", "modern"] },
    { c: "芮", py: "ruì", meaning: "草木繁盛，生机盎然", tags: ["fresh", "cute"] },
    { c: "宁", py: "níng", meaning: "安宁恬淡，内心笃定", tags: ["elegant", "warm"] },
    { c: "语", py: "yǔ", meaning: "言语灵动，温声细语", tags: ["fresh", "cute"] },
    { c: "栀", py: "zhī", meaning: "栀子清雅，洁白芬芳", tags: ["elegant", "fresh"] },
    { c: "澈", py: "chè", meaning: "清澈明亮，通透纯净", tags: ["modern", "fresh"] },
    { c: "然", py: "rán", meaning: "安然自然，不争不扰", tags: ["elegant", "warm"] },
    { c: "芷", py: "zhǐ", meaning: "香草芬芳，高洁柔美", tags: ["elegant", "classic"] },
    { c: "吟", py: "yín", meaning: "吟咏诗意，灵秀文气", tags: ["classic", "elegant"] },
    { c: "晴", py: "qíng", meaning: "晴朗明媚，心怀暖阳", tags: ["fresh", "warm"] },
    { c: "茉", py: "mò", meaning: "茉莉清甜，温柔可人", tags: ["fresh", "cute"] },
    { c: "知", py: "zhī", meaning: "知性聪慧，明辨事理", tags: ["elegant", "modern"] },
    { c: "夏", py: "xià", meaning: "夏日热烈，蓬勃向上", tags: ["fresh", "modern"] },
    { c: "琳", py: "lín", meaning: "美玉生辉，光华内蕴", tags: ["modern", "bold"] },
    { c: "姝", py: "shū", meaning: "静美端丽，温婉娴雅", tags: ["classic", "elegant"] },
    { c: "安", py: "ān", meaning: "平安从容，岁月静好", tags: ["warm", "elegant"] },
    { c: "瑾", py: "jǐn", meaning: "怀瑾握瑜，品德高洁", tags: ["classic", "bold"] },
    { c: "珂", py: "kē", meaning: "似玉洁白，纯净无瑕", tags: ["modern", "elegant"] },
    { c: "沐", py: "mù", meaning: "如沐春风，明朗舒展", tags: ["fresh", "warm"] },
    { c: "星", py: "xīng", meaning: "星光璀璨，自带光芒", tags: ["modern", "bold"] },
    { c: "悦", py: "yuè", meaning: "欢悦明亮，笑靥如花", tags: ["fresh", "cute"] },
    { c: "澄", py: "chéng", meaning: "澄澈通透，心明如镜", tags: ["elegant", "modern"] },
    { c: "宛", py: "wǎn", meaning: "婉转清雅，姿态从容", tags: ["elegant", "classic"] },
    { c: "亦", py: "yì", meaning: "亦真亦美，自在丰盈", tags: ["modern", "elegant"] },
    { c: "嘉", py: "jiā", meaning: "嘉言善行，和顺美好", tags: ["bold", "classic"] },
    { c: "霏", py: "fēi", meaning: "雨雪霏霏，浪漫诗意", tags: ["classic", "fresh"] },
    { c: "禾", py: "hé", meaning: "禾苗生长，丰盈喜悦", tags: ["fresh", "warm"] },
    { c: "芝", py: "zhī", meaning: "灵芝祥瑞，福泽绵长", tags: ["classic", "cute"] },
    { c: "玥", py: "yuè", meaning: "神珠明月，珍贵纯净", tags: ["classic", "elegant"] },
    { c: "婠", py: "wān", meaning: "体态美好，灵动可爱", tags: ["classic", "cute"] },
    { c: "婉", py: "wǎn", meaning: "温婉清雅，柔美从容", tags: ["elegant", "warm"] },
    { c: "娉", py: "pīng", meaning: "娉婷美好，轻盈灵动", tags: ["elegant", "fresh"] },
    { c: "菡", py: "hàn", meaning: "荷花清雅，出淤泥而不染", tags: ["fresh", "classic"] },
    { c: "菁", py: "jīng", meaning: "草木精华，灵气充盈", tags: ["fresh", "elegant"] },
    { c: "若", py: "ruò", meaning: "从容若水，温柔坚定", tags: ["elegant", "modern"] },
    { c: "芙", py: "fú", meaning: "芙蓉明丽，清雅端庄", tags: ["fresh", "elegant"] },
    { c: "霓", py: "ní", meaning: "虹霓绚丽，璀璨夺目", tags: ["modern", "elegant"] },
    { c: "晗", py: "hán", meaning: "天将破晓，朝气初生", tags: ["modern", "fresh"] },
    { c: "蘅", py: "héng", meaning: "香草幽远，高洁芬芳", tags: ["classic", "elegant"] },
    { c: "恬", py: "tián", meaning: "恬静安然，岁月静好", tags: ["warm", "elegant"] },
    { c: "莞", py: "wǎn", meaning: "莞尔一笑，明朗可爱", tags: ["cute", "fresh"] },
    { c: "婳", py: "huà", meaning: "娴静美好，仪态端方", tags: ["classic", "elegant"] },
    { c: "妤", py: "yú", meaning: "柔美灵秀，温婉可人", tags: ["classic", "elegant"] },
    { c: "芃", py: "péng", meaning: "草木繁盛，生机蓬勃", tags: ["fresh", "bold"] },
    { c: "茗", py: "míng", meaning: "茶香清雅，恬淡从容", tags: ["classic", "fresh"] },
    { c: "槿", py: "jǐn", meaning: "木槿明媚，温柔坚韧", tags: ["fresh", "warm"] },
    { c: "珞", py: "luò", meaning: "美石温润，光而不耀", tags: ["elegant", "modern"] },
    { c: "璇", py: "xuán", meaning: "美玉流转，光华内蕴", tags: ["elegant", "modern"] },
    { c: "荞", py: "qiáo", meaning: "荞麦清新，质朴自然", tags: ["fresh", "warm"] },
    { c: "蕙", py: "huì", meaning: "蕙质兰心，清雅芬芳", tags: ["classic", "elegant"] },
    { c: "芸", py: "yún", meaning: "芸草芬芳，知性淡雅", tags: ["fresh", "elegant"] },
    { c: "荻", py: "dí", meaning: "荻花清秋，自由洒脱", tags: ["classic", "fresh"] },
    { c: "娴", py: "xián", meaning: "娴静文雅，气韵安然", tags: ["classic", "elegant"] },
    { c: "兮", py: "xī", meaning: "古典诗意，轻灵悠远", tags: ["classic", "elegant"] },
    { c: "璟", py: "jǐng", meaning: "玉之光彩，温润贵重", tags: ["elegant", "classic"] },
    { c: "砚", py: "yàn", meaning: "文墨砚台，沉静有度", tags: ["classic", "elegant"] },
    { c: "涵", py: "hán", meaning: "涵养深厚，包容有度", tags: ["elegant", "classic"] },
    { c: "清", py: "qīng", meaning: "清朗高洁，心性澄明", tags: ["fresh", "elegant"] },
    { c: "汐", py: "xī", meaning: "潮汐灵动，自在流转", tags: ["fresh", "elegant"] },
    { c: "予", py: "yǔ", meaning: "乐于给予，热忱真诚", tags: ["warm", "modern"] },
    { c: "舒", py: "shū", meaning: "舒展自在，从容安然", tags: ["warm", "elegant"] },
    { c: "萱", py: "xuān", meaning: "萱草忘忧，安然喜乐", tags: ["classic", "warm"] },
    { c: "穗", py: "suì", meaning: "稻穗丰盈，五谷丰登", tags: ["warm", "fresh"] },
    { c: "宇", py: "yǔ", meaning: "气宇轩昂，心怀宽广", tags: ["bold", "modern"] },
    { c: "宸", py: "chén", meaning: "星辰之居，尊贵明澈", tags: ["bold", "classic"] },
    { c: "林", py: "lín", meaning: "林木清秀，生机勃勃", tags: ["fresh", "classic"] },
    { c: "柏", py: "bǎi", meaning: "松柏常青，坚韧挺拔", tags: ["bold", "classic"] },
    { c: "泽", py: "zé", meaning: "润泽万物，仁厚宽广", tags: ["elegant", "warm"] },
    { c: "霖", py: "lín", meaning: "甘霖润物，福泽深厚", tags: ["elegant", "warm"] },
    { c: "诺", py: "nuò", meaning: "一诺千金，信守不渝", tags: ["bold", "elegant"] },
    { c: "一", py: "yī", meaning: "一生如一，纯粹专注", tags: ["modern", "elegant"] },
    { c: "辰", py: "chén", meaning: "星辰日月，辽阔光明", tags: ["bold", "modern"] },
    { c: "佑", py: "yòu", meaning: "天佑福泽，平安顺遂", tags: ["warm", "bold"] },
    { c: "昕", py: "xīn", meaning: "黎明初光，朝气蓬勃", tags: ["fresh", "modern"] },
    { c: "昱", py: "yù", meaning: "日光温煦，明亮温暖", tags: ["modern", "warm"] }
  ]
};

function mulberry32(seed) {
  let value = seed >>> 0;
  return function () {
    value += 0x6d2b79f5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(list, rng) {
  return list[Math.floor(rng() * list.length)];
}

function getGivenChars(name) {
  return [...name.trim()].slice(1);
}

function getReferenceItems(config) {
  const refs = [];
  const addReference = (char, source) => {
    let known = null;
    for (let i = 0; i < PARENT_REFERENCE.length; i++) {
      if (PARENT_REFERENCE[i].c === char) {
        known = PARENT_REFERENCE[i];
        break;
      }
    }
    if (!known) {
      const all = BABY_CHARS.male.concat(BABY_CHARS.female);
      for (let i = 0; i < all.length; i++) {
        if (all[i].c === char) {
          known = all[i];
          break;
        }
      }
    }
    refs.push({
      char,
      source,
      meaning: known ? known.meaning : `名字中的「${char}」`,
      tags: known ? known.tags : ["warm", "elegant"]
    });
  };
  const addNameReference = (name, source) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const chars = [...trimmed];
    const given = chars.slice(1);
    if (!given.length) {
      if (chars[0]) addReference(chars[0], source);
      return;
    }
    given.forEach((char) => addReference(char, source));
  };
  addNameReference(config.father, "父亲");
  addNameReference(config.mother, "母亲");
  return refs;
}

function getGroupedReferenceParts(config) {
  const parts = [];
  const addPart = (name, source) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const given = getGivenChars(name);
    parts.push({ source, text: given.length ? given.join("") : [...trimmed][0] });
  };
  addPart(config.father, "父亲");
  addPart(config.mother, "母亲");
  return parts;
}

function getGroupedReferencePrompt(config) {
  return getGroupedReferenceParts(config)
    .map((part) => `${part.source}名字中的「${part.text}」`)
    .join("；");
}

function getZodiac(year) {
  return ZODIAC_LIST[(((Number(year) - 4) % 12) + 12) % 12];
}

function getSeason(month) {
  const value = Number(month);
  if (value >= 3 && value <= 5) return "spring";
  if (value >= 6 && value <= 8) return "summer";
  if (value >= 9 && value <= 11) return "autumn";
  return "winter";
}

function getCandidatePool(config) {
  let pool = config.gender === "neutral" ? BABY_CHARS.male.concat(BABY_CHARS.female) : BABY_CHARS[config.gender];
  const excluded = new Set([...config.father.trim(), ...config.mother.trim()]);
  const withoutParentChars = pool.filter((item) => !excluded.has(item.c));
  if (withoutParentChars.length >= 6) {
    pool = withoutParentChars;
  }
  if (config.styles.length) {
    const styled = pool.filter((item) => item.tags.some((tag) => config.styles.includes(tag)));
    if (styled.length >= 6) {
      pool = styled;
    }
  }
  return pool;
}

function rankPool(pool, rng, config) {
  const refs = getReferenceItems(config);
  const refTags = [];
  refs.forEach((ref) => {
    ref.tags.forEach((tag) => {
      if (!refTags.includes(tag)) refTags.push(tag);
    });
  });
  const zodiacKey = `zodiac-${getZodiac(config.birthYear)}`;
  const seasonChars = SEASON_BONUS_CHARS[getSeason(config.birthMonth)] || [];
  return pool
    .map((item) => {
      let overlap = 0;
      item.tags.forEach((tag) => {
        if (refTags.includes(tag)) overlap++;
      });
      let matchesReference = false;
      if (refs.length) {
        matchesReference = refs.some(
          (ref) => item.meaning.includes(ref.char) || item.meaning.includes(ref.meaning.slice(0, 2))
        );
      }
      const categories = SPECIAL_CHAR_CATEGORIES[item.c] || [];
      const categoryBonus =
        (categories.includes(zodiacKey) ? 4 : 0) +
        (seasonChars.includes(item.c) ? 3 : 0) +
        (categories.includes("unisex") ? 1 : 0);
      return {
        item,
        score: overlap * 2 + (matchesReference ? 2 : 0) + categoryBonus + rng() * 6
      };
    })
    .sort((a, b) => b.score - a.score);
}

function pickGivenChars(rng, usedChars, config) {
  const pool = getCandidatePool(config);
  const ranked = rankPool(pool, rng, config);
  const length = config.length === "short" ? 1 : config.length === "long" ? 2 : rng() > 0.35 ? 2 : 1;
  const chosen = [];
  let attempts = 0;

  const pickRankedChar = () => {
    const freshRanked = ranked.filter((entry) => !usedChars.has(entry.item.c));
    const freshPool = pool.filter((item) => !usedChars.has(item.c));
    const rankedSource = freshRanked.length ? freshRanked : ranked;
    const poolSource = freshPool.length ? freshPool : pool;
    const topCount = Math.min(30, rankedSource.length);
    return rng() < 0.55 ? rankedSource[Math.floor(rng() * topCount)].item : pick(poolSource, rng);
  };

  while (chosen.length < length && attempts < length * 30) {
    attempts++;
    const candidate = pickRankedChar();
    if (!chosen.some((item) => item.c === candidate.c) && !usedChars.has(candidate.c)) {
      chosen.push(candidate);
      usedChars.add(candidate.c);
    }
  }

  while (chosen.length < length && ranked.length) {
    const candidate = ranked[chosen.length % ranked.length].item;
    if (!chosen.some((item) => item.c === candidate.c)) {
      chosen.push(candidate);
    } else {
      ranked.splice(chosen.length % ranked.length, 1);
    }
  }

  return chosen;
}

function getSurname(config) {
  const father = config.father.trim();
  const mother = config.mother.trim();
  const getLeadingSurname = (name) =>
    COMPOUND_SURNAMES.find((surname) => name.startsWith(surname)) || [...name][0];
  const fatherSurname = father ? getLeadingSurname(father) : "";
  const motherSurname = mother ? getLeadingSurname(mother) : "";
  const make = (surname) => (surname ? { s: surname, py: SURNAME_PINYIN[surname] || "·" } : null);

  if (config.surnameSource === "father") {
    return make(fatherSurname) || make(motherSurname);
  }
  if (config.surnameSource === "mother") {
    return make(motherSurname) || make(fatherSurname);
  }
  return null;
}

function makeName(rng, usedChars, config) {
  const surname = getSurname(config);
  const given = pickGivenChars(rng, usedChars, config);
  const refLine = getGroupedReferencePrompt(config);
  return {
    text: (surname ? surname.s : "") + given.map((char) => char.c).join(""),
    pinyin: [surname ? surname.py : "", ...given.map((char) => char.py)].filter(Boolean).join(" "),
    meaning: given.map((char) => char.meaning).join(" · "),
    tags: [...new Set(given.map((char) => char.tags).reduce((all, tags) => all.concat(tags), []))].slice(0, 2),
    refLine
  };
}

function generateNames(config) {
  const seed = Date.now() ^ Math.floor(Math.random() * 0xffffffff);
  const rng = mulberry32(seed);
  const names = [];
  const usedChars = new Set();
  let attempts = 0;
  while (names.length < config.count && attempts < config.count * 60) {
    attempts++;
    const candidate = makeName(rng, usedChars, config);
    if (!names.some((item) => item.text === candidate.text)) {
      names.push(candidate);
    }
  }
  while (names.length < config.count) {
    names.push(makeName(rng, usedChars, config));
  }
  return names.map((item) => {
    const tagLabels = item.tags.map((tag) => {
      const style = STYLE_OPTIONS.find((option) => option.id === tag);
      return style ? style.label : tag;
    });
    return Object.assign({}, item, { tagLabels });
  });
}

module.exports = {
  generateNames,
  getGroupedReferencePrompt,
  STYLE_OPTIONS
};
