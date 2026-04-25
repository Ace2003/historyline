// 当前选择的国家/地区
let currentCountry = 'global';

// ==================== 全球历史数据 ====================
const globalHistory = {
    paleolithic: {
        name: "旧石器时代",
        time: "距今约250万年前 - 约1万年前",
        description: "旧石器时代是人类历史的最初阶段，以打制石器为标志，涵盖了99%以上的人类历史。这一时期人类以采集、狩猎为生，从非洲逐渐迁徙至世界各地。",
        events: [
            { time: "约250万年前", title: "最早的打制石器出现", description: "非洲埃塞俄比亚的戈纳遗址出现迄今所知最早的打制石器。" },
            { time: "约200万年前", title: "能人出现", description: "非洲的能人已经会制造、使用工具。" },
            { time: "约170万年前", title: "元谋人生活在中国", description: "中国云南生活着元谋猿人。" },
            { time: "约100万年前", title: "火的使用", description: "人类掌握了火的使用技术。" },
            { time: "约5万年前", title: "智人扩张", description: "现代人类'智人'从非洲向世界各地扩张。" },
            { time: "约2万年前", title: "弓箭的发明", description: "人类发明弓箭，大大提高了狩猎效率。" }
        ],
        figures: [
            { name: "能人", time: "约240万-160万年前", description: "最早被认为属于人属的物种。" },
            { name: "直立人", time: "约180万-20万年前", description: "能够直立行走的古人类，如北京猿人。" },
            { name: "智人", time: "约20万年前至今", description: "现代人类的直接祖先。" }
        ],
        impacts: [
            { title: "工具革命", description: "从简单的打制石器到复杂的复合工具。" },
            { title: "火的掌控", description: "火的使用是人类历史上的重要转折点。" },
            { title: "全球迁徙", description: "人类从非洲出发，逐渐迁徙至世界各地。" }
        ]
    },
    mesolithic: {
        name: "中石器时代",
        time: "距今约1万年前 - 约8000年前",
        description: "中石器时代是旧石器时代与新石器时代间的过渡时期。随着冰河时期结束，气候变暖，人类开始适应新的环境。",
        events: [
            { time: "约1.2万年前", title: "冰河时期结束", description: "最后一次冰河时期结束，全球气候变暖。" },
            { time: "约1万年前", title: "弓箭的普遍使用", description: "弓箭成为主要的狩猎工具。" },
            { time: "约9000年前", title: "细石器技术", description: "细石器技术得到发展。" }
        ],
        figures: [],
        impacts: [
            { title: "技术创新", description: "弓箭和细石器技术的发明。" },
            { title: "过渡时期", description: "作为新旧石器时代的桥梁。" }
        ]
    },
    neolithic: {
        name: "新石器时代",
        time: "距今约8000年前 - 约4000年前",
        description: "新石器时代以磨制石器和农业革命为标志，人类从食物采集者转变为食物生产者。",
        events: [
            { time: "约公元前10000年", title: "农业革命开始", description: "在西亚的新月沃地，人类开始栽培农作物。" },
            { time: "约公元前8000年", title: "磨制石器普及", description: "人类掌握了磨制石器的技术。" },
            { time: "约公元前6000年", title: "陶器广泛使用", description: "陶器制作技术成熟。" },
            { time: "约公元前4000年", title: "社会分化出现", description: "社会开始出现贫富分化和阶级分化。" }
        ],
        figures: [
            { name: "神农氏（传说）", time: "约公元前3000年", description: "中国传说中的农业和医药的发明者。" }
        ],
        impacts: [
            { title: "农业革命", description: "从狩猎采集到农业生产的转变。" },
            { title: "定居生活", description: "农业使人类能够定居下来。" },
            { title: "人口增长", description: "稳定的食物供应促进了人口的快速增长。" }
        ]
    },
    bronze: {
        name: "青铜时代",
        time: "约公元前3300年 - 约公元前1200年",
        description: "青铜时代标志着人类从石器时代向金属时代的重大技术转型。",
        events: [
            { time: "约公元前3500年", title: "苏美尔文明诞生", description: "两河流域的苏美尔人建立了最早的城市国家。" },
            { time: "约公元前3100年", title: "古埃及统一", description: "美尼斯统一上下埃及。" },
            { time: "约公元前2700年", title: "金字塔开始建造", description: "古埃及兴建第一座金字塔。" },
            { time: "约公元前2070年", title: "中国夏朝建立", description: "禹建立夏朝。" },
            { time: "约公元前1762年", title: "汉谟拉比法典", description: "古巴比伦颁布《汉谟拉比法典》。" }
        ],
        figures: [
            { name: "美尼斯", time: "约公元前3100年", description: "古埃及第一王朝的建立者。" },
            { name: "汉谟拉比", time: "约公元前1792-前1750年", description: "古巴比伦国王，颁布《汉谟拉比法典》。" },
            { name: "禹", time: "约公元前21世纪", description: "中国夏朝的建立者。" }
        ],
        impacts: [
            { title: "金属技术革命", description: "青铜技术的掌握是人类冶金史上的重大突破。" },
            { title: "城市文明兴起", description: "催生了城市、国家和复杂的社会结构。" },
            { title: "文字发明", description: "出现了最早的文字系统。" }
        ]
    },
    iron: {
        name: "铁器时代",
        time: "约公元前1300年 - 约公元前500年",
        description: "铁器时代是人类继青铜时代之后的又一个关键冶金时期。",
        events: [
            { time: "约公元前1300年", title: "赫梯人最早冶铁", description: "赫梯帝国最早掌握冶铁技术。" },
            { time: "约公元前1046年", title: "中国西周建立", description: "武王伐纣，灭商建周。" },
            { time: "约公元前770年", title: "中国春秋时期", description: "中国进入春秋时期。" },
            { time: "约公元前594年", title: "梭伦改革", description: "雅典的梭伦改革。" }
        ],
        figures: [
            { name: "梭伦", time: "约公元前638-前559年", description: "雅典的政治家和诗人。" },
            { name: "老子", time: "约公元前6世纪", description: "道家学派的创始人。" },
            { name: "孔子", time: "公元前551-前479年", description: "儒家学派的创始人。" }
        ],
        impacts: [
            { title: "农业生产力飞跃", description: "铁制农具大幅提高了农业效率。" },
            { title: "社会结构变革", description: "铁器的普及冲击了旧有的社会结构。" }
        ]
    },
    classical: {
        name: "古典时代",
        time: "约公元前500年 - 公元500年",
        description: "古典时代是古希腊与古罗马文明的辉煌时期，奠定了现代西方文明的基础。",
        events: [
            { time: "公元前490-前479年", title: "希波战争", description: "希腊城邦与波斯帝国之间的战争。" },
            { time: "公元前356年", title: "商鞅变法", description: "中国秦国的商鞅变法。" },
            { time: "公元前334-前323年", title: "亚历山大东征", description: "亚历山大大帝征服波斯帝国。" },
            { time: "公元前221年", title: "秦始皇统一中国", description: "秦始皇建立大一统中央集权国家。" },
            { time: "公元前27年", title: "罗马帝国建立", description: "屋大维建立罗马帝国。" },
            { time: "公元1世纪", title: "基督教诞生", description: "耶稣创立基督教。" },
            { time: "公元476年", title: "西罗马帝国灭亡", description: "标志着欧洲古代历史的结束。" }
        ],
        figures: [
            { name: "苏格拉底", time: "公元前469-前399年", description: "古希腊哲学家。" },
            { name: "柏拉图", time: "公元前427-前347年", description: "古希腊哲学家。" },
            { name: "亚里士多德", time: "公元前384-前322年", description: "古希腊哲学家、科学家。" },
            { name: "亚历山大大帝", time: "公元前356-前323年", description: "马其顿国王。" },
            { name: "秦始皇", time: "公元前259-前210年", description: "中国第一位皇帝。" },
            { name: "屋大维", time: "公元前63-公元14年", description: "罗马帝国的开国君主。" }
        ],
        impacts: [
            { title: "民主政治起源", description: "古希腊雅典的民主制度。" },
            { title: "哲学与科学奠基", description: "理性思辨传统为现代科学奠定基础。" },
            { title: "法律与制度", description: "罗马法对后世法律体系产生深远影响。" }
        ]
    },
    medieval: {
        name: "中世纪",
        time: "公元500年 - 公元1500年",
        description: "中世纪是欧洲封建制度形成与发展的时期，基督教成为统一的宗教信仰。",
        events: [
            { time: "公元527-565年", title: "查士丁尼时代", description: "东罗马帝国皇帝查士丁尼在位。" },
            { time: "公元589年", title: "隋朝统一中国", description: "隋统一中国，结束南北朝分裂。" },
            { time: "公元610年", title: "伊斯兰教兴起", description: "穆罕默德创立伊斯兰教。" },
            { time: "公元800年", title: "查理曼加冕", description: "法兰克国王查理曼被教皇加冕。" },
            { time: "公元1096-1291年", title: "十字军东征", description: "欧洲基督徒发起的多次东征。" },
            { time: "公元1206年", title: "蒙古帝国建立", description: "铁木真统一蒙古各部。" },
            { time: "公元1347-1351年", title: "黑死病大流行", description: "黑死病在欧洲大流行。" },
            { time: "公元1453年", title: "君士坦丁堡陷落", description: "东罗马帝国灭亡。" }
        ],
        figures: [
            { name: "穆罕默德", time: "约公元570-632年", description: "伊斯兰教的创始人。" },
            { name: "唐太宗李世民", time: "公元598-649年", description: "中国唐朝第二位皇帝。" },
            { name: "查理曼大帝", time: "公元742-814年", description: "法兰克国王。" },
            { name: "成吉思汗", time: "公元1162-1227年", description: "蒙古帝国的建立者。" },
            { name: "但丁", time: "公元1265-1321年", description: "意大利诗人，文艺复兴的先驱。" }
        ],
        impacts: [
            { title: "封建制度确立", description: "欧洲封建庄园经济和封君封臣制度确立。" },
            { title: "宗教主导社会", description: "基督教成为欧洲统一的宗教信仰。" },
            { title: "城市复兴", description: "中世纪后期，西欧城市重新兴起。" }
        ]
    },
    renaissance: {
        name: "文艺复兴与大航海时代",
        time: "公元1500年 - 公元1750年",
        description: "这是思想解放与地理大发现的时代。文艺复兴打破了中世纪的思想禁锢。",
        events: [
            { time: "1440年左右", title: "古腾堡活字印刷术", description: "古腾堡发明金属活字印刷术。" },
            { time: "1492年", title: "哥伦布发现新大陆", description: "哥伦布到达美洲。" },
            { time: "1517年", title: "宗教改革开始", description: "马丁·路德发起宗教改革。" },
            { time: "1519-1522年", title: "麦哲伦环球航行", description: "首次环球航行。" },
            { time: "1687年", title: "牛顿发表《自然哲学的数学原理》", description: "建立经典力学体系。" },
            { time: "1689年", title: "英国《权利法案》", description: "确立君主立宪制。" },
            { time: "1776年", title: "美国独立宣言", description: "美国宣布独立。" }
        ],
        figures: [
            { name: "达·芬奇", time: "1452-1519年", description: "意大利文艺复兴时期的全才。" },
            { name: "哥伦布", time: "1451-1506年", description: "发现美洲的航海家。" },
            { name: "马丁·路德", time: "1483-1546年", description: "宗教改革运动的发起者。" },
            { name: "哥白尼", time: "1473-1543年", description: "提出日心说。" },
            { name: "伽利略", time: "1564-1642年", description: "近代科学的奠基人之一。" },
            { name: "牛顿", time: "1643-1727年", description: "经典力学的创立者。" }
        ],
        impacts: [
            { title: "知识传播革命", description: "活字印刷术加速了知识传播。" },
            { title: "思想解放", description: "文艺复兴、宗教改革、启蒙运动。" },
            { title: "全球化开端", description: "大航海时代开启了全球化进程。" }
        ]
    },
    industrial: {
        name: "工业革命时代",
        time: "公元1750年 - 公元1914年",
        description: "工业革命是人类历史上最重大的变革之一，机械化生产取代手工劳动。",
        events: [
            { time: "1764年", title: "珍妮纺纱机发明", description: "标志着工业革命开始。" },
            { time: "1775年", title: "瓦特改良蒸汽机", description: "大大提高了蒸汽机的效率。" },
            { time: "1789年", title: "法国大革命", description: "推翻封建专制。" },
            { time: "1814年", title: "史蒂芬孙发明蒸汽机车", description: "铁路时代开始。" },
            { time: "1840年", title: "鸦片战争", description: "中国开始沦为半殖民地。" },
            { time: "1848年", title: "《共产党宣言》发表", description: "马克思主义诞生。" },
            { time: "1859年", title: "达尔文发表《物种起源》", description: "提出进化论。" },
            { time: "1870年代", title: "第二次工业革命开始", description: "电力的广泛应用。" },
            { time: "1903年", title: "莱特兄弟发明飞机", description: "开创航空时代。" },
            { time: "1914年", title: "第一次世界大战爆发", description: "人类历史上第一次全球性战争。" }
        ],
        figures: [
            { name: "詹姆斯·瓦特", time: "1736-1819年", description: "改良蒸汽机。" },
            { name: "亚当·斯密", time: "1723-1790年", description: "现代经济学的奠基人。" },
            { name: "马克思", time: "1818-1883年", description: "马克思主义的创始人。" },
            { name: "达尔文", time: "1809-1882年", description: "进化论的奠基人。" },
            { name: "爱迪生", time: "1847-1931年", description: "美国发明家。" },
            { name: "拿破仑", time: "1769-1821年", description: "法国军事家、政治家。" }
        ],
        impacts: [
            { title: "生产力革命", description: "机器生产取代手工劳动。" },
            { title: "社会结构变革", description: "社会分裂为工业资产阶级和无产阶级。" },
            { title: "城市化进程", description: "城市化进程加速。" },
            { title: "全球殖民体系", description: "形成全球殖民体系。" }
        ]
    },
    twentieth: {
        name: "20世纪",
        time: "公元1914年 - 公元2000年",
        description: "20世纪是动荡与变革的世纪。两次世界大战、冷战格局、科技革命深刻改变了人类社会。",
        events: [
            { time: "1914-1918年", title: "第一次世界大战", description: "约1600万人死亡。" },
            { time: "1917年", title: "俄国十月革命", description: "建立世界上第一个社会主义国家。" },
            { time: "1929年", title: "大萧条开始", description: "全球性经济大萧条。" },
            { time: "1939-1945年", title: "第二次世界大战", description: "约7000万人死亡。" },
            { time: "1945年", title: "联合国成立；原子弹爆炸", description: "核能时代开始。" },
            { time: "1947年", title: "冷战开始", description: "杜鲁门主义出台。" },
            { time: "1949年", title: "中华人民共和国成立", description: "中国进入社会主义时期。" },
            { time: "1969年", title: "人类首次登月", description: "阿姆斯特朗踏上月球。" },
            { time: "1978年", title: "中国改革开放", description: "中国经济快速发展。" },
            { time: "1989年", title: "柏林墙倒塌", description: "冷战即将结束。" },
            { time: "1991年", title: "苏联解体", description: "冷战结束。" },
            { time: "1990年代", title: "互联网普及", description: "改变信息传播方式。" }
        ],
        figures: [
            { name: "列宁", time: "1870-1924年", description: "苏联的缔造者。" },
            { name: "丘吉尔", time: "1874-1965年", description: "英国首相。" },
            { name: "希特勒", time: "1889-1945年", description: "纳粹德国元首。" },
            { name: "罗斯福", time: "1882-1945年", description: "美国总统。" },
            { name: "斯大林", time: "1878-1953年", description: "苏联领导人。" },
            { name: "毛泽东", time: "1893-1976年", description: "中华人民共和国缔造者。" },
            { name: "邓小平", time: "1904-1997年", description: "中国改革开放总设计师。" },
            { name: "爱因斯坦", time: "1879-1955年", description: "提出相对论。" }
        ],
        impacts: [
            { title: "战争与和平", description: "两次世界大战造成空前灾难。" },
            { title: "意识形态对抗", description: "冷战持续近半个世纪。" },
            { title: "科技革命", description: "核能、航天、计算机、互联网。" },
            { title: "殖民体系瓦解", description: "民族解放运动蓬勃发展。" }
        ]
    },
    twentyfirst: {
        name: "21世纪",
        time: "公元2000年 - 至今",
        description: "21世纪是数字化转型与全球化深化的时代。人工智能、生物科技飞速发展。",
        events: [
            { time: "2001年", title: "9·11恐怖袭击；中国加入WTO", description: "改变全球安全格局和经济格局。" },
            { time: "2003年", title: "人类基因组计划完成", description: "基因时代到来。" },
            { time: "2007年", title: "iPhone发布", description: "开启智能手机时代。" },
            { time: "2008年", title: "全球金融危机", description: "大萧条以来最严重的金融危机。" },
            { time: "2015年", title: "《巴黎协定》签署", description: "应对气候变化。" },
            { time: "2016年", title: "AlphaGo战胜人类冠军", description: "人工智能重大突破。" },
            { time: "2019-2022年", title: "新冠疫情全球大流行", description: "深刻改变人类生活。" },
            { time: "2022年", title: "ChatGPT发布", description: "生成式AI革命。" }
        ],
        figures: [
            { name: "马克·扎克伯格", time: "1984年-", description: "Facebook创始人。" },
            { name: "埃隆·马斯克", time: "1971年-", description: "特斯拉、SpaceX创始人。" },
            { name: "杰夫·贝佐斯", time: "1964年-", description: "亚马逊创始人。" },
            { name: "萨姆·阿尔特曼", time: "1985年-", description: "OpenAI首席执行官。" },
            { name: "黄仁勋", time: "1963年-", description: "英伟达创始人。" }
        ],
        impacts: [
            { title: "数字化革命", description: "移动互联网、云计算、大数据、人工智能。" },
            { title: "人工智能革命", description: "生成式AI取得重大突破。" },
            { title: "气候变化挑战", description: "全球变暖成为严峻挑战。" },
            { title: "公共卫生危机", description: "新冠疫情大流行。" }
        ]
    }
};

