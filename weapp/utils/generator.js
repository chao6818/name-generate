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


const CLASSIC_LINES = [
  { source: "《诗经》", line: "如月之恒，如日之升" },
  { source: "《诗经》", line: "有匪君子，如切如磋" },
  { source: "《诗经》", line: "桃之夭夭，灼灼其华" },
  { source: "《诗经》", line: "蒹葭苍苍，白露为霜" },
  { source: "《诗经》", line: "如竹苞矣，如松茂矣" },
  { source: "《楚辞》", line: "与天地兮同寿，与日月兮齐光" },
  { source: "《楚辞》", line: "纷吾既有此内美兮，又重之以修能" },
  { source: "《楚辞》", line: "乐莫乐兮新相知" },
  { source: "《荀子》", line: "不积跬步，无以至千里" },
  { source: "《尚书》", line: "功崇惟志，业广惟勤" },
  { source: "《论语》", line: "志于道，据于德，依于仁，游于艺" },
  { source: "《大学》", line: "苟日新，日日新，又日新" },
  { source: "唐诗", line: "长风破浪会有时，直挂云帆济沧海" },
  { source: "唐诗", line: "会当凌绝顶，一览众山小" },
  { source: "唐诗", line: "海内存知己，天涯若比邻" },
  { source: "宋词", line: "但愿人长久，千里共婵娟" },
  { source: "宋词", line: "何须浅碧深红色，自是花中第一流" },
  { source: "宋诗", line: "不畏浮云遮望眼，自缘身在最高层" },
  { source: "宋诗", line: "山重水复疑无路，柳暗花明又一村" }
];

const GENERATION_CHARS = {
  "贤": { py: "xián", meaning: "贤良方正，德才兼备" },
  "德": { py: "dé", meaning: "德行高尚，厚德载物" },
  "世": { py: "shì", meaning: "世代传承，继往开来" },
  "永": { py: "yǒng", meaning: "永续长存，坚定不移" },
  "忠": { py: "zhōng", meaning: "忠诚担当，光明磊落" },
  "孝": { py: "xiào", meaning: "孝亲仁厚，心怀感恩" },
  "仁": { py: "rén", meaning: "仁爱宽厚，温润有度" },
  "义": { py: "yì", meaning: "重义守信，气节端正" },
  "礼": { py: "lǐ", meaning: "知礼守正，谦和得体" },
  "智": { py: "zhì", meaning: "智慧通达，明辨事理" },
  "信": { py: "xìn", meaning: "诚信立身，言行如一" },
  "昌": { py: "chāng", meaning: "繁荣昌盛，光明兴旺" },
  "荣": { py: "róng", meaning: "欣欣向荣，前程光明" },
  "富": { py: "fù", meaning: "富足丰盈，安居乐业" },
  "贵": { py: "guì", meaning: "尊贵高雅，品行端方" },
  "邦": { py: "bāng", meaning: "安邦立业，胸怀家国" },
  "绍": { py: "shào", meaning: "绍继传承，继往开来" },
  "继": { py: "jì", meaning: "继往开来，绵延不息" },
  "延": { py: "yán", meaning: "绵延长久，福泽远长" },
  "宗": { py: "zōng", meaning: "宗德传家，根基深厚" },
  "鸿": { py: "hóng", meaning: "鸿业远图，志向高远" },
  "福": { py: "fú", meaning: "福泽绵长，平安顺遂" },
  "禄": { py: "lù", meaning: "福禄安康，生活丰盈" },
  "寿": { py: "shòu", meaning: "健康长寿，安然喜乐" },
  "祥": { py: "xiáng", meaning: "祥和如意，吉庆有余" },
  "立": { py: "lì", meaning: "立身立志，自立自强" },
  "正": { py: "zhèng", meaning: "正气浩然，守正笃行" },
  "英": { py: "yīng", meaning: "英姿飒爽，才华出众" },
  "杰": { py: "jié", meaning: "杰出卓越，出类拔萃" },
  "家": { py: "jiā", meaning: "家和美满，幸福安康" },
  "克": { py: "kè", meaning: "克勤克俭，自强不息" }
};

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
  "泽": ["unisex"], "霖": ["unisex"], "诺": ["unisex"], "一": ["unisex"],
  "辰": ["unisex"], "佑": ["unisex"], "昕": ["unisex"], "昱": ["unisex"]
};

const SEASON_BONUS_CHARS = {
  spring: ["萱", "茉", "芮", "禾", "穗", "林", "柏", "昕", "曦", "羲", "晗", "若", "兮"],
  summer: ["晴", "夏", "星", "澈", "沐", "芙", "朗", "晗", "航", "曦", "羲"],
  autumn: ["清", "汐", "澄", "澜", "玥", "禾", "穗", "荻"],
  winter: ["初", "安", "宁", "璞", "恬", "元"]
};

const FEMALE_ONLY_CHARS = new Set(["汐", "萱", "茉", "芮", "禾", "穗"]);
const MALE_ONLY_CHARS = new Set(["宇", "宸", "林", "柏"]);

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

const POPULAR_CHARS = [
  { c: "锦", py: "jǐn", meaning: "锦绣前程，光彩明亮", tags: ["bold", "elegant"] },
  { c: "程", py: "chéng", meaning: "鹏程万里，行稳致远", tags: ["bold", "modern"] },
  { c: "钰", py: "yù", meaning: "温润如玉，珍贵难得", tags: ["classic", "elegant"] },
  { c: "嘉", py: "jiā", meaning: "嘉言懿行，和顺美好", tags: ["bold", "classic"] },
  { c: "子", py: "zǐ", meaning: "子衿文雅，灵秀从容", tags: ["classic", "elegant"] },
  { c: "泓", py: "hóng", meaning: "泓澈清远，内秀沉稳", tags: ["fresh", "classic"] },
  { c: "楷", py: "kǎi", meaning: "楷模端正，立身有则", tags: ["bold", "classic"] },
  { c: "熙", py: "xī", meaning: "光明熙和，温暖明亮", tags: ["modern", "warm"] },
  { c: "赫", py: "hè", meaning: "显赫明亮，气象宏大", tags: ["bold", "modern"] },
  { c: "承", py: "chéng", meaning: "承继担当，行有方向", tags: ["bold", "classic"] },
  { c: "睿", py: "ruì", meaning: "睿智通达，思虑明远", tags: ["elegant", "modern"] },
  { c: "轩", py: "xuān", meaning: "气宇轩昂，俊朗开阔", tags: ["bold", "modern"] },
  { c: "逸", py: "yì", meaning: "飘逸洒脱，自在从容", tags: ["elegant", "modern"] },
  { c: "帆", py: "fān", meaning: "云帆济海，乘风破浪", tags: ["bold", "fresh"] },
  { c: "然", py: "rán", meaning: "安然自在，不争不扰", tags: ["warm", "elegant"] },
  { c: "瑞", py: "ruì", meaning: "祥瑞安康，福泽绵长", tags: ["warm", "classic"] },
  { c: "烨", py: "yè", meaning: "光华盛放，温暖明亮", tags: ["bold", "warm"] },
  { c: "皓", py: "hào", meaning: "皓月当空，清澈高远", tags: ["elegant", "classic"] },
  { c: "彬", py: "bīn", meaning: "文质彬彬，温润有礼", tags: ["classic", "elegant"] },
  { c: "越", py: "yuè", meaning: "卓越向前，不断超越", tags: ["bold", "modern"] },
  { c: "哲", py: "zhé", meaning: "哲思明辨，智慧通透", tags: ["classic", "elegant"] },
  { c: "源", py: "yuán", meaning: "源远流长，根基深厚", tags: ["classic", "warm"] },
  { c: "星", py: "xīng", meaning: "星光璀璨，自带光芒", tags: ["modern", "bold"] },
  { c: "阳", py: "yáng", meaning: "阳光明朗，温暖向上", tags: ["fresh", "warm"] },
  { c: "文", py: "wén", meaning: "文采斐然，博学知礼", tags: ["classic", "elegant"] },
  { c: "俊", py: "jùn", meaning: "俊逸挺拔，风度翩翩", tags: ["modern", "elegant"] },
  { c: "毅", py: "yì", meaning: "坚毅果敢，笃行不怠", tags: ["bold", "modern"] },
  { c: "成", py: "chéng", meaning: "成长有成，心想事成", tags: ["warm", "modern"] },
  { c: "珩", py: "héng", meaning: "玉之美光，温润贵重", tags: ["elegant", "classic"] },
  { c: "墨", py: "mò", meaning: "翰墨书香，文气深厚", tags: ["classic", "elegant"] },
  { c: "昀", py: "yún", meaning: "日光温润，明朗和煦", tags: ["fresh", "modern"] },
  { c: "鹤", py: "hè", meaning: "鹤立清远，高洁自在", tags: ["bold", "elegant"] },
  { c: "树", py: "shù", meaning: "树德立人，挺拔向上", tags: ["bold", "classic"] },
  { c: "之", py: "zhī", meaning: "行远自迩，谦逊有度", tags: ["classic", "elegant"] },
  { c: "少", py: "shào", meaning: "少怀壮志，意气风发", tags: ["bold", "modern"] },
  { c: "商", py: "shāng", meaning: "商星明朗，志向高远", tags: ["classic", "elegant"] },
  { c: "野", py: "yě", meaning: "星野辽阔，自由舒展", tags: ["modern", "fresh"] },
  { c: "微", py: "wēi", meaning: "见微知著，洞明通透", tags: ["classic", "elegant"] },
  { c: "行", py: "xíng", meaning: "笃行致远，知行合一", tags: ["bold", "classic"] },
  { c: "慎", py: "shèn", meaning: "慎思笃行，稳重可靠", tags: ["classic", "elegant"] },
  { c: "华", py: "huá", meaning: "光华灿烂，气度不凡", tags: ["bold", "classic"] },
  { c: "佩", py: "pèi", meaning: "玉佩温润，品德高洁", tags: ["elegant", "classic"] },
  { c: "江", py: "jiāng", meaning: "江海辽阔，胸怀宽广", tags: ["bold", "fresh"] },
  { c: "离", py: "lí", meaning: "离离青翠，蓬勃向上", tags: ["fresh", "elegant"] },
  { c: "梓", py: "zǐ", meaning: "桑梓故里，扎根成长", tags: ["classic", "warm"] },
  { c: "懿", py: "yì", meaning: "懿德嘉行，品性端方", tags: ["classic", "elegant"] },
  { c: "城", py: "chéng", meaning: "众志成城，坚定有力", tags: ["bold", "warm"] },
  { c: "驰", py: "chí", meaning: "驰骋千里，自由奔放", tags: ["bold", "modern"] },
  { c: "凡", py: "fán", meaning: "不凡自在，从容笃定", tags: ["modern", "elegant"] },
  { c: "曦", py: "xī", meaning: "晨曦初照，朝气蓬勃", tags: ["fresh", "warm"] },
  { c: "明", py: "míng", meaning: "光明通达，心性澄明", tags: ["bold", "classic"] },
  { c: "志", py: "zhì", meaning: "志存高远，心怀梦想", tags: ["bold", "classic"] },
  { c: "远", py: "yuǎn", meaning: "行稳致远，目光长远", tags: ["bold", "classic"] },
  { c: "风", py: "fēng", meaning: "风清月朗，洒脱自在", tags: ["fresh", "elegant"] },
  { c: "舟", py: "zhōu", meaning: "云舟远航，乘风破浪", tags: ["bold", "fresh"] },
  { c: "山", py: "shān", meaning: "山高水长，沉稳坚定", tags: ["bold", "classic"] },
  { c: "言", py: "yán", meaning: "言而有信，温文知礼", tags: ["elegant", "classic"] },
  { c: "瑶", py: "yáo", meaning: "瑶光璀璨，珍贵纯净", tags: ["elegant", "modern"] },
  { c: "妍", py: "yán", meaning: "妍丽灵动，明媚动人", tags: ["fresh", "elegant"] },
  { c: "诗", py: "shī", meaning: "诗意盎然，文雅灵秀", tags: ["classic", "elegant"] },
  { c: "欣", py: "xīn", meaning: "欣然欢喜，朝气蓬勃", tags: ["fresh", "warm"] },
  { c: "怡", py: "yí", meaning: "心旷神怡，安然喜乐", tags: ["elegant", "warm"] },
  { c: "思", py: "sī", meaning: "善思明辨，聪慧通透", tags: ["elegant", "modern"] },
  { c: "桐", py: "tóng", meaning: "梧桐高洁，正直向上", tags: ["classic", "elegant"] },
  { c: "念", py: "niàn", meaning: "念想温存，心怀美好", tags: ["warm", "elegant"] },
  { c: "意", py: "yì", meaning: "意趣盎然，丰盈自在", tags: ["elegant", "modern"] },
  { c: "以", py: "yǐ", meaning: "以此启新，生生不息", tags: ["modern", "fresh"] },
  { c: "月", py: "yuè", meaning: "明月清辉，纯净高远", tags: ["classic", "elegant"] },
  { c: "洛", py: "luò", meaning: "洛水灵动，温润清雅", tags: ["fresh", "classic"] },
  { c: "璃", py: "lí", meaning: "琉璃通透，晶莹明亮", tags: ["modern", "fresh"] },
  { c: "芊", py: "qiān", meaning: "芊蔚葱茏，生机盎然", tags: ["fresh", "cute"] },
  { c: "云", py: "yún", meaning: "云卷云舒，舒展自在", tags: ["fresh", "elegant"] },
  { c: "乔", py: "qiáo", meaning: "乔木挺拔，向上生长", tags: ["fresh", "classic"] },
  { c: "南", py: "nán", meaning: "向阳而生，明朗开阔", tags: ["fresh", "warm"] },
  { c: "欢", py: "huān", meaning: "欢喜洋溢，明朗可爱", tags: ["fresh", "cute"] },
  { c: "梦", py: "mèng", meaning: "梦想可期，心怀远方", tags: ["modern", "elegant"] },
  { c: "琪", py: "qí", meaning: "美玉珍贵，光彩内蕴", tags: ["elegant", "classic"] },
  { c: "衿", py: "jīn", meaning: "青青子衿，文雅灵动", tags: ["classic", "elegant"] },
  { c: "乐", py: "lè", meaning: "乐享人生，明朗欢快", tags: ["warm", "fresh"] },
  { c: "颖", py: "yǐng", meaning: "聪颖出众，灵气通透", tags: ["modern", "bold"] },
  { c: "雅", py: "yǎ", meaning: "雅正大方，气质从容", tags: ["elegant", "classic"] },
  { c: "馨", py: "xīn", meaning: "温馨馨香，美好和乐", tags: ["warm", "fresh"] },
  { c: "楠", py: "nán", meaning: "楠木高直，坚韧挺拔", tags: ["classic", "bold"] },
  { c: "嫣", py: "yān", meaning: "嫣然一笑，明媚可爱", tags: ["fresh", "cute"] },
  { c: "洁", py: "jié", meaning: "洁白纯净，心性澄明", tags: ["fresh", "elegant"] },
  { c: "静", py: "jìng", meaning: "安静从容，内心笃定", tags: ["elegant", "classic"] },
  { c: "雪", py: "xuě", meaning: "冰雪纯净，清雅高洁", tags: ["fresh", "elegant"] },
  { c: "彤", py: "tóng", meaning: "彤云满天，温暖明亮", tags: ["bold", "warm"] },
  { c: "亦", py: "yì", meaning: "亦真亦美，自在丰盈", tags: ["modern", "elegant"] },
  { c: "可", py: "kě", meaning: "可心可意，明朗可爱", tags: ["fresh", "warm"] },
  { c: "婷", py: "tíng", meaning: "婷婷玉立，秀美从容", tags: ["elegant", "fresh"] },
  { c: "佳", py: "jiā", meaning: "佳美圆满，和顺幸福", tags: ["fresh", "warm"] },
  { c: "雨", py: "yǔ", meaning: "润物无声，温柔澄澈", tags: ["fresh", "elegant"] },
  { c: "紫", py: "zǐ", meaning: "紫气东来，祥瑞高远", tags: ["classic", "warm"] },
  { c: "奕", py: "yì", meaning: "神采奕奕，俊朗有光", tags: ["modern", "bold"] },
  { c: "和", py: "hé", meaning: "和顺安康，温润有度", tags: ["warm", "elegant"] },
  { c: "景", py: "jǐng", meaning: "风景清朗，光明高远", tags: ["elegant", "fresh"] },
  { c: "浩", py: "hào", meaning: "浩荡开阔，气度不凡", tags: ["bold", "classic"] },
  { c: "骏", py: "jùn", meaning: "骏马奔腾，昂扬向上", tags: ["bold", "modern"] },
  { c: "宥", py: "yòu", meaning: "宽宥仁厚，气度从容", tags: ["warm", "classic"] },
  { c: "柠", py: "níng", meaning: "柠香清新，明朗可爱", tags: ["fresh", "cute"] },
  { c: "伊", py: "yī", meaning: "伊人美好，温婉灵动", tags: ["elegant", "fresh"] },
  { c: "艺", py: "yì", meaning: "才艺出众，灵气丰盈", tags: ["modern", "elegant"] },
  { c: "浠", py: "xī", meaning: "浠水清润，灵动温婉", tags: ["fresh", "elegant"] },
  { c: "珺", py: "jùn", meaning: "美玉生辉，温润贵重", tags: ["elegant", "classic"] },
  { c: "依", py: "yī", meaning: "依暖相随，柔美可人", tags: ["warm", "fresh"] },
  { c: "苡", py: "yǐ", meaning: "薏苡清芬，柔韧自在", tags: ["fresh", "elegant"] },
  { c: "沫", py: "mò", meaning: "水沫清浅，晶莹灵动", tags: ["fresh", "elegant"] },
  { c: "心", py: "xīn", meaning: "心性澄明，温暖纯良", tags: ["warm", "modern"] },
  { c: "品", py: "pǐn", meaning: "品性端方，气质高雅", tags: ["classic", "elegant"] },
  { c: "菲", py: "fēi", meaning: "芳菲满园，明媚清雅", tags: ["fresh", "elegant"] },
  { c: "咏", py: "yǒng", meaning: "咏怀明志，诗意从容", tags: ["classic", "elegant"] },
  { c: "恩", py: "ēn", meaning: "恩泽绵长，心怀感恩", tags: ["warm", "classic"] },
  { c: "硕", py: "shuò", meaning: "硕学丰才，成果斐然", tags: ["bold", "classic"] },
  { c: "廷", py: "tíng", meaning: "廷立端方，气度从容", tags: ["bold", "classic"] },
  { c: "允", py: "yǔn", meaning: "允恭克让，诚信和顺", tags: ["classic", "elegant"] },
  { c: "怀", py: "huái", meaning: "怀瑾握瑜，心怀高远", tags: ["classic", "bold"] },
  { c: "希", py: "xī", meaning: "希冀美好，前程可期", tags: ["fresh", "modern"] },
  { c: "润", py: "rùn", meaning: "温润如玉，泽被深远", tags: ["warm", "elegant"] },
  { c: "青", py: "qīng", meaning: "青翠明朗，朝气蓬勃", tags: ["fresh", "classic"] },
  { c: "潼", py: "tóng", meaning: "潼关高远，山水清朗", tags: ["classic", "fresh"] },
  { c: "扶", py: "fú", meaning: "扶摇直上，蓬勃向上", tags: ["bold", "modern"] },
  { c: "苏", py: "sū", meaning: "万物复苏，从容明朗", tags: ["fresh", "classic"] },
  { c: "鹿", py: "lù", meaning: "呦呦鹿鸣，自然纯真", tags: ["fresh", "classic"] },
  { c: "鸣", py: "míng", meaning: "一鸣惊人，声名远扬", tags: ["bold", "modern"] },
  { c: "晨", py: "chén", meaning: "晨光熹微，朝气蓬勃", tags: ["fresh", "warm"] },
  { c: "慕", py: "mù", meaning: "慕贤向善，心怀美好", tags: ["elegant", "modern"] },
  { c: "天", py: "tiān", meaning: "天地辽阔，气象宏大", tags: ["bold", "modern"] },
  { c: "瀚", py: "hàn", meaning: "瀚海无垠，胸襟宽广", tags: ["bold", "classic"] },
  { c: "禹", py: "yǔ", meaning: "大禹治水，担当有为", tags: ["bold", "classic"] },
  { c: "圣", py: "shèng", meaning: "圣明通达，卓尔不凡", tags: ["bold", "classic"] },
  { c: "夕", py: "xī", meaning: "夕阳晚霞，浪漫从容", tags: ["fresh", "elegant"] },
  { c: "彦", py: "yàn", meaning: "彦士俊才，文质彬彬", tags: ["classic", "elegant"] },
  { c: "康", py: "kāng", meaning: "康宁安康，顺遂喜悦", tags: ["warm", "classic"] },
  { c: "溪", py: "xī", meaning: "溪水清冽，灵动自在", tags: ["fresh", "elegant"] },
  { c: "见", py: "jiàn", meaning: "见微知著，明辨通达", tags: ["classic", "elegant"] }
];

