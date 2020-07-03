// pages/postion/index/index.js
var that
var list = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jobtype: ['全部', '全职', '兼职', '实习'],
    comtype: ['全部', '互联网|计算机', '金融|银行', '保险', '医疗', '物流运输', '化工|能源', '服务业', '媒体|广告', '其他'],
    xingzhi: ['全部', '民营企业', '事业单位', '国企', '外资', '中外合资'],
    comtypeInex: 0,
    jobtypeIndex: 0,
    xzIndex: 0,
    zw: [],
    pageIndex: 1,
    name: '',
    multiIndex: [0, 0],
    multiArray: [['北京', '安徽', "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "河南", "黑龙江", "湖北", "湖南", "吉林", "江苏", "江西", "辽宁", "内蒙古", "宁夏", "青海", "山东", "山西", "陕西", "上海", "四川", "天津", "西藏", "新疆", "云南", "浙江", "重庆", "香港", "澳门", "台湾"], ['北京']],
    objectMultiArray:
      [{ "regid": "2", "parid": "1", "regname": "北京", "regtype": "1", "ageid": "0" }, { "regid": "3", "parid": "1", "regname": "安徽", "regtype": "1", "ageid": "0" }, { "regid": "4", "parid": "1", "regname": "福建", "regtype": "1", "ageid": "0" }, { "regid": "5", "parid": "1", "regname": "甘肃", "regtype": "1", "ageid": "0" }, { "regid": "6", "parid": "1", "regname": "广东", "regtype": "1", "ageid": "0" }, { "regid": "7", "parid": "1", "regname": "广西", "regtype": "1", "ageid": "0" }, { "regid": "8", "parid": "1", "regname": "贵州", "regtype": "1", "ageid": "0" }, { "regid": "9", "parid": "1", "regname": "海南", "regtype": "1", "ageid": "0" }, { "regid": "10", "parid": "1", "regname": "河北", "regtype": "1", "ageid": "0" }, { "regid": "11", "parid": "1", "regname": "河南", "regtype": "1", "ageid": "0" }, { "regid": "12", "parid": "1", "regname": "黑龙江", "regtype": "1", "ageid": "0" }, { "regid": "13", "parid": "1", "regname": "湖北", "regtype": "1", "ageid": "0" }, { "regid": "14", "parid": "1", "regname": "湖南", "regtype": "1", "ageid": "0" }, { "regid": "15", "parid": "1", "regname": "吉林", "regtype": "1", "ageid": "0" }, { "regid": "16", "parid": "1", "regname": "江苏", "regtype": "1", "ageid": "0" }, { "regid": "17", "parid": "1", "regname": "江西", "regtype": "1", "ageid": "0" }, { "regid": "18", "parid": "1", "regname": "辽宁", "regtype": "1", "ageid": "0" }, { "regid": "19", "parid": "1", "regname": "内蒙古", "regtype": "1", "ageid": "0" }, { "regid": "20", "parid": "1", "regname": "宁夏", "regtype": "1", "ageid": "0" }, { "regid": "21", "parid": "1", "regname": "青海", "regtype": "1", "ageid": "0" }, { "regid": "22", "parid": "1", "regname": "山东", "regtype": "1", "ageid": "0" }, { "regid": "23", "parid": "1", "regname": "山西", "regtype": "1", "ageid": "0" }, { "regid": "24", "parid": "1", "regname": "陕西", "regtype": "1", "ageid": "0" }, { "regid": "25", "parid": "1", "regname": "上海", "regtype": "1", "ageid": "0" }, { "regid": "26", "parid": "1", "regname": "四川", "regtype": "1", "ageid": "0" }, { "regid": "27", "parid": "1", "regname": "天津", "regtype": "1", "ageid": "0" }, { "regid": "28", "parid": "1", "regname": "西藏", "regtype": "1", "ageid": "0" }, { "regid": "29", "parid": "1", "regname": "新疆", "regtype": "1", "ageid": "0" }, { "regid": "30", "parid": "1", "regname": "云南", "regtype": "1", "ageid": "0" }, { "regid": "31", "parid": "1", "regname": "浙江", "regtype": "1", "ageid": "0" }, { "regid": "32", "parid": "1", "regname": "重庆", "regtype": "1", "ageid": "0" }, { "regid": "33", "parid": "1", "regname": "香港", "regtype": "1", "ageid": "0" }, { "regid": "34", "parid": "1", "regname": "澳门", "regtype": "1", "ageid": "0" }, { "regid": "35", "parid": "1", "regname": "台湾", "regtype": "1", "ageid": "0" }, { "regid": "36", "parid": "3", "regname": "安庆", "regtype": "2", "ageid": "0" }, { "regid": "37", "parid": "3", "regname": "蚌埠", "regtype": "2", "ageid": "0" }, { "regid": "38", "parid": "3", "regname": "巢湖", "regtype": "2", "ageid": "0" }, { "regid": "39", "parid": "3", "regname": "池州", "regtype": "2", "ageid": "0" }, { "regid": "40", "parid": "3", "regname": "滁州", "regtype": "2", "ageid": "0" }, { "regid": "41", "parid": "3", "regname": "阜阳", "regtype": "2", "ageid": "0" }, { "regid": "42", "parid": "3", "regname": "淮北", "regtype": "2", "ageid": "0" }, { "regid": "43", "parid": "3", "regname": "淮南", "regtype": "2", "ageid": "0" }, { "regid": "44", "parid": "3", "regname": "黄山", "regtype": "2", "ageid": "0" }, { "regid": "45", "parid": "3", "regname": "六安", "regtype": "2", "ageid": "0" }, { "regid": "46", "parid": "3", "regname": "马鞍山", "regtype": "2", "ageid": "0" }, { "regid": "47", "parid": "3", "regname": "宿州", "regtype": "2", "ageid": "0" }, { "regid": "48", "parid": "3", "regname": "铜陵", "regtype": "2", "ageid": "0" }, { "regid": "49", "parid": "3", "regname": "芜湖", "regtype": "2", "ageid": "0" }, { "regid": "50", "parid": "3", "regname": "宣城", "regtype": "2", "ageid": "0" }, { "regid": "51", "parid": "3", "regname": "亳州", "regtype": "2", "ageid": "0" }, { "regid": "52", "parid": "2", "regname": "北京", "regtype": "2", "ageid": "0" }, { "regid": "53", "parid": "4", "regname": "福州", "regtype": "2", "ageid": "0" }, { "regid": "54", "parid": "4", "regname": "龙岩", "regtype": "2", "ageid": "0" }, { "regid": "55", "parid": "4", "regname": "南平", "regtype": "2", "ageid": "0" }, { "regid": "56", "parid": "4", "regname": "宁德", "regtype": "2", "ageid": "0" }, { "regid": "57", "parid": "4", "regname": "莆田", "regtype": "2", "ageid": "0" }, { "regid": "58", "parid": "4", "regname": "泉州", "regtype": "2", "ageid": "0" }, { "regid": "59", "parid": "4", "regname": "三明", "regtype": "2", "ageid": "0" }, { "regid": "60", "parid": "4", "regname": "厦门", "regtype": "2", "ageid": "0" }, { "regid": "61", "parid": "4", "regname": "漳州", "regtype": "2", "ageid": "0" }, { "regid": "62", "parid": "5", "regname": "兰州", "regtype": "2", "ageid": "0" }, { "regid": "63", "parid": "5", "regname": "白银", "regtype": "2", "ageid": "0" }, { "regid": "64", "parid": "5", "regname": "定西", "regtype": "2", "ageid": "0" }, { "regid": "65", "parid": "5", "regname": "甘南", "regtype": "2", "ageid": "0" }, { "regid": "66", "parid": "5", "regname": "嘉峪关", "regtype": "2", "ageid": "0" }, { "regid": "67", "parid": "5", "regname": "金昌", "regtype": "2", "ageid": "0" }, { "regid": "68", "parid": "5", "regname": "酒泉", "regtype": "2", "ageid": "0" }, { "regid": "69", "parid": "5", "regname": "临夏", "regtype": "2", "ageid": "0" }, { "regid": "70", "parid": "5", "regname": "陇南", "regtype": "2", "ageid": "0" }, { "regid": "71", "parid": "5", "regname": "平凉", "regtype": "2", "ageid": "0" }, { "regid": "72", "parid": "5", "regname": "庆阳", "regtype": "2", "ageid": "0" }, { "regid": "73", "parid": "5", "regname": "天水", "regtype": "2", "ageid": "0" }, { "regid": "74", "parid": "5", "regname": "武威", "regtype": "2", "ageid": "0" }, { "regid": "75", "parid": "5", "regname": "张掖", "regtype": "2", "ageid": "0" }, { "regid": "76", "parid": "6", "regname": "广州", "regtype": "2", "ageid": "0" }, { "regid": "77", "parid": "6", "regname": "深圳", "regtype": "2", "ageid": "0" }, { "regid": "78", "parid": "6", "regname": "潮州", "regtype": "2", "ageid": "0" }, { "regid": "79", "parid": "6", "regname": "东莞", "regtype": "2", "ageid": "0" }, { "regid": "80", "parid": "6", "regname": "佛山", "regtype": "2", "ageid": "0" }, { "regid": "81", "parid": "6", "regname": "河源", "regtype": "2", "ageid": "0" }, { "regid": "82", "parid": "6", "regname": "惠州", "regtype": "2", "ageid": "0" }, { "regid": "83", "parid": "6", "regname": "江门", "regtype": "2", "ageid": "0" }, { "regid": "84", "parid": "6", "regname": "揭阳", "regtype": "2", "ageid": "0" }, { "regid": "85", "parid": "6", "regname": "茂名", "regtype": "2", "ageid": "0" }, { "regid": "86", "parid": "6", "regname": "梅州", "regtype": "2", "ageid": "0" }, { "regid": "87", "parid": "6", "regname": "清远", "regtype": "2", "ageid": "0" }, { "regid": "88", "parid": "6", "regname": "汕头", "regtype": "2", "ageid": "0" }, { "regid": "89", "parid": "6", "regname": "汕尾", "regtype": "2", "ageid": "0" }, { "regid": "90", "parid": "6", "regname": "韶关", "regtype": "2", "ageid": "0" }, { "regid": "91", "parid": "6", "regname": "阳江", "regtype": "2", "ageid": "0" }, { "regid": "92", "parid": "6", "regname": "云浮", "regtype": "2", "ageid": "0" }, { "regid": "93", "parid": "6", "regname": "湛江", "regtype": "2", "ageid": "0" }, { "regid": "94", "parid": "6", "regname": "肇庆", "regtype": "2", "ageid": "0" }, { "regid": "95", "parid": "6", "regname": "中山", "regtype": "2", "ageid": "0" }, { "regid": "96", "parid": "6", "regname": "珠海", "regtype": "2", "ageid": "0" }, { "regid": "97", "parid": "7", "regname": "南宁", "regtype": "2", "ageid": "0" }, { "regid": "98", "parid": "7", "regname": "桂林", "regtype": "2", "ageid": "0" }, { "regid": "99", "parid": "7", "regname": "百色", "regtype": "2", "ageid": "0" }, { "regid": "100", "parid": "7", "regname": "北海", "regtype": "2", "ageid": "0" }, { "regid": "101", "parid": "7", "regname": "崇左", "regtype": "2", "ageid": "0" }, { "regid": "102", "parid": "7", "regname": "防城港", "regtype": "2", "ageid": "0" }, { "regid": "103", "parid": "7", "regname": "贵港", "regtype": "2", "ageid": "0" }, { "regid": "104", "parid": "7", "regname": "河池", "regtype": "2", "ageid": "0" }, { "regid": "105", "parid": "7", "regname": "贺州", "regtype": "2", "ageid": "0" }, { "regid": "106", "parid": "7", "regname": "来宾", "regtype": "2", "ageid": "0" }, { "regid": "107", "parid": "7", "regname": "柳州", "regtype": "2", "ageid": "0" }, { "regid": "108", "parid": "7", "regname": "钦州", "regtype": "2", "ageid": "0" }, { "regid": "109", "parid": "7", "regname": "梧州", "regtype": "2", "ageid": "0" }, { "regid": "110", "parid": "7", "regname": "玉林", "regtype": "2", "ageid": "0" }, { "regid": "111", "parid": "8", "regname": "贵阳", "regtype": "2", "ageid": "0" }, { "regid": "112", "parid": "8", "regname": "安顺", "regtype": "2", "ageid": "0" }, { "regid": "113", "parid": "8", "regname": "毕节", "regtype": "2", "ageid": "0" }, { "regid": "114", "parid": "8", "regname": "六盘水", "regtype": "2", "ageid": "0" }, { "regid": "115", "parid": "8", "regname": "黔东南", "regtype": "2", "ageid": "0" }, { "regid": "116", "parid": "8", "regname": "黔南", "regtype": "2", "ageid": "0" }, { "regid": "117", "parid": "8", "regname": "黔西南", "regtype": "2", "ageid": "0" }, { "regid": "118", "parid": "8", "regname": "铜仁", "regtype": "2", "ageid": "0" }, { "regid": "119", "parid": "8", "regname": "遵义", "regtype": "2", "ageid": "0" }, { "regid": "120", "parid": "9", "regname": "海口", "regtype": "2", "ageid": "0" }, { "regid": "121", "parid": "9", "regname": "三亚", "regtype": "2", "ageid": "0" }, { "regid": "122", "parid": "9", "regname": "白沙", "regtype": "2", "ageid": "0" }, { "regid": "123", "parid": "9", "regname": "保亭", "regtype": "2", "ageid": "0" }, { "regid": "124", "parid": "9", "regname": "昌江", "regtype": "2", "ageid": "0" }, { "regid": "125", "parid": "9", "regname": "澄迈县", "regtype": "2", "ageid": "0" }, { "regid": "126", "parid": "9", "regname": "定安县", "regtype": "2", "ageid": "0" }, { "regid": "127", "parid": "9", "regname": "东方", "regtype": "2", "ageid": "0" }, { "regid": "128", "parid": "9", "regname": "乐东", "regtype": "2", "ageid": "0" }, { "regid": "129", "parid": "9", "regname": "临高县", "regtype": "2", "ageid": "0" }, { "regid": "130", "parid": "9", "regname": "陵水", "regtype": "2", "ageid": "0" }, { "regid": "131", "parid": "9", "regname": "琼海", "regtype": "2", "ageid": "0" }, { "regid": "132", "parid": "9", "regname": "琼中", "regtype": "2", "ageid": "0" }, { "regid": "133", "parid": "9", "regname": "屯昌县", "regtype": "2", "ageid": "0" }, { "regid": "134", "parid": "9", "regname": "万宁", "regtype": "2", "ageid": "0" }, { "regid": "135", "parid": "9", "regname": "文昌", "regtype": "2", "ageid": "0" }, { "regid": "136", "parid": "9", "regname": "五指山", "regtype": "2", "ageid": "0" }, { "regid": "137", "parid": "9", "regname": "儋州", "regtype": "2", "ageid": "0" }, { "regid": "138", "parid": "10", "regname": "石家庄", "regtype": "2", "ageid": "0" }, { "regid": "139", "parid": "10", "regname": "保定", "regtype": "2", "ageid": "0" }, { "regid": "140", "parid": "10", "regname": "沧州", "regtype": "2", "ageid": "0" }, { "regid": "141", "parid": "10", "regname": "承德", "regtype": "2", "ageid": "0" }, { "regid": "142", "parid": "10", "regname": "邯郸", "regtype": "2", "ageid": "0" }, { "regid": "143", "parid": "10", "regname": "衡水", "regtype": "2", "ageid": "0" }, { "regid": "144", "parid": "10", "regname": "廊坊", "regtype": "2", "ageid": "0" }, { "regid": "145", "parid": "10", "regname": "秦皇岛", "regtype": "2", "ageid": "0" }, { "regid": "146", "parid": "10", "regname": "唐山", "regtype": "2", "ageid": "0" }, { "regid": "147", "parid": "10", "regname": "邢台", "regtype": "2", "ageid": "0" }, { "regid": "148", "parid": "10", "regname": "张家口", "regtype": "2", "ageid": "0" }, { "regid": "149", "parid": "11", "regname": "郑州", "regtype": "2", "ageid": "0" }, { "regid": "150", "parid": "11", "regname": "洛阳", "regtype": "2", "ageid": "0" }, { "regid": "151", "parid": "11", "regname": "开封", "regtype": "2", "ageid": "0" }, { "regid": "152", "parid": "11", "regname": "安阳", "regtype": "2", "ageid": "0" }, { "regid": "153", "parid": "11", "regname": "鹤壁", "regtype": "2", "ageid": "0" }, { "regid": "154", "parid": "11", "regname": "济源", "regtype": "2", "ageid": "0" }, { "regid": "155", "parid": "11", "regname": "焦作", "regtype": "2", "ageid": "0" }, { "regid": "156", "parid": "11", "regname": "南阳", "regtype": "2", "ageid": "0" }, { "regid": "157", "parid": "11", "regname": "平顶山", "regtype": "2", "ageid": "0" }, { "regid": "158", "parid": "11", "regname": "三门峡", "regtype": "2", "ageid": "0" }, { "regid": "159", "parid": "11", "regname": "商丘", "regtype": "2", "ageid": "0" }, { "regid": "160", "parid": "11", "regname": "新乡", "regtype": "2", "ageid": "0" }, { "regid": "161", "parid": "11", "regname": "信阳", "regtype": "2", "ageid": "0" }, { "regid": "162", "parid": "11", "regname": "许昌", "regtype": "2", "ageid": "0" }, { "regid": "163", "parid": "11", "regname": "周口", "regtype": "2", "ageid": "0" }, { "regid": "164", "parid": "11", "regname": "驻马店", "regtype": "2", "ageid": "0" }, { "regid": "165", "parid": "11", "regname": "漯河", "regtype": "2", "ageid": "0" }, { "regid": "166", "parid": "11", "regname": "濮阳", "regtype": "2", "ageid": "0" }, { "regid": "167", "parid": "12", "regname": "哈尔滨", "regtype": "2", "ageid": "0" }, { "regid": "168", "parid": "12", "regname": "大庆", "regtype": "2", "ageid": "0" }, { "regid": "169", "parid": "12", "regname": "大兴安岭", "regtype": "2", "ageid": "0" }, { "regid": "170", "parid": "12", "regname": "鹤岗", "regtype": "2", "ageid": "0" }, { "regid": "171", "parid": "12", "regname": "黑河", "regtype": "2", "ageid": "0" }, { "regid": "172", "parid": "12", "regname": "鸡西", "regtype": "2", "ageid": "0" }, { "regid": "173", "parid": "12", "regname": "佳木斯", "regtype": "2", "ageid": "0" }, { "regid": "174", "parid": "12", "regname": "牡丹江", "regtype": "2", "ageid": "0" }, { "regid": "175", "parid": "12", "regname": "七台河", "regtype": "2", "ageid": "0" }, { "regid": "176", "parid": "12", "regname": "齐齐哈尔", "regtype": "2", "ageid": "0" }, { "regid": "177", "parid": "12", "regname": "双鸭山", "regtype": "2", "ageid": "0" }, { "regid": "178", "parid": "12", "regname": "绥化", "regtype": "2", "ageid": "0" }, { "regid": "179", "parid": "12", "regname": "伊春", "regtype": "2", "ageid": "0" }, { "regid": "180", "parid": "13", "regname": "武汉", "regtype": "2", "ageid": "0" }, { "regid": "181", "parid": "13", "regname": "仙桃", "regtype": "2", "ageid": "0" }, { "regid": "182", "parid": "13", "regname": "鄂州", "regtype": "2", "ageid": "0" }, { "regid": "183", "parid": "13", "regname": "黄冈", "regtype": "2", "ageid": "0" }, { "regid": "184", "parid": "13", "regname": "黄石", "regtype": "2", "ageid": "0" }, { "regid": "185", "parid": "13", "regname": "荆门", "regtype": "2", "ageid": "0" }, { "regid": "186", "parid": "13", "regname": "荆州", "regtype": "2", "ageid": "0" }, { "regid": "187", "parid": "13", "regname": "潜江", "regtype": "2", "ageid": "0" }, { "regid": "188", "parid": "13", "regname": "神农架林区", "regtype": "2", "ageid": "0" }, { "regid": "189", "parid": "13", "regname": "十堰", "regtype": "2", "ageid": "0" }, { "regid": "190", "parid": "13", "regname": "随州", "regtype": "2", "ageid": "0" }, { "regid": "191", "parid": "13", "regname": "天门", "regtype": "2", "ageid": "0" }, { "regid": "192", "parid": "13", "regname": "咸宁", "regtype": "2", "ageid": "0" }, { "regid": "193", "parid": "13", "regname": "襄阳(襄樊市)", "regtype": "2", "ageid": "0" }, { "regid": "194", "parid": "13", "regname": "孝感", "regtype": "2", "ageid": "0" }, { "regid": "195", "parid": "13", "regname": "宜昌", "regtype": "2", "ageid": "0" }, { "regid": "196", "parid": "13", "regname": "恩施", "regtype": "2", "ageid": "0" }, { "regid": "197", "parid": "14", "regname": "长沙", "regtype": "2", "ageid": "0" }, { "regid": "198", "parid": "14", "regname": "张家界", "regtype": "2", "ageid": "0" }, { "regid": "199", "parid": "14", "regname": "常德", "regtype": "2", "ageid": "0" }, { "regid": "200", "parid": "14", "regname": "郴州", "regtype": "2", "ageid": "0" }, { "regid": "201", "parid": "14", "regname": "衡阳", "regtype": "2", "ageid": "0" }, { "regid": "202", "parid": "14", "regname": "怀化", "regtype": "2", "ageid": "0" }, { "regid": "203", "parid": "14", "regname": "娄底", "regtype": "2", "ageid": "0" }, { "regid": "204", "parid": "14", "regname": "邵阳", "regtype": "2", "ageid": "0" }, { "regid": "205", "parid": "14", "regname": "湘潭", "regtype": "2", "ageid": "0" }, { "regid": "206", "parid": "14", "regname": "湘西", "regtype": "2", "ageid": "0" }, { "regid": "207", "parid": "14", "regname": "益阳", "regtype": "2", "ageid": "0" }, { "regid": "208", "parid": "14", "regname": "永州", "regtype": "2", "ageid": "0" }, { "regid": "209", "parid": "14", "regname": "岳阳", "regtype": "2", "ageid": "0" }, { "regid": "210", "parid": "14", "regname": "株洲", "regtype": "2", "ageid": "0" }, { "regid": "211", "parid": "15", "regname": "长春", "regtype": "2", "ageid": "0" }, { "regid": "212", "parid": "15", "regname": "吉林", "regtype": "2", "ageid": "0" }, { "regid": "213", "parid": "15", "regname": "白城", "regtype": "2", "ageid": "0" }, { "regid": "214", "parid": "15", "regname": "白山", "regtype": "2", "ageid": "0" }, { "regid": "215", "parid": "15", "regname": "辽源", "regtype": "2", "ageid": "0" }, { "regid": "216", "parid": "15", "regname": "四平", "regtype": "2", "ageid": "0" }, { "regid": "217", "parid": "15", "regname": "松原", "regtype": "2", "ageid": "0" }, { "regid": "218", "parid": "15", "regname": "通化", "regtype": "2", "ageid": "0" }, { "regid": "219", "parid": "15", "regname": "延边", "regtype": "2", "ageid": "0" }, { "regid": "220", "parid": "16", "regname": "南京", "regtype": "2", "ageid": "0" }, { "regid": "221", "parid": "16", "regname": "苏州", "regtype": "2", "ageid": "0" }, { "regid": "222", "parid": "16", "regname": "无锡", "regtype": "2", "ageid": "0" }, { "regid": "223", "parid": "16", "regname": "常州", "regtype": "2", "ageid": "0" }, { "regid": "224", "parid": "16", "regname": "淮安", "regtype": "2", "ageid": "0" }, { "regid": "225", "parid": "16", "regname": "连云港", "regtype": "2", "ageid": "0" }, { "regid": "226", "parid": "16", "regname": "南通", "regtype": "2", "ageid": "0" }, { "regid": "227", "parid": "16", "regname": "宿迁", "regtype": "2", "ageid": "0" }, { "regid": "228", "parid": "16", "regname": "泰州", "regtype": "2", "ageid": "0" }, { "regid": "229", "parid": "16", "regname": "徐州", "regtype": "2", "ageid": "0" }, { "regid": "230", "parid": "16", "regname": "盐城", "regtype": "2", "ageid": "0" }, { "regid": "231", "parid": "16", "regname": "扬州", "regtype": "2", "ageid": "0" }, { "regid": "232", "parid": "16", "regname": "镇江", "regtype": "2", "ageid": "0" }, { "regid": "233", "parid": "17", "regname": "南昌", "regtype": "2", "ageid": "0" }, { "regid": "234", "parid": "17", "regname": "抚州", "regtype": "2", "ageid": "0" }, { "regid": "235", "parid": "17", "regname": "赣州", "regtype": "2", "ageid": "0" }, { "regid": "236", "parid": "17", "regname": "吉安", "regtype": "2", "ageid": "0" }, { "regid": "237", "parid": "17", "regname": "景德镇", "regtype": "2", "ageid": "0" }, { "regid": "238", "parid": "17", "regname": "九江", "regtype": "2", "ageid": "0" }, { "regid": "239", "parid": "17", "regname": "萍乡", "regtype": "2", "ageid": "0" }, { "regid": "240", "parid": "17", "regname": "上饶", "regtype": "2", "ageid": "0" }, { "regid": "241", "parid": "17", "regname": "新余", "regtype": "2", "ageid": "0" }, { "regid": "242", "parid": "17", "regname": "宜春", "regtype": "2", "ageid": "0" }, { "regid": "243", "parid": "17", "regname": "鹰潭", "regtype": "2", "ageid": "0" }, { "regid": "244", "parid": "18", "regname": "沈阳", "regtype": "2", "ageid": "0" }, { "regid": "245", "parid": "18", "regname": "大连", "regtype": "2", "ageid": "0" }, { "regid": "246", "parid": "18", "regname": "鞍山", "regtype": "2", "ageid": "0" }, { "regid": "247", "parid": "18", "regname": "本溪", "regtype": "2", "ageid": "0" }, { "regid": "248", "parid": "18", "regname": "朝阳", "regtype": "2", "ageid": "0" }, { "regid": "249", "parid": "18", "regname": "丹东", "regtype": "2", "ageid": "0" }, { "regid": "250", "parid": "18", "regname": "抚顺", "regtype": "2", "ageid": "0" }, { "regid": "251", "parid": "18", "regname": "阜新", "regtype": "2", "ageid": "0" }, { "regid": "252", "parid": "18", "regname": "葫芦岛", "regtype": "2", "ageid": "0" }, { "regid": "253", "parid": "18", "regname": "锦州", "regtype": "2", "ageid": "0" }, { "regid": "254", "parid": "18", "regname": "辽阳", "regtype": "2", "ageid": "0" }, { "regid": "255", "parid": "18", "regname": "盘锦", "regtype": "2", "ageid": "0" }, { "regid": "256", "parid": "18", "regname": "铁岭", "regtype": "2", "ageid": "0" }, { "regid": "257", "parid": "18", "regname": "营口", "regtype": "2", "ageid": "0" }, { "regid": "258", "parid": "19", "regname": "呼和浩特", "regtype": "2", "ageid": "0" }, { "regid": "259", "parid": "19", "regname": "阿拉善盟", "regtype": "2", "ageid": "0" }, { "regid": "260", "parid": "19", "regname": "巴彦淖尔盟", "regtype": "2", "ageid": "0" }, { "regid": "261", "parid": "19", "regname": "包头", "regtype": "2", "ageid": "0" }, { "regid": "262", "parid": "19", "regname": "赤峰", "regtype": "2", "ageid": "0" }, { "regid": "263", "parid": "19", "regname": "鄂尔多斯", "regtype": "2", "ageid": "0" }, { "regid": "264", "parid": "19", "regname": "呼伦贝尔", "regtype": "2", "ageid": "0" }, { "regid": "265", "parid": "19", "regname": "通辽", "regtype": "2", "ageid": "0" }, { "regid": "266", "parid": "19", "regname": "乌海", "regtype": "2", "ageid": "0" }, { "regid": "267", "parid": "19", "regname": "乌兰察布市", "regtype": "2", "ageid": "0" }, { "regid": "268", "parid": "19", "regname": "锡林郭勒盟", "regtype": "2", "ageid": "0" }, { "regid": "269", "parid": "19", "regname": "兴安盟", "regtype": "2", "ageid": "0" }, { "regid": "270", "parid": "20", "regname": "银川", "regtype": "2", "ageid": "0" }, { "regid": "271", "parid": "20", "regname": "固原", "regtype": "2", "ageid": "0" }, { "regid": "272", "parid": "20", "regname": "石嘴山", "regtype": "2", "ageid": "0" }, { "regid": "273", "parid": "20", "regname": "吴忠", "regtype": "2", "ageid": "0" }, { "regid": "274", "parid": "20", "regname": "中卫", "regtype": "2", "ageid": "0" }, { "regid": "275", "parid": "21", "regname": "西宁", "regtype": "2", "ageid": "0" }, { "regid": "276", "parid": "21", "regname": "果洛", "regtype": "2", "ageid": "0" }, { "regid": "277", "parid": "21", "regname": "海北", "regtype": "2", "ageid": "0" }, { "regid": "278", "parid": "21", "regname": "海东", "regtype": "2", "ageid": "0" }, { "regid": "279", "parid": "21", "regname": "海南", "regtype": "2", "ageid": "0" }, { "regid": "280", "parid": "21", "regname": "海西", "regtype": "2", "ageid": "0" }, { "regid": "281", "parid": "21", "regname": "黄南", "regtype": "2", "ageid": "0" }, { "regid": "282", "parid": "21", "regname": "玉树", "regtype": "2", "ageid": "0" }, { "regid": "283", "parid": "22", "regname": "济南", "regtype": "2", "ageid": "0" }, { "regid": "284", "parid": "22", "regname": "青岛", "regtype": "2", "ageid": "0" }, { "regid": "285", "parid": "22", "regname": "滨州", "regtype": "2", "ageid": "0" }, { "regid": "286", "parid": "22", "regname": "德州", "regtype": "2", "ageid": "0" }, { "regid": "287", "parid": "22", "regname": "东营", "regtype": "2", "ageid": "0" }, { "regid": "288", "parid": "22", "regname": "菏泽", "regtype": "2", "ageid": "0" }, { "regid": "289", "parid": "22", "regname": "济宁", "regtype": "2", "ageid": "0" }, { "regid": "290", "parid": "22", "regname": "莱芜", "regtype": "2", "ageid": "0" }, { "regid": "291", "parid": "22", "regname": "聊城", "regtype": "2", "ageid": "0" }, { "regid": "292", "parid": "22", "regname": "临沂", "regtype": "2", "ageid": "0" }, { "regid": "293", "parid": "22", "regname": "日照", "regtype": "2", "ageid": "0" }, { "regid": "294", "parid": "22", "regname": "泰安", "regtype": "2", "ageid": "0" }, { "regid": "295", "parid": "22", "regname": "威海", "regtype": "2", "ageid": "0" }, { "regid": "296", "parid": "22", "regname": "潍坊", "regtype": "2", "ageid": "0" }, { "regid": "297", "parid": "22", "regname": "烟台", "regtype": "2", "ageid": "0" }, { "regid": "298", "parid": "22", "regname": "枣庄", "regtype": "2", "ageid": "0" }, { "regid": "299", "parid": "22", "regname": "淄博", "regtype": "2", "ageid": "0" }, { "regid": "300", "parid": "23", "regname": "太原", "regtype": "2", "ageid": "0" }, { "regid": "301", "parid": "23", "regname": "长治", "regtype": "2", "ageid": "0" }, { "regid": "302", "parid": "23", "regname": "大同", "regtype": "2", "ageid": "0" }, { "regid": "303", "parid": "23", "regname": "晋城", "regtype": "2", "ageid": "0" }, { "regid": "304", "parid": "23", "regname": "晋中", "regtype": "2", "ageid": "0" }, { "regid": "305", "parid": "23", "regname": "临汾", "regtype": "2", "ageid": "0" }, { "regid": "306", "parid": "23", "regname": "吕梁", "regtype": "2", "ageid": "0" }, { "regid": "307", "parid": "23", "regname": "朔州", "regtype": "2", "ageid": "0" }, { "regid": "308", "parid": "23", "regname": "忻州", "regtype": "2", "ageid": "0" }, { "regid": "309", "parid": "23", "regname": "阳泉", "regtype": "2", "ageid": "0" }, { "regid": "310", "parid": "23", "regname": "运城", "regtype": "2", "ageid": "0" }, { "regid": "311", "parid": "24", "regname": "西安", "regtype": "2", "ageid": "0" }, { "regid": "312", "parid": "24", "regname": "安康", "regtype": "2", "ageid": "0" }, { "regid": "313", "parid": "24", "regname": "宝鸡", "regtype": "2", "ageid": "0" }, { "regid": "314", "parid": "24", "regname": "汉中", "regtype": "2", "ageid": "0" }, { "regid": "315", "parid": "24", "regname": "商洛", "regtype": "2", "ageid": "0" }, { "regid": "316", "parid": "24", "regname": "铜川", "regtype": "2", "ageid": "0" }, { "regid": "317", "parid": "24", "regname": "渭南", "regtype": "2", "ageid": "0" }, { "regid": "318", "parid": "24", "regname": "咸阳", "regtype": "2", "ageid": "0" }, { "regid": "319", "parid": "24", "regname": "延安", "regtype": "2", "ageid": "0" }, { "regid": "320", "parid": "24", "regname": "榆林", "regtype": "2", "ageid": "0" }, { "regid": "321", "parid": "25", "regname": "上海", "regtype": "2", "ageid": "0" }, { "regid": "322", "parid": "26", "regname": "成都", "regtype": "2", "ageid": "0" }, { "regid": "323", "parid": "26", "regname": "绵阳", "regtype": "2", "ageid": "0" }, { "regid": "324", "parid": "26", "regname": "阿坝", "regtype": "2", "ageid": "0" }, { "regid": "325", "parid": "26", "regname": "巴中", "regtype": "2", "ageid": "0" }, { "regid": "326", "parid": "26", "regname": "达州", "regtype": "2", "ageid": "0" }, { "regid": "327", "parid": "26", "regname": "德阳", "regtype": "2", "ageid": "0" }, { "regid": "328", "parid": "26", "regname": "甘孜", "regtype": "2", "ageid": "0" }, { "regid": "329", "parid": "26", "regname": "广安", "regtype": "2", "ageid": "0" }, { "regid": "330", "parid": "26", "regname": "广元", "regtype": "2", "ageid": "0" }, { "regid": "331", "parid": "26", "regname": "乐山", "regtype": "2", "ageid": "0" }, { "regid": "332", "parid": "26", "regname": "凉山", "regtype": "2", "ageid": "0" }, { "regid": "333", "parid": "26", "regname": "眉山", "regtype": "2", "ageid": "0" }, { "regid": "334", "parid": "26", "regname": "南充", "regtype": "2", "ageid": "0" }, { "regid": "335", "parid": "26", "regname": "内江", "regtype": "2", "ageid": "0" }, { "regid": "336", "parid": "26", "regname": "攀枝花", "regtype": "2", "ageid": "0" }, { "regid": "337", "parid": "26", "regname": "遂宁", "regtype": "2", "ageid": "0" }, { "regid": "338", "parid": "26", "regname": "雅安", "regtype": "2", "ageid": "0" }, { "regid": "339", "parid": "26", "regname": "宜宾", "regtype": "2", "ageid": "0" }, { "regid": "340", "parid": "26", "regname": "资阳", "regtype": "2", "ageid": "0" }, { "regid": "341", "parid": "26", "regname": "自贡", "regtype": "2", "ageid": "0" }, { "regid": "342", "parid": "26", "regname": "泸州", "regtype": "2", "ageid": "0" }, { "regid": "343", "parid": "27", "regname": "天津", "regtype": "2", "ageid": "0" }, { "regid": "344", "parid": "28", "regname": "拉萨", "regtype": "2", "ageid": "0" }, { "regid": "345", "parid": "28", "regname": "阿里", "regtype": "2", "ageid": "0" }, { "regid": "346", "parid": "28", "regname": "昌都", "regtype": "2", "ageid": "0" }, { "regid": "347", "parid": "28", "regname": "林芝", "regtype": "2", "ageid": "0" }, { "regid": "348", "parid": "28", "regname": "那曲", "regtype": "2", "ageid": "0" }, { "regid": "349", "parid": "28", "regname": "日喀则", "regtype": "2", "ageid": "0" }, { "regid": "350", "parid": "28", "regname": "山南", "regtype": "2", "ageid": "0" }, { "regid": "351", "parid": "29", "regname": "乌鲁木齐", "regtype": "2", "ageid": "0" }, { "regid": "352", "parid": "29", "regname": "阿克苏", "regtype": "2", "ageid": "0" }, { "regid": "353", "parid": "29", "regname": "阿拉尔", "regtype": "2", "ageid": "0" }, { "regid": "354", "parid": "29", "regname": "巴音郭楞", "regtype": "2", "ageid": "0" }, { "regid": "355", "parid": "29", "regname": "博尔塔拉", "regtype": "2", "ageid": "0" }, { "regid": "356", "parid": "29", "regname": "昌吉", "regtype": "2", "ageid": "0" }, { "regid": "357", "parid": "29", "regname": "哈密", "regtype": "2", "ageid": "0" }, { "regid": "358", "parid": "29", "regname": "和田", "regtype": "2", "ageid": "0" }, { "regid": "359", "parid": "29", "regname": "喀什", "regtype": "2", "ageid": "0" }, { "regid": "360", "parid": "29", "regname": "克拉玛依", "regtype": "2", "ageid": "0" }, { "regid": "361", "parid": "29", "regname": "克孜勒苏", "regtype": "2", "ageid": "0" }, { "regid": "362", "parid": "29", "regname": "石河子", "regtype": "2", "ageid": "0" }, { "regid": "363", "parid": "29", "regname": "图木舒克", "regtype": "2", "ageid": "0" }, { "regid": "364", "parid": "29", "regname": "吐鲁番", "regtype": "2", "ageid": "0" }, { "regid": "365", "parid": "29", "regname": "五家渠", "regtype": "2", "ageid": "0" }, { "regid": "366", "parid": "29", "regname": "伊犁", "regtype": "2", "ageid": "0" }, { "regid": "367", "parid": "30", "regname": "昆明", "regtype": "2", "ageid": "0" }, { "regid": "368", "parid": "30", "regname": "怒江", "regtype": "2", "ageid": "0" }, { "regid": "369", "parid": "30", "regname": "普洱", "regtype": "2", "ageid": "0" }, { "regid": "370", "parid": "30", "regname": "丽江", "regtype": "2", "ageid": "0" }, { "regid": "371", "parid": "30", "regname": "保山", "regtype": "2", "ageid": "0" }, { "regid": "372", "parid": "30", "regname": "楚雄", "regtype": "2", "ageid": "0" }, { "regid": "373", "parid": "30", "regname": "大理", "regtype": "2", "ageid": "0" }, { "regid": "374", "parid": "30", "regname": "德宏", "regtype": "2", "ageid": "0" }, { "regid": "375", "parid": "30", "regname": "迪庆", "regtype": "2", "ageid": "0" }, { "regid": "376", "parid": "30", "regname": "红河", "regtype": "2", "ageid": "0" }, { "regid": "377", "parid": "30", "regname": "临沧", "regtype": "2", "ageid": "0" }, { "regid": "378", "parid": "30", "regname": "曲靖", "regtype": "2", "ageid": "0" }, { "regid": "379", "parid": "30", "regname": "文山", "regtype": "2", "ageid": "0" }, { "regid": "380", "parid": "30", "regname": "西双版纳", "regtype": "2", "ageid": "0" }, { "regid": "381", "parid": "30", "regname": "玉溪", "regtype": "2", "ageid": "0" }, { "regid": "382", "parid": "30", "regname": "昭通", "regtype": "2", "ageid": "0" }, { "regid": "383", "parid": "31", "regname": "杭州", "regtype": "2", "ageid": "0" }, { "regid": "384", "parid": "31", "regname": "湖州", "regtype": "2", "ageid": "0" }, { "regid": "385", "parid": "31", "regname": "嘉兴", "regtype": "2", "ageid": "0" }, { "regid": "386", "parid": "31", "regname": "金华", "regtype": "2", "ageid": "0" }, { "regid": "387", "parid": "31", "regname": "丽水", "regtype": "2", "ageid": "0" }, { "regid": "388", "parid": "31", "regname": "宁波", "regtype": "2", "ageid": "0" }, { "regid": "389", "parid": "31", "regname": "绍兴", "regtype": "2", "ageid": "0" }, { "regid": "390", "parid": "31", "regname": "台州", "regtype": "2", "ageid": "0" }, { "regid": "391", "parid": "31", "regname": "温州", "regtype": "2", "ageid": "0" }, { "regid": "392", "parid": "31", "regname": "舟山", "regtype": "2", "ageid": "0" }, { "regid": "393", "parid": "31", "regname": "衢州", "regtype": "2", "ageid": "0" }, { "regid": "394", "parid": "32", "regname": "重庆", "regtype": "2", "ageid": "0" }, { "regid": "395", "parid": "33", "regname": "香港", "regtype": "2", "ageid": "0" }, { "regid": "396", "parid": "34", "regname": "澳门", "regtype": "2", "ageid": "0" }, { "regid": "397", "parid": "35", "regname": "台湾", "regtype": "2", "ageid": "0" }]
  },
  getPostion:function(){
    var that = this;
    console.log(that.data.comtype[that.data.comtypeInex])
    console.log(that.data.xingzhi[that.data.xzIndex])
    console.log()
  
    this.setData({
      zw: []
    });
     wx.request({
       url: getApp().globalData.commomPath + 'employ/findAllPostionByCity',
      data: {
       workPlace: that.data.multiArray[1][that.data.multiIndex[1]]
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        var newJson1=[]
        var newJson2 = []
        var newJson3= []
        for(var k in res.data){
          if ((res.data[k].jobtype == that.data.jobtype[that.data.jobtypeIndex] )|| that.data.jobtype[that.data.jobtypeIndex]=="全部"){
             newJson1.push(res.data[k]);
          }
        }
        for (var k in newJson1) {
          if ((newJson1[k].companyType == that.data.comtype[that.data.comtypeInex]) ||that.data.comtype[that.data.comtypeInex] == "全部") {
            newJson2.push(newJson1[k]);
          }
        }
        for (var k in newJson2) {
          if ((newJson2[k].xingzhi == that.data.xingzhi[that.data.xzIndex]) || that.data.comtype[that.data.xzIndex] == "全部") {
            newJson3.push(newJson2[k]);
          }
        }
        console.log(newJson3)
        that.setData({
          zw: newJson3
        });
      },
      fail: function (res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  getJobtype(e) {
    var that = this;
    this.setData({ 
      jobtypeIndex:e.detail.value
     });
    that.getPostion();
  },
  getcomtype(e) {
    var that=this;
    console.log(that.data.comtype[that.data.comtypeInex])
    
    this.setData({
      comtypeInex: e.detail.value
    });
    that.getPostion();
  },
  getxingzhi(e) {
    var that = this;
   
    this.setData({
      xzIndex: e.detail.value
    });
    
    console.log(this.data.xingzhi[e.detail.value])
    that.getPostion();
  },
  getName: function(e) {
    console.log(e.detail.value);
    this.setData({
      name: e.detail.value
    });
  },
  search: function() {
    if (this.data.name == "") {
      wx.showToast({
        title: '输入搜索内容',
      });
      return;
    }
    this.setData({
      zw:[]
    });
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'employ/findByName',
      data: {
       name: that.data.name,
       workPlace: that.data.multiArray[1][that.data.multiIndex[1]]
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          zw: res.data
        });
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that=this;
    wx.request({
      url: getApp().globalData.commomPath + 'employ/findAllEm',
      data: {
        pageIndex: 1,
        workPlace: that.data.multiArray[1][that.data.multiIndex[1]]
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res.data);
        that.setData({
          zw: res.data
        });
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    var that = this;
    wx.request({
      url: getApp().globalData.commomPath + 'employ/findAllEm',
      data: {
        pageIndex: that.data.pageIndex + 1,
        workPlace: that.data.multiArray[1][that.data.multiIndex[1]]
      },
      method: 'POST',
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        for (var k in res.data) {
          that.data.zw.push(res.data[k])
        }
        // ja.put(newJson);
        console.log(that.data.zw);
        var newJson = that.data.zw
        console.log(res.data);
        that.setData({
          zw: newJson,
          pageIndex: that.data.pageIndex + 1
        });
      },
      fail: function(res) {
        wx.showToast({
          title: '系统出错！',
        })
      }
    });
  },
  bindMultiPickerChange: function (e) {
    that.setData({
      "multiIndex[0]": e.detail.value[0],
      "multiIndex[1]": e.detail.value[1]
    });
    console.log(that.data.multiArray[1][that.data.multiIndex[1]])
   that.getPostion();
  },
  bindMultiPickerColumnChange: function (e) {
    switch (e.detail.column) {
      case 0:
        list = []
        for (var i = 0; i < that.data.objectMultiArray.length; i++) {
          if (that.data.objectMultiArray[i].parid == that.data.objectMultiArray[e.detail.value].regid) {
            list.push(that.data.objectMultiArray[i].regname)
          }
        }
        that.setData({
          "multiArray[1]": list,
          "multiIndex[0]": e.detail.value,
          "multiIndex[1]": 0
        })

    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

   /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.onLoad();
 
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  }
})