// ==================== 中国历史数据 ====================
const chinaHistory = {
    xia: {
        name: "夏朝",
        time: "约公元前2070年 - 约公元前1600年",
        description: "夏朝是中国历史上第一个世袭制王朝，标志着中国从原始社会进入奴隶社会。",
        events: [
            { time: "约公元前2070年", title: "禹建立夏朝", description: "禹因治水有功，被推举为部落联盟首领，后建立夏朝。" },
            { time: "约公元前2000年", title: "启继位", description: "禹死后，其子启继位，世袭制取代禅让制。" },
            { time: "约公元前1600年", title: "夏朝灭亡", description: "商汤灭夏，夏朝结束。" }
        ],
        figures: [
            { name: "禹", time: "约公元前21世纪", description: "夏朝的建立者，因治水三过家门而不入。" },
            { name: "启", time: "约公元前21世纪", description: "禹之子，建立世袭制。" },
            { name: "桀", time: "约公元前1600年", description: "夏朝最后一位君主，暴君。" }
        ],
        impacts: [
            { title: "国家形态确立", description: "从部落联盟到国家形态的转变。" },
            { title: "世袭制确立", description: "世袭制取代禅让制，'家天下'开始。" },
            { title: "文明基础", description: "为商周文明奠定基础。" }
        ]
    },
    shang: {
        name: "商朝",
        time: "约公元前1600年 - 约公元前1046年",
        description: "商朝是中国历史上第二个朝代，以青铜器和甲骨文著称。",
        events: [
            { time: "约公元前1600年", title: "商汤灭夏", description: "商汤建立商朝。" },
            { time: "约公元前1300年", title: "盘庚迁殷", description: "商王盘庚迁都于殷，商朝又称殷朝。" },
            { time: "约公元前1046年", title: "武王伐纣", description: "周武王灭商，商朝结束。" }
        ],
        figures: [
            { name: "商汤", time: "约公元前1600年", description: "商朝的建立者。" },
            { name: "盘庚", time: "约公元前1300年", description: "迁都于殷的商王。" },
            { name: "武丁", time: "约公元前1200年", description: "商朝鼎盛时期的君主。" },
            { name: "纣", time: "约公元前1046年", description: "商朝最后一位君主。" }
        ],
        impacts: [
            { title: "甲骨文", description: "中国最早的成熟文字系统。" },
            { title: "青铜器", description: "青铜器制作达到高峰，如司母戊鼎。" },
            { title: "奴隶制发展", description: "奴隶制经济繁荣发展。" }
        ]
    },
    zhou: {
        name: "周朝",
        time: "约公元前1046年 - 公元前256年",
        description: "周朝分为西周和东周，是中国历史上最长的朝代，实行分封制和宗法制。",
        events: [
            { time: "约公元前1046年", title: "武王伐纣", description: "周武王建立周朝。" },
            { time: "公元前841年", title: "国人暴动", description: "中国历史有明确纪年的开始。" },
            { time: "公元前770年", title: "平王东迁", description: "周平王迁都洛邑，东周开始。" },
            { time: "公元前770-前476年", title: "春秋时期", description: "春秋五霸争霸。" },
            { time: "公元前475-前221年", title: "战国时期", description: "战国七雄并立。" },
            { time: "公元前356年", title: "商鞅变法", description: "秦国商鞅变法，为统一奠定基础。" },
            { time: "公元前256年", title: "周朝灭亡", description: "秦灭周。" }
        ],
        figures: [
            { name: "周武王", time: "约公元前1046年", description: "周朝的建立者。" },
            { name: "周公旦", time: "约公元前11世纪", description: "辅佐成王，制定礼乐制度。" },
            { name: "齐桓公", time: "公元前685-前643年", description: "春秋五霸之首。" },
            { name: "孔子", time: "公元前551-前479年", description: "儒家学派创始人。" },
            { name: "商鞅", time: "约公元前390-前338年", description: "秦国变法的主要推动者。" },
            { name: "老子", time: "约公元前6世纪", description: "道家学派创始人。" }
        ],
        impacts: [
            { title: "分封制与宗法制", description: "确立了中国早期政治制度。" },
            { title: "礼乐文明", description: "周公制礼作乐，影响深远。" },
            { title: "百家争鸣", description: "春秋战国时期思想文化繁荣。" },
            { title: "社会转型", description: "从奴隶制向封建制过渡。" }
        ]
    },
    qin: {
        name: "秦朝",
        time: "公元前221年 - 公元前206年",
        description: "秦朝是中国历史上第一个统一的中央集权封建王朝，虽然短暂但影响深远。",
        events: [
            { time: "公元前221年", title: "秦始皇统一中国", description: "秦王嬴政统一六国，建立秦朝。" },
            { time: "公元前221年", title: "统一文字、货币、度量衡", description: "书同文、车同轨、统一度量衡。" },
            { time: "公元前214年", title: "修筑长城", description: "连接各国长城，修建万里长城。" },
            { time: "公元前213年", title: "焚书坑儒", description: "统一思想，焚毁书籍。" },
            { time: "公元前210年", title: "秦始皇去世", description: "秦始皇在东巡途中去世。" },
            { time: "公元前209年", title: "陈胜吴广起义", description: "中国历史上第一次大规模农民起义。" },
            { time: "公元前206年", title: "秦朝灭亡", description: "刘邦攻入咸阳，秦朝灭亡。" }
        ],
        figures: [
            { name: "秦始皇嬴政", time: "公元前259-前210年", description: "中国第一位皇帝，统一六国。" },
            { name: "李斯", time: "约公元前284-前208年", description: "秦朝丞相，法家代表。" },
            { name: "陈胜", time: "?-前208年", description: "农民起义领袖。" },
            { name: "吴广", time: "?-前208年", description: "与陈胜共同起义。" },
            { name: "项羽", time: "公元前232-前202年", description: "西楚霸王，秦末起义领袖。" },
            { name: "刘邦", time: "公元前256-前195年", description: "汉朝开国皇帝。" }
        ],
        impacts: [
            { title: "统一中国", description: "结束战国纷争，建立统一国家。" },
            { title: "中央集权制度", description: "确立皇帝制度和郡县制，影响中国两千多年。" },
            { title: "统一文字", description: "书同文促进文化统一。" },
            { title: "暴政教训", description: "因暴政而亡，为后世提供教训。" }
        ]
    },
    han: {
        name: "汉朝",
        time: "公元前202年 - 公元220年",
        description: "汉朝分为西汉和东汉，是中国历史上最强盛的朝代之一，汉文化影响深远。",
        events: [
            { time: "公元前202年", title: "刘邦建立汉朝", description: "刘邦称帝，建立汉朝，史称西汉。" },
            { time: "公元前180-前141年", title: "文景之治", description: "汉文帝、汉景帝时期，社会经济恢复发展。" },
            { time: "公元前140-前87年", title: "汉武帝时期", description: "汉武帝推进大一统，开辟丝绸之路。" },
            { time: "公元前138年", title: "张骞出使西域", description: "张骞出使西域，开辟丝绸之路。" },
            { time: "公元8年", title: "王莽篡汉", description: "王莽建立新朝，西汉灭亡。" },
            { time: "公元25年", title: "刘秀建立东汉", description: "刘秀称帝，建立东汉。" },
            { time: "公元105年", title: "蔡伦改进造纸术", description: "蔡伦改进造纸术，促进文化传播。" },
            { time: "公元184年", title: "黄巾起义", description: "张角领导黄巾起义。" },
            { time: "公元220年", title: "曹丕篡汉", description: "东汉灭亡，三国时期开始。" }
        ],
        figures: [
            { name: "汉高祖刘邦", time: "公元前256-前195年", description: "汉朝开国皇帝。" },
            { name: "汉武帝刘彻", time: "公元前156-前87年", description: "西汉鼎盛时期的皇帝。" },
            { name: "张骞", time: "约公元前164-前114年", description: "出使西域，开辟丝绸之路。" },
            { name: "司马迁", time: "约公元前145-前86年", description: "著《史记》，中国第一部纪传体通史。" },
            { name: "汉光武帝刘秀", time: "公元前5-公元57年", description: "东汉开国皇帝。" },
            { name: "蔡伦", time: "约公元61-121年", description: "改进造纸术。" },
            { name: "董仲舒", time: "公元前179-前104年", description: "提出'罢黜百家，独尊儒术'。" }
        ],
        impacts: [
            { title: "汉文化形成", description: "汉族、汉语、汉字等概念形成。" },
            { title: "儒家思想正统", description: "罢黜百家，独尊儒术。" },
            { title: "丝绸之路", description: "开辟东西方贸易和文化交流通道。" },
            { title: "造纸术", description: "蔡伦改进造纸术，影响世界文明。" },
            { title: "强盛国力", description: "汉朝成为当时世界上最强大的国家之一。" }
        ]
    },
    threekingdoms: {
        name: "三国两晋南北朝",
        time: "公元220年 - 公元589年",
        description: "这是中国历史上的分裂时期，政权更迭频繁，民族融合加速。",
        events: [
            { time: "220年", title: "曹丕代汉", description: "建立魏国，三国时期开始。" },
            { time: "221年", title: "刘备称帝", description: "建立蜀汉。" },
            { time: "229年", title: "孙权称帝", description: "建立吴国，三国鼎立正式形成。" },
            { time: "263年", title: "魏灭蜀", description: "蜀汉灭亡。" },
            { time: "265年", title: "司马炎代魏", description: "建立西晋。" },
            { time: "280年", title: "西晋灭吴", description: "统一全国。" },
            { time: "316年", title: "西晋灭亡", description: "五胡乱华，西晋灭亡。" },
            { time: "317年", title: "东晋建立", description: "司马睿建立东晋。" },
            { time: "420年", title: "南朝开始", description: "刘裕代晋，建立刘宋。" },
            { time: "589年", title: "隋朝统一", description: "结束南北朝分裂局面。" }
        ],
        figures: [
            { name: "曹操", time: "155-220年", description: "魏国奠基人，政治家、军事家、诗人。" },
            { name: "刘备", time: "161-223年", description: "蜀汉开国皇帝。" },
            { name: "孙权", time: "182-252年", description: "吴国开国皇帝。" },
            { name: "诸葛亮", time: "181-234年", description: "蜀汉丞相，杰出政治家。" },
            { name: "司马懿", time: "179-251年", description: "魏国权臣，西晋奠基人。" },
            { name: "王羲之", time: "303-361年", description: "书圣，著《兰亭序》。" },
            { name: "陶渊明", time: "约365-427年", description: "著名诗人。" },
            { name: "祖冲之", time: "429-500年", description: "数学家，精确计算圆周率。" }
        ],
        impacts: [
            { title: "民族大融合", description: "五胡乱华促进民族融合。" },
            { title: "文化繁荣", description: "玄学、佛教、道教发展，文学艺术成就突出。" },
            { title: "经济重心南移", description: "北方人口南迁，促进南方开发。" },
            { title: "科技成就", description: "祖冲之计算圆周率，郦道元著《水经注》。" }
        ]
    },
    sui: {
        name: "隋朝",
        time: "公元581年 - 公元618年",
        description: "隋朝结束南北朝分裂，统一中国，虽然短暂但为唐朝盛世奠定基础。",
        events: [
            { time: "581年", title: "杨坚代周", description: "建立隋朝。" },
            { time: "589年", title: "隋灭陈", description: "统一全国，结束南北朝分裂。" },
            { time: "605年", title: "开凿大运河", description: "隋炀帝下令开凿大运河。" },
            { time: "605年", title: "创立科举制", description: "开始用考试选拔官员。" },
            { time: "618年", title: "隋朝灭亡", description: "隋炀帝被杀，隋朝灭亡。" }
        ],
        figures: [
            { name: "隋文帝杨坚", time: "541-604年", description: "隋朝开国皇帝，统一中国。" },
            { name: "隋炀帝杨广", time: "569-618年", description: "隋朝第二位皇帝，开凿大运河。" }
        ],
        impacts: [
            { title: "统一中国", description: "结束近三百年分裂局面。" },
            { title: "大运河", description: "沟通南北，促进经济文化交流。" },
            { title: "科举制", description: "创立科举制度，影响深远。" },
            { title: "为唐奠基", description: "制度建设为唐朝盛世奠定基础。" }
        ]
    },
    tang: {
        name: "唐朝",
        time: "公元618年 - 公元907年",
        description: "唐朝是中国历史上最强盛的朝代之一，政治、经济、文化全面繁荣，影响深远。",
        events: [
            { time: "618年", title: "李渊建立唐朝", description: "李渊称帝，建立唐朝。" },
            { time: "626年", title: "玄武门之变", description: "李世民发动政变，后即位为唐太宗。" },
            { time: "627-649年", title: "贞观之治", description: "唐太宗时期，政治清明。" },
            { time: "690年", title: "武则天称帝", description: "中国历史上唯一的女皇帝。" },
            { time: "713-741年", title: "开元盛世", description: "唐玄宗时期，唐朝鼎盛。" },
            { time: "755年", title: "安史之乱", description: "安禄山叛乱，唐朝由盛转衰。" },
            { time: "875年", title: "黄巢起义", description: "黄巢领导农民起义。" },
            { time: "907年", title: "唐朝灭亡", description: "朱温篡唐，唐朝灭亡。" }
        ],
        figures: [
            { name: "唐太宗李世民", time: "598-649年", description: "开创贞观之治。" },
            { name: "武则天", time: "624-705年", description: "中国历史上唯一的女皇帝。" },
            { name: "唐玄宗李隆基", time: "685-762年", description: "开创开元盛世。" },
            { name: "魏征", time: "580-643年", description: "著名谏臣。" },
            { name: "李白", time: "701-762年", description: "诗仙，浪漫主义诗人。" },
            { name: "杜甫", time: "712-770年", description: "诗圣，现实主义诗人。" },
            { name: "玄奘", time: "602-664年", description: "西天取经，翻译佛经。" },
            { name: "鉴真", time: "688-763年", description: "东渡日本，传播佛法。" },
            { name: "安禄山", time: "703-757年", description: "发动安史之乱。" }
        ],
        impacts: [
            { title: "贞观之治与开元盛世", description: "中国封建社会的鼎盛时期。" },
            { title: "对外开放", description: "丝绸之路繁荣，中外交流频繁。" },
            { title: "诗歌繁荣", description: "唐诗成为中国文学的瑰宝。" },
            { title: "文化影响力", description: "日本、朝鲜等国深受唐文化影响。" },
            { title: "制度完善", description: "三省六部制、科举制完善。" }
        ]
    },
    fivedynasties: {
        name: "五代十国",
        time: "公元907年 - 公元960年",
        description: "唐朝灭亡后，中国再次陷入分裂，北方五代更迭，南方十国并立。",
        events: [
            { time: "907年", title: "朱温代唐", description: "建立后梁，五代开始。" },
            { time: "923年", title: "李存勖灭后梁", description: "建立后唐。" },
            { time: "936年", title: "石敬瑭建立后晋", description: "割让燕云十六州给契丹。" },
            { time: "947年", title: "刘知远建立后汉", description: "后汉仅存四年。" },
            { time: "951年", title: "郭威建立后周", description: "五代最后一个朝代。" },
            { time: "960年", title: "陈桥兵变", description: "赵匡胤建立宋朝，五代结束。" }
        ],
        figures: [
            { name: "朱温", time: "852-912年", description: "后梁开国皇帝。" },
            { name: "李存勖", time: "885-926年", description: "后唐开国皇帝。" },
            { name: "石敬瑭", time: "892-942年", description: "后晋开国皇帝，割让燕云十六州。" },
            { name: "柴荣", time: "921-959年", description: "后周世宗，有作为的皇帝。" },
            { name: "李煜", time: "937-978年", description: "南唐后主，著名词人。" }
        ],
        impacts: [
            { title: "短暂分裂", description: "为宋朝统一奠定基础。" },
            { title: "经济继续发展", description: "南方经济继续发展。" },
            { title: "词的发展", description: "五代时期词的创作繁荣。" }
        ]
    },
    song: {
        name: "宋朝",
        time: "公元960年 - 公元1279年",
        description: "宋朝分为北宋和南宋，经济文化高度繁荣，科技成就突出。",
        events: [
            { time: "960年", title: "陈桥兵变", description: "赵匡胤建立宋朝。" },
            { time: "961年", title: "杯酒释兵权", description: "宋太祖解除武将兵权。" },
            { time: "1004年", title: "澶渊之盟", description: "宋辽议和。" },
            { time: "1069年", title: "王安石变法", description: "王安石推行变法。" },
            { time: "1127年", title: "靖康之变", description: "金灭北宋。" },
            { time: "1127年", title: "南宋建立", description: "赵构建立南宋。" },
            { time: "1140年", title: "岳飞抗金", description: "岳飞取得郾城大捷。" },
            { time: "1141年", title: "绍兴和议", description: "宋金议和，岳飞被害。" },
            { time: "1276年", title: "元军攻占临安", description: "南宋灭亡。" },
            { time: "1279年", title: "崖山海战", description: "陆秀夫背幼帝投海，南宋彻底灭亡。" }
        ],
        figures: [
            { name: "宋太祖赵匡胤", time: "927-976年", description: "宋朝开国皇帝。" },
            { name: "王安石", time: "1021-1086年", description: "政治家、文学家，推行变法。" },
            { name: "司马光", time: "1019-1086年", description: "史学家，著《资治通鉴》。" },
            { name: "岳飞", time: "1103-1142年", description: "抗金名将，民族英雄。" },
            { name: "秦桧", time: "1090-1155年", description: "南宋权臣，陷害岳飞。" },
            { name: "苏轼", time: "1037-1101年", description: "文学家、书画家，唐宋八大家之一。" },
            { name: "朱熹", time: "1130-1200年", description: "理学家，程朱理学集大成者。" },
            { name: "毕昇", time: "约970-1051年", description: "发明活字印刷术。" },
            { name: "沈括", time: "1031-1095年", description: "科学家，著《梦溪笔谈》。" },
            { name: "李清照", time: "1084-约1155年", description: "女词人，婉约派代表。" },
            { name: "辛弃疾", time: "1140-1207年", description: "豪放派词人。" },
            { name: "文天祥", time: "1236-1283年", description: "抗元英雄，著《正气歌》。" }
        ],
        impacts: [
            { title: "经济繁荣", description: "商品经济发达，出现纸币。" },
            { title: "文化昌盛", description: "宋词、理学、绘画成就突出。" },
            { title: "科技领先", description: "活字印刷术、指南针、火药应用。" },
            { title: "崇文抑武", description: "重文轻武，文人地位高。" },
            { title: "民族政权并立", description: "与辽、金、西夏等政权并立。" }
        ]
    },
    yuan: {
        name: "元朝",
        time: "公元1271年 - 公元1368年",
        description: "元朝是中国历史上第一个由少数民族建立的大一统王朝，疆域辽阔。",
        events: [
            { time: "1206年", title: "成吉思汗建立蒙古汗国", description: "铁木真统一蒙古各部。" },
            { time: "1271年", title: "忽必烈建立元朝", description: "定国号为元。" },
            { time: "1279年", title: "元朝统一全国", description: "崖山海战后统一全国。" },
            { time: "1275年", title: "马可·波罗来华", description: "意大利旅行家马可·波罗来华。" },
            { time: "1351年", title: "红巾军起义", description: "元末农民起义爆发。" },
            { time: "1368年", title: "元朝灭亡", description: "朱元璋建立明朝，元顺帝北逃。" }
        ],
        figures: [
            { name: "成吉思汗铁木真", time: "1162-1227年", description: "蒙古汗国建立者。" },
            { name: "元世祖忽必烈", time: "1215-1294年", description: "元朝开国皇帝。" },
            { name: "马可·波罗", time: "1254-1324年", description: "意大利旅行家，著《马可·波罗游记》。" },
            { name: "关汉卿", time: "约1220-约1300年", description: "元曲四大家之首，著《窦娥冤》。" },
            { name: "郭守敬", time: "1231-1316年", description: "天文学家，编制《授时历》。" },
            { name: "朱元璋", time: "1328-1398年", description: "明朝开国皇帝，推翻元朝。" }
        ],
        impacts: [
            { title: "疆域辽阔", description: "中国历史上疆域最大的朝代之一。" },
            { title: "民族融合", description: "各民族交流融合，形成回族。" },
            { title: "中外交流", description: "丝绸之路畅通，东西方交流频繁。" },
            { title: "行省制度", description: "创立行省制度，影响至今。" },
            { title: "元曲繁荣", description: "元曲成为元代文学代表。" }
        ]
    },
    ming: {
        name: "明朝",
        time: "公元1368年 - 公元1644年",
        description: "明朝是中国历史上最后一个由汉族建立的大一统王朝，君主专制空前强化。",
        events: [
            { time: "1368年", title: "朱元璋建立明朝", description: "在南京称帝，建立明朝。" },
            { time: "1380年", title: "废除丞相制度", description: "朱元璋诛杀胡惟庸，废除丞相。" },
            { time: "1402年", title: "靖难之役", description: "朱棣夺取皇位，是为明成祖。" },
            { time: "1405-1433年", title: "郑和下西洋", description: "郑和七次下西洋。" },
            { time: "1421年", title: "迁都北京", description: "明成祖迁都北京。" },
            { time: "1449年", title: "土木堡之变", description: "明英宗被俘，明朝由盛转衰。" },
            { time: "1567年", title: "隆庆开关", description: "开放海禁。" },
            { time: "1581年", title: "张居正改革", description: "推行一条鞭法。" },
            { time: "1616年", title: "努尔哈赤建立后金", description: "女真族崛起。" },
            { time: "1644年", title: "明朝灭亡", description: "李自成攻入北京，崇祯帝自缢。" }
        ],
        figures: [
            { name: "明太祖朱元璋", time: "1328-1398年", description: "明朝开国皇帝。" },
            { name: "明成祖朱棣", time: "1360-1424年", description: "迁都北京，派郑和下西洋。" },
            { name: "郑和", time: "1371-1433年", description: "七次下西洋的航海家。" },
            { name: "于谦", time: "1398-1457年", description: "保卫北京的民族英雄。" },
            { name: "王阳明", time: "1472-1529年", description: "思想家，心学集大成者。" },
            { name: "张居正", time: "1525-1582年", description: "明朝政治家，推行改革。" },
            { name: "海瑞", time: "1514-1587年", description: "清官，直言敢谏。" },
            { name: "李时珍", time: "1518-1593年", description: "医学家，著《本草纲目》。" },
            { name: "宋应星", time: "1587-约1666年", description: "科学家，著《天工开物》。" },
            { name: "徐光启", time: "1562-1633年", description: "科学家，著《农政全书》。" },
            { name: "魏忠贤", time: "1568-1627年", description: "明末权宦。" },
            { name: "李自成", time: "1606-1645年", description: "明末农民起义领袖。" },
            { name: "崇祯帝朱由检", time: "1611-1644年", description: "明朝最后一位皇帝。" }
        ],
        impacts: [
            { title: "君主专制强化", description: "废除丞相，设立内阁、东厂、西厂。" },
            { title: "郑和下西洋", description: "世界航海史上的壮举。" },
            { title: "科技成就", description: "《本草纲目》《天工开物》《农政全书》。" },
            { title: "小说繁荣", description: "《三国演义》《水浒传》《西游记》《金瓶梅》。" },
            { title: "海禁与开关", description: "对外政策反复，影响中西交流。" }
        ]
    },
    qing: {
        name: "清朝",
        time: "公元1644年 - 公元1912年",
        description: "清朝是中国历史上最后一个封建王朝，由满族建立，前期强盛，后期衰落。",
        events: [
            { time: "1636年", title: "皇太极改国号为清", description: "后金改国号为清。" },
            { time: "1644年", title: "清军入关", description: "多尔衮率军入关，定都北京。" },
            { time: "1662年", title: "康熙即位", description: "康熙帝开始长达61年的统治。" },
            { time: "1681年", title: "平定三藩之乱", description: "康熙帝平定三藩。" },
            { time: "1689年", title: "《尼布楚条约》", description: "中俄签订边界条约。" },
            { time: "1722年", title: "雍正即位", description: "推行摊丁入亩、军机处等改革。" },
            { time: "1735年", title: "乾隆即位", description: "康乾盛世达到顶峰。" },
            { time: "1840年", title: "鸦片战争", description: "中国开始沦为半殖民地。" },
            { time: "1842年", title: "《南京条约》", description: "中国近代史上第一个不平等条约。" },
            { time: "1851年", title: "太平天国运动", description: "洪秀全发动太平天国起义。" },
            { time: "1856年", title: "第二次鸦片战争", description: "英法联军火烧圆明园。" },
            { time: "1861年", title: "洋务运动开始", description: "自强运动，学习西方技术。" },
            { time: "1894年", title: "甲午中日战争", description: "中国战败，洋务运动破产。" },
            { time: "1898年", title: "戊戌变法", description: "百日维新，后失败。" },
            { time: "1900年", title: "义和团运动与八国联军侵华", description: "《辛丑条约》签订。" },
            { time: "1911年", title: "辛亥革命", description: "武昌起义，清朝统治瓦解。" },
            { time: "1912年", title: "清朝灭亡", description: "宣统帝退位，清朝结束。" }
        ],
        figures: [
            { name: "努尔哈赤", time: "1559-1626年", description: "后金建立者。" },
            { name: "皇太极", time: "1592-1643年", description: "改国号为清。" },
            { name: "康熙帝玄烨", time: "1654-1722年", description: "开创康乾盛世。" },
            { name: "雍正帝胤禛", time: "1678-1735年", description: "推行改革，加强中央集权。" },
            { name: "乾隆帝弘历", time: "1711-1799年", description: "康乾盛世顶峰，后期衰落。" },
            { name: "和珅", time: "1750-1799年", description: "乾隆朝权臣，巨贪。" },
            { name: "林则徐", time: "1785-1850年", description: "虎门销烟，民族英雄。" },
            { name: "洪秀全", time: "1814-1864年", description: "太平天国领袖。" },
            { name: "曾国藩", time: "1811-1872年", description: "湘军首领，洋务派代表。" },
            { name: "李鸿章", time: "1823-1901年", description: "洋务派代表，签订多个不平等条约。" },
            { name: "左宗棠", time: "1812-1885年", description: "收复新疆的民族英雄。" },
            { name: "慈禧太后", time: "1835-1908年", description: "晚清实际统治者。" },
            { name: "光绪帝", time: "1871-1908年", description: "支持戊戌变法。" },
            { name: "康有为", time: "1858-1927年", description: "戊戌变法领袖。" },
            { name: "梁启超", time: "1873-1929年", description: "戊戌变法领袖，思想家。" },
            { name: "孙中山", time: "1866-1925年", description: "辛亥革命领袖，中华民国国父。" },
            { name: "溥仪", time: "1906-1967年", description: "中国最后一位皇帝。" }
        ],
        impacts: [
            { title: "康乾盛世", description: "中国封建社会最后的盛世。" },
            { title: "疆域奠定", description: "奠定现代中国版图基础。" },
            { title: "闭关锁国", description: "对外政策封闭，导致中国落后。" },
            { title: "鸦片战争", description: "中国近代史的开端，沦为半殖民地。" },
            { title: "洋务运动", description: "中国近代化的尝试。" },
            { title: "辛亥革命", description: "推翻封建帝制，建立民国。" }
        ]
    },
    republic: {
        name: "中华民国",
        time: "公元1912年 - 公元1949年",
        description: "中华民国是中国历史上第一个资产阶级共和国，经历了北洋政府和国民政府时期。",
        events: [
            { time: "1912年", title: "中华民国成立", description: "孙中山在南京就任临时大总统。" },
            { time: "1912年", title: "清帝退位", description: "宣统帝退位，清朝结束。" },
            { time: "1915年", title: "新文化运动", description: "陈独秀创办《新青年》。" },
            { time: "1919年", title: "五四运动", description: "反帝爱国运动。" },
            { time: "1921年", title: "中国共产党成立", description: "中共一大在上海召开。" },
            { time: "1924年", title: "国共第一次合作", description: "国民党一大召开。" },
            { time: "1926年", title: "北伐战争", description: "国民革命军北伐。" },
            { time: "1927年", title: "四一二反革命政变", description: "国共合作破裂。" },
            { time: "1927年", title: "南昌起义", description: "中国共产党打响武装反抗第一枪。" },
            { time: "1931年", title: "九一八事变", description: "日本侵占东北。" },
            { time: "1934年", title: "红军长征", description: "中央红军开始长征。" },
            { time: "1936年", title: "西安事变", description: "张学良、杨虎城逼蒋抗日。" },
            { time: "1937年", title: "七七事变", description: "全面抗战爆发。" },
            { time: "1937年", title: "南京大屠杀", description: "日军屠杀南京军民30万以上。" },
            { time: "1945年", title: "抗日战争胜利", description: "日本无条件投降。" },
            { time: "1946年", title: "解放战争", description: "国共内战开始。" },
            { time: "1949年", title: "中华人民共和国成立", description: "国民党败退台湾。" }
        ],
        figures: [
            { name: "孙中山", time: "1866-1925年", description: "中华民国国父，辛亥革命领袖。" },
            { name: "袁世凯", time: "1859-1916年", description: "北洋军阀首领，曾任中华民国总统。" },
            { name: "蒋介石", time: "1887-1975年", description: "国民党领袖，国民政府主席。" },
            { name: "陈独秀", time: "1879-1942年", description: "新文化运动领袖，中共创始人之一。" },
            { name: "李大钊", time: "1889-1927年", description: "中国共产党创始人之一。" },
            { name: "毛泽东", time: "1893-1976年", description: "中国共产党、中华人民共和国缔造者。" },
            { name: "周恩来", time: "1898-1976年", description: "中国共产党、中华人民共和国主要领导人。" },
            { name: "朱德", time: "1886-1976年", description: "中国人民解放军缔造者之一。" },
            { name: "鲁迅", time: "1881-1936年", description: "文学家、思想家。" },
            { name: "张学良", time: "1901-2001年", description: "发动西安事变。" },
            { name: "杨虎城", time: "1893-1949年", description: "与张学良共同发动西安事变。" }
        ],
        impacts: [
            { title: "结束帝制", description: "推翻两千多年的封建帝制。" },
            { title: "思想解放", description: "新文化运动、五四运动促进思想解放。" },
            { title: "抗日战争", description: "取得近代以来第一次反侵略战争完全胜利。" },
            { title: "社会转型", description: "从封建社会向现代社会转型。" }
        ]
    },
    prc: {
        name: "中华人民共和国",
        time: "公元1949年 - 至今",
        description: "中华人民共和国是中国历史上第一个人民民主专政的社会主义国家，经历了建国、探索、改革开放和新时代。",
        events: [
            { time: "1949年", title: "中华人民共和国成立", description: "毛泽东在天安门宣告开国。" },
            { time: "1950-1953年", title: "抗美援朝", description: "中国人民志愿军入朝作战。" },
            { time: "1956年", title: "三大改造完成", description: "进入社会主义社会。" },
            { time: "1958年", title: "大跃进与人民公社化", description: "探索中的挫折。" },
            { time: "1964年", title: "第一颗原子弹爆炸成功", description: "打破核垄断。" },
            { time: "1966-1976年", title: "文化大革命", description: "十年动乱。" },
            { time: "1970年", title: "第一颗人造卫星发射", description: "东方红一号。" },
            { time: "1971年", title: "恢复联合国合法席位", description: "中国重返联合国。" },
            { time: "1972年", title: "尼克松访华", description: "中美关系解冻。" },
            { time: "1978年", title: "十一届三中全会", description: "改革开放开始。" },
            { time: "1980年", title: "设立经济特区", description: "深圳、珠海、汕头、厦门。" },
            { time: "1984年", title: "城市经济体制改革", description: "改革全面展开。" },
            { time: "1997年", title: "香港回归", description: "香港回归祖国。" },
            { time: "1999年", title: "澳门回归", description: "澳门回归祖国。" },
            { time: "2001年", title: "中国加入WTO", description: "融入全球经济。" },
            { time: "2008年", title: "北京奥运会", description: "成功举办第29届夏季奥运会。" },
            { time: "2010年", title: "上海世博会", description: "成功举办世界博览会。" },
            { time: "2012年", title: "中国特色社会主义进入新时代", description: "习近平当选总书记。" },
            { time: "2020年", title: "全面建成小康社会", description: "脱贫攻坚战取得胜利。" },
            { time: "2020年", title: "新冠疫情防控", description: "抗击新冠肺炎疫情。" }
        ],
        figures: [
            { name: "毛泽东", time: "1893-1976年", description: "中华人民共和国缔造者。" },
            { name: "刘少奇", time: "1898-1969年", description: "中华人民共和国主席。" },
            { name: "周恩来", time: "1898-1976年", description: "中华人民共和国总理。" },
            { name: "朱德", time: "1886-1976年", description: "中国人民解放军总司令。" },
            { name: "邓小平", time: "1904-1997年", description: "改革开放总设计师。" },
            { name: "陈云", time: "1905-1995年", description: "经济领导人。" },
            { name: "江泽民", time: "1926-2022年", description: "中共中央总书记、国家主席。" },
            { name: "胡锦涛", time: "1942年-", description: "中共中央总书记、国家主席。" },
            { name: "习近平", time: "1953年-", description: "中共中央总书记、国家主席、中央军委主席。" },
            { name: "钱学森", time: "1911-2009年", description: "两弹一星元勋，中国航天之父。" },
            { name: "邓稼先", time: "1924-1986年", description: "两弹元勋。" },
            { name: "袁隆平", time: "1930-2021年", description: "杂交水稻之父。" },
            { name: "钟南山", time: "1936年-", description: "呼吸病学专家，抗疫英雄。" }
        ],
        impacts: [
            { title: "国家独立", description: "实现民族独立和人民解放。" },
            { title: "工业化", description: "从农业国到工业国的转变。" },
            { title: "改革开放", description: "经济快速发展，人民生活水平提高。" },
            { title: "国际地位提升", description: "成为具有全球影响力的大国。" },
            { title: "科技突破", description: "两弹一星、载人航天、杂交水稻等。" },
            { title: "全面小康", description: "实现第一个百年奋斗目标。" }
        ]
    }
};

