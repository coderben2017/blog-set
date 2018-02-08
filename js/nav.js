function goToCover() {
  $('#title').text("随想集");
  $('#content').text("Poetry is a deal of joy and pain and wonder, with a dash of the dictionary..");
  $('#tip').hide();
}

function showPoetry(id) {
  const {title, contents, tips} = poetries[id];

  let content = '';
  contents.forEach(element => {
    content += `<p>${element}</p>`;
  });

  let tip = "";
  tips.forEach(element => {
    tip += `${element}<br>`;
  });

  $('#title').text(title);
  $('#content').html(content);
  $('#tip').html(tip).show();
  
  setTimeout(function() {
    $('#dropdown').addClass('open');    
  }, 0);
}

$(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      isClosed = false;

  trigger.click(function () {
    if (isClosed == true) {          
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }     
  });
  
  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  let poetryMenuHtml = '';
  poetries.forEach((element, index) => {
    if (index !== 26) {
      poetryMenuHtml += 
      `<li>
        <a href=\"javascript:;\" onclick=\"showPoetry(${index})\" style=\"background-color: #333\">
          ${element.title}
        </a>
      </li>`;
    }
  });
  $('#menu-poetry').html(poetryMenuHtml);

  goToCover();
});


const poetries = [
  {
    "title": "改诗自勉",
    "contents": [
      "苍天生我应有意，",
      "盖世虚名食不足。",
      "遥想孔明三分地，",
      "千古余芳何处无？"
    ],
    "tips": ["2014年10月"]
  },
  {
    "title": "赛后自勉",
    "contents": [
      "总以浮云能盖日，经事却知难万重。",
      "念及男儿豪迈生，大巧不工亦有锋。",
      "遂将新怅换新程，净心除思到三更。",
      "半月有言题半句，寥寥数笔开此行。"
    ],
    "tips": ["2014-11-27"]
  },
  {
    "title": "元旦前夜有感",
    "contents": [
      "万家灯火庆新年，",
      "数月分隔望团圆。",
      "借问年味何处有，",
      "五百里外一声鞭。"
    ],
    "tips": ["2014-12-31 18:16"]
  },
  {
    "title": "春吟",
    "contents": [
      "春雨一夜万物苏，",
      "鸟鸣枝头婉转出。",
      "黎明相思绵延苦，",
      "辗转不休无可覆。"
    ],
    "tips": ["20150401 6:00"]
  },
  {
    "title": "春·初晴",
    "contents": [
      "雨后新泥出新痕，",
      "幽翠环身怡可人。",
      "诚心愿与花飞度，",
      "只惜时节不谅人。"
    ],
    "tips": ["2015/04/04  7:00am"]
  },
  {
    "title": "华",
    "contents": [
      "一书一琴一花茶，",
      "千古韶光蕴芳华。",
      "万载歌诗万载颂，",
      "百鸟林中鹤立它！"
    ],
    "tips": ["（2015/04/25，观社联传统文化晚会有感）"]
  },
  {
    "title": "久别一春日",
    "contents": [
      "千尺校园万尺缤，",
      "临停小驻馥气亲。",
      "婉转流年飞如许，",
      "不改春花碧叶心。"
    ],
    "tips": ["2015-5-8 13:23"]
  },
  {
    "title": "无题自填",
    "contents": [
      "碧波柔，",
      "随风走，",
      "天涯万里，",
      "青山不为偶。",
      "梦里飞花轻点水，",
      "或许一生不回头。"
    ],
    "tips": ["2015/05/12   18时    阴"]
  },
  {
    "title": "感遇",
    "contents": [
      "夜色漠漠抑心神，",
      "辗转不寐遂做文。",
      "天涯海角回头客，",
      "应是当年笑语人。"
    ],
    "tips": ["2015/05/17", "记长跑队一聚"]
  },
  {
    "title": "踏莎行·观书有感",
    "contents": [
      "夜盛路稀，神昏智沉。百步恍惚阅斯人。羁人不解窗中意，蔷薇失心带泪痕。",
      "不知湾浅，不知海深。逆鳞半指可刺魂。诚愿此局徘徊客，终归凡尘与美伦。"
    ],
    "tips": ["2015-6-4 22:57"]
  },
  {
    "title": "军训四日纪实",
    "contents": [
      "晚归深睡晨出早，",
      "洪雷嘹亮年华好。",
      "十年一剑出鞘日，",
      "万尺青山永不倒。"
    ],
    "tips": ["2015/07/09 22:48"]
  },
  {
    "title": "暑日喜雨 ",
    "contents": [
      "闲日无聊赖，",
      "坐起听雨鸣。",
      "不见人语响，",
      "但闻沥沥声。"
    ],
    "tips": ["2015/07/12 07:24"]
  },
  {
    "title": "及时雨",
    "contents": [
      "炎天烈暑心难静，",
      "忽来一雨天地宁。",
      "如丝晚风轻轻抚，",
      "直扫舒心一万重。"
    ],
    "tips": ["天大旱，暑难消，今来一雨，身心舒畅", "2015/07/30  19：43"]
  },
  {
    "title": "梦",
    "contents": [
      "花非花，梦非梦，迷失其境烟笼盛。",
      "子若鱼，心若海，破浪乘风生不终。"
    ],
    "tips": ["——把假设都做成梦，一一亲临其境", "2015-10-4 06:51"]
  },
  {
    "title": "玩世雨 ",
    "contents": [
      "近日山威雨阵阵，",
      "路上行人欲断魂。",
      "问天此局何处破，",
      "万里遥呼萧雨神。"
    ],
    "tips": ["2015/10/11 12:52"]
  },
  {
    "title": "雪雨",
    "contents": [
      "雪日江山丽，",
      "迟暮风景新。",
      "晚来天又雨，",
      "耳畔闻乡音。"
    ],
    "tips": ["2015/11/24 17:00 21:28"]
  },
  {
    "title": "忆乌江",
    "contents": [
      "汉室倾颓天地暗，",
      "诸葛一出国分三。",
      "常山龙胆今犹在，",
      "项籍何不起东山。"
    ],
    "tips": ["2016/3/16 17:51"]
  },
  {
    "title": "清明昆嵛行",
    "contents": [
      "昆嵛群峰秀，",
      "晨气清怡神。",
      "一道十行者，",
      "九是登山人。"
    ],
    "tips": ["2016/4/2 于昆嵛山泰礴顶923米处"]
  },
  {
    "title": "夜梦书怀·记梦",
    "contents": [
      "故园故，荒草路，此去经年应无数。纵使春发无人睹，黄犬斜倚低墙土。",
      "少年游，小竹楼，闲坐窗头弹箜篌。余音依依依不绝，便是有愁泪轻流。"
    ],
    "tips": ["2016/4/12 23:55"]
  },
  {
    "title": "无题",
    "contents": [
      "碧海连天白浪翻，",
      "春山波滚翠枝扇。",
      "又是一年妖风季，",
      "风中也有花满川。"
    ],
    "tips": ["2016/5/3 12:44"]
  },
  {
    "title": "踏歌行",
    "contents": [
      "​​渐行渐涌渐无穷，春风拂绿露芳红。",
      "玛伽山下重重色，不若温茶一杯浓。",
      "无边柳色新玉翠，万盏清杯人欲醉。",
      "琼浪拍沙人踱踱，望断青天雁南飞。"
    ],
    "tips": ["2016/5/20  19:24", "于知行会堂"]
  },
  {
    "title": "群山行", 
    "contents": [
      "不知前路山几重，",
      "但见峰头尽光明。",
      "山中云雾遮不住，",
      "行之之后是知行。"
    ], 
    "tips": ["2016/07/08  23:36"]
  },
  {
    "title": "雨后返青", 
    "contents": [
      "雨花过后栀花纷，",
      "新城难建旧城深。",
      "千帆未遍终归去，",
      "心暖何处不为春。"
    ],
    "tips": ["七月十六，归青比赛，未留，夜归", "2016/07/16  21:07"]
  },
  {
    "title": "无题",
    "contents": [
      "地洒青青天洒蓝，",
      "画途不眠若归船。",
      "等闲风景旬旬见，",
      "却为老生续续谈。"
    ],
    "tips": ["2016/8/28 11:00 威青高速"]
  },
  {
    "title": "夜归思杭",
    "contents": [
      "孤街老灯昏，夜行露气深。",
      "黄犬轻巧过，破境恍惚神。",
      "欲立终去几千里，",
      "何年可成归乡人？"
    ],
    "tips": ["2016/11/15 23:54", "前端之路找到方向，思念杭州，写于山大威海"]
  },
  {
    "title": "无题",
    "contents": [
      "烟柳烟桥烟雨风，",
      "人去不觉岁将终。",
      "晨起昏黄如天幕，",
      "只见西东南北空。"
    ],
    "tips": ["2017/1/12 7:59  于威海", "（一次修改： 8:20）"]
  },
  {
    "title": "错",
    "contents": [
      "一朝梦成无回日，",
      "若问归期未有知。",
      "骄女自有天下怜，",
      "问君何必执于此？"
    ],
    "tips": ["——2017/2/14 情人节"]
  },
  {
    "title": "临江仙·无题",
    "contents": [
      "细雨慢湿低云，春花闲等秋风。欲遍千帆无人同。天长有时尽，路远却无期。"
    ],
    "tips": ["只写了上阕，坐等有人能补下阕", "2017年7月2日，于济南", "06:56"]
  },
  {
    "title": "",
    "contents": [
      "",
      "",
      "",
      ""
    ],
    "tips": []
  }
];