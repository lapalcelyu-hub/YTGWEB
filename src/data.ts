import { Founder, Product, NewsItem, VideoItem } from './types';

export const BRAND_INFO = {
  name: "雍檀阁",
  logoText: "雍檀阁",
  tagline: "仿古仿其神，复古不古板",
  introParagraphs: [
    "雍檀阁始创于1984年，是一家专业全流程生产高端定制古典红木家具的企业。我们立志定位高端，以海南黄花梨、印度小叶紫檀、老挝大红酸枝为主材，研造传统全榫卯结构的传世木器。",
    "我们以明清家具为范本，追求‘仿古仿其神，复古不古板’。三十余年潜心钻研历代巨匠工匠的造物美学，将深沉温润的自然命格注入榫卯之间。"
  ],
  manifesto: "榫 卯 传 世  •  木 韵 留 香"
};

export const FOUNDERS: Founder[] = [
  {
    id: "founder-1",
    name: "廖扬标 / Liao Yangbiao",
    role: "创始人 & 首席木艺工匠大师",
    bio: "80年入行做学徒，84年创业办厂，四十余载深耕红木开料与木工技艺，因其钟爱国宝海南黄花梨，为将此木独特的纹理与温润质感完美呈现于家具之上，独创“一木一器”开料法，确保一件海黄家具的80%取自同一根木料，让同一木材纹理相互呼应，和谐统一。",
    detailBio: "80年入行做学徒，84年创业办厂，四十余载深耕红木开料与木工技艺，因其钟爱国宝海南黄花梨，为将此木独特的纹理与温润质感完美呈现于家具之上，独创“一木一器”开料法，确保一件海黄家具的80%取自同一根木料，让同一木材纹理相互呼应，和谐统一。",
    quote: "“每颗红木的纹理都经过了百年的洗礼，我的使命是将它们完美呈现”",
    image: "/liaoyangbiao.jpg"
  },
  {
    id: "founder-2",
    name: "朱仪 / Zhu Yi",
    role: "联合创始人 & 艺术设计总监",
    bio: "朱仪女士专注打磨与雕花，每件家具在她的亲力亲为或指导下，呈现出生动的雕琢细节与温润如玉的触感，她是雍檀阁所有家具雕刻活灵活现的源泉。",
    detailBio: "朱仪女士专注打磨与雕花，每件家具在她的亲力亲为或指导下，呈现出生动的雕琢细节与温润如玉的触感，她是雍檀阁所有家具雕刻活灵活现的源泉。",
    quote: "“如果说木材和榫卯是红木家具之骨，那打磨和雕花就是其灵魂”",
    image: "/zhuyi.jpg"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-5",
    materialType: "huanghuali",
    name: "明式翘头案",
    tagline: "线条流畅，端庄肃穆",
    description: "选用上等海南黄花梨，大料一木连做。桌面独板，两端翘头处理极为考究，牙条与腿足圆润过渡。置于厅堂或书房，焚香读书，极具文人雅致。",
    highlightSpecs: [],
    colors: [],
    parameters: [],
    materialDetail: "",
    image: "/jingdian-2.png"
  },
  {
    id: "prod-6",
    materialType: "suanzhi",
    name: "明式大画案与官帽椅",
    tagline: "宽绰舒展，翰墨飘香",
    description: "此款大画案尺寸宽大，边抹冰盘沿，腿足混面。搭配四出头官帽椅，形成完美的书房工作与品茗空间。紫油木色泽温润，久用愈发幽亮。",
    highlightSpecs: [],
    colors: [],
    parameters: [],
    materialDetail: "",
    image: "/jingdian-1.png"
  },
  {
    id: "prod-1",
    materialType: "huanghuali",
    name: "明代月洞式皇宫床与大衣柜",
    tagline: "深邃优雅的睡眠居所，榫卯精密无痕",
    description: "此款架子床严格遵循大明风度的简约与挺拔，四面围子透空，床牙板微雕折枝花卉。不仅是一件家具，更是一个独立宽绰的静谧空间。床边配有精美月洞门式围沿，带来无与伦比的安全感与私密感。",
    highlightSpecs: [],
    colors: [],
    parameters: [],
    materialDetail: "",
    image: "/product-1.jpg"
  },
  {
    id: "prod-2",
    materialType: "huanghuali",
    name: "明式四出头官帽椅",
    tagline: "极简线条勾勒出极致的力度与空灵",
    description: "靠背板由整板精选‘鬼脸纹’呈现，搭脑向两侧平缓延展并柔和起翘。触感润滑如玉，堪称文人书房的经典传世之作。曲度完美契合人体脊背，久坐不累。",
    highlightSpecs: [],
    colors: [],
    parameters: [],
    materialDetail: "",
    image: "/product-2.jpg"
  },
  {
    id: "prod-3",
    materialType: "zitan",
    name: "清式满雕云龙九五宝座",
    tagline: "高密材质，紫气东来，尽显非凡尊崇气度",
    description: "选用高密度紫檀，采用深研剔地雕与镂空透雕。屏风式座围满雕祥龙穿云，气势威武尊贵。整体色泽深沉幽雅，包浆醇厚，高贵气象不言自显，宛如宫廷再现。",
    highlightSpecs: [],
    colors: [],
    parameters: [],
    materialDetail: "",
    image: "/product-3.jpg"
  },
  {
    id: "prod-4",
    materialType: "suanzhi",
    name: "明式方角柜与平头案组合",
    tagline: "典雅圆融的红黑木纹交织，文武相宜",
    description: "方角柜线条挺拔利落，左右对称摆放，中置平头案，形成完美的古典中堂或书房展陈制式。柜体大红酸枝纹理如行云流水，铜饰件画龙点睛，稳重大气而不失灵动。",
    highlightSpecs: [],
    colors: [],
    parameters: [],
    materialDetail: "",
    image: "/product-4.jpg"
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "news-4:liangyangbiao",
    title: "从学徒到老板：雍檀阁的风雨之路",
    category: "深度访谈",
    snippet: "雍檀阁那些已难定义究竟是“产品”还是“艺术品”的漂亮家具。那件历时10多年集多种工艺于一体的紫檀《清明上河图》，是廖扬标的沥血之作...",
    date: "2026.06.12",
    content: "雍檀阁那些已难定义究竟是“产品”还是“艺术品”的漂亮家具，尤其是那件历时10多年集镂雕、通雕、浮雕、立体雕等多种工艺于一体的《清明上河图》，全套一共9件，高1.71米，长20.7米，是廖扬标完全用紫檀制成的沥血之作，以其丰富的内涵、灵动的人物神韵、细腻而清晰的景物层次，处处显示出匠师精湛的手艺和艺术表现造诣。《清明上河图》的制作完成即是务实的表征。拜访“红木大王”当日，幸得他那活跃的老乡、北京梅州商会秘书长许珍在场，否则很难让廖扬标主动“交代问题”\n\n听“红木夫人”讲那过去的事情\n虽说“红木夫人”的普通话也很普通，但表达欲显然要比老廖旺盛，于是“交待”两人发家史等“历史问题”的任务也就落在了廖扬标这位同样是熟练红木工艺技师的妻子朱仪身上：“他（廖扬标）儿时住在丰顺乡下的土砖瓦房里，没见过什么明清家具。进入1980年后期，正是仿明仿清红木家具大行其道时，偶然进入了红木家具行业，在广东工艺厂（国营）作为学徒干了两三年。1988年在广州碰上的两个老行家算是我们的贵人，他们收藏了很多文革幸存下来的古典红木精品，想寻找师傅仿制珍藏，偶然看到老廖手艺，决定让他试做一张仿竹子的卷书案台。我跟老廖心里完全没底，为表诚意，就向行家表示：那就试试吧，做得不满意，工钱一分不要。经过几个月的艰苦努力终于按要求完成了，请来老行家准备交货，没想到他们大感吃惊，不但给了在当时已算很多的500元，并当即表示要出资让我们夫妇自立门户，专门仿制他们的珍藏。\n\n这是廖扬标和朱仪事业的开始。接下来的几年，或因社会政治环境、或因市场混乱，自立门户后的日子过得并非一帆风顺。幸得老行家对夫妇俩的苛刻要求，让他们在生意困难之际，反而学到了太多受用终身的技艺和对原木的甄别能力，更加深了对红木行业的感情。\n\n所有的成功故事都有先抑后扬的相似性。1991年，好机会来了。澳门政府找广东省进出口公司定做一批仿明清红木家具，而这个大订单全部落到了廖朱夫妇这儿，这让其最初创办的“鸿贵”家具厂一下子从十几个工人发展到几十个工人，厂房也从几十平米发展到了几千平米的红木业大厂，在广州西关的展厅也在同年开业。势如破竹的发展，让廖扬标得到了“红木大王”的称号。接下来的近20年间，既有芝麻开花节节高时的振奋，也有面对渐次礼崩乐坏的市场道德时的无奈。但做“真正红木家具”的理想没变，并最终将这个理想带到了皇城根脚下。\n\n红木为什么这么贵？\n记得一年春节，在最高艺术殿堂中国美术馆的情境书法大展上，廖扬标的“雍檀阁”品牌作为家具惟一入选，得到免费进场展示的机会。老廖为此挑出了二三十件总价上千万元的海南黄花梨家具，去匹配那些同样价值连城的书画，制造场景。美术馆方面对场景要求很严，为求漂亮而多加一点装饰都不行。“有一套作品的场景涉及书柜，我们北京的厂里没有，想让杨副馆长去别家挑挑看。可为了维护完整统一感，杨副馆长没有答应，坚持让我们从广州发货过来”，廖扬标回忆道。\n\n确实，也只有红木这样的名贵硬木，才有资格匹配绝世流传的文化精品，共造一场恍若置身皇宫的仿古迷梦。它们的边材狭，灰白色，心材则呈淡黄红色至赤色，曝露于空气中时久变为紫红色，加上花纹美观，材质坚硬耐久，稳重的躯干自身又能散发出香味，打造成家具搁在居家空间里，怎么看怎么都有一种显在的贵气。根据国家标准，“红木”的范围确定为5属8类，其中的酸枝、黄花梨和紫檀，曾是明清时期宫廷的三种专用木材。\n\n红木为热带地区豆科檀属木材，多产于东南亚一带，我国广东、海南和云南也引种栽培。但如今整个树种的数量少得可怜，其中的海南黄花梨早成为我国特有的珍稀树种，其生长周期长达500年，这些越来越显稀有的局限性，导致红木大幅度升值。即便是难得的价格低谷，也只出现于市场混乱时。10多年前，广州红木界就突然“流行着”用非洲等地的茨木为原料做成的“红木”家具，经过油漆处理完全可以假乱真、以次充好，价格上当然有优势，而且受红木爱好者的青睐。这一度让坚持只经营黄花梨、紫檀和酸枝家具的廖扬标夫妇吃尽苦头。看着别人以次充好大把挣钱，心里也动摇了，是否放弃原则？毕竟工厂还那么多人要吃饭，一时很是迷茫。这时，给廖扬标夫妇引路的两个老行家，又一次给出了方向，力劝不能改变经营方针，一定要坚持：“市场自有真理在，很快会好的。”行家就是行家，不出所料，不到两年时间，聪明的广东人就认清了何谓真正的红木家具。\n\n日趋奢侈并消亡的红木技艺\n廖扬标这门发家的手艺能传承吗？即使是从业者也都相信红木工艺会消失。成功者毕竟是极少数，试问，有哪个家长愿意让计划生育下的独生子女去学这些“没用”的手艺？其实，红木技师出国后都能做高级工程师，可在国内最多给个木工证，又不能给文凭。要成功，只能熬出作品让人承认。而这么个手艺，如果耐不住几年甚至十几年的寂寞，是出不来的。俗话说，多年媳妇熬成婆，浮躁的社会没办法让年轻人沉下来，毕竟成本太高！随着红木供应量的渐渐减少，即便能有人工方法让树木催熟，成为差不多的好材料，但用刀深浅什么的永远不是机器能琢磨出来的。这一切，导致红木家具就像意大利那些在传承中逐渐消亡的奢侈品。贵的不止是材料，还有日益稀缺的工匠。红木很是奇妙，酸枝和紫檀，得用其皮，心是空的；黄花梨，就得用心，皮完全没用。自然界的神奇，也注定了两种性状相反的东西在风水学上的不同讲究，从而成为不同艺术品。一想到这些神奇，廖扬标就像掌握了什么人类秘密般高兴。",
    image: "/liaoyangbiao.jpg",
    imageCaption: "红木大王乍一看还以为是鲁迅呢",
    readTime: "15 分钟"
  }
];

export const CONTACT_INFO = {
  address: "红木展馆：北京市海淀区通汇路14号Wehouse46-1红木艺术馆",
  address2: "厂址：广东省佛山市南海区大沥镇广东嘉星集团直播供应链产业基地1栋1层",
  email: "18511431886@163.com",
  phone: "18511431886",
  hours: "周一至周日 09:30 - 21:30 (红木博览城馆)",
  socials: {
    wechat: "YongTange_1984",
    xiaohongshu: "雍檀阁古典定制",
    instagram: "yongtange_furniture"
  }
};

export const GALLERY_ITEMS: import('./types').GalleryItem[] = [
  // 客厅沙发
  { id: 'g-lr-1', category: '客厅沙发', name: '红木小茶桌椅组合', image: '/keting-1.jpg' },
  { id: 'g-lr-2', category: '客厅沙发', name: '红木雕花大款沙发组合', image: '/keting-2.jpg' },
  { id: 'g-lr-3', category: '客厅沙发', name: '红木供桌及小方桌', image: '/keting-3.jpg' },
  { id: 'g-lr-4', category: '客厅沙发', name: '红木圈椅及茶几组合', image: '/keting-4.jpg' },
  { id: 'g-lr-5', category: '客厅沙发', name: '红木中式满雕沙发组合', image: '/keting-5.jpg' },
  { id: 'g-lr-6', category: '客厅沙发', name: '红木明式沙发组合', image: '/keting-6.jpg' },
  { id: 'g-lr-7', category: '客厅沙发', name: '红木雕花大沙发与圈椅', image: '/keting-7.jpg' },
  { id: 'g-lr-8', category: '客厅沙发', name: '红木圆石背板沙发组合', image: '/keting-8.jpg' },
  { id: 'g-lr-9', category: '客厅沙发', name: '红木书桌长桌组合', image: '/keting-9.jpg' },
  { id: 'g-lr-10', category: '客厅沙发', name: '红木衣帽架带抽屉', image: '/keting-10.jpg' },
  { id: 'g-lr-11', category: '客厅沙发', name: '红木八屉大电视柜', image: '/keting-11.jpg' },
  { id: 'g-lr-12', category: '客厅沙发', name: '红木精雕四屉电视柜', image: '/keting-12.jpg' },
  { id: 'g-lr-13', category: '客厅沙发', name: '红木简约三屉矮柜', image: '/keting-13.jpg' },
  { id: 'g-lr-14', category: '客厅沙发', name: '红木实木宝座沙发组合', image: '/keting-14.jpg' },
  { id: 'g-lr-15', category: '客厅沙发', name: '红木梳背椅方茶桌组合', image: '/keting-15.jpg' },
  { id: 'g-lr-16', category: '客厅沙发', name: '红木大款客厅满雕沙发', image: '/keting-16.jpg' },
  { id: 'g-lr-17', category: '客厅沙发', name: '红木豪华精雕王座沙发', image: '/keting-17.jpg' },
  { id: 'g-lr-18', category: '客厅沙发', name: '红木方茶桌及圈椅组合', image: '/keting-18.jpg' },
  { id: 'g-lr-19', category: '客厅沙发', name: '红木办公桌椅书橱组合', image: '/keting-19.jpg' },
  { id: 'g-lr-20', category: '客厅沙发', name: '红木简约多屉电视柜', image: '/keting-20.jpg' },
  
  // 餐厅饭桌
  { id: 'g-dr-1', category: '餐厅饭桌', name: '红木八仙方正餐桌椅', image: '/canting-1.jpg' },
  { id: 'g-dr-2', category: '餐厅饭桌', name: '豪华红木大圆餐桌十人座', image: '/canting-2.jpg' },
  { id: 'g-dr-3', category: '餐厅饭桌', name: '精雕红木长体大餐桌椅', image: '/canting-3.jpg' },
  { id: 'g-dr-4', category: '餐厅饭桌', name: '红木素雅圆桌椅六座组合', image: '/canting-4.jpg' },
  { id: 'g-dr-5', category: '餐厅饭桌', name: '红木软屉圆桌椅八座组合', image: '/canting-5.jpg' },
  { id: 'g-dr-6', category: '餐厅饭桌', name: '仿古红木雕花圆桌配鼓凳', image: '/canting-6.jpg' },

  // 书房
  { id: 'g-sd-1', category: '书房', name: '红木办公大班台', image: '/shufang-1.jpg' },
  { id: 'g-sd-2', category: '书房', name: '红木书桌椅组合', image: '/shufang-2.jpg' },
  { id: 'g-sd-3', category: '书房', name: '红木书柜及展示架', image: '/shufang-3.jpg' },
  { id: 'g-sd-4', category: '书房', name: '中式古典书房套件', image: '/shufang-4.jpg' },
  { id: 'g-sd-5', category: '书房', name: '红木画案与官帽椅', image: '/shufang-5.jpg' },
  { id: 'g-sd-6', category: '书房', name: '红木雕花书桌', image: '/shufang-6.jpg' },
  { id: 'g-sd-7', category: '书房', name: '红木多层大书架', image: '/shufang-7.jpg' },
  { id: 'g-sd-8', category: '书房', name: '经典明式书柜', image: '/shufang-8.jpg' },
  { id: 'g-sd-9', category: '书房', name: '红木罗汉床沙发', image: '/shufang-9.jpg' },
  { id: 'g-sd-10', category: '书房', name: '红木带背书桌', image: '/shufang-10.jpg' },
  { id: 'g-sd-11', category: '书房', name: '红木明式多格书架', image: '/shufang-11.jpg' },
  { id: 'g-sd-12', category: '书房', name: '豪华办公大班台', image: '/shufang-12.jpg' },
  { id: 'g-sd-13', category: '书房', name: '红木大班台搭配背柜', image: '/shufang-13.jpg' },
  { id: 'g-sd-14', category: '书房', name: '红木带抽明式书桌', image: '/shufang-14.jpg' },

  // 卧室
  { id: 'g-bd-1', category: '卧室', name: '大红酸枝顶箱柜', image: '/product-3.jpg' },
  { id: 'g-bd-2', category: '卧室', name: '明式四柱架子床', image: '/product-4.jpg' },
  { id: 'g-bd-3', category: '卧室', name: '黄花梨素面贵妃床', image: '/product-1.jpg' },
  { id: 'g-bd-4', category: '卧室', name: '大红酸枝梳妆台', image: '/product-2.jpg' }
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "video-3",
    title: "广州日报报道红木大王",
    description: "广州日报报道红木大王",
    thumbnail: "https://i0.hdslb.com/bfs/archive/0fa208c6498501cd5271cdd4895c2c7b3197036a.jpg",
    videoUrl: "//player.bilibili.com/player.html?isOutside=true&aid=116741690824043&bvid=BV1DaJH68EMq&cid=39085081516&p=1"
  }
];