// ==================== 美国历史数据 ====================
const usaHistory = {
    colonial: {
        name: "殖民地时期",
        time: "1607年 - 1775年",
        description: "从1607年詹姆斯敦建立到1775年独立战争爆发，北美殖民地逐步发展。",
        events: [
            { time: "1607年", title: "詹姆斯敦建立", description: "英国在北美建立第一个永久殖民地。" },
            { time: "1620年", title: "五月花号抵达", description: "清教徒乘坐五月花号抵达普利茅斯。" },
            { time: "1630年", title: "马萨诸塞湾殖民地建立", description: "大批清教徒移民北美。" },
            { time: "1754-1763年", title: "法国印第安人战争", description: "英法在北美争夺殖民地。" },
            { time: "1765年", title: "印花税法案", description: "英国对殖民地征税，引发抗议。" },
            { time: "1770年", title: "波士顿惨案", description: "英军枪杀殖民地居民。" },
            { time: "1773年", title: "波士顿倾茶事件", description: "殖民地居民抗议茶税。" }
        ],
        figures: [
            { name: "约翰·史密斯", time: "1580-1631年", description: "詹姆斯敦殖民地领袖。" },
            { name: "威廉·布拉德福德", time: "1590-1657年", description: "普利茅斯殖民地总督。" },
            { name: "本杰明·富兰克林", time: "1706-1790年", description: "开国元勋、科学家、发明家。" }
        ],
        impacts: [
            { title: "殖民地发展", description: "13个殖民地逐步形成。" },
            { title: "自治传统", description: "殖民地形成自治传统。" },
            { title: "矛盾积累", description: "与英国的矛盾日益加深。" }
        ]
    },
    revolution: {
        name: "独立战争与建国",
        time: "1775年 - 1800年",
        description: "美国独立战争胜利，建立世界上第一个现代民主共和国。",
        events: [
            { time: "1775年", title: "莱克星顿的枪声", description: "独立战争开始。" },
            { time: "1776年", title: "《独立宣言》", description: "宣布脱离英国独立。" },
            { time: "1777年", title: "萨拉托加大捷", description: "独立战争转折点。" },
            { time: "1781年", title: "约克镇战役", description: "英军投降，战争基本结束。" },
            { time: "1783年", title: "《巴黎条约》", description: "英国承认美国独立。" },
            { time: "1787年", title: "制宪会议", description: "制定美国宪法。" },
            { time: "1789年", title: "华盛顿就任总统", description: "美国第一任总统就职。" }
        ],
        figures: [
            { name: "乔治·华盛顿", time: "1732-1799年", description: "美国国父，第一任总统。" },
            { name: "托马斯·杰斐逊", time: "1743-1826年", description: "《独立宣言》起草者，第三任总统。" },
            { name: "本杰明·富兰克林", time: "1706-1790年", description: "开国元勋，外交家，科学家。" },
            { name: "约翰·亚当斯", time: "1735-1826年", description: "第二任总统。" },
            { name: "亚历山大·汉密尔顿", time: "1755-1804年", description: "财政部长，联邦党领袖。" }
        ],
        impacts: [
            { title: "独立建国", description: "建立世界上第一个现代民主共和国。" },
            { title: "宪法典范", description: "美国宪法成为后世典范。" },
            { title: "民主思想", description: "传播民主、自由、平等思想。" }
        ]
    },
    expansion: {
        name: "西进运动与内战",
        time: "1800年 - 1865年",
        description: "美国领土向西扩张，同时围绕奴隶制的矛盾最终引发内战。",
        events: [
            { time: "1803年", title: "路易斯安那购地", description: "从法国购买大片领土。" },
            { time: "1812年", title: "第二次美英战争", description: "与英国再次开战。" },
            { time: "1823年", title: "门罗主义", description: "宣布美洲是美洲人的美洲。" },
            { time: "1830年", title: "印第安人迁移法", description: "强迫印第安人西迁。" },
            { time: "1846-1848年", title: "美墨战争", description: "从墨西哥获得大片领土。" },
            { time: "1848年", title: "加州淘金热", description: "大量移民涌入加州。" },
            { time: "1860年", title: "林肯当选总统", description: "南方各州开始脱离联邦。" },
            { time: "1861年", title: "内战爆发", description: "南北战争开始。" },
            { time: "1863年", title: "《解放黑人奴隶宣言》", description: "林肯宣布解放奴隶。" },
            { time: "1865年", title: "内战结束", description: "南方投降，林肯遇刺。" }
        ],
        figures: [
            { name: "托马斯·杰斐逊", time: "1743-1826年", description: "购买路易斯安那。" },
            { name: "安德鲁·杰克逊", time: "1767-1845年", description: "第七任总统，推行印第安人迁移政策。" },
            { name: "亚伯拉罕·林肯", time: "1809-1865年", description: "第16任总统，废除奴隶制。" },
            { name: "杰斐逊·戴维斯", time: "1808-1889年", description: "南方邦联总统。" },
            { name: "罗伯特·李", time: "1807-1870年", description: "南方军队总司令。" },
            { name: "尤利西斯·格兰特", time: "1822-1885年", description: "北方军队总司令，第18任总统。" }
        ],
        impacts: [
            { title: "领土扩张", description: "领土从大西洋扩展到太平洋。" },
            { title: "废除奴隶制", description: "内战结束后废除奴隶制。" },
            { title: "国家统一", description: "维护了联邦统一。" },
            { title: "印第安人悲剧", description: "西进运动对印第安人造成巨大伤害。" }
        ]
    },
    gilded: {
        name: "镀金时代与进步时代",
        time: "1865年 - 1920年",
        description: "美国工业化快速发展，同时也面临社会问题，进步时代进行改革。",
        events: [
            { time: "1869年", title: "横贯大陆铁路通车", description: "连接东西海岸。" },
            { time: "1876年", title: "贝尔发明电话", description: "亚历山大·贝尔发明电话。" },
            { time: "1879年", title: "爱迪生发明电灯", description: "爱迪生发明实用电灯。" },
            { time: "1890年", title: "谢尔曼反托拉斯法", description: "限制垄断。" },
            { time: "1898年", title: "美西战争", description: "从西班牙获得古巴、菲律宾等地。" },
            { time: "1903年", title: "莱特兄弟发明飞机", description: "成功试飞。" },
            { time: "1913年", title: "福特流水线", description: "亨利·福特发明汽车流水线。" },
            { time: "1917年", title: "参加一战", description: "美国加入协约国。" },
            { time: "1919年", title: "凡尔赛和约", description: "一战结束，威尔逊提出十四点原则。" },
            { time: "1920年", title: "妇女获得选举权", description: "第19条宪法修正案通过。" }
        ],
        figures: [
            { name: "约翰·D·洛克菲勒", time: "1839-1937年", description: "石油大王，标准石油公司创始人。" },
            { name: "安德鲁·卡内基", time: "1835-1919年", description: "钢铁大王。" },
            { name: "J·P·摩根", time: "1837-1913年", description: "金融巨头。" },
            { name: "托马斯·爱迪生", time: "1847-1931年", description: "发明家。" },
            { name: "西奥多·罗斯福", time: "1858-1919年", description: "第26任总统，进步运动领袖。" },
            { name: "伍德罗·威尔逊", time: "1856-1924年", description: "第28任总统，一战期间总统。" },
            { name: "亨利·福特", time: "1863-1947年", description: "汽车大王，流水线生产发明者。" },
            { name: "莱特兄弟", time: "威尔伯1867-1912，奥维尔1871-1948", description: "飞机发明者。" }
        ],
        impacts: [
            { title: "工业化", description: "成为世界第一工业国。" },
            { title: "垄断形成", description: "托拉斯等垄断组织出现。" },
            { title: "进步运动", description: "改革腐败、不平等问题。" },
            { title: "崛起为大国", description: "开始参与国际事务。" }
        ]
    },
    interwar: {
        name: "两次大战之间",
        time: "1920年 - 1945年",
        description: "经历了咆哮的二十年代、大萧条和第二次世界大战。",
        events: [
            { time: "1920年代", title: "咆哮的二十年代", description: "经济繁荣，消费主义盛行。" },
            { time: "1929年", title: "股市崩盘", description: "大萧条开始。" },
            { time: "1933年", title: "罗斯福新政", description: "富兰克林·罗斯福推行新政。" },
            { time: "1941年", title: "珍珠港事件", description: "日本偷袭珍珠港，美国参战。" },
            { time: "1944年", title: "诺曼底登陆", description: "盟军开辟欧洲第二战场。" },
            { time: "1945年", title: "二战胜利", description: "德国、日本先后投降。" },
            { time: "1945年", title: "原子弹爆炸", description: "在广岛、长崎投下原子弹。" },
            { time: "1945年", title: "联合国成立", description: "美国主导建立联合国。" }
        ],
        figures: [
            { name: "赫伯特·胡佛", time: "1874-1964年", description: "第31任总统，大萧条期间总统。" },
            { name: "富兰克林·D·罗斯福", time: "1882-1945年", description: "第32任总统，新政和二战领导人。" },
            { name: "哈里·杜鲁门", time: "1884-1972年", description: "第33任总统，决定使用原子弹。" },
            { name: "德怀特·艾森豪威尔", time: "1890-1969年", description: "二战盟军最高司令，第34任总统。" },
            { name: "道格拉斯·麦克阿瑟", time: "1880-1964年", description: "太平洋战场美军司令。" },
            { name: "乔治·巴顿", time: "1885-1945年", description: "二战名将。" }
        ],
        impacts: [
            { title: "大萧条", description: "经济危机，政府干预加强。" },
            { title: "二战胜利", description: "成为世界超级大国。" },
            { title: "核武器时代", description: "原子弹改变战争形态。" },
            { title: "联合国", description: "主导建立战后国际秩序。" }
        ]
    },
    coldwar: {
        name: "冷战时期",
        time: "1945年 - 1991年",
        description: "与苏联进行冷战，同时经历民权运动、越南战争等重大事件。",
        events: [
            { time: "1947年", title: "杜鲁门主义", description: "冷战开始。" },
            { time: "1948年", title: "马歇尔计划", description: "援助欧洲重建。" },
            { time: "1950-1953年", title: "朝鲜战争", description: "冷战中第一场热战。" },
            { time: "1954年", title: "布朗诉教育委员会案", description: "废除种族隔离。" },
            { time: "1957年", title: "苏联发射卫星", description: "太空竞赛开始。" },
            { time: "1961年", title: "猪湾事件", description: "入侵古巴失败。" },
            { time: "1962年", title: "古巴导弹危机", description: "核战边缘。" },
            { time: "1963年", title: "肯尼迪遇刺", description: "约翰·肯尼迪总统遇刺。" },
            { time: "1964年", title: "《民权法案》", description: "禁止种族歧视。" },
            { time: "1965-1975年", title: "越南战争", description: "美国陷入越战泥潭。" },
            { time: "1969年", title: "人类登月", description: "阿波罗11号成功登月。" },
            { time: "1972年", title: "尼克松访华", description: "中美关系解冻。" },
            { time: "1974年", title: "水门事件", description: "尼克松辞职。" },
            { time: "1980年代", title: "里根时代", description: "保守主义复兴，冷战结束。" },
            { time: "1991年", title: "苏联解体", description: "冷战结束。" }
        ],
        figures: [
            { name: "哈里·杜鲁门", time: "1884-1972年", description: "冷战开始时的总统。" },
            { name: "德怀特·艾森豪威尔", time: "1890-1969年", description: "第34任总统。" },
            { name: "约翰·F·肯尼迪", time: "1917-1963年", description: "第35任总统，遇刺身亡。" },
            { name: "林登·约翰逊", time: "1908-1973年", description: "第36任总统，推行伟大社会。" },
            { name: "理查德·尼克松", time: "1913-1994年", description: "第37任总统，访华，水门事件辞职。" },
            { name: "罗纳德·里根", time: "1911-2004年", description: "第40任总统，保守主义代表。" },
            { name: "马丁·路德·金", time: "1929-1968年", description: "民权运动领袖。" },
            { name: "马尔科姆·X", time: "1925-1965年", description: "黑人民权领袖。" }
        ],
        impacts: [
            { title: "冷战格局", description: "美苏两极对峙。" },
            { title: "民权运动", description: "种族平等取得重大进展。" },
            { title: "太空竞赛", description: "推动科技发展。" },
            { title: "越南战争", description: "社会分裂，反战运动。" },
            { title: "冷战胜利", description: "成为唯一超级大国。" }
        ]
    },
    modern: {
        name: "当代美国",
        time: "1991年 - 至今",
        description: "冷战结束后，美国成为唯一超级大国，经历了科技革命、反恐战争等。",
        events: [
            { time: "1990年代", title: "互联网革命", description: "互联网商业化，硅谷崛起。" },
            { time: "1991年", title: "海湾战争", description: "击败伊拉克，解放科威特。" },
            { time: "2000年", title: "千禧年", description: "世纪之交。" },
            { time: "2001年", title: "9·11恐怖袭击", description: "改变全球安全格局。" },
            { time: "2001年", title: "阿富汗战争", description: "打击塔利班。" },
            { time: "2003年", title: "伊拉克战争", description: "入侵伊拉克。" },
            { time: "2008年", title: "金融危机", description: "次贷危机引发全球金融危机。" },
            { time: "2008年", title: "奥巴马当选", description: "第一位黑人总统。" },
            { time: "2010年代", title: "社交媒体时代", description: "Facebook、Twitter改变生活。" },
            { time: "2016年", title: "特朗普当选", description: "政治极化加剧。" },
            { time: "2020年", title: "新冠疫情", description: "全球大流行。" },
            { time: "2021年", title: "国会山骚乱", description: "政治动荡。" },
            { time: "2022年", title: "俄乌冲突", description: "地缘政治格局变化。" },
            { time: "2022年", title: "ChatGPT发布", description: "AI革命。" }
        ],
        figures: [
            { name: "比尔·克林顿", time: "1946年-", description: "第42任总统。" },
            { name: "乔治·W·布什", time: "1946年-", description: "第43任总统，9·11期间总统。" },
            { name: "巴拉克·奥巴马", time: "1961年-", description: "第44任总统，第一位黑人总统。" },
            { name: "唐纳德·特朗普", time: "1946年-", description: "第45任总统。" },
            { name: "乔·拜登", time: "1942年-", description: "第46任总统。" },
            { name: "比尔·盖茨", time: "1955年-", description: "微软创始人。" },
            { name: "史蒂夫·乔布斯", time: "1955-2011年", description: "苹果创始人。" },
            { name: "马克·扎克伯格", time: "1984年-", description: "Facebook创始人。" },
            { name: "埃隆·马斯克", time: "1971年-", description: "特斯拉、SpaceX创始人。" }
        ],
        impacts: [
            { title: "唯一超级大国", description: "冷战后成为唯一超级大国。" },
            { title: "科技革命", description: "互联网、AI等技术领先。" },
            { title: "反恐战争", description: "9·11后全球反恐。" },
            { title: "政治极化", description: "社会分裂加剧。" },
            { title: "挑战与机遇", description: "面对中国崛起、气候变化等新挑战。" }
        ]
    }
};