const POPULAR_CHAR_GENDER = {
  "锦": "a", "程": "m", "钰": "a", "嘉": "m", "子": "a", "泓": "m", "楷": "m",
  "熙": "m", "赫": "m", "承": "m", "睿": "m", "轩": "m", "逸": "m", "帆": "m",
  "然": "a", "瑞": "m", "烨": "m", "皓": "m", "彬": "m", "越": "m", "哲": "m",
  "源": "m", "星": "a", "阳": "m", "文": "m", "俊": "m", "毅": "m", "成": "m",
  "珩": "m", "墨": "m", "昀": "m", "鹤": "m", "树": "m", "之": "m", "少": "m",
  "商": "m", "野": "m", "微": "m", "行": "m", "慎": "m", "华": "m", "佩": "m",
  "江": "m", "离": "m", "梓": "a", "懿": "m", "城": "m", "驰": "m", "凡": "m",
  "曦": "f", "明": "a", "志": "m", "远": "m", "风": "m", "舟": "m", "山": "m",
  "言": "m", "瑶": "f", "妍": "f", "诗": "f", "欣": "f", "怡": "f", "思": "f",
  "桐": "f", "念": "f", "意": "f", "以": "f", "月": "f", "洛": "f", "璃": "f",
  "芊": "f", "云": "a", "乔": "f", "南": "a", "欢": "f", "梦": "f", "琪": "f",
  "衿": "f", "乐": "f", "颖": "f", "雅": "f", "馨": "f", "楠": "f", "嫣": "f",
  "洁": "f", "静": "f", "雪": "f", "彤": "f", "亦": "f",
  "可": "f", "婷": "f", "佳": "f", "雨": "f", "紫": "f",
  "奕": "m", "和": "a", "景": "m", "浩": "m", "骏": "m",
  "宥": "a", "柠": "f", "伊": "f", "艺": "a", "浠": "f", "珺": "a",
  "依": "f", "苡": "f", "沫": "f", "心": "a", "品": "a", "菲": "f",
  "咏": "a", "恩": "a", "硕": "m", "廷": "m", "允": "a", "怀": "a",
  "希": "f", "润": "a", "青": "a", "潼": "a", "扶": "m", "苏": "a",
  "鹿": "a", "鸣": "m", "晨": "a", "慕": "a", "天": "a", "瀚": "m",
  "禹": "m", "圣": "m", "夕": "f", "彦": "a", "康": "a", "溪": "a",
  "见": "a"
};