// ==================== 日本历史数据 ====================
const japanHistory = {
    ancient: {
        name: "古代日本",
        time: "公元前3世纪 - 公元794年",
        description: "从弥生时代到奈良时代，日本从原始社会进入国家形态，深受中国文化影响。",
        events: [
            { time: "公元前3世纪", title: "弥生时代开始", description: "水稻种植和铁器传入日本。" },
            { time: "公元3世纪", title: "邪马台国", description: "卑弥呼女王统治。" },
            { time: "公元4世纪", title: "大和国统一", description: "大和国统一日本大部分地区。" },
            { time: "538年", title: "佛教传入", description: "佛教从朝鲜传入日本。" },
            { time: "645年", title: "大化改新", description: "学习唐朝制度，建立中央集权。" },
            { time: "710年", title: "平城京建都", description: "奈良时代开始。" },
            { time: "712年", title: "《古事记》成书", description: "日本最早的史书。" },
            { time: "720年", title: "《日本书纪》成书", description: "敕撰史书。" },
            { time: "794年", title: "迁都平安京", description: "平安时代开始。" }
        ],
        figures: [
            { name: "卑弥呼", time: "约公元2世纪-3世纪", description: "邪马台国女王。" },
            { name: "圣德太子", time: "574-622年", description: "推行改革，派遣遣隋使。" },
            { name: "孝德天皇", time: "596-654年", description: "推行大化改新。" },
            { name: "藤原不比等", time: "659-720年", description: "参与编纂《日本书纪》。" }
        ],
        impacts: [
            { title: "国家形成", description: "从部落联盟到统一国家。" },
            { title: "中国文化影响", description: "全面学习唐朝制度文化。" },
            { title: "佛教传播", description: "佛教成为日本主要宗教之一。" }
        ]
    },
    heian: {
        name: "平安时代",
        time: "公元794年 - 1192年",
        description: "以平安京（京都）为中心的时代，贵族文化繁荣，武士阶层兴起。",
        events: [
            { time: "794年", title: "桓武天皇迁都", description: "从奈良迁都平安京。" },
            { time: "9世纪", title: "藤原氏专权", description: "藤原家族掌控朝政。" },
            { time: "894年", title: "停止遣唐使", description: "停止派遣遣唐使，日本文化开始本土化。" },
            { time: "10世纪", title: "假名文字成熟", description: "平假名、片假名形成。" },
            { time: "1010年左右", title: "《源氏物语》成书", description: "紫式部著世界最早的长篇小说。" },
            { time: "1159年", title: "平治之乱", description: "平清盛掌权。" },
            { time: "1180-1185年", title: "源平合战", description: "源氏和平氏争霸。" },
            { time: "1192年", title: "镰仓幕府建立", description: "源赖朝任征夷大将军。" }
        ],
        figures: [
            { name: "桓武天皇", time: "737-806年", description: "迁都平安京。" },
            { name: "藤原道长", time: "966-1027年", description: "藤原氏全盛时期。" },
            { name: "紫式部", time: "约973-约1014年", description: "《源氏物语》作者。" },
            { name: "清少纳言", time: "约966-约1025年", description: "《枕草子》作者。" },
            { name: "平清盛", time: "1118-1181年", description: "平氏政权建立者。" },
            { name: "源赖朝", time: "1147-1199年", description: "镰仓幕府建立者。" },
            { name: "源义经", time: "1159-1189年", description: "源氏名将，悲剧英雄。" }
        ],
        impacts: [
            { title: "贵族文化", description: "国风文化繁荣，假名文学发达。" },
            { title: "武士兴起", description: "武士阶层逐渐掌握权力。" },
            { title: "幕府制度", description: "开启幕府统治时代。" }
        ]
    },
    kamakura: {
        name: "镰仓时代",
        time: "1192年 - 1333年",
        description: "日本第一个幕府政权，武家政权开始，武士道精神形成。",
        events: [
            { time: "1192年", title: "源赖朝任征夷大将军", description: "镰仓幕府正式建立。" },
            { time: "1199年", title: "源赖朝去世", description: "北条氏开始专权。" },
            { time: "1221年", title: "承久之乱", description: "朝廷与幕府冲突，幕府胜利。" },
            { time: "1232年", title: "《御成败式目》", description: "武家法典制定。" },
            { time: "1274年", title: "第一次元日战争", description: "蒙古第一次入侵。" },
            { time: "1281年", title: "第二次元日战争", description: "蒙古第二次入侵，神风帮助日本。" },
            { time: "1333年", title: "镰仓幕府灭亡", description: "足利尊氏和新田义贞推翻镰仓幕府。" }
        ],
        figures: [
            { name: "源赖朝", time: "1147-1199年", description: "镰仓幕府开创者。" },
            { name: "北条时政", time: "1138-1215年", description: "北条氏初代执权。" },
            { name: "北条义时", time: "1163-1224年", description: "承久之乱时的执权。" },
            { name: "北条时宗", time: "1251-1284年", description: "元日战争时的执权。" },
            { name: "后醍醐天皇", time: "1288-1339年", description: "推动倒幕。" },
            { name: "足利尊氏", time: "1305-1358年", description: "室町幕府开创者。" }
        ],
        impacts: [
            { title: "武家政治", description: "武士阶层掌握政权。" },
            { title: "武士道", description: "武士道精神形成。" },
            { title: "抗元胜利", description: "成功抵御蒙古入侵，民族意识增强。" },
            { title: "佛教发展", description: "禅宗等佛教宗派兴盛。" }
        ]
    },
    muromachi: {
        name: "室町时代",
        time: "1336年 - 1573年",
        description: "足利幕府时期，前期南北朝对峙，后期战国时代开始。",
        events: [
            { time: "1336年", title: "足利尊氏建立室町幕府", description: "室町时代开始。" },
            { time: "1336-1392年", title: "南北朝时代", description: "南朝和北朝对峙。" },
            { time: "1368年", title: "足利义满任将军", description: "室町幕府全盛时期。" },
            { time: "1392年", title: "南北朝统一", description: "结束对峙。" },
            { time: "1401年", title: "日明贸易", description: "与明朝建立勘合贸易。" },
            { time: "1467-1477年", title: "应仁之乱", description: "战国时代开始。" },
            { time: "15世纪末", title: "战国时代", description: "大名割据，战乱不断。" },
            { time: "1543年", title: "铁炮传入", description: "葡萄牙人带来火枪。" },
            { time: "1549年", title: "基督教传入", description: "方济各·沙勿略传教。" },
            { time: "1568年", title: "织田信长上洛", description: "信长开始统一日本。" },
            { time: "1573年", title: "室町幕府灭亡", description: "足利义昭被信长流放。" }
        ],
        figures: [
            { name: "足利尊氏", time: "1305-1358年", description: "室町幕府开创者。" },
            { name: "足利义满", time: "1358-1408年", description: "室町幕府全盛期将军，金阁寺建造者。" },
            { name: "一休宗纯", time: "1394-1481年", description: "著名狂僧，诗人。" },
            { name: "织田信长", time: "1534-1582年", description: "战国时代霸主，统一先驱。" },
            { name: "丰臣秀吉", time: "1537-1598年", description: "完成统一，发动侵朝战争。" },
            { name: "千利休", time: "1522-1591年", description: "茶道大师。" }
        ],
        impacts: [
            { title: "战国时代", description: "大名割据，下克上盛行。" },
            { title: "西方接触", description: "葡萄牙人带来火枪和基督教。" },
            { title: "文化繁荣", description: "茶道、能剧、花道发展。" },
            { title: "统一趋势", description: "织田信长、丰臣秀吉开始统一。" }
        ]
    },
    azuchi: {
        name: "安土桃山时代",
        time: "1568年 - 1603年",
        description: "织田信长和丰臣秀吉主导的时代，日本重新统一。",
        events: [
            { time: "1568年", title: "织田信长上洛", description: "进入京都，开始统一。" },
            { time: "1575年", title: "长筱之战", description: "火枪击败武田骑兵。" },
            { time: "1582年", title: "本能寺之变", description: "织田信长被明智光秀杀害。" },
            { time: "1582年", title: "山崎之战", description: "丰臣秀吉击败明智光秀。" },
            { time: "1585年", title: "秀吉任关白", description: "开始全面统一。" },
            { time: "1590年", title: "小田原征伐", description: "统一日本。" },
            { time: "1592-1598年", title: "文禄庆长之役", description: "侵略朝鲜。" },
            { time: "1598年", title: "丰臣秀吉去世", description: "五大老辅佐秀赖。" },
            { time: "1600年", title: "关原之战", description: "德川家康胜利。" },
            { time: "1603年", title: "德川幕府建立", description: "江户时代开始。" }
        ],
        figures: [
            { name: "织田信长", time: "1534-1582年", description: "第六天魔王，统一先驱。" },
            { name: "丰臣秀吉", time: "1537-1598年", description: "从农民到天下人。" },
            { name: "明智光秀", time: "1528-1582年", description: "本能寺之变发动者。" },
            { name: "德川家康", time: "1543-1616年", description: "江户幕府开创者。" },
            { name: "武田信玄", time: "1521-1573年", description: "甲斐之虎，战国名将。" },
            { name: "上杉谦信", time: "1530-1578年", description: "越后之龙，军神。" },
            { name: "石田三成", time: "1560-1600年", description: "丰臣家忠臣，关原之战西军首领。" }
        ],
        impacts: [
            { title: "全国统一", description: "结束战国乱世。" },
            { title: "侵略朝鲜", description: "文禄庆长之役，影响东亚格局。" },
            { title: "安土桃山文化", description: "豪华灿烂的文化。" },
            { title: "从丰臣到德川", description: "政权和平过渡。" }
        ]
    },
    edo: {
        name: "江户时代",
        time: "1603年 - 1868年",
        description: "德川幕府统治时期，闭关锁国，社会稳定，商品经济发展。",
        events: [
            { time: "1603年", title: "德川家康任征夷大将军", description: "江户幕府建立。" },
            { time: "1615年", title: "大阪夏之阵", description: "消灭丰臣家。" },
            { time: "1635年", title: "锁国令", description: "开始闭关锁国政策。" },
            { time: "1657年", title: "明历大火", description: "江户城大半烧毁。" },
            { time: "18世纪", title: "元禄文化", description: "町人文化繁荣。" },
            { time: "1720年", title: "享保改革", description: "德川吉宗推行改革。" },
            { time: "1787-1793年", title: "宽政改革", description: "松平定信改革。" },
            { time: "1841-1843年", title: "天保改革", description: "水野忠邦改革。" },
            { time: "1853年", title: "黑船来航", description: "佩里率美国舰队打开日本国门。" },
            { time: "1854年", title: "《日美亲善条约》", description: "结束锁国。" },
            { time: "1868年", title: "王政复古", description: "明治维新开始。" }
        ],
        figures: [
            { name: "德川家康", time: "1543-1616年", description: "江户幕府开创者。" },
            { name: "德川家光", time: "1604-1651年", description: "推行锁国政策。" },
            { name: "德川吉宗", time: "1684-1751年", description: "享保改革。" },
            { name: "松尾芭蕉", time: "1644-1694年", description: "俳句大师。" },
            { name: "葛饰北斋", time: "1760-1849年", description: "浮世绘大师，《富岳三十六景》。" },
            { name: "歌川广重", time: "1797-1858年", description: "浮世绘大师。" },
            { name: "井原西鹤", time: "1642-1693年", description: "浮世草子作家。" },
            { name: "近松门左卫门", time: "1653-1724年", description: "人形净琉璃、歌舞伎作者。" },
            { name: "佩里", time: "1794-1858年", description: "美国海军将领，打开日本国门。" },
            { name: "坂本龙马", time: "1836-1867年", description: "维新志士。" },
            { name: "西乡隆盛", time: "1828-1877年", description: "维新三杰之一。" },
            { name: "大久保利通", time: "1830-1878年", description: "维新三杰之一。" },
            { name: "木户孝允", time: "1833-1877年", description: "维新三杰之一。" }
        ],
        impacts: [
            { title: "闭关锁国", description: "长达二百多年的锁国政策。" },
            { title: "社会稳定", description: "幕藩体制维持和平。" },
            { title: "商品经济", description: "町人经济发展，资本主义萌芽。" },
            { title: "文化繁荣", description: "浮世绘、歌舞伎、俳句等。" },
            { title: "开国维新", description: "黑船来航后明治维新。" }
        ]
    },
    meiji: {
        name: "明治时代",
        time: "1868年 - 1912年",
        description: "明治维新，日本快速近代化，从封建社会转变为资本主义国家。",
        events: [
            { time: "1868年", title: "明治维新开始", description: "王政复古，迁都东京。" },
            { time: "1871年", title: "废藩置县", description: "加强中央集权。" },
            { time: "1872年", title: "学制公布", description: "近代教育开始。" },
            { time: "1873年", title: "征兵令", description: "建立近代军队。" },
            { time: "1877年", title: "西南战争", description: "西乡隆盛叛乱。" },
            { time: "1889年", title: "《大日本帝国宪法》", description: "颁布宪法。" },
            { time: "1894-1895年", title: "甲午中日战争", description: "击败中国，获得台湾。" },
            { time: "1904-1905年", title: "日俄战争", description: "击败俄国，成为列强。" },
            { time: "1910年", title: "吞并韩国", description: "日韩合并。" },
            { time: "1912年", title: "明治天皇去世", description: "明治时代结束。" }
        ],
        figures: [
            { name: "明治天皇", time: "1852-1912年", description: "明治维新的象征。" },
            { name: "大久保利通", time: "1830-1878年", description: "维新核心人物。" },
            { name: "木户孝允", time: "1833-1877年", description: "维新核心人物。" },
            { name: "西乡隆盛", time: "1828-1877年", description: "维新后叛乱。" },
            { name: "伊藤博文", time: "1841-1909年", description: "明治宪法起草者，首任首相。" },
            { name: "福泽谕吉", time: "1835-1901年", description: "启蒙思想家。" },
            { name: "夏目漱石", time: "1867-1916年", description: "文豪。" },
            { name: "森鸥外", time: "1862-1922年", description: "文豪、军医。" }
        ],
        impacts: [
            { title: "近代化", description: "快速实现工业化和近代化。" },
            { title: "成为列强", description: "甲午、日俄战争后跻身列强。" },
            { title: "军国主义", description: "军国主义道路开始。" },
            { title: "文化转型", description: "东西方文化碰撞融合。" }
        ]
    },
    taisho: {
        name: "大正时代",
        time: "1912年 - 1926年",
        description: "相对自由民主的时期，大正民主运动，同时社会问题积累。",
        events: [
            { time: "1912年", title: "大正天皇即位", description: "大正时代开始。" },
            { time: "1914-1918年", title: "第一次世界大战", description: "日本参战，获得利益。" },
            { time: "1918年", title: "米骚动", description: "粮食骚乱。" },
            { time: "1920年", title: "战后经济危机", description: "经济不景气。" },
            { time: "1923年", title: "关东大地震", description: "东京、横滨大地震。" },
            { time: "1925年", title: "普选法", description: "成年男子获得选举权。" },
            { time: "1926年", title: "大正天皇去世", description: "昭和时代开始。" }
        ],
        figures: [
            { name: "大正天皇", time: "1879-1926年", description: "大正时代天皇。" },
            { name: "原敬", time: "1856-1921年", description: "平民首相。" },
            { name: "芥川龙之介", time: "1892-1927年", description: "短篇小说巨匠。" },
            { name: "谷崎润一郎", time: "1886-1965年", description: "文豪。" },
            { name: "川端康成", time: "1899-1972年", description: "诺贝尔文学奖得主。" },
            { name: "横光利一", time: "1898-1947年", description: "新感觉派作家。" }
        ],
        impacts: [
            { title: "大正民主", description: "民主运动高涨。" },
            { title: "文化繁荣", description: "大正德谟克拉西时期文化。" },
            { title: "社会矛盾", description: "经济危机、社会问题积累。" },
            { title: "军国主义抬头", description: "军部势力增强。" }
        ]
    },
    showa: {
        name: "昭和时代",
        time: "1926年 - 1989年",
        description: "经历了二战战败和战后复兴，从废墟到经济大国。",
        events: [
            { time: "1926年", title: "昭和天皇即位", description: "昭和时代开始。" },
            { time: "1929年", title: "世界大萧条", description: "经济危机影响日本。" },
            { time: "1931年", title: "九一八事变", description: "侵占中国东北。" },
            { time: "1932年", title: "五一五事件", description: "犬养毅首相被暗杀。" },
            { time: "1936年", title: "二二六事件", description: "青年军官叛乱。" },
            { time: "1937年", title: "卢沟桥事变", description: "全面侵华战争开始。" },
            { time: "1937年", title: "南京大屠杀", description: "日军屠杀中国军民。" },
            { time: "1941年", title: "珍珠港事件", description: "太平洋战争爆发。" },
            { time: "1942年", title: "中途岛海战", description: "战争转折点。" },
            { time: "1945年", title: "广岛、长崎原子弹", description: "日本投降。" },
            { time: "1945年", title: "战败投降", description: "二战结束。" },
            { time: "1946年", title: "和平宪法", description: "放弃战争。" },
            { time: "1950-1953年", title: "朝鲜战争", description: "特需景气。" },
            { time: "1955年", title: "五五年体制", description: "自民党长期执政。" },
            { time: "1960年", title: "日美安保条约斗争", description: "大规模反战运动。" },
            { time: "1964年", title: "东京奥运会", description: "经济起飞象征。" },
            { time: "1968年", title: "成为世界第二经济大国", description: "经济奇迹。" },
            { time: "1972年", title: "中日邦交正常化", description: "田中角荣访华。" },
            { time: "1973年", title: "石油危机", description: "经济高速增长结束。" },
            { time: "1980年代", title: "泡沫经济", description: "资产价格暴涨。" },
            { time: "1989年", title: "昭和天皇去世", description: "平成时代开始。" }
        ],
        figures: [
            { name: "昭和天皇裕仁", time: "1901-1989年", description: "昭和时代天皇。" },
            { name: "东条英机", time: "1884-1948年", description: "二战首相，甲级战犯。" },
            { name: "山本五十六", time: "1884-1943年", description: "联合舰队司令，偷袭珍珠港策划者。" },
            { name: "吉田茂", time: "1878-1967年", description: "战后首相，奠定经济复兴基础。" },
            { name: "池田勇人", time: "1899-1965年", description: "国民收入倍增计划。" },
            { name: "田中角荣", time: "1918-1993年", description: "中日邦交正常化。" },
            { name: "中曾根康弘", time: "1918-2019年", description: "战后政治总决算。" },
            { name: "太宰治", time: "1909-1948年", description: "无赖派作家。" },
            { name: "三岛由纪夫", time: "1925-1970年", description: "文豪，切腹自杀。" },
            { name: "大江健三郎", time: "1935-2023年", description: "诺贝尔文学奖得主。" },
            { name: "黑泽明", time: "1910-1998年", description: "电影大师。" },
            { name: "宫崎骏", time: "1941年-", description: "动画大师。" }
        ],
        impacts: [
            { title: "战争灾难", description: "发动侵略战争，带来巨大灾难。" },
            { title: "战后复兴", description: "从废墟快速复兴。" },
            { title: "经济奇迹", description: "成为世界第二经济大国。" },
            { title: "和平宪法", description: "放弃战争，和平发展。" },
            { title: "文化输出", description: "动漫、游戏等文化产业。" }
        ]
    },
    heisei: {
        name: "平成时代",
        time: "1989年 - 2019年",
        description: "泡沫经济崩溃，失去的二十年，同时社会转型。",
        events: [
            { time: "1989年", title: "平成天皇即位", description: "平成时代开始。" },
            { time: "1990年", title: "泡沫经济崩溃", description: "股市、地价暴跌。" },
            { time: "1995年", title: "阪神大地震", description: "神户大地震。" },
            { time: "1995年", title: "奥姆真理教事件", description: "东京地铁沙林毒气。" },
            { time: "1997年", title: "亚洲金融危机", description: "影响日本经济。" },
            { time: "2000年代", title: "失去的二十年", description: "经济停滞。" },
            { time: "2011年", title: "东日本大地震", description: "海啸、核泄漏。" },
            { time: "2019年", title: "平成天皇退位", description: "令和时代开始。" }
        ],
        figures: [
            { name: "明仁天皇", time: "1933年-", description: "平成时代天皇。" },
            { name: "小泉纯一郎", time: "1942年-", description: "首相，邮政民营化。" },
            { name: "安倍晋三", time: "1954-2022年", description: "最长任期首相，安倍经济学。" },
            { name: "村上春树", time: "1949年-", description: "著名作家。" },
            { name: "东野圭吾", time: "1958年-", description: "推理小说作家。" },
            { name: "手冢治虫", time: "1928-1989年", description: "漫画之神。" },
            { name: "鸟山明", time: "1955年-", description: "《龙珠》作者。" }
        ],
        impacts: [
            { title: "泡沫崩溃", description: "经济长期停滞。" },
            { title: "社会问题", description: "少子化、老龄化、就职冰河期。" },
            { title: "自然灾害", description: "阪神、东日本大地震。" },
            { title: "文化强国", description: "动漫、游戏产业领先世界。" }
        ]
    },
    reiwa: {
        name: "令和时代",
        time: "2019年 - 至今",
        description: "德仁天皇即位，日本进入新时代，面临新冠疫情、人口问题等挑战。",
        events: [
            { time: "2019年", title: "德仁天皇即位", description: "令和时代开始。" },
            { time: "2020年", title: "东京奥运会推迟", description: "新冠疫情影响。" },
            { time: "2020-2022年", title: "新冠疫情", description: "全球大流行。" },
            { time: "2021年", title: "东京奥运会", description: "推迟后举办。" },
            { time: "2022年", title: "安倍晋三遇刺", description: "前首相被枪杀。" },
            { time: "2023年", title: "岸田文雄内阁", description: "应对各种挑战。" }
        ],
        figures: [
            { name: "德仁天皇", time: "1960年-", description: "令和时代天皇。" },
            { name: "岸田文雄", time: "1957年-", description: "现任首相。" },
            { name: "安倍晋三", time: "1954-2022年", description: "前首相，遇刺身亡。" }
        ],
        impacts: [
            { title: "新时代", description: "第一个取自日本古典的年号。" },
            { title: "新冠疫情", description: "疫情对经济社会的影响。" },
            { title: "人口挑战", description: "少子老龄化持续。" },
            { title: "地缘政治", description: "中美关系、俄乌冲突影响。" }
        ]
    }
};

// ==================== 数据集合 ====================
const historyData = {
    global: globalHistory,
    china: chinaHistory,
    usa: usaHistory,
    japan: japanHistory
};

// ==================== 更多国家数据（简要版）====================
// 为了演示，这里添加其他国家的简要数据
const ukHistory = {
    anglo: {
        name: "盎格鲁-撒克逊时期",
        time: "5世纪 - 1066年",
        description: "日耳曼部落入侵不列颠，形成盎格鲁-撒克逊七国时代。",
        events: [
            { time: "5世纪", title: "盎格鲁-撒克逊人入侵", description: "日耳曼部落征服不列颠。" },
            { time: "7世纪", title: "七国时代", description: "七个王国并立。" },
            { time: "8世纪", title: "维京人入侵", description: "丹麦人入侵不列颠。" },
            { time: "1016年", title: "丹麦统治", description: "克努特大帝统治英格兰。" },
            { time: "1066年", title: "诺曼征服", description: "威廉一世征服英格兰。" }
        ],
        figures: [
            { name: "阿尔弗雷德大帝", time: "849-899年", description: "威塞克斯国王，抵抗维京人。" },
            { name: "忏悔者爱德华", time: "1003-1066年", description: "最后一位盎格鲁-撒克逊国王。" }
        ],
        impacts: [
            { title: "英格兰形成", description: "盎格鲁-撒克逊人形成英格兰民族。" },
            { title: "基督教传播", description: "基督教成为国教。" }
        ]
    },
    norman: {
        name: "诺曼王朝",
        time: "1066年 - 1154年",
        description: "诺曼征服后，威廉一世建立诺曼王朝，引入封建制度。",
        events: [
            { time: "1066年", title: "黑斯廷斯战役", description: "威廉击败哈罗德。" },
            { time: "1086年", title: "末日审判书", description: "土地调查。" },
            { time: "1135-1154年", title: "斯蒂芬时期", description: "内战时期。" }
        ],
        figures: [
            { name: "征服者威廉", time: "约1028-1087年", description: "诺曼王朝开创者。" }
        ],
        impacts: [
            { title: "封建制度", description: "引入欧洲大陆封建制度。" },
            { title: "语言融合", description: "英语融合法语元素。" }
        ]
    },
    plantagenet: {
        name: "金雀花王朝",
        time: "1154年 - 1485年",
        description: "英国历史上最长的王朝，经历了大宪章、百年战争、玫瑰战争。",
        events: [
            { time: "1154年", title: "亨利二世即位", description: "金雀花王朝开始。" },
            { time: "1215年", title: "大宪章", description: "限制王权。" },
            { time: "1337-1453年", title: "百年战争", description: "英法百年战争。" },
            { time: "1455-1485年", title: "玫瑰战争", description: "兰开斯特与约克家族内战。" }
        ],
        figures: [
            { name: "亨利二世", time: "1133-1189年", description: "金雀花王朝开创者。" },
            { name: "狮心王理查", time: "1157-1199年", description: "参加十字军东征。" },
            { name: "约翰王", time: "1166-1216年", description: "被迫签署大宪章。" },
            { name: "爱德华三世", time: "1312-1377年", description: "百年战争发起者。" },
            { name: "亨利五世", time: "1386-1422年", description: "阿金库尔战役胜利。" },
            { name: "理查三世", time: "1452-1485年", description: "最后一位金雀花国王。" }
        ],
        impacts: [
            { title: "大宪章", description: "君主立宪的起源。" },
            { title: "议会形成", description: "议会制度开始形成。" },
            { title: "民族意识", description: "百年战争促进民族意识。" }
        ]
    },
    tudor: {
        name: "都铎王朝",
        time: "1485年 - 1603年",
        description: "专制王权鼎盛时期，宗教改革，英国国教建立。",
        events: [
            { time: "1485年", title: "亨利七世即位", description: "都铎王朝开始。" },
            { time: "1509年", title: "亨利八世即位", description: "离婚案引发宗教改革。" },
            { time: "1534年", title: "至尊法案", description: "英国国教建立。" },
            { time: "1558年", title: "伊丽莎白一世即位", description: "黄金时代开始。" },
            { time: "1588年", title: "击败无敌舰队", description: "击败西班牙无敌舰队。" },
            { time: "1603年", title: "伊丽莎白一世去世", description: "都铎王朝结束。" }
        ],
        figures: [
            { name: "亨利七世", time: "1457-1509年", description: "都铎王朝开创者。" },
            { name: "亨利八世", time: "1491-1547年", description: "宗教改革。" },
            { name: "伊丽莎白一世", time: "1533-1603年", description: "童贞女王，黄金时代。" },
            { name: "威廉·莎士比亚", time: "1564-1616年", description: "戏剧大师。" }
        ],
        impacts: [
            { title: "宗教改革", description: "英国国教建立。" },
            { title: "专制王权", description: "都铎专制达到顶峰。" },
            { title: "文艺复兴", description: "英国文艺复兴繁荣。" },
            { title: "海上霸权", description: "开始建立海上霸权。" }
        ]
    },
    stuart: {
        name: "斯图亚特王朝",
        time: "1603年 - 1714年",
        description: "经历了资产阶级革命、克伦威尔独裁、光荣革命。",
        events: [
            { time: "1603年", title: "詹姆士一世即位", description: "斯图亚特王朝开始。" },
            { time: "1629年", title: "查理一世解散议会", description: "个人统治。" },
            { time: "1642年", title: "内战爆发", description: "议会与国王开战。" },
            { time: "1649年", title: "查理一世被处决", description: "共和国建立。" },
            { time: "1653年", title: "克伦威尔护国主", description: "军事独裁。" },
            { time: "1660年", title: "斯图亚特复辟", description: "查理二世即位。" },
            { time: "1688年", title: "光荣革命", description: "威廉和玛丽入主。" },
            { time: "1689年", title: "权利法案", description: "君主立宪确立。" }
        ],
        figures: [
            { name: "詹姆士一世", time: "1566-1625年", description: "斯图亚特王朝第一位英国国王。" },
            { name: "查理一世", time: "1600-1649年", description: "被处决的国王。" },
            { name: "奥利弗·克伦威尔", time: "1599-1658年", description: "护国主。" },
            { name: "查理二世", time: "1630-1685年", description: "复辟国王。" },
            { name: "詹姆士二世", time: "1633-1701年", description: "被推翻的国王。" },
            { name: "威廉三世和玛丽二世", time: "威廉1650-1702，玛丽1662-1694", description: "光荣革命后共同执政。" },
            { name: "约翰·洛克", time: "1632-1704年", description: "启蒙思想家。" },
            { name: "艾萨克·牛顿", time: "1643-1727年", description: "科学家。" }
        ],
        impacts: [
            { title: "资产阶级革命", description: "世界上第一次资产阶级革命。" },
            { title: "君主立宪", description: "确立君主立宪制。" },
            { title: "议会主权", description: "议会成为国家权力中心。" },
            { title: "启蒙思想", description: "洛克等思想家影响深远。" }
        ]
    },
    hanoverian: {
        name: "汉诺威王朝",
        time: "1714年 - 1901年",
        description: "乔治王朝，经历了工业革命、拿破仑战争、维多利亚时代。",
        events: [
            { time: "1714年", title: "乔治一世即位", description: "汉诺威王朝开始。" },
            { time: "1721年", title: "沃波尔任首相", description: "第一任首相。" },
            { time: "1775-1783年", title: "美国独立战争", description: "失去北美殖民地。" },
            { time: "1789年", title: "法国大革命", description: "对英国产生影响。" },
            { time: "1803-1815年", title: "拿破仑战争", description: "反法同盟。" },
            { time: "1815年", title: "滑铁卢战役", description: "击败拿破仑。" },
            { time: "1837年", title: "维多利亚女王即位", description: "维多利亚时代开始。" },
            { time: "1840年", title: "鸦片战争", description: "打开中国国门。" },
            { time: "1851年", title: "万国博览会", description: "水晶宫博览会。" },
            { time: "1901年", title: "维多利亚女王去世", description: "汉诺威王朝结束。" }
        ],
        figures: [
            { name: "罗伯特·沃波尔", time: "1676-1745年", description: "第一任首相。" },
            { name: "小威廉·皮特", time: "1759-1806年", description: "年轻首相。" },
            { name: "威灵顿公爵", time: "1769-1852年", description: "滑铁卢战役胜利者。" },
            { name: "维多利亚女王", time: "1819-1901年", description: "日不落帝国象征。" },
            { name: "本杰明·迪斯雷利", time: "1804-1881年", description: "保守党首相。" },
            { name: "威廉·格莱斯顿", time: "1809-1898年", description: "自由党首相。" },
            { name: "亚当·斯密", time: "1723-1790年", description: "经济学之父。" },
            { name: "查尔斯·狄更斯", time: "1812-1870年", description: "文豪。" },
            { name: "查尔斯·达尔文", time: "1809-1882年", description: "进化论之父。" }
        ],
        impacts: [
            { title: "工业革命", description: "世界工厂。" },
            { title: "日不落帝国", description: "最大殖民帝国。" },
            { title: "议会改革", description: "扩大选举权。" },
            { title: "文化繁荣", description: "维多利亚时代文化。" }
        ]
    },
    windsor: {
        name: "温莎王朝",
        time: "1901年 - 至今",
        description: "经历了两次世界大战、大英帝国解体、加入欧盟又脱欧。",
        events: [
            { time: "1901年", title: "爱德华七世即位", description: "萨克森-科堡-哥达王朝。" },
            { time: "1914-1918年", title: "第一次世界大战", description: "协约国胜利。" },
            { time: "1917年", title: "改名温莎王朝", description: "去掉德国姓氏。" },
            { time: "1936年", title: "爱德华八世退位", description: "爱美人不爱江山。" },
            { time: "1939-1945年", title: "第二次世界大战", description: "反法西斯同盟。" },
            { time: "1947年", title: "印度独立", description: "殖民帝国开始解体。" },
            { time: "1952年", title: "伊丽莎白二世即位", description: "最长在位君主。" },
            { time: "1973年", title: "加入欧共体", description: "融入欧洲。" },
            { time: "1979年", title: "撒切尔夫人就任首相", description: "铁娘子时代。" },
            { time: "1997年", title: "香港回归", description: "殖民时代结束。" },
            { time: "2016年", title: "脱欧公投", description: "决定脱离欧盟。" },
            { time: "2020年", title: "正式脱欧", description: "脱离欧盟。" },
            { time: "2022年", title: "伊丽莎白二世去世", description: "查尔斯三世即位。" }
        ],
        figures: [
            { name: "乔治五世", time: "1865-1936年", description: "改名温莎王朝。" },
            { name: "爱德华八世", time: "1894-1972年", description: "退位国王。" },
            { name: "乔治六世", time: "1895-1952年", description: "二战期间国王。" },
            { name: "伊丽莎白二世", time: "1926-2022年", description: "最长在位君主。" },
            { name: "查尔斯三世", time: "1948年-", description: "现任国王。" },
            { name: "温斯顿·丘吉尔", time: "1874-1965年", description: "二战首相。" },
            { name: "玛格丽特·撒切尔", time: "1925-2013年", description: "铁娘子。" },
            { name: "托尼·布莱尔", time: "1953年-", description: "新工党首相。" },
            { name: "鲍里斯·约翰逊", time: "1964年-", description: "脱欧首相。" }
        ],
        impacts: [
            { title: "两次世界大战", description: "付出巨大代价。" },
            { title: "帝国解体", description: "大英帝国成为英联邦。" },
            { title: "福利国家", description: "建立社会保障体系。" },
            { title: "脱欧", description: "脱离欧盟，重新定位。" }
        ]
    }
};