const POPULAR_NAMES = [
  { n: "锦程", py: "jǐn chéng", g: "m", t: ["bold", "modern"] },
  { n: "沐宸", py: "mù chén", g: "m", t: ["fresh", "bold"] },
  { n: "铭泽", py: "míng zé", g: "m", t: ["classic", "warm"] },
  { n: "浩宇", py: "hào yǔ", g: "m", t: ["bold", "modern"] },
  { n: "奕辰", py: "yì chén", g: "m", t: ["modern", "bold"] },
  { n: "瑞泽", py: "ruì zé", g: "m", t: ["warm", "classic"] },
  { n: "沐阳", py: "mù yáng", g: "m", t: ["fresh", "warm"] },
  { n: "星辰", py: "xīng chén", g: "m", t: ["modern", "bold"] },
  { n: "钧泽", py: "jūn zé", g: "m", t: ["bold", "classic"] },
  { n: "昱珩", py: "yù héng", g: "m", t: ["modern", "elegant"] },
  { n: "铭宇", py: "míng yǔ", g: "m", t: ["classic", "bold"] },
  { n: "泽楷", py: "zé kǎi", g: "m", t: ["warm", "classic"] },
  { n: "予安", py: "yǔ ān", g: "a", t: ["warm", "elegant"] },
  { n: "一诺", py: "yī nuò", g: "a", t: ["modern", "bold"] },
  { n: "承宇", py: "chéng yǔ", g: "m", t: ["bold", "classic"] },
  { n: "宇辰", py: "yǔ chén", g: "m", t: ["modern", "bold"] },
  { n: "峻霖", py: "jùn lín", g: "m", t: ["bold", "warm"] },
  { n: "泽安", py: "zé ān", g: "m", t: ["warm", "elegant"] },
  { n: "屹川", py: "yì chuān", g: "m", t: ["bold", "modern"] },
  { n: "承泽", py: "chéng zé", g: "m", t: ["classic", "warm"] },
  { n: "子墨", py: "zǐ mò", g: "m", t: ["classic", "elegant"] },
  { n: "若昀", py: "ruò yún", g: "m", t: ["elegant", "modern"] },
  { n: "景行", py: "jǐng xíng", g: "m", t: ["classic", "bold"] },
  { n: "鹤轩", py: "hè xuān", g: "m", t: ["bold", "elegant"] },
  { n: "弘毅", py: "hóng yì", g: "m", t: ["bold", "classic"] },
  { n: "嘉树", py: "jiā shù", g: "m", t: ["bold", "classic"] },
  { n: "之恒", py: "zhī héng", g: "m", t: ["classic", "elegant"] },
  { n: "少商", py: "shào shāng", g: "m", t: ["classic", "modern"] },
  { n: "星野", py: "xīng yě", g: "m", t: ["modern", "cool"] },
  { n: "知微", py: "zhī wēi", g: "m", t: ["classic", "elegant"] },
  { n: "南风", py: "nán fēng", g: "m", t: ["fresh", "warm"] },
  { n: "行之", py: "xíng zhī", g: "m", t: ["bold", "classic"] },
  { n: "慎言", py: "shèn yán", g: "m", t: ["classic", "elegant"] },
  { n: "昭华", py: "zhāo huá", g: "m", t: ["classic", "bold"] },
  { n: "启明", py: "qǐ míng", g: "m", t: ["modern", "bold"] },
  { n: "云舟", py: "yún zhōu", g: "m", t: ["fresh", "bold"] },
  { n: "知远", py: "zhī yuǎn", g: "m", t: ["classic", "bold"] },
  { n: "望舒", py: "wàng shū", g: "m", t: ["classic", "elegant"] },
  { n: "南山", py: "nán shān", g: "m", t: ["bold", "classic"] },
  { n: "江离", py: "jiāng lí", g: "m", t: ["fresh", "classic"] },
  { n: "子佩", py: "zǐ pèi", g: "m", t: ["classic", "elegant"] },
  { n: "清和", py: "qīng hé", g: "m", t: ["elegant", "classic"] },
  { n: "明轩", py: "míng xuān", g: "m", t: ["bold", "modern"] },
  { n: "亦辰", py: "yì chén", g: "m", t: ["modern", "bold"] },
  { n: "俊泽", py: "jùn zé", g: "m", t: ["modern", "warm"] },
  { n: "奕宸", py: "yì chén", g: "m", t: ["modern", "bold"] },
  { n: "宇泽", py: "yǔ zé", g: "m", t: ["bold", "warm"] },
  { n: "嘉懿", py: "jiā yì", g: "m", t: ["bold", "classic"] },
  { n: "梓睿", py: "zǐ ruì", g: "m", t: ["classic", "modern"] },
  { n: "明哲", py: "míng zhé", g: "m", t: ["classic", "elegant"] },
  { n: "浩然", py: "hào rán", g: "m", t: ["bold", "classic"] },
  { n: "博文", py: "bó wén", g: "m", t: ["classic", "elegant"] },
  { n: "思远", py: "sī yuǎn", g: "m", t: ["elegant", "bold"] },
  { n: "泽霖", py: "zé lín", g: "m", t: ["warm", "elegant"] },
  { n: "煜城", py: "yù chéng", g: "m", t: ["bold", "warm"] },
  { n: "睿哲", py: "ruì zhé", g: "m", t: ["elegant", "classic"] },
  { n: "书言", py: "shū yán", g: "m", t: ["classic", "elegant"] },
  { n: "骏驰", py: "jùn chí", g: "m", t: ["bold", "modern"] },
  { n: "一凡", py: "yī fán", g: "m", t: ["modern", "elegant"] },
  { n: "宇轩", py: "yǔ xuān", g: "m", t: ["bold", "modern"] },
  { n: "景逸", py: "jǐng yì", g: "m", t: ["elegant", "modern"] },
  { n: "云帆", py: "yún fān", g: "m", t: ["fresh", "bold"] },
  { n: "星宇", py: "xīng yǔ", g: "m", t: ["modern", "bold"] },
  { n: "宇航", py: "yǔ háng", g: "m", t: ["bold", "modern"] },
  { n: "辰逸", py: "chén yì", g: "m", t: ["modern", "elegant"] },
  { n: "思成", py: "sī chéng", g: "m", t: ["elegant", "warm"] },
  { n: "志远", py: "zhì yuǎn", g: "m", t: ["bold", "classic"] },
  { n: "嘉禾", py: "jiā hé", g: "a", t: ["warm", "fresh"] },
  { n: "雨桐", py: "yǔ tóng", g: "f", t: ["fresh", "elegant"] },
  { n: "书瑶", py: "shū yáo", g: "f", t: ["classic", "elegant"] },
  { n: "欣怡", py: "xīn yí", g: "f", t: ["fresh", "warm"] },
  { n: "梓涵", py: "zǐ hán", g: "f", t: ["classic", "elegant"] },
  { n: "子涵", py: "zǐ hán", g: "f", t: ["elegant", "warm"] },
  { n: "昕玥", py: "xīn yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "汐玥", py: "xī yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "沐瑶", py: "mù yáo", g: "f", t: ["fresh", "elegant"] },
  { n: "钰涵", py: "yù hán", g: "f", t: ["elegant", "classic"] },
  { n: "沐妍", py: "mù yán", g: "f", t: ["fresh", "elegant"] },
  { n: "诗瑶", py: "shī yáo", g: "f", t: ["classic", "elegant"] },
  { n: "锦汐", py: "jǐn xī", g: "f", t: ["bold", "fresh"] },
  { n: "若曦", py: "ruò xī", g: "f", t: ["elegant", "fresh"] },
  { n: "清欢", py: "qīng huān", g: "f", t: ["fresh", "warm"] },
  { n: "知意", py: "zhī yì", g: "f", t: ["elegant", "modern"] },
  { n: "晚吟", py: "wǎn yín", g: "f", t: ["elegant", "classic"] },
  { n: "初晴", py: "chū qíng", g: "f", t: ["fresh", "warm"] },
  { n: "禾穗", py: "hé suì", g: "f", t: ["warm", "fresh"] },
  { n: "芷若", py: "zhǐ ruò", g: "f", t: ["classic", "elegant"] },
  { n: "南乔", py: "nán qiáo", g: "f", t: ["fresh", "classic"] },
  { n: "安然", py: "ān rán", g: "f", t: ["warm", "elegant"] },
  { n: "语汐", py: "yǔ xī", g: "f", t: ["fresh", "elegant"] },
  { n: "佳禾", py: "jiā hé", g: "f", t: ["fresh", "warm"] },
  { n: "思语", py: "sī yǔ", g: "f", t: ["elegant", "fresh"] },
  { n: "星瑶", py: "xīng yáo", g: "f", t: ["modern", "elegant"] },
  { n: "悦宁", py: "yuè níng", g: "f", t: ["fresh", "warm"] },
  { n: "婉清", py: "wǎn qīng", g: "f", t: ["elegant", "classic"] },
  { n: "若汐", py: "ruò xī", g: "f", t: ["elegant", "fresh"] },
  { n: "梦瑶", py: "mèng yáo", g: "f", t: ["elegant", "modern"] },
  { n: "佳琪", py: "jiā qí", g: "f", t: ["fresh", "elegant"] },
  { n: "欣妍", py: "xīn yán", g: "f", t: ["fresh", "elegant"] },
  { n: "诗涵", py: "shī hán", g: "f", t: ["classic", "elegant"] },
  { n: "雨欣", py: "yǔ xīn", g: "f", t: ["fresh", "warm"] },
  { n: "欣彤", py: "xīn tóng", g: "f", t: ["fresh", "warm"] },
  { n: "子衿", py: "zǐ jīn", g: "f", t: ["classic", "elegant"] },
  { n: "明玥", py: "míng yuè", g: "f", t: ["elegant", "classic"] },
  { n: "云舒", py: "yún shū", g: "f", t: ["fresh", "elegant"] },
  { n: "念安", py: "niàn ān", g: "f", t: ["warm", "elegant"] },
  { n: "以宁", py: "yǐ níng", g: "f", t: ["modern", "warm"] },
  { n: "洛璃", py: "luò lí", g: "f", t: ["fresh", "modern"] },
  { n: "芃芃", py: "péng péng", g: "f", t: ["fresh", "bold"] },
  { n: "乐瑶", py: "lè yáo", g: "f", t: ["warm", "elegant"] },
  { n: "安琪", py: "ān qí", g: "f", t: ["warm", "elegant"] },
  { n: "思颖", py: "sī yǐng", g: "f", t: ["elegant", "modern"] },
  { n: "舒雅", py: "shū yǎ", g: "f", t: ["elegant", "classic"] },
  { n: "静怡", py: "jìng yí", g: "f", t: ["elegant", "warm"] },
  { n: "紫萱", py: "zǐ xuān", g: "f", t: ["classic", "warm"] },
  { n: "可馨", py: "kě xīn", g: "f", t: ["fresh", "warm"] },
  { n: "若楠", py: "ruò nán", g: "f", t: ["elegant", "classic"] },
  { n: "梦洁", py: "mèng jié", g: "f", t: ["fresh", "elegant"] },
  { n: "佳怡", py: "jiā yí", g: "f", t: ["fresh", "warm"] },
  { n: "婉婷", py: "wǎn tíng", g: "f", t: ["elegant", "fresh"] },
  { n: "雨涵", py: "yǔ hán", g: "f", t: ["fresh", "elegant"] },
  { n: "欣悦", py: "xīn yuè", g: "f", t: ["fresh", "warm"] },
  { n: "若彤", py: "ruò tóng", g: "f", t: ["elegant", "warm"] },
  { n: "思琪", py: "sī qí", g: "f", t: ["elegant", "classic"] },
  { n: "雪晴", py: "xuě qíng", g: "f", t: ["fresh", "warm"] },
  { n: "芷晴", py: "zhǐ qíng", g: "f", t: ["fresh", "elegant"] },
  { n: "语嫣", py: "yǔ yān", g: "f", t: ["fresh", "elegant"] },
  { n: "雅静", py: "yǎ jìng", g: "f", t: ["elegant", "classic"] },
  { n: "乐彤", py: "lè tóng", g: "f", t: ["warm", "fresh"] },
  { n: "思涵", py: "sī hán", g: "f", t: ["elegant", "classic"] },
  { n: "锦萱", py: "jǐn xuān", g: "f", t: ["bold", "warm"] },
  { n: "芊芊", py: "qiān qiān", g: "f", t: ["fresh", "cute"] },
  { n: "景琛", py: "jǐng chēn", g: "m", t: ["elegant", "classic"] },
  { n: "书衡", py: "shū héng", g: "m", t: ["classic", "elegant"] },
  { n: "承峻", py: "chéng jùn", g: "m", t: ["bold", "classic"] },
  { n: "泽谦", py: "zé qiān", g: "m", t: ["warm", "elegant"] },
  { n: "宇琛", py: "yǔ chēn", g: "m", t: ["bold", "elegant"] },
  { n: "铭川", py: "míng chuān", g: "m", t: ["classic", "bold"] },
  { n: "睿川", py: "ruì chuān", g: "m", t: ["modern", "bold"] },
  { n: "泽瑞", py: "zé ruì", g: "m", t: ["warm", "classic"] },
  { n: "嘉铭", py: "jiā míng", g: "m", t: ["bold", "classic"] },
  { n: "子谦", py: "zǐ qiān", g: "m", t: ["elegant", "classic"] },
  { n: "文谦", py: "wén qiān", g: "m", t: ["classic", "elegant"] },
  { n: "明谦", py: "míng qiān", g: "m", t: ["classic", "elegant"] },
  { n: "志承", py: "zhì chéng", g: "m", t: ["bold", "classic"] },
  { n: "承远", py: "chéng yuǎn", g: "m", t: ["bold", "classic"] },
  { n: "启航", py: "qǐ háng", g: "m", t: ["bold", "modern"] },
  { n: "启睿", py: "qǐ ruì", g: "m", t: ["modern", "elegant"] },
  { n: "博睿", py: "bó ruì", g: "m", t: ["bold", "modern"] },
  { n: "博远", py: "bó yuǎn", g: "m", t: ["bold", "classic"] },
  { n: "弘远", py: "hóng yuǎn", g: "m", t: ["bold", "classic"] },
  { n: "源远", py: "yuán yuǎn", g: "m", t: ["classic", "bold"] },
  { n: "源川", py: "yuán chuān", g: "m", t: ["classic", "fresh"] },
  { n: "泽川", py: "zé chuān", g: "m", t: ["warm", "bold"] },
  { n: "泓泽", py: "hóng zé", g: "m", t: ["fresh", "warm"] },
  { n: "泓远", py: "hóng yuǎn", g: "m", t: ["fresh", "classic"] },
  { n: "睿博", py: "ruì bó", g: "m", t: ["modern", "bold"] },
  { n: "博宇", py: "bó yǔ", g: "m", t: ["bold", "modern"] },
  { n: "宇博", py: "yǔ bó", g: "m", t: ["bold", "modern"] },
  { n: "明博", py: "míng bó", g: "m", t: ["classic", "bold"] },
  { n: "文博", py: "wén bó", g: "m", t: ["classic", "elegant"] },
  { n: "俊博", py: "jùn bó", g: "m", t: ["modern", "bold"] },
  { n: "俊宇", py: "jùn yǔ", g: "m", t: ["modern", "bold"] },
  { n: "俊贤", py: "jùn xián", g: "m", t: ["modern", "classic"] },
  { n: "贤宇", py: "xián yǔ", g: "m", t: ["classic", "bold"] },
  { n: "贤承", py: "xián chéng", g: "m", t: ["classic", "bold"] },
  { n: "嘉贤", py: "jiā xián", g: "m", t: ["bold", "classic"] },
  { n: "轩铭", py: "xuān míng", g: "m", t: ["bold", "classic"] },
  { n: "铭轩", py: "míng xuān", g: "m", t: ["classic", "bold"] },
  { n: "逸轩", py: "yì xuān", g: "m", t: ["elegant", "bold"] },
  { n: "轩宇", py: "xuān yǔ", g: "m", t: ["bold", "modern"] },
  { n: "宇帆", py: "yǔ fān", g: "m", t: ["bold", "fresh"] },
  { n: "帆远", py: "fān yuǎn", g: "m", t: ["fresh", "bold"] },
  { n: "云川", py: "yún chuān", g: "m", t: ["fresh", "bold"] },
  { n: "山川", py: "shān chuān", g: "m", t: ["bold", "classic"] },
  { n: "山远", py: "shān yuǎn", g: "m", t: ["bold", "classic"] },
  { n: "风远", py: "fēng yuǎn", g: "m", t: ["fresh", "classic"] },
  { n: "星川", py: "xīng chuān", g: "m", t: ["modern", "bold"] },
  { n: "星远", py: "xīng yuǎn", g: "m", t: ["modern", "bold"] },
  { n: "辰远", py: "chén yuǎn", g: "m", t: ["bold", "classic"] },
  { n: "辰川", py: "chén chuān", g: "m", t: ["bold", "modern"] },
  { n: "嘉安", py: "jiā ān", g: "m", t: ["bold", "warm"] },
  { n: "诗妍", py: "shī yán", g: "f", t: ["classic", "elegant"] },
  { n: "诗悦", py: "shī yuè", g: "f", t: ["classic", "fresh"] },
  { n: "诗宁", py: "shī níng", g: "f", t: ["classic", "warm"] },
  { n: "书悦", py: "shū yuè", g: "f", t: ["classic", "fresh"] },
  { n: "书宁", py: "shū níng", g: "f", t: ["classic", "warm"] },
  { n: "书晴", py: "shū qíng", g: "f", t: ["classic", "fresh"] },
  { n: "瑶宁", py: "yáo níng", g: "f", t: ["elegant", "warm"] },
  { n: "瑶清", py: "yáo qīng", g: "f", t: ["elegant", "fresh"] },
  { n: "玥宁", py: "yuè níng", g: "f", t: ["elegant", "warm"] },
  { n: "玥清", py: "yuè qīng", g: "f", t: ["elegant", "fresh"] },
  { n: "欣瑶", py: "xīn yáo", g: "f", t: ["fresh", "elegant"] },
  { n: "欣玥", py: "xīn yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "欣语", py: "xīn yǔ", g: "f", t: ["fresh", "cute"] },
  { n: "语桐", py: "yǔ tóng", g: "f", t: ["fresh", "classic"] },
  { n: "雨萱", py: "yǔ xuān", g: "f", t: ["fresh", "warm"] },
  { n: "雨茉", py: "yǔ mò", g: "f", t: ["fresh", "cute"] },
  { n: "雨禾", py: "yǔ hé", g: "f", t: ["fresh", "warm"] },
  { n: "雨宁", py: "yǔ níng", g: "f", t: ["fresh", "warm"] },
  { n: "雨清", py: "yǔ qīng", g: "f", t: ["fresh", "elegant"] },
  { n: "雨诗", py: "yǔ shī", g: "f", t: ["fresh", "classic"] },
  { n: "诗雨", py: "shī yǔ", g: "f", t: ["classic", "fresh"] },
  { n: "诗清", py: "shī qīng", g: "f", t: ["classic", "elegant"] },
  { n: "诗月", py: "shī yuè", g: "f", t: ["classic", "elegant"] },
  { n: "清月", py: "qīng yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "清瑶", py: "qīng yáo", g: "f", t: ["fresh", "elegant"] },
  { n: "清宁", py: "qīng níng", g: "f", t: ["fresh", "warm"] },
  { n: "清芷", py: "qīng zhǐ", g: "f", t: ["fresh", "classic"] },
  { n: "芷清", py: "zhǐ qīng", g: "f", t: ["classic", "fresh"] },
  { n: "芷月", py: "zhǐ yuè", g: "f", t: ["classic", "elegant"] },
  { n: "若清", py: "ruò qīng", g: "f", t: ["elegant", "fresh"] },
  { n: "若宁", py: "ruò níng", g: "f", t: ["elegant", "warm"] },
  { n: "若月", py: "ruò yuè", g: "f", t: ["elegant", "classic"] },
  { n: "若萱", py: "ruò xuān", g: "f", t: ["elegant", "warm"] },
  { n: "汐宁", py: "xī níng", g: "f", t: ["fresh", "warm"] },
  { n: "汐月", py: "xī yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "汐禾", py: "xī hé", g: "f", t: ["fresh", "warm"] },
  { n: "禾宁", py: "hé níng", g: "f", t: ["warm", "elegant"] },
  { n: "禾月", py: "hé yuè", g: "f", t: ["warm", "elegant"] },
  { n: "萱宁", py: "xuān níng", g: "f", t: ["warm", "elegant"] },
  { n: "萱月", py: "xuān yuè", g: "f", t: ["warm", "elegant"] },
  { n: "念汐", py: "niàn xī", g: "f", t: ["warm", "fresh"] },
  { n: "念晴", py: "niàn qíng", g: "f", t: ["warm", "fresh"] },
  { n: "念月", py: "niàn yuè", g: "f", t: ["warm", "elegant"] },
  { n: "以汐", py: "yǐ xī", g: "f", t: ["modern", "fresh"] },
  { n: "以晴", py: "yǐ qíng", g: "f", t: ["modern", "fresh"] },
  { n: "以月", py: "yǐ yuè", g: "f", t: ["modern", "elegant"] },
  { n: "云汐", py: "yún xī", g: "f", t: ["fresh", "elegant"] },
  { n: "云晴", py: "yún qíng", g: "f", t: ["fresh", "warm"] },
  { n: "云月", py: "yún yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "乔宁", py: "qiáo níng", g: "f", t: ["fresh", "warm"] },
  { n: "沐辰", py: "mù chén", g: "m", t: ["fresh", "bold"] },
  { n: "璟泽", py: "jǐng zé", g: "m", t: ["elegant", "warm"] },
  { n: "锦泽", py: "jǐn zé", g: "m", t: ["bold", "warm"] },
  { n: "宥泽", py: "yòu zé", g: "m", t: ["warm", "bold"] },
  { n: "宥柠", py: "yòu níng", g: "f", t: ["warm", "fresh"] },
  { n: "锦宸", py: "jǐn chén", g: "m", t: ["bold", "classic"] },
  { n: "锦辰", py: "jǐn chén", g: "m", t: ["bold", "modern"] },
  { n: "亦可", py: "yì kě", g: "f", t: ["modern", "fresh"] },
  { n: "乐伊", py: "lè yī", g: "f", t: ["warm", "fresh"] },
  { n: "浩宸", py: "hào chén", g: "m", t: ["bold", "classic"] },
  { n: "璟宸", py: "jǐng chén", g: "m", t: ["elegant", "classic"] },
  { n: "芮柠", py: "ruì níng", g: "f", t: ["fresh", "cute"] },
  { n: "砚舟", py: "yàn zhōu", g: "m", t: ["classic", "bold"] },
  { n: "泽宁", py: "zé níng", g: "m", t: ["warm", "elegant"] },
  { n: "舒涵", py: "shū hán", g: "f", t: ["elegant", "warm"] },
  { n: "汐瑶", py: "xī yáo", g: "f", t: ["fresh", "elegant"] },
  { n: "乐一", py: "lè yī", g: "f", t: ["warm", "fresh"] },
  { n: "艺可", py: "yì kě", g: "f", t: ["modern", "fresh"] },
  { n: "浠玥", py: "xī yuè", g: "f", t: ["fresh", "elegant"] },
  { n: "书妍", py: "shū yán", g: "f", t: ["classic", "elegant"] },
  { n: "婉柠", py: "wǎn níng", g: "f", t: ["elegant", "fresh"] },
  { n: "汐悦", py: "xī yuè", g: "f", t: ["fresh", "cute"] },
  { n: "璟言", py: "jǐng yán", g: "m", t: ["elegant", "modern"] },
  { n: "星泽", py: "xīng zé", g: "m", t: ["modern", "warm"] },
  { n: "珺泽", py: "jùn zé", g: "m", t: ["elegant", "warm"] },
  { n: "瑞霖", py: "ruì lín", g: "m", t: ["warm", "elegant"] },
  { n: "艺涵", py: "yì hán", g: "f", t: ["modern", "elegant"] },
  { n: "依诺", py: "yī nuò", g: "f", t: ["warm", "bold"] },
  { n: "苡沫", py: "yǐ mò", g: "f", t: ["fresh", "cute"] },
  { n: "心玥", py: "xīn yuè", g: "f", t: ["modern", "elegant"] },
  { n: "雨霏", py: "yǔ fēi", g: "f", t: ["fresh", "elegant"] },
  { n: "品妍", py: "pǐn yán", g: "f", t: ["classic", "elegant"] },
  { n: "子晴", py: "zǐ qíng", g: "f", t: ["fresh", "warm"] },
  { n: "苡菲", py: "yǐ fēi", g: "f", t: ["fresh", "elegant"] },
  { n: "咏晴", py: "yǒng qíng", g: "f", t: ["fresh", "warm"] },
  { n: "恩硕", py: "ēn shuò", g: "m", t: ["warm", "bold"] },
  { n: "宥廷", py: "yòu tíng", g: "m", t: ["warm", "bold"] },
  { n: "品睿", py: "pǐn ruì", g: "m", t: ["classic", "modern"] },
  { n: "子睿", py: "zǐ ruì", g: "m", t: ["elegant", "modern"] },
  { n: "俊熙", py: "jùn xī", g: "m", t: ["modern", "bold"] },
  { n: "承恩", py: "chéng ēn", g: "m", t: ["warm", "classic"] },
  { n: "允谦", py: "yǔn qiān", g: "a", t: ["elegant", "warm"] },
  { n: "允恩", py: "yǔn ēn", g: "a", t: ["warm", "modern"] },
  { n: "清婉", py: "qīng wǎn", g: "f", t: ["elegant", "classic"] },
  { n: "怀瑾", py: "huái jǐn", g: "a", t: ["classic", "elegant"] },
  { n: "修远", py: "xiū yuǎn", g: "m", t: ["classic", "bold"] },
  { n: "知夏", py: "zhī xià", g: "f", t: ["fresh", "modern"] },
  { n: "昀希", py: "yún xī", g: "f", t: ["modern", "elegant"] },
  { n: "奕泽", py: "yì zé", g: "m", t: ["modern", "warm"] },
  { n: "润泽", py: "rùn zé", g: "m", t: ["warm", "classic"] },
  { n: "明泽", py: "míng zé", g: "m", t: ["modern", "warm"] },
  { n: "梓晴", py: "zǐ qíng", g: "f", t: ["fresh", "elegant"] },
  { n: "青芷", py: "qīng zhǐ", g: "f", t: ["fresh", "classic"] },
  { n: "沐心", py: "mù xīn", g: "f", t: ["fresh", "warm"] },
  { n: "知潼", py: "zhī tóng", g: "f", t: ["elegant", "modern"] },
  { n: "扶苏", py: "fú sū", g: "a", t: ["classic", "fresh"] },
  { n: "鹿鸣", py: "lù míng", g: "a", t: ["classic", "fresh"] },
  { n: "云嘉", py: "yún jiā", g: "f", t: ["fresh", "bold"] },
  { n: "铭浩", py: "míng hào", g: "m", t: ["bold", "classic"] },
  { n: "思妍", py: "sī yán", g: "f", t: ["elegant", "fresh"] },
  { n: "伊一", py: "yī yī", g: "f", t: ["modern", "fresh"] },
  { n: "可欣", py: "kě xīn", g: "f", t: ["fresh", "warm"] },
  { n: "沐晨", py: "mù chén", g: "a", t: ["fresh", "warm"] },
  { n: "心悦", py: "xīn yuè", g: "f", t: ["fresh", "warm"] },
  { n: "锦轩", py: "jǐn xuān", g: "m", t: ["bold", "modern"] },
  { n: "书宇", py: "shū yǔ", g: "m", t: ["classic", "bold"] },
  { n: "佳宸", py: "jiā chén", g: "m", t: ["warm", "classic"] },
  { n: "一铭", py: "yī míng", g: "m", t: ["modern", "classic"] },
  { n: "慕程", py: "mù chéng", g: "m", t: ["elegant", "bold"] },
  { n: "子诺", py: "zǐ nuò", g: "a", t: ["elegant", "bold"] },
  { n: "若昕", py: "ruò xīn", g: "f", t: ["elegant", "fresh"] },
  { n: "婉宁", py: "wǎn níng", g: "f", t: ["elegant", "warm"] },
  { n: "若玥", py: "ruò yuè", g: "f", t: ["elegant", "classic"] },
  { n: "奕帆", py: "yì fān", g: "m", t: ["modern", "bold"] },
  { n: "俊铭", py: "jùn míng", g: "m", t: ["modern", "classic"] },
  { n: "思言", py: "sī yán", g: "a", t: ["elegant", "modern"] },
  { n: "予沐", py: "yǔ mù", g: "a", t: ["warm", "fresh"] },
  { n: "润宇", py: "rùn yǔ", g: "m", t: ["warm", "bold"] },
  { n: "天宁", py: "tiān níng", g: "a", t: ["fresh", "warm"] },
  { n: "安宁", py: "ān níng", g: "f", t: ["warm", "elegant"] },
  { n: "哲宇", py: "zhé yǔ", g: "m", t: ["classic", "modern"] },
  { n: "瀚霖", py: "hàn lín", g: "m", t: ["bold", "warm"] },
  { n: "禹宁", py: "yǔ níng", g: "a", t: ["classic", "warm"] },
  { n: "语辰", py: "yǔ chén", g: "a", t: ["fresh", "modern"] },
  { n: "梓钰", py: "zǐ yù", g: "f", t: ["elegant", "modern"] },
  { n: "圣宇", py: "shèng yǔ", g: "m", t: ["bold", "classic"] },
  { n: "以夕", py: "yǐ xī", g: "f", t: ["modern", "fresh"] },
  { n: "姝妍", py: "shū yán", g: "f", t: ["elegant", "classic"] },
  { n: "泓博", py: "hóng bó", g: "m", t: ["fresh", "bold"] },
  { n: "彦博", py: "yàn bó", g: "m", t: ["elegant", "bold"] },
  { n: "康睿", py: "kāng ruì", g: "m", t: ["warm", "modern"] },
  { n: "梓森", py: "zǐ sēn", g: "m", t: ["fresh", "bold"] },
  { n: "诺一", py: "nuò yī", g: "a", t: ["modern", "bold"] },
  { n: "一禾", py: "yī hé", g: "a", t: ["fresh", "warm"] },
  { n: "禾悦", py: "hé yuè", g: "f", t: ["fresh", "warm"] },
  { n: "清禾", py: "qīng hé", g: "a", t: ["fresh", "elegant"] },
  { n: "沐禾", py: "mù hé", g: "a", t: ["fresh", "warm"] },
  { n: "予禾", py: "yǔ hé", g: "a", t: ["warm", "fresh"] },
  { n: "允禾", py: "yǔn hé", g: "a", t: ["fresh", "elegant"] },
  { n: "安禾", py: "ān hé", g: "a", t: ["warm", "fresh"] },
  { n: "心禾", py: "xīn hé", g: "f", t: ["fresh", "warm"] },
  { n: "青禾", py: "qīng hé", g: "a", t: ["fresh", "classic"] },
  { n: "知瑶", py: "zhī yáo", g: "f", t: ["elegant", "modern"] },
  { n: "予宁", py: "yǔ níng", g: "a", t: ["warm", "elegant"] },
  { n: "怀安", py: "huái ān", g: "a", t: ["classic", "warm"] },
  { n: "怀远", py: "huái yuǎn", g: "m", t: ["classic", "bold"] },
  { n: "慕远", py: "mù yuǎn", g: "m", t: ["elegant", "bold"] },
  { n: "苏禾", py: "sū hé", g: "a", t: ["fresh", "classic"] },
  { n: "鹿溪", py: "lù xī", g: "a", t: ["fresh", "classic"] },
  { n: "若初", py: "ruò chū", g: "f", t: ["elegant", "fresh"] },
  { n: "初见", py: "chū jiàn", g: "a", t: ["modern", "fresh"] },
  { n: "一棠", py: "yī táng", g: "f", t: ["fresh", "classic"] },
  { n: "棠宁", py: "táng níng", g: "f", t: ["elegant", "warm"] },
  { n: "清棠", py: "qīng táng", g: "f", t: ["fresh", "elegant"] },
  { n: "栀夏", py: "zhī xià", g: "f", t: ["fresh", "warm"] },
  { n: "夏栀", py: "xià zhī", g: "f", t: ["fresh", "elegant"] },
  { n: "星澜", py: "xīng lán", g: "a", t: ["modern", "bold"] },
  { n: "云澜", py: "yún lán", g: "f", t: ["fresh", "elegant"] },
  { n: "澜溪", py: "lán xī", g: "f", t: ["fresh", "elegant"] },
  { n: "瀚文", py: "hàn wén", g: "m", t: ["bold", "classic"] },
  { n: "文瀚", py: "wén hàn", g: "m", t: ["classic", "bold"] },
  { n: "宸溪", py: "chén xī", g: "a", t: ["fresh", "classic"] },
  { n: "溪宸", py: "xī chén", g: "a", t: ["fresh", "bold"] },
  { n: "奕禾", py: "yì hé", g: "a", t: ["fresh", "modern"] },
  { n: "言禾", py: "yán hé", g: "a", t: ["fresh", "elegant"] },
  { n: "乐安", py: "lè ān", g: "a", t: ["warm", "fresh"] },
  { n: "安之", py: "ān zhī", g: "a", t: ["elegant", "classic"] },
  { n: "之安", py: "zhī ān", g: "a", t: ["classic", "warm"] },
  { n: "以安", py: "yǐ ān", g: "a", t: ["modern", "warm"] },
  { n: "予希", py: "yǔ xī", g: "a", t: ["warm", "fresh"] },
  { n: "希宁", py: "xī níng", g: "f", t: ["fresh", "warm"] },
  { n: "苡宁", py: "yǐ níng", g: "f", t: ["fresh", "elegant"] },
  { n: "柠安", py: "níng ān", g: "f", t: ["fresh", "warm"] },
  { n: "柠悦", py: "níng yuè", g: "f", t: ["fresh", "cute"] },
  { n: "伊诺", py: "yī nuò", g: "f", t: ["modern", "bold"] },
  { n: "诺伊", py: "nuò yī", g: "f", t: ["bold", "modern"] },
  { n: "品萱", py: "pǐn xuān", g: "f", t: ["classic", "warm"] },
  { n: "咏恩", py: "yǒng ēn", g: "a", t: ["classic", "warm"] },
  { n: "廷轩", py: "tíng xuān", g: "m", t: ["bold", "classic"] },
  { n: "宥安", py: "yòu ān", g: "a", t: ["warm", "elegant"] },
  { n: "宥嘉", py: "yòu jiā", g: "m", t: ["warm", "bold"] },
  { n: "品禾", py: "pǐn hé", g: "a", t: ["classic", "fresh"] },
  { n: "品辰", py: "pǐn chén", g: "a", t: ["classic", "modern"] },
  { n: "品泽", py: "pǐn zé", g: "a", t: ["classic", "warm"] },
  { n: "允嘉", py: "yǔn jiā", g: "a", t: ["classic", "warm"] },
  { n: "允安", py: "yǔn ān", g: "a", t: ["warm", "elegant"] },
  { n: "允程", py: "yǔn chéng", g: "a", t: ["classic", "bold"] },
  { n: "硕辰", py: "shuò chén", g: "m", t: ["bold", "modern"] },
  { n: "硕泽", py: "shuò zé", g: "m", t: ["bold", "warm"] }
];

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
      const all = BABY_CHARS.male.concat(BABY_CHARS.female, POPULAR_CHARS);
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

function getConstellation(month, day) {
  const m = Number(month);
  const d = Number(day);
  const boundaries = [
    [1, 20, "水瓶座"], [2, 19, "双鱼座"], [3, 21, "白羊座"], [4, 20, "金牛座"],
    [5, 21, "双子座"], [6, 22, "巨蟹座"], [7, 23, "狮子座"], [8, 23, "处女座"],
    [9, 23, "天秤座"], [10, 24, "天蝎座"], [11, 23, "射手座"], [12, 22, "摩羯座"]
  ];
  let result = boundaries[11][2];
  for (let i = 0; i < boundaries.length; i++) {
    const bm = boundaries[i][0];
    const bd = boundaries[i][1];
    if (m < bm || (m === bm && d < bd)) {
      result = i === 0 ? boundaries[11][2] : boundaries[i - 1][2];
      break;
    }
    result = boundaries[i][2];
  }
  return result;
}

function getSeason(month) {
  const value = Number(month);
  if (value >= 3 && value <= 5) return "spring";
  if (value >= 6 && value <= 8) return "summer";
  if (value >= 9 && value <= 11) return "autumn";
  return "winter";
}

function getCandidatePool(config) {
  const genderBase =
    config.gender === "male"
      ? BABY_CHARS.male.filter((item) => !FEMALE_ONLY_CHARS.has(item.c))
      : config.gender === "female"
      ? BABY_CHARS.female.filter((item) => !MALE_ONLY_CHARS.has(item.c))
      : BABY_CHARS.male.concat(BABY_CHARS.female);
  const popularPool =
    config.gender === "neutral"
      ? POPULAR_CHARS
      : POPULAR_CHARS.filter(
          (item) =>
            config.gender === "male"
              ? POPULAR_CHAR_GENDER[item.c] !== "f"
              : POPULAR_CHAR_GENDER[item.c] !== "m"
        );
  const base = genderBase.concat(popularPool);
  const map = {};
  base.forEach((item) => {
    if (!map[item.c]) map[item.c] = item;
  });
  let pool = Object.keys(map).map((key) => map[key]);
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

function getAllCharLookup() {
  const map = {};
  BABY_CHARS.male.concat(BABY_CHARS.female, POPULAR_CHARS).forEach((item) => {
    if (!map[item.c]) map[item.c] = item;
  });
  Object.keys(GENERATION_CHARS).forEach((char) => {
    if (!map[char]) {
      map[char] = {
        c: char,
        py: GENERATION_CHARS[char].py,
        meaning: GENERATION_CHARS[char].meaning,
        tags: ["classic", "elegant"]
      };
    }
  });
  return map;
}

function getPopularName(rng, usedChars, config) {
  if (config.length === "short") return null;
  const lookup = getAllCharLookup();
  const excluded = new Set([...config.father.trim(), ...config.mother.trim()]);
  const genderMatch = (item) =>
    config.gender === "neutral" || item.g === "a" || item.g === config.gender;
  const available = POPULAR_NAMES.filter((item) => {
    if (!genderMatch(item)) return false;
    const chars = item.n.split("");
    if (chars.some((char) => excluded.has(char))) return false;
    if (chars.some((char) => usedChars.has(char))) return false;
    if (config.styles.length && !item.t.some((tag) => config.styles.includes(tag))) return false;
    return true;
  });
  if (!available.length) return null;
  const choice = pick(available, rng);
  return choice.n.split("").map((char) => {
    const known = lookup[char];
    return (
      known || {
        c: char,
        py: "·",
        meaning: `名字中的「${char}」`,
        tags: ["warm", "elegant"]
      }
    );
  });
}

function rankPool(pool, rng, config) {
  const refs = getReferenceItems(config);
  const refTags = [];
  refs.forEach((ref) => {
    ref.tags.forEach((tag) => {
      if (!refTags.includes(tag)) refTags.push(tag);
    });
  });
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
  const generationChar = (config.generationChar || "").trim().slice(0, 1);
  let length = config.length === "short" ? 1 : config.length === "long" ? 2 : rng() > 0.35 ? 2 : 1;
  const chosen = [];
  let attempts = 0;

  if (!generationChar && length === 2 && rng() < 0.22) {
    const popular = getPopularName(rng, usedChars, config);
    if (popular) {
      popular.forEach((item) => usedChars.add(item.c));
      return popular;
    }
  }

  if (generationChar) {
    length = Math.max(length, 2);
    const lookup = getAllCharLookup();
    const generationInfo = GENERATION_CHARS[generationChar];
    const known =
      lookup[generationChar] || {
        c: generationChar,
        py: generationInfo ? generationInfo.py : "·",
        meaning: generationInfo ? generationInfo.meaning : `辈分字「${generationChar}」`,
        tags: ["classic", "elegant"]
      };
    chosen.push(known);
    usedChars.add(generationChar);
  }

  const pickRankedChar = () => {
    const freshRanked = ranked.filter((entry) => !usedChars.has(entry.item.c));
    const freshPool = pool.filter((item) => !usedChars.has(item.c));
    const rankedSource = freshRanked.length ? freshRanked : ranked;
    const poolSource = freshPool.length ? freshPool : pool;
    const topCount = Math.min(45, rankedSource.length);
    return rng() < 0.45 ? rankedSource[Math.floor(rng() * topCount)].item : pick(poolSource, rng);
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
  const classic = pick(CLASSIC_LINES, rng);
  return {
    text: (surname ? surname.s : "") + given.map((char) => char.c).join(""),
    given: given.map((char) => char.c),
    pinyin: [surname ? surname.py : "", ...given.map((char) => char.py)].filter(Boolean).join(" "),
    meaning: given.map((char) => char.meaning).join(" · "),
    tags: [...new Set(given.map((char) => char.tags).reduce((all, tags) => all.concat(tags), []))].slice(0, 2),
    refLine,
    insight: `用字意象 ${given.map((char) => char.meaning.split("，")[0]).join(" · ")}`,
    classic: `用典 ${classic.source}「${classic.line}」`
  };
}

function getReferencePrompt(config) {
  const zodiac = getZodiac(config.birthYear);
  const constellation = getConstellation(config.birthMonth, config.birthDay);
  const parentRef = getGroupedReferencePrompt(config);
  const lines = [
    `${config.birthDate} ${config.birthTime} · 属相 ${zodiac} · 星座 ${constellation}`,
    parentRef
  ].filter(Boolean);
  return lines.join("\n");
}

function generateNames(config) {
  const seed = Date.now() ^ Math.floor(Math.random() * 0xffffffff);
  const rng = mulberry32(seed);
  const names = [];
  const usedChars = new Set(config.excludeChars || []);
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
  getReferencePrompt,
  STYLE_OPTIONS
};