const franceHistory = {
    gaul: {
        name: "高卢时期",
        time: "公元前3世纪 - 公元前52年",
        description: "凯尔特人在高卢地区建立部落联盟，后被罗马征服。",
        events: [
            { time: "公元前3世纪", title: "凯尔特人定居", description: "凯尔特人进入高卢。" },
            { time: "公元前58-52年", title: "高卢战争", description: "凯撒征服高卢。" },
            { time: "公元前52年", title: "阿莱西亚战役", description: "维钦托利投降。" }
        ],
        figures: [
            { name: "维钦托利", time: "约公元前80-前46年", description: "高卢部落联盟领袖。" },
            { name: "尤利乌斯·凯撒", time: "公元前100-前44年", description: "罗马统帅，征服高卢。" }
        ],
        impacts: [
            { title: "罗马化", description: "高卢开始罗马化。" },
            { title: "《高卢战记》", description: "凯撒的著作记录了高卢历史。" }
        ]
    },
    roman: {
        name: "罗马高卢",
        time: "公元前52年 - 公元486年",
        description: "罗马统治时期，高卢成为罗马行省，基督教传入。",
        events: [
            { time: "公元前27年", title: "罗马帝国建立", description: "屋大维称帝。" },
            { time: "3世纪", title: "基督教传入", description: "基督教在高卢传播。" },
            { time: "486年", title: "法兰克人征服", description: "克洛维建立法兰克王国。" }
        ],
        figures: [
            { name: "克洛维一世", time: "约466-511年", description: "法兰克王国建立者。" }
        ],
        impacts: [
            { title: "罗马遗产", description: "法律、语言、文化影响。" },
            { title: "基督教", description: "成为主要宗教。" }
        ]
    },
    frankish: {
        name: "法兰克王国",
        time: "486年 - 987年",
        description: "墨洛温王朝和加洛林王朝，查理曼帝国时期达到顶峰。",
        events: [
            { time: "486年", title: "墨洛温王朝开始", description: "克洛维建立法兰克王国。" },
            { time: "496年", title: "克洛维皈依基督教", description: "接受天主教。" },
            { time: "751年", title: "加洛林王朝", description: "丕平篡位。" },
            { time: "768年", title: "查理曼即位", description: "查理大帝时代开始。" },
            { time: "800年", title: "查理曼加冕", description: "教皇加冕为罗马人的皇帝。" },
            { time: "843年", title: "凡尔登条约", description: "帝国三分。" },
            { time: "987年", title: "卡佩王朝开始", description: "于格·卡佩即位。" }
        ],
        figures: [
            { name: "克洛维一世", time: "约466-511年", description: "法兰克王国建立者。" },
            { name: "查理曼大帝", time: "742-814年", description: "神圣罗马帝国皇帝。" },
            { name: "丕平三世", time: "714-768年", description: "加洛林王朝开创者。" }
        ],
        impacts: [
            { title: "查理曼帝国", description: "重建西罗马帝国概念。" },
            { title: "法兰西雏形", description: "西法兰克成为法兰西前身。" },
            { title: "政教联盟", description: "王权与教权联盟。" }
        ]
    },
    capetian: {
        name: "卡佩王朝",
        time: "987年 - 1328年",
        description: "王权逐步加强，经历了十字军东征和百年战争。",
        events: [
            { time: "987年", title: "于格·卡佩即位", description: "卡佩王朝开始。" },
            { time: "1066年", title: "诺曼征服英格兰", description: "法国诺曼底公爵征服英格兰。" },
            { time: "1095年", title: "第一次十字军东征", description: "法国是主要参与者。" },
            { time: "1180-1223年", title: "腓力二世", description: "加强王权。" },
            { time: "1302年", title: "三级会议", description: "第一次三级会议。" },
            { time: "1328年", title: "瓦卢瓦王朝", description: "卡佩王朝结束。" }
        ],
        figures: [
            { name: "于格·卡佩", time: "939-996年", description: "卡佩王朝开创者。" },
            { name: "腓力二世·奥古斯都", time: "1165-1223年", description: "加强王权。" },
            { name: "路易九世", time: "1214-1270年", description: "圣路易，模范国王。" },
            { name: "腓力四世", time: "1268-1314年", description: "美男子腓力。" },
            { name: "圣女贞德", time: "约1412-1431年", description: "百年战争中的女英雄。" }
        ],
        impacts: [
            { title: "王权加强", description: "从封建割据到中央集权。" },
            { title: "十字军", description: "法国在十字军东征中扮演重要角色。" },
            { title: "三级会议", description: "等级代表制度。" }
        ]
    },
    valois: {
        name: "瓦卢瓦王朝",
        time: "1328年 - 1589年",
        description: "经历百年战争、文艺复兴、宗教战争。",
        events: [
            { time: "1337-1453年", title: "百年战争", description: "英法百年战争。" },
            { time: "1429年", title: "贞德解救奥尔良", description: "扭转战局。" },
            { time: "1453年", title: "百年战争结束", description: "收复失地。" },
            { time: "15世纪末", title: "意大利战争", description: "入侵意大利。" },
            { time: "16世纪", title: "宗教战争", description: "胡格诺战争。" },
            { time: "1572年", title: "圣巴托洛缪大屠杀", description: "屠杀新教徒。" },
            { time: "1589年", title: "亨利四世即位", description: "波旁王朝开始。" }
        ],
        figures: [
            { name: "查理七世", time: "1403-1461年", description: "百年战争后期国王。" },
            { name: "路易十一", time: "1423-1483年", description: "蜘蛛国王。" },
            { name: "弗朗索瓦一世", time: "1494-1547年", description: "文艺复兴支持者。" },
            { name: "凯瑟琳·德·美第奇", time: "1519-1589年", description: "王太后，影响宗教战争。" },
            { name: "亨利四世", time: "1553-1610年", description: "波旁王朝开创者。" }
        ],
        impacts: [
            { title: "百年战争", description: "民族意识增强。" },
            { title: "文艺复兴", description: "法国文艺复兴繁荣。" },
            { title: "宗教分裂", description: "天主教与新教冲突。" }
        ]
    },
    bourbon: {
        name: "波旁王朝",
        time: "1589年 - 1792年",
        description: "专制王权达到顶峰，路易十四时代，法国大革命爆发。",
        events: [
            { time: "1589年", title: "亨利四世即位", description: "波旁王朝开始。" },
            { time: "1598年", title: "南特敕令", description: "宗教宽容。" },
            { time: "1610年", title: "亨利四世遇刺", description: "路易十三即位。" },
            { time: "1624年", title: "黎塞留任首相", description: "加强专制。" },
            { time: "1643年", title: "路易十四即位", description: "太阳王时代。" },
            { time: "1682年", title: "凡尔赛宫", description: "迁都凡尔赛。" },
            { time: "1715年", title: "路易十四去世", description: "路易十五即位。" },
            { time: "1774年", title: "路易十六即位", description: "革命前的国王。" },
            { time: "1789年", title: "法国大革命", description: "巴士底狱被攻占。" },
            { time: "1792年", title: "共和国建立", description: "君主制被推翻。" }
        ],
        figures: [
            { name: "亨利四世", time: "1553-1610年", description: "波旁王朝开创者。" },
            { name: "黎塞留", time: "1585-1642年", description: "红衣主教，首相。" },
            { name: "路易十四", time: "1638-1715年", description: "太阳王，专制顶峰。" },
            { name: "科尔贝尔", time: "1619-1683年", description: "财政大臣。" },
            { name: "路易十五", time: "1710-1774年", description: "我死后哪管洪水滔天。" },
            { name: "路易十六", time: "1754-1793年", description: "被处决的国王。" },
            { name: "玛丽·安托瓦内特", time: "1755-1793年", description: "王后，被处决。" },
            { name: "孟德斯鸠", time: "1689-1755年", description: "启蒙思想家。" },
            { name: "伏尔泰", time: "1694-1778年", description: "启蒙运动领袖。" },
            { name: "卢梭", time: "1712-1778年", description: "启蒙思想家。" }
        ],
        impacts: [
            { title: "专制顶峰", description: "路易十四的绝对君主制。" },
            { title: "启蒙运动", description: "法国启蒙思想影响世界。" },
            { title: "法国大革命", description: "推翻君主制，传播自由平等。" },
            { title: "凡尔赛宫", description: "象征专制王权的建筑。" }
        ]
    },
    revolution: {
        name: "革命与拿破仑",
        time: "1789年 - 1815年",
        description: "法国大革命、拿破仑帝国，传播革命思想。",
        events: [
            { time: "1789年", title: "攻占巴士底狱", description: "革命开始。" },
            { time: "1789年", title: "《人权宣言》", description: "发布人权宣言。" },
            { time: "1792年", title: "第一共和国", description: "建立共和国。" },
            { time: "1793年", title: "路易十六被处决", description: "国王被送上断头台。" },
            { time: "1793-1794年", title: "雅各宾专政", description: "恐怖统治。" },
            { time: "1799年", title: "雾月政变", description: "拿破仑夺权。" },
            { time: "1804年", title: "拿破仑称帝", description: "建立第一帝国。" },
            { time: "1805年", title: "奥斯特里茨战役", description: "三皇会战。" },
            { time: "1812年", title: "入侵俄国", description: "灾难性失败。" },
            { time: "1814年", title: "第一次退位", description: "拿破仑退位。" },
            { time: "1815年", title: "滑铁卢战役", description: "最终失败。" }
        ],
        figures: [
            { name: "罗伯斯庇尔", time: "1758-1794年", description: "雅各宾派领袖。" },
            { name: "丹东", time: "1759-1794年", description: "雅各宾派，被处决。" },
            { name: "马拉", time: "1743-1793年", description: "雅各宾派，遇刺身亡。" },
            { name: "拿破仑·波拿巴", time: "1769-1821年", description: "皇帝，军事家。" },
            { name: "约瑟芬", time: "1763-1814年", description: "拿破仑第一任妻子。" },
            { name: "威灵顿公爵", time: "1769-1852年", description: "滑铁卢战役胜利者。" }
        ],
        impacts: [
            { title: "革命思想", description: "自由、平等、博爱传播。" },
            { title: "拿破仑法典", description: "影响后世法律。" },
            { title: "欧洲变革", description: "拿破仑战争改变欧洲格局。" },
            { title: "革命传统", description: "法国革命传统影响深远。" }
        ]
    },
    postnapoleon: {
        name: "19世纪法国",
        time: "1815年 - 1914年",
        description: "经历了多次王朝更替和革命，最终确立共和制。",
        events: [
            { time: "1814-1830年", title: "波旁复辟", description: "路易十八、查理十世。" },
            { time: "1830年", title: "七月革命", description: "路易·菲利普即位。" },
            { time: "1848年", title: "二月革命", description: "第二共和国建立。" },
            { time: "1852年", title: "拿破仑三世称帝", description: "第二帝国。" },
            { time: "1870年", title: "普法战争", description: "战败，帝国崩溃。" },
            { time: "1871年", title: "巴黎公社", description: "第一个无产阶级政权尝试。" },
            { time: "1875年", title: "第三共和国宪法", description: "共和制确立。" },
            { time: "1894-1906年", title: "德雷福斯事件", description: "反犹主义丑闻。" },
            { time: "1900年", title: "巴黎世博会", description: "埃菲尔铁塔建成。" }
        ],
        figures: [
            { name: "路易十八", time: "1755-1824年", description: "复辟国王。" },
            { name: "查理十世", time: "1757-1836年", description: "被推翻的复辟国王。" },
            { name: "路易·菲利普", time: "1773-1850年", description: "七月王朝国王。" },
            { name: "拿破仑三世", time: "1808-1873年", description: "第二帝国皇帝。" },
            { name: "梯也尔", time: "1797-1877年", description: "镇压巴黎公社。" },
            { name: "甘必大", time: "1838-1882年", description: "共和派领袖。" },
            { name: "雨果", time: "1802-1885年", description: "文豪，政治活动家。" },
            { name: "巴尔扎克", time: "1799-1850年", description: "现实主义作家。" },
            { name: "莫奈", time: "1840-1926年", description: "印象派画家。" }
        ],
        impacts: [
            { title: "共和制确立", description: "最终确立共和制度。" },
            { title: "巴黎公社", description: "无产阶级政权尝试。" },
            { title: "文化繁荣", description: "文学艺术黄金时代。" },
            { title: "殖民扩张", description: "建立殖民帝国。" }
        ]
    },
    modern: {
        name: "20世纪法国",
        time: "1914年 - 至今",
        description: "经历两次世界大战、殖民帝国解体、第五共和国建立。",
        events: [
            { time: "1914-1918年", title: "第一次世界大战", description: "西线主战场。" },
            { time: "1919年", title: "凡尔赛和约", description: "一战结束。" },
            { time: "1939-1940年", title: "二战初期", description: "战败投降。" },
            { time: "1940-1944年", title: "维希政权", description: "德国傀儡政权。" },
            { time: "1944年", title: "解放", description: "盟军解放巴黎。" },
            { time: "1946年", title: "第四共和国", description: "建立第四共和国。" },
            { time: "1954-1962年", title: "阿尔及利亚战争", description: "独立战争。" },
            { time: "1958年", title: "第五共和国", description: "戴高乐建立第五共和国。" },
            { time: "1968年", title: "五月风暴", description: "学生运动。" },
            { time: "1981年", title: "密特朗当选", description: "社会党总统。" },
            { time: "1992年", title: "《马斯特里赫特条约》", description: "欧盟建立。" },
            { time: "2017年", title: "马克龙当选", description: "最年轻总统。" }
        ],
        figures: [
            { name: "乔治·克列孟梭", time: "1841-1929年", description: "一战期间总理。" },
            { name: "贝当", time: "1856-1951年", description: "维希政权首脑。" },
            { name: "戴高乐", time: "1890-1970年", description: "自由法国领袖，第五共和国总统。" },
            { name: "蓬皮杜", time: "1911-1974年", description: "戴高乐后总统。" },
            { name: "密特朗", time: "1916-1996年", description: "社会党总统。" },
            { name: "希拉克", time: "1932-2019年", description: "总统。" },
            { name: "萨科齐", time: "1955年-", description: "总统。" },
            { name: "奥朗德", time: "1954年-", description: "社会党总统。" },
            { name: "马克龙", time: "1977年-", description: "现任总统。" },
            { name: "萨特", time: "1905-1980年", description: "存在主义哲学家。" },
            { name: "加缪", time: "1913-1960年", description: "存在主义作家。" },
            { name: "毕加索", time: "1881-1973年", description: "画家。" }
        ],
        impacts: [
            { title: "两次世界大战", description: "一战西线主战场，二战投降。" },
            { title: "殖民帝国", description: "阿尔及利亚独立标志帝国结束。" },
            { title: "第五共和国", description: "半总统制确立。" },
            { title: "欧盟核心", description: "欧盟发起国之一。" },
            { title: "文化影响力", description: "哲学、文学、艺术持续繁荣。" }
        ]
    }
};

const germanyHistory = {
    germanic: {
        name: "日耳曼部落",
        time: "公元前1世纪 - 公元476年",
        description: "日耳曼人居住在莱茵河以东，与罗马帝国冲突不断。",
        events: [
            { time: "公元前1世纪", title: "凯撒征高卢", description: "与日耳曼人接触。" },
            { time: "公元9年", title: "条顿堡森林战役", description: "日耳曼人击败罗马。" },
            { time: "4世纪", title: "民族大迁徙", description: "日耳曼人入侵罗马帝国。" },
            { time: "476年", title: "西罗马帝国灭亡", description: "日耳曼雇佣军首领废黜皇帝。" }
        ],
        figures: [
            { name: "阿米尼乌斯", time: "公元前18-公元21年", description: "条顿堡森林战役领袖。" },
            { name: "奥多亚克", time: "约433-493年", description: "废黜西罗马最后一位皇帝。" }
        ],
        impacts: [
            { title: "罗马灭亡", description: "日耳曼人导致西罗马帝国灭亡。" },
            { title: "民族迁徙", description: "改变欧洲格局。" }
        ]
    },
    frankish: {
        name: "法兰克与神圣罗马帝国",
        time: "486年 - 1806年",
        description: "法兰克王国分裂后，东法兰克成为德意志前身，神圣罗马帝国时期。",
        events: [
            { time: "486年", title: "克洛维建立法兰克王国", description: "墨洛温王朝。" },
            { time: "800年", title: "查理曼加冕", description: "神圣罗马帝国。" },
            { time: "843年", title: "凡尔登条约", description: "帝国三分，东法兰克为德意志前身。" },
            { time: "911年", title: "东法兰克末代国王去世", description: "德意志历史开始。" },
            { time: "962年", title: "奥托一世加冕", description: "神圣罗马帝国正式建立。" },
            { time: "11-13世纪", title: "霍亨斯陶芬王朝", description: "红胡子腓特烈一世。" },
            { time: "1254-1273年", title: "大空位时代", description: "没有皇帝。" },
            { time: "1356年", title: "金玺诏书", description: "确立选帝侯制度。" },
            { time: "1618-1648年", title: "三十年战争", description: "毁灭性战争。" },
            { time: "1806年", title: "神圣罗马帝国解散", description: "拿破仑迫使解散。" }
        ],
        figures: [
            { name: "奥托一世", time: "912-973年", description: "神圣罗马帝国建立者。" },
            { name: "腓特烈一世", time: "约1122-1190年", description: "红胡子。" },
            { name: "腓特烈二世", time: "1194-1250年", description: "世界奇迹。" },
            { name: "马丁·路德", time: "1483-1546年", description: "宗教改革发起者。" }
        ],
        impacts: [
            { title: "神圣罗马帝国", description: "既不神圣也不罗马也非帝国。" },
            { title: "分裂状态", description: "长期分裂割据。" },
            { title: "宗教改革", description: "马丁·路德发起宗教改革。" },
            { title: "三十年战争", description: "德意志人口锐减。" }
        ]
    },
    prussia: {
        name: "普鲁士崛起与统一",
        time: "1701年 - 1871年",
        description: "普鲁士崛起，通过王朝战争统一德意志。",
        events: [
            { time: "1701年", title: "普鲁士王国建立", description: "腓特烈一世加冕。" },
            { time: "1740-1786年", title: "腓特烈大帝", description: "开明专制。" },
            { time: "1806年", title: "耶拿战役", description: "被拿破仑击败。" },
            { time: "1815年", title: "维也纳会议", description: "重建欧洲秩序。" },
            { time: "1834年", title: "关税同盟", description: "经济统一先行。" },
            { time: "1848年", title: "革命", description: "德意志革命。" },
            { time: "1862年", title: "俾斯麦任首相", description: "铁血政策。" },
            { time: "1864年", title: "普丹战争", description: "对丹麦战争。" },
            { time: "1866年", title: "普奥战争", description: "击败奥地利。" },
            { time: "1870-1871年", title: "普法战争", description: "击败法国。" },
            { time: "1871年", title: "德意志帝国建立", description: "威廉一世在凡尔赛加冕。" }
        ],
        figures: [
            { name: "腓特烈一世", time: "1657-1713年", description: "普鲁士第一位国王。" },
            { name: "腓特烈二世", time: "1712-1786年", description: "腓特烈大帝。" },
            { name: "威廉一世", time: "1797-1888年", description: "德意志帝国第一位皇帝。" },
            { name: "俾斯麦", time: "1815-1898年", description: "铁血宰相。" },
            { name: "毛奇", time: "1800-1891年", description: "总参谋长。" },
            { name: "康德", time: "1724-1804年", description: "哲学家。" },
            { name: "黑格尔", time: "1770-1831年", description: "哲学家。" },
            { name: "歌德", time: "1749-1832年", description: "文豪。" },
            { name: "席勒", time: "1759-1805年", description: "剧作家。" },
            { name: "贝多芬", time: "1770-1827年", description: "音乐家。" }
        ],
        impacts: [
            { title: "德国统一", description: "结束分裂，建立统一国家。" },
            { title: "普鲁士精神", description: "军国主义传统。" },
            { title: "文化繁荣", description: "哲学、文学、音乐黄金时代。" },
            { title: "欧洲格局变化", description: "打破欧洲均势。" }
        ]
    },
    secondreich: {
        name: "德意志第二帝国",
        time: "1871年 - 1918年",
        description: "统一后的德国快速工业化，与英国争霸，最终引发一战。",
        events: [
            { time: "1871年", title: "帝国建立", description: "凡尔赛宫镜厅加冕。" },
            { time: "1871-1890年", title: "俾斯麦时代", description: "大陆联盟体系。" },
            { time: "1888年", title: "三帝之年", description: "三位皇帝更迭。" },
            { time: "1888-1918年", title: "威廉二世时代", description: "世界政策。" },
            { time: "1900年", title: "义和团运动", description: "八国联军侵华。" },
            { time: "1914年", title: "一战爆发", description: "萨拉热窝事件。" },
            { time: "1918年", title: "十一月革命", description: "帝国崩溃。" }
        ],
        figures: [
            { name: "威廉一世", time: "1797-1888年", description: "第一位皇帝。" },
            { name: "腓特烈三世", time: "1831-1888年", description: "在位99天。" },
            { name: "威廉二世", time: "1859-1941年", description: "末代皇帝。" },
            { name: "俾斯麦", time: "1815-1898年", description: "宰相。" },
            { name: "兴登堡", time: "1847-1934年", description: "一战元帅，后来的总统。" },
            { name: "鲁登道夫", time: "1865-1937年", description: "一战将领。" },
            { name: "马克思", time: "1818-1883年", description: "思想家。" },
            { name: "恩格斯", time: "1820-1895年", description: "思想家。" },
            { name: "尼采", time: "1844-1900年", description: "哲学家。" },
            { name: "爱因斯坦", time: "1879-1955年", description: "科学家。" }
        ],
        impacts: [
            { title: "工业化", description: "快速成为工业强国。" },
            { title: "海军扩张", description: "与英国海军竞赛。" },
            { title: "一战", description: "主要参战国，战败。" },
            { title: "社会民主党", description: "马克思主义政党发展。" }
        ]
    },
    weimar: {
        name: "魏玛共和国",
        time: "1918年 - 1933年",
        description: "一战后的民主共和国，经历经济危机和政治动荡，最终被纳粹取代。",
        events: [
            { time: "1918年", title: "十一月革命", description: "帝国崩溃。" },
            { time: "1919年", title: "魏玛宪法", description: "民主宪法。" },
            { time: "1919年", title: "凡尔赛条约", description: "苛刻的和约。" },
            { time: "1920年", title: "卡普政变", description: "右翼政变尝试。" },
            { time: "1923年", title: "鲁尔危机", description: "法国占领鲁尔。" },
            { time: "1923年", title: "超级通货膨胀", description: "货币贬值。" },
            { time: "1924-1929年", title: "黄金时期", description: "相对稳定。" },
            { time: "1929年", title: "大萧条", description: "经济危机。" },
            { time: "1932年", title: "纳粹崛起", description: "成为第一大党。" },
            { time: "1933年", title: "希特勒任总理", description: "纳粹上台。" }
        ],
        figures: [
            { name: "艾伯特", time: "1871-1925年", description: "第一任总统。" },
            { name: "兴登堡", time: "1847-1934年", description: "第二任总统。" },
            { name: "施特雷泽曼", time: "1878-1929年", description: "外交部长。" },
            { name: "希特勒", time: "1889-1945年", description: "纳粹领袖。" },
            { name: "托马斯·曼", time: "1875-1955年", description: "作家。" },
            { name: "卡夫卡", time: "1883-1924年", description: "作家。" },
            { name: "包豪斯", time: "1919-1933年", description: "设计学派。" }
        ],
        impacts: [
            { title: "民主尝试", description: "德国第一次民主尝试。" },
            { title: "经济危机", description: "大萧条导致政治极端化。" },
            { title: "纳粹崛起", description: "希特勒利用危机上台。" },
            { title: "文化繁荣", description: "魏玛文化黄金时代。" }
        ]
    },
    nazi: {
        name: "纳粹德国",
        time: "1933年 - 1945年",
        description: "希特勒独裁统治，发动二战，进行大屠杀，最终战败。",
        events: [
            { time: "1933年", title: "希特勒任总理", description: "纳粹上台。" },
            { time: "1933年", title: "国会纵火案", description: "迫害共产党。" },
            { time: "1935年", title: "纽伦堡法案", description: "反犹法律。" },
            { time: "1936年", title: "莱茵兰再军事化", description: "突破凡尔赛条约。" },
            { time: "1938年", title: "吞并奥地利", description: "德奥合并。" },
            { time: "1938年", title: "苏台德地区", description: "慕尼黑阴谋。" },
            { time: "1939年", title: "吞并捷克斯洛伐克", description: "占领整个捷克。" },
            { time: "1939年", title: "入侵波兰", description: "二战爆发。" },
            { time: "1940年", title: "征服西欧", description: "击败法国。" },
            { time: "1941年", title: "入侵苏联", description: "巴巴罗萨行动。" },
            { time: "1941年", title: "对美宣战", description: "珍珠港事件后。" },
            { time: "1942年", title: "斯大林格勒战役", description: "转折点。" },
            { time: "1944年", title: "诺曼底登陆", description: "盟军开辟第二战场。" },
            { time: "1945年", title: "战败投降", description: "希特勒自杀，德国投降。" }
        ],
        figures: [
            { name: "阿道夫·希特勒", time: "1889-1945年", description: "纳粹元首。" },
            { name: "戈林", time: "1893-1946年", description: "空军元帅。" },
            { name: "戈培尔", time: "1897-1945年", description: "宣传部长。" },
            { name: "希姆莱", time: "1900-1945年", description: "党卫军头子。" },
            { name: "隆美尔", time: "1891-1944年", description: "沙漠之狐。" },
            { name: "曼施坦因", time: "1887-1973年", description: "战略家。" },
            { name: "古德里安", time: "1888-1954年", description: "闪电战之父。" }
        ],
        impacts: [
            { title: "第二次世界大战", description: "主要发动国。" },
            { title: "大屠杀", description: "600万犹太人被屠杀。" },
            { title: "德国分裂", description: "战后被分区占领。" },
            { title: "历史反思", description: "战后深刻反思历史。" }
        ]
    },
    postwar: {
        name: "战后德国",
        time: "1945年 - 至今",
        description: "经历分裂与统一，成为欧盟核心国家。",
        events: [
            { time: "1945年", title: "分区占领", description: "四国分区占领。" },
            { time: "1948年", title: "柏林封锁", description: "第一次柏林危机。" },
            { time: "1949年", title: "东西德成立", description: "联邦德国和民主德国。" },
            { time: "1953年", title: "东德起义", description: "6月17日起义。" },
            { time: "1955年", title: "西德重新武装", description: "加入北约。" },
            { time: "1961年", title: "柏林墙修建", description: "分隔东西柏林。" },
            { time: "1963年", title: "肯尼迪访问柏林", description: "我是一个柏林人。" },
            { time: "1970年", title: "新东方政策", description: "勃兰特改善与东德关系。" },
            { time: "1987年", title: "里根演讲", description: "戈尔巴乔夫，推倒这堵墙。" },
            { time: "1989年", title: "柏林墙倒塌", description: "冷战结束。" },
            { time: "1990年", title: "德国统一", description: "东西德统一。" },
            { time: "1990年", title: "科尔任总理", description: "统一总理。" },
            { time: "2005年", title: "默克尔任总理", description: "第一位女总理。" },
            { time: "2022年", title: "朔尔茨任总理", description: "现任总理。" }
        ],
        figures: [
            { name: "阿登纳", time: "1876-1967年", description: "西德第一任总理。" },
            { name: "艾哈德", time: "1897-1977年", description: "经济奇迹之父。" },
            { name: "勃兰特", time: "1913-1992年", description: "新东方政策，华沙之跪。" },
            { name: "科尔", time: "1930-2017年", description: "统一总理。" },
            { name: "默克尔", time: "1954年-", description: "第一位女总理。" },
            { name: "朔尔茨", time: "1958年-", description: "现任总理。" },
            { name: "昂纳克", time: "1912-1994年", description: "东德领导人。" },
            { name: "君特·格拉斯", time: "1927-2015年", description: "作家。" }
        ],
        impacts: [
            { title: "分裂与统一", description: "冷战象征，1990年统一。" },
            { title: "经济奇迹", description: "西德战后快速恢复。" },
            { title: "欧盟核心", description: "欧洲一体化推动者。" },
            { title: "历史反思", description: "深刻反思纳粹历史。" },
            { title: "经济强国", description: "欧洲最大经济体。" }
        ]
    }
};

// 添加更多国家数据
historyData.uk = ukHistory;
historyData.france = franceHistory;
historyData.germany = germanyHistory;

// 更多国家的简要数据（为了完整演示）
const russiaHistory = {
    kiev: {
        name: "基辅罗斯",
        time: "9世纪 - 1240年",
        description: "东斯拉夫人建立的第一个国家，988年接受东正教。",
        events: [
            { time: "862年", title: "留里克王朝", description: "瓦良格人留里克建立王朝。" },
            { time: "882年", title: "奥列格征服基辅", description: "建立基辅罗斯。" },
            { time: "988年", title: "罗斯受洗", description: "弗拉基米尔一世接受东正教。" },
            { time: "1054年", title: "雅罗斯拉夫去世", description: "基辅罗斯开始分裂。" },
            { time: "1240年", title: "蒙古征服", description: "拔都西征，基辅陷落。" }
        ],
        figures: [
            { name: "留里克", time: "?-879年", description: "瓦良格人领袖。" },
            { name: "奥列格", time: "?-912年", description: "基辅罗斯建立者。" },
            { name: "弗拉基米尔一世", time: "约958-1015年", description: "接受东正教。" },
            { name: "雅罗斯拉夫一世", time: "约978-1054年", description: "智者雅罗斯拉夫。" }
        ],
        impacts: [
            { title: "东正教", description: "俄罗斯接受东正教。" },
            { title: "蒙古统治", description: "被金帐汗国统治240年。" }
        ]
    },
    moscow: {
        name: "莫斯科公国",
        time: "1283年 - 1547年",
        description: "从蒙古统治下崛起，统一俄罗斯。",
        events: [
            { time: "1328年", title: "伊凡一世", description: "获得大公称号。" },
            { time: "1380年", title: "库利科沃战役", description: "击败蒙古人。" },
            { time: "1480年", title: "乌格拉河对峙", description: "摆脱蒙古统治。" },
            { time: "1547年", title: "伊凡四世称沙皇", description: "沙皇俄国开始。" }
        ],
        figures: [
            { name: "伊凡一世", time: "约1288-1340年", description: "钱袋伊凡。" },
            { name: "德米特里·顿斯科伊", time: "1350-1389年", description: "库利科沃战役胜利者。" },
            { name: "伊凡三世", time: "1440-1505年", description: "统一俄罗斯。" }
        ],
        impacts: [
            { title: "摆脱蒙古", description: "结束蒙古统治。" },
            { title: "统一俄罗斯", description: "建立中央集权国家。" }
        ]
    },
    tsardom: {
        name: "沙皇俄国",
        time: "1547年 - 1721年",
        description: "伊凡雷帝到彼得大帝，领土扩张。",
        events: [
            { time: "1547年", title: "伊凡四世称沙皇", description: "雷帝时代。" },
            { time: "1581年", title: "征服西伯利亚", description: "叶尔马克东征。" },
            { time: "1598年", title: "留里克王朝结束", description: "混乱时期开始。" },
            { time: "1613年", title: "罗曼诺夫王朝", description: "米哈伊尔·罗曼诺夫当选。" },
            { time: "1689年", title: "彼得一世掌权", description: "彼得大帝时代。" },
            { time: "1700-1721年", title: "北方战争", description: "击败瑞典。" },
            { time: "1721年", title: "称皇帝", description: "俄罗斯帝国建立。" }
        ],
        figures: [
            { name: "伊凡四世", time: "1530-1584年", description: "伊凡雷帝。" },
            { name: "鲍里斯·戈杜诺夫", time: "约1552-1605年", description: "混乱时期前的沙皇。" },
            { name: "米哈伊尔·罗曼诺夫", time: "1596-1645年", description: "罗曼诺夫王朝第一位沙皇。" },
            { name: "彼得一世", time: "1672-1725年", description: "彼得大帝。" }
        ],
        impacts: [
            { title: "领土扩张", description: "从欧洲到太平洋。" },
            { title: "西方化", description: "彼得大帝开始西化改革。" }
        ]
    },
    empire: {
        name: "俄罗斯帝国",
        time: "1721年 - 1917年",
        description: "彼得大帝到尼古拉二世，成为世界最大国家之一。",
        events: [
            { time: "1721年", title: "俄罗斯帝国", description: "彼得大帝称帝。" },
            { time: "1762-1796年", title: "叶卡捷琳娜二世", description: "开明专制。" },
            { time: "1812年", title: "卫国战争", description: "击败拿破仑入侵。" },
            { time: "1825年", title: "十二月党人起义", description: "贵族革命者。" },
            { time: "1853-1856年", title: "克里米亚战争", description: "战败暴露落后。" },
            { time: "1861年", title: "农奴制改革", description: "亚历山大二世解放农奴。" },
            { time: "1904-1905年", title: "日俄战争", description: "战败。" },
            { time: "1905年", title: "革命", description: "第一次俄国革命。" },
            { time: "1914年", title: "一战", description: "参战。" },
            { time: "1917年", title: "二月革命", description: "沙皇退位。" },
            { time: "1917年", title: "十月革命", description: "布尔什维克夺权。" }
        ],
        figures: [
            { name: "彼得一世", time: "1672-1725年", description: "大帝。" },
            { name: "叶卡捷琳娜二世", time: "1729-1796年", description: "大帝。" },
            { name: "亚历山大一世", time: "1777-1825年", description: "击败拿破仑。" },
            { name: "尼古拉一世", time: "1796-1855年", description: "镇压十二月党人。" },
            { name: "亚历山大二世", time: "1818-1881年", description: "解放者，遇刺。" },
            { name: "尼古拉二世", time: "1868-1918年", description: "末代沙皇。" },
            { name: "托尔斯泰", time: "1828-1910年", description: "文豪。" },
            { name: "陀思妥耶夫斯基", time: "1821-1881年", description: "作家。" },
            { name: "柴可夫斯基", time: "1840-1893年", description: "作曲家。" },
            { name: "列宁", time: "1870-1924年", description: "革命领袖。" }
        ],
        impacts: [
            { title: "世界最大国家", description: "领土横跨欧亚。" },
            { title: "农奴制", description: "长期阻碍发展。" },
            { title: "革命", description: "1917年两次革命。" },
            { title: "文化黄金", description: "文学艺术辉煌。" }
        ]
    },
    soviet: {
        name: "苏联时期",
        time: "1917年 - 1991年",
        description: "世界上第一个社会主义国家，冷战时期与美国争霸。",
        events: [
            { time: "1917年", title: "十月革命", description: "布尔什维克夺权。" },
            { time: "1918-1922年", title: "国内战争", description: "红白军内战。" },
            { time: "1922年", title: "苏联成立", description: "苏维埃社会主义共和国联盟。" },
            { time: "1924年", title: "列宁去世", description: "斯大林掌权。" },
            { time: "1928年", title: "第一个五年计划", description: "工业化开始。" },
            { time: "1934-1938年", title: "大清洗", description: "政治恐怖。" },
            { time: "1941-1945年", title: "卫国战争", description: "二战东线。" },
            { time: "1949年", title: "原子弹", description: "打破核垄断。" },
            { time: "1953年", title: "斯大林去世", description: "赫鲁晓夫时代。" },
            { time: "1956年", title: "苏共二十大", description: "秘密报告。" },
            { time: "1957年", title: "第一颗人造卫星", description: "太空竞赛开始。" },
            { time: "1961年", title: "加加林太空飞行", description: "人类第一次太空飞行。" },
            { time: "1962年", title: "古巴导弹危机", description: "核战边缘。" },
            { time: "1964年", title: "赫鲁晓夫下台", description: "勃列日涅夫时代。" },
            { time: "1979年", title: "入侵阿富汗", description: "阿富汗战争。" },
            { time: "1985年", title: "戈尔巴乔夫改革", description: "公开性、改革。" },
            { time: "1991年", title: "苏联解体", description: "冷战结束。" }
        ],
        figures: [
            { name: "列宁", time: "1870-1924年", description: "苏联缔造者。" },
            { name: "斯大林", time: "1878-1953年", description: "苏联领导人。" },
            { name: "赫鲁晓夫", time: "1894-1971年", description: "苏共第一书记。" },
            { name: "勃列日涅夫", time: "1906-1982年", description: "苏共总书记。" },
            { name: "戈尔巴乔夫", time: "1931-2022年", description: "最后一任总书记。" },
            { name: "叶利钦", time: "1931-2007年", description: "俄罗斯第一任总统。" },
            { name: "朱可夫", time: "1896-1974年", description: "二战元帅。" },
            { name: "加加林", time: "1934-1968年", description: "第一位宇航员。" }
        ],
        impacts: [
            { title: "社会主义阵营", description: "冷战一极。" },
            { title: "太空竞赛", description: "首次载人航天。" },
            { title: "核武库", description: "与美国核平衡。" },
            { title: "解体", description: "1991年苏联解体。" }
        ]
    },
    modern: {
        name: "当代俄罗斯",
        time: "1991年 - 至今",
        description: "苏联解体后，俄罗斯联邦面临经济转型和重新崛起。",
        events: [
            { time: "1991年", title: "俄罗斯联邦", description: "叶利钦任总统。" },
            { time: "1991-1994年", title: "休克疗法", description: "经济转型。" },
            { time: "1994-1996年", title: "第一次车臣战争", description: "平叛。" },
            { time: "1999年", title: "普京任总理", description: "第二次车臣战争。" },
            { time: "2000年", title: "普京任总统", description: "普京时代开始。" },
            { time: "2008年", title: "梅德韦杰夫任总统", description: "普京任总理。" },
            { time: "2012年", title: "普京再次任总统", description: "第三任期。" },
            { time: "2014年", title: "克里米亚事件", description: "收回克里米亚。" },
            { time: "2020年", title: "宪法修正案", description: "普京可连任至2036年。" },
            { time: "2022年", title: "俄乌冲突", description: "特别军事行动。" }
        ],
        figures: [
            { name: "叶利钦", time: "1931-2007年", description: "第一任总统。" },
            { name: "普京", time: "1952年-", description: "现任总统。" },
            { name: "梅德韦杰夫", time: "1965年-", description: "前总统，现总理。" }
        ],
        impacts: [
            { title: "经济转型", description: "从计划到市场经济。" },
            { title: "能源大国", description: "石油天然气出口国。" },
            { title: "重新崛起", description: "试图恢复大国地位。" },
            { title: "地缘政治", description: "与西方关系紧张。" }
        ]
    }
};

historyData.russia = russiaHistory;

// ==================== DOM元素和交互逻辑 ====================
const modal = document.getElementById('detail-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalBody = document.getElementById('modal-body');
const timelineContainer = document.getElementById('timeline');
const countrySelect = document.getElementById('country-select');

// 国家名称映射
const countryNames = {
    global: "全球",
    china: "中国",
    usa: "美国",
    japan: "日本",
    uk: "英国",
    france: "法国",
    germany: "德国",
    russia: "俄罗斯"
};

// 渲染时间线
function renderTimeline() {
    const data = historyData[currentCountry];
    if (!data) return;

    timelineContainer.innerHTML = '';
    const keys = Object.keys(data);
    
    keys.forEach((key, index) => {
        const era = data[key];
        const isEven = index % 2 === 0;
        
        const item = document.createElement('div');
        item.className = `timeline-item ${isEven ? 'left' : 'right'}`;
        item.setAttribute('data-era', key);
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="era-card">
                    <div class="era-badge">${era.time}</div>
                    <h2 class="era-name">${era.name}</h2>
                    <p class="era-intro">${era.description.substring(0, 100)}${era.description.length > 100 ? '...' : ''}</p>
                </div>
            </div>
        `;
        
        item.addEventListener('click', () => openModal(key));
        timelineContainer.appendChild(item);
    });
}

// 打开模态框
function openModal(eraId) {
    const data = historyData[currentCountry];
    if (!data) return;
    
    const era = data[eraId];
    if (!era) return;

    const html = generateModalContent(era);
    modalBody.innerHTML = html;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// 生成模态框内容
function generateModalContent(era) {
    let html = `
        <div class="modal-header">
            <h2 class="modal-title">${era.name}</h2>
            <p class="modal-time">${era.time}</p>
        </div>
    `;

    // 时代简介
    html += `
        <div class="section">
            <h3 class="section-title">时代简介</h3>
            <p class="section-content">${era.description}</p>
        </div>
    `;

    // 重大事件
    if (era.events && era.events.length > 0) {
        html += `
            <div class="section">
                <h3 class="section-title">重大事件</h3>
                ${era.events.map(event => `
                    <div class="event-card">
                        <div class="event-time">${event.time}</div>
                        <div class="event-title">${event.title}</div>
                        <div class="event-desc">${event.description}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 重要人物
    if (era.figures && era.figures.length > 0) {
        html += `
            <div class="section">
                <h3 class="section-title">重要人物</h3>
                ${era.figures.map(person => `
                    <div class="person-item">
                        <div class="person-info">
                            <div class="person-name">${person.name}</div>
                            <div class="person-time">${person.time}</div>
                            <div class="person-desc">${person.description}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // 历史影响
    if (era.impacts && era.impacts.length > 0) {
        html += `
            <div class="section">
                <h3 class="section-title">历史影响</h3>
                ${era.impacts.map(impact => `
                    <div class="impact-item">
                        <div class="impact-title">${impact.title}</div>
                        <div class="impact-desc">${impact.description}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    return html;
}

// 关闭模态框
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

// 切换国家
function switchCountry(country) {
    currentCountry = country;
    renderTimeline();
}

// 事件监听
closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

countrySelect.addEventListener('change', (e) => {
    switchCountry(e.target.value);
});

// 初始化
renderTimeline();
