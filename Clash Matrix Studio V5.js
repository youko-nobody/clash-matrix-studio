/**
 * Clash Matrix Studio V5.1 - 终极防弹自愈版 (完整版)
 * 修复：解决因特殊编码导致的前端渲染器静默崩溃（幽灵隐形），加入全量 Try-Catch 防护网与原生排版强制撑开。
 */

// ==================== [模块一] 核心常量 ====================

const DEFAULT_PROXIES = ``; // 开源版不内置任何真实节点示例，首次使用请自行导入订阅或手动提取节点。

const ACCADEMIA_TEMPLATE = [
  "rule-providers:",
  "  BM_Telegram: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml\", path: ./ruleset/blackmatrix7/Telegram.yaml}",
  "  BM_YouTube: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/YouTube/YouTube.yaml\", path: ./ruleset/blackmatrix7/YouTube.yaml}",
  "  BM_OpenAI: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/OpenAI/OpenAI.yaml\", path: ./ruleset/blackmatrix7/OpenAI.yaml}",
  "  BM_Claude: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Claude/Claude.yaml\", path: ./ruleset/blackmatrix7/Claude.yaml}",
  "  Alipan_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Alipan/Alipan_Domain.yaml\", path: ./ruleset/Accademia/Alipan_Domain.yaml}",
  "  Apple_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Apple/Apple_Domain.yaml\", path: ./ruleset/Accademia/Apple_Domain.yaml}",
  "  Apple_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Apple/Apple_IP.yaml\", path: ./ruleset/Accademia/Apple_IP.yaml}",
  "  AppleAI_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/AppleAI/AppleAI_Domain.yaml\", path: ./ruleset/Accademia/AppleAI_Domain.yaml}",
  "  AppleNews_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/AppleNews/AppleNews_Domain.yaml\", path: ./ruleset/Accademia/AppleNews_Domain.yaml}",
  "  AqaraCN_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Aqara/AqaraCN._Domain.yaml\", path: ./ruleset/Accademia/AqaraCN._Domain.yaml}",
  "  AqaraGlobal_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Aqara/AqaraGlobal._Domain.yaml\", path: ./ruleset/Accademia/AqaraGlobal._Domain.yaml}",
  "  AqaraGlobal_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Aqara/AqaraGlobal._IP.yaml\", path: ./ruleset/Accademia/AqaraGlobal._IP.yaml}",
  "  BaiduNetDisk_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/BaiduNetDisk/BaiduNetDisk_Domain.yaml\", path: ./ruleset/Accademia/BaiduNetDisk_Domain.yaml}",
  "  BankAU_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankAU_Domain.yaml\", path: ./ruleset/Accademia/BankAU_Domain.yaml}",
  "  BankCA_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankCA_Domain.yaml\", path: ./ruleset/Accademia/BankCA_Domain.yaml}",
  "  BankDE_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankDE_Domain.yaml\", path: ./ruleset/Accademia/BankDE_Domain.yaml}",
  "  BankFR_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankFR_Domain.yaml\", path: ./ruleset/Accademia/BankFR_Domain.yaml}",
  "  BankHK_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankHK_Domain.yaml\", path: ./ruleset/Accademia/BankHK_Domain.yaml}",
  "  BankJP_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankJP_Domain.yaml\", path: ./ruleset/Accademia/BankJP_Domain.yaml}",
  "  BankNL_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankNL_Domain.yaml\", path: ./ruleset/Accademia/BankNL_Domain.yaml}",
  "  BankSG_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankSG_Domain.yaml\", path: ./ruleset/Accademia/BankSG_Domain.yaml}",
  "  BankUK_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankUK_Domain.yaml\", path: ./ruleset/Accademia/BankUK_Domain.yaml}",
  "  BankUS_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Bank/BankUS_Domain.yaml\", path: ./ruleset/Accademia/BankUS_Domain.yaml}",
  "  BlockHttpDNSPlus: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/BlockHttpDNSPlus/BlockHttpDNSPlus.yaml\", path: ./ruleset/Accademia/BlockHttpDNSPlus.yaml}",
  "  China_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/China/China_Domain.yaml\", path: ./ruleset/Accademia/China_Domain.yaml}",
  "  ChinaDNS_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/ChinaDNS/ChinaDNS_Domain.yaml\", path: ./ruleset/Accademia/ChinaDNS_Domain.yaml}",
  "  ChinaDNS_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/ChinaDNS/ChinaDNS_IP.yaml\", path: ./ruleset/Accademia/ChinaDNS_IP.yaml}",
  "  ChinaMax_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/ChinaMax/ChinaMax_Domain.yaml\", path: ./ruleset/Accademia/ChinaMax_Domain.yaml}",
  "  Copilot_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Copilot/Copilot_Domain.yaml\", path: ./ruleset/Accademia/Copilot_Domain.yaml}",
  "  FakeLocationBiliBili: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationBiliBili.yaml\", path: ./ruleset/Accademia/FakeLocationBiliBili.yaml}",
  "  FakeLocationDouBan: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationDouBan.yaml\", path: ./ruleset/Accademia/FakeLocationDouBan.yaml}",
  "  FakeLocationDouYin: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationDouYin.yaml\", path: ./ruleset/Accademia/FakeLocationDouYin.yaml}",
  "  FakeLocationKuaiShou: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationKuaiShou.yaml\", path: ./ruleset/Accademia/FakeLocationKuaiShou.yaml}",
  "  FakeLocationTieBa: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationTieBa.yaml\", path: ./ruleset/Accademia/FakeLocationTieBa.yaml}",
  "  FakeLocationWeiBo: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationWeiBo.yaml\", path: ./ruleset/Accademia/FakeLocationWeiBo.yaml}",
  "  FakeLocationXiGua: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationXiGua.yaml\", path: ./ruleset/Accademia/FakeLocationXiGua.yaml}",
  "  FakeLocationXianYu: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationXianYu.yaml\", path: ./ruleset/Accademia/FakeLocationXianYu.yaml}",
  "  FakeLocationXiaoHongShu: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationXiaoHongShu.yaml\", path: ./ruleset/Accademia/FakeLocationXiaoHongShu.yaml}",
  "  FakeLocationZhiHu: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/FakeLocation/FakeLocationZhiHu.yaml\", path: ./ruleset/Accademia/FakeLocationZhiHu.yaml}",
  "  Fastly_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Fastly/Fastly_IP.yaml\", path: ./ruleset/Accademia/Fastly_IP.yaml}",
  "  Gemini_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Gemini/Gemini_Domain.yaml\", path: ./ruleset/Accademia/Gemini_Domain.yaml}",
  "  GeositeCN_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeositeCN/GeositeCN_Domain.yaml\", path: ./ruleset/Accademia/GeositeCN_Domain.yaml}",
  "  GlobalDNS_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GlobalDNS/GlobalDNS_Domain.yaml\", path: ./ruleset/Accademia/GlobalDNS_Domain.yaml}",
  "  GlobalDNS_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GlobalDNS/GlobalDNS_IP.yaml\", path: ./ruleset/Accademia/GlobalDNS_IP.yaml}",
  "  Grok_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Grok/Grok_Domain.yaml\", path: ./ruleset/Accademia/Grok_Domain.yaml}",
  "  HijackingPlus: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/HijackingPlus/HijackingPlus.yaml\", path: ./ruleset/Accademia/HijackingPlus.yaml}",
  "  HomeIPJP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/HomeIP/HomeIPJP.yaml\", path: ./ruleset/Accademia/HomeIPJP.yaml}",
  "  HomeIPUS: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/HomeIP/HomeIPUS.yaml\", path: ./ruleset/Accademia/HomeIPUS.yaml}",
  "  Kwai_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Kwai/Kwai_Domain.yaml\", path: ./ruleset/Accademia/Kwai_Domain.yaml}",
  "  MacAppUpgrade_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/MacAppUpgrade/MacAppUpgrade_Domain.yaml\", path: ./ruleset/Accademia/MacAppUpgrade_Domain.yaml}",
  "  MicrosoftAPPs_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/MicrosoftAPPs/MicrosoftAPPs_Domain.yaml\", path: ./ruleset/Accademia/MicrosoftAPPs_Domain.yaml}",
  "  Parsec_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Parsec/Parsec_Domain.yaml\", path: ./ruleset/Accademia/Parsec_Domain.yaml}",
  "  Pornhub_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Pornhub/Pornhub_Domain.yaml\", path: ./ruleset/Accademia/Pornhub_Domain.yaml}",
  "  PreRepairEasyPrivacy_DIRECT: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/PreRepairEasyPrivacy/PreRepairEasyPrivacy_DIRECT.yaml\", path: ./ruleset/Accademia/PreRepairEasyPrivacy_DIRECT.yaml}",
  "  PreRepairEasyPrivacy_PROXY: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/PreRepairEasyPrivacy/PreRepairEasyPrivacy_PROXY.yaml\", path: ./ruleset/Accademia/PreRepairEasyPrivacy_PROXY.yaml}",
  "  PreRepairEasyPrivacy_REJECT: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/PreRepairEasyPrivacy/PreRepairEasyPrivacy_REJECT.yaml\", path: ./ruleset/Accademia/PreRepairEasyPrivacy_REJECT.yaml}",
  "  RustDesk_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/RustDesk/RustDesk_Domain.yaml\", path: ./ruleset/Accademia/RustDesk_Domain.yaml}",
  "  Signal_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/Signal/Signal_Domain.yaml\", path: ./ruleset/Accademia/Signal_Domain.yaml}",
  "  UnsupportVPN_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/UnsupportVPN/UnsupportVPN_Domain.yaml\", path: ./ruleset/Accademia/UnsupportVPN_Domain.yaml}",
  "  Paypal: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/VirtualFinance/Paypal.yaml\", path: ./ruleset/Accademia/Paypal.yaml}",
  "  Wise: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/VirtualFinance/Wise.yaml\", path: ./ruleset/Accademia/Wise.yaml}",
  "  Monzo: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/VirtualFinance/Monzo.yaml\", path: ./ruleset/Accademia/Monzo.yaml}",
  "  Revolut: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/VirtualFinance/Revolut.yaml\", path: ./ruleset/Accademia/Revolut.yaml}",
  "  WaybackMachine_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/WaybackMachine/WaybackMachine_Domain.yaml\", path: ./ruleset/Accademia/WaybackMachine_Domain.yaml}",
  "  WaybackMachine_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/WaybackMachine/WaybackMachine_IP.yaml\", path: ./ruleset/Accademia/WaybackMachine_IP.yaml}",
  "  WeiYun_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/WeiYun/WeiYun_Domain.yaml\", path: ./ruleset/Accademia/WeiYun_Domain.yaml}",
  "  WeiYun_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/WeiYun/WeiYun_IP.yaml\", path: ./ruleset/Accademia/WeiYun_IP.yaml}",
  "  eMuleServer_IP: {type: http, behavior: ipcidr, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/eMuleServer/eMuleServer_IP.yaml\", path: ./ruleset/Accademia/eMuleServer_IP.yaml}",
  "  GeoRouting_Africa_Central_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Africa_Central_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_Central_ccTLD_Domain.yaml}",
  "  GeoRouting_Africa_East_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Africa_East_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_East_ccTLD_Domain.yaml}",
  "  GeoRouting_Africa_North_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Africa_North_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_North_ccTLD_Domain.yaml}",
  "  GeoRouting_Africa_South_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Africa_South_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_South_ccTLD_Domain.yaml}",
  "  GeoRouting_Africa_West_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Africa_West_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_West_ccTLD_Domain.yaml}",
  "  GeoRouting_America_North_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_America_North_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_America_North_ccTLD_Domain.yaml}",
  "  GeoRouting_America_South_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_America_South_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_America_South_ccTLD_Domain.yaml}",
  "  GeoRouting_Antarctica_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Antarctica_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Antarctica_ccTLD_Domain.yaml}",
  "  GeoRouting_Asia_Central_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Asia_Central_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_Central_ccTLD_Domain.yaml}",
  "  GeoRouting_Asia_China_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Asia_China_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_China_ccTLD_Domain.yaml}",
  "  GeoRouting_Asia_EastSouth_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Asia_EastSouth_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_EastSouth_ccTLD_Domain.yaml}",
  "  GeoRouting_Asia_East_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Asia_East_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_East_ccTLD_Domain.yaml}",
  "  GeoRouting_Asia_South_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Asia_South_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_South_ccTLD_Domain.yaml}",
  "  GeoRouting_Asia_West_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Asia_West_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_West_ccTLD_Domain.yaml}",
  "  GeoRouting_Europe_East_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Europe_East_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Europe_East_ccTLD_Domain.yaml}",
  "  GeoRouting_Europe_West_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Europe_West_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Europe_West_ccTLD_Domain.yaml}",
  "  GeoRouting_Oceania_ccTLD_Domain: {type: http, behavior: domain, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_Domain/GeoRouting_Oceania_ccTLD_Domain.yaml\", path: ./ruleset/Accademia/GeoRouting_Oceania_ccTLD_Domain.yaml}",
  "  GeoRouting_Africa_Central_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Africa_Central_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_Central_GeoIP.yaml}",
  "  GeoRouting_Africa_East_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Africa_East_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_East_GeoIP.yaml}",
  "  GeoRouting_Africa_North_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Africa_North_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_North_GeoIP.yaml}",
  "  GeoRouting_Africa_South_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Africa_South_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_South_GeoIP.yaml}",
  "  GeoRouting_Africa_West_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Africa_West_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Africa_West_GeoIP.yaml}",
  "  GeoRouting_America_North_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_America_North_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_America_North_GeoIP.yaml}",
  "  GeoRouting_America_South_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_America_South_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_America_South_GeoIP.yaml}",
  "  GeoRouting_Antarctica_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Antarctica_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Antarctica_GeoIP.yaml}",
  "  GeoRouting_Asia_Central_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Asia_Central_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_Central_GeoIP.yaml}",
  "  GeoRouting_Asia_China_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Asia_China_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_China_GeoIP.yaml}",
  "  GeoRouting_Asia_EastSouth_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Asia_EastSouth_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_EastSouth_GeoIP.yaml}",
  "  GeoRouting_Asia_East_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Asia_East_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_East_GeoIP.yaml}",
  "  GeoRouting_Asia_South_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Asia_South_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_South_GeoIP.yaml}",
  "  GeoRouting_Asia_West_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Asia_West_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Asia_West_GeoIP.yaml}",
  "  GeoRouting_Europe_East_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Europe_East_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Europe_East_GeoIP.yaml}",
  "  GeoRouting_Europe_West_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Europe_West_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Europe_West_GeoIP.yaml}",
  "  GeoRouting_Oceania_GeoIP: {type: http, behavior: classical, interval: 86400, url: \"https://mirror.ghproxy.com/https://raw.githubusercontent.com/Accademia/Additional_Rule_For_Clash/main/GeoRouting_For_IP/GeoRouting_Oceania_GeoIP.yaml\", path: ./ruleset/Accademia/GeoRouting_Oceania_GeoIP.yaml}",
  "",
  "proxy-groups:",
  "  - name: PROXY",
  "    type: select",
  "    proxies:",
  "      - '♻️ 自动测速'",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: Emby代理",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: TG",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: AI",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: YOUTUBE",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: FINAL",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: BLOCK",
  "    type: select",
  "    proxies:",
  "      - REJECT",
  "      - DIRECT",
  "  - name: APPLE",
  "    type: select",
  "    proxies:",
  "      - DIRECT",
  "      - PROXY",
  "      - '[ALL_NODES]'",
  "  - name: AQARA",
  "    type: select",
  "    proxies:",
  "      - DIRECT",
  "      - REJECT",
  "      - PROXY",
  "      - '[ALL_NODES]'",
  "  - name: BANK",
  "    type: select",
  "    proxies:",
  "      - DIRECT",
  "      - PROXY",
  "      - '[ALL_NODES]'",
  "  - name: FINANCE",
  "    type: select",
  "    proxies:",
  "      - DIRECT",
  "      - PROXY",
  "      - '[ALL_NODES]'",
  "  - name: HOME-IP",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: FAKE-LOCATION",
  "    type: select",
  "    proxies:",
  "      - PROXY",
  "      - DIRECT",
  "      - '[ALL_NODES]'",
  "  - name: '♻️ 自动测速'",
  "    type: url-test",
  "    url: http://www.google.com/blank.html",
  "    interval: 300",
  "    tolerance: 50",
  "    proxies:",
  "      - '[ALL_NODES]'",
  "",
  "rules:",
  "  - RULE-SET,PreRepairEasyPrivacy_DIRECT,DIRECT",
  "  - RULE-SET,PreRepairEasyPrivacy_PROXY,PROXY",
  "  - RULE-SET,PreRepairEasyPrivacy_REJECT,BLOCK",
  "  - RULE-SET,BlockHttpDNSPlus,BLOCK",
  "  - RULE-SET,ChinaDNS_Domain,BLOCK",
  "  - RULE-SET,ChinaDNS_IP,BLOCK",
  "  - RULE-SET,HijackingPlus,BLOCK",
  "  - RULE-SET,Gemini_Domain,AI",
  "  - RULE-SET,Grok_Domain,AI",
  "  - RULE-SET,Copilot_Domain,AI",
  "  - RULE-SET,AppleAI_Domain,AI",
  "  - RULE-SET,BM_OpenAI,AI",
  "  - RULE-SET,BM_Claude,AI",
  "  - RULE-SET,BM_Telegram,TG",
  "  - RULE-SET,BM_YouTube,YOUTUBE",
  "  - RULE-SET,AppleNews_Domain,PROXY",
  "  - RULE-SET,Signal_Domain,PROXY",
  "  - RULE-SET,Kwai_Domain,PROXY",
  "  - RULE-SET,Pornhub_Domain,PROXY",
  "  - RULE-SET,WaybackMachine_Domain,PROXY",
  "  - RULE-SET,WaybackMachine_IP,PROXY",
  "  - RULE-SET,Fastly_IP,PROXY",
  "  - RULE-SET,Parsec_Domain,PROXY",
  "  - RULE-SET,RustDesk_Domain,PROXY",
  "  - RULE-SET,MacAppUpgrade_Domain,PROXY",
  "  - RULE-SET,eMuleServer_IP,PROXY",
  "  - RULE-SET,GlobalDNS_Domain,PROXY",
  "  - RULE-SET,GlobalDNS_IP,PROXY",
  "  - RULE-SET,Apple_Domain,APPLE",
  "  - RULE-SET,Apple_IP,APPLE",
  "  - RULE-SET,MicrosoftAPPs_Domain,DIRECT",
  "  - RULE-SET,Alipan_Domain,DIRECT",
  "  - RULE-SET,BaiduNetDisk_Domain,DIRECT",
  "  - RULE-SET,WeiYun_Domain,DIRECT",
  "  - RULE-SET,WeiYun_IP,DIRECT",
  "  - RULE-SET,AqaraCN_Domain,AQARA",
  "  - RULE-SET,AqaraGlobal_Domain,AQARA",
  "  - RULE-SET,AqaraGlobal_IP,AQARA",
  "  - RULE-SET,UnsupportVPN_Domain,DIRECT",
  "  - RULE-SET,BankAU_Domain,BANK",
  "  - RULE-SET,BankCA_Domain,BANK",
  "  - RULE-SET,BankDE_Domain,BANK",
  "  - RULE-SET,BankFR_Domain,BANK",
  "  - RULE-SET,BankHK_Domain,BANK",
  "  - RULE-SET,BankJP_Domain,BANK",
  "  - RULE-SET,BankNL_Domain,BANK",
  "  - RULE-SET,BankSG_Domain,BANK",
  "  - RULE-SET,BankUK_Domain,BANK",
  "  - RULE-SET,BankUS_Domain,BANK",
  "  - RULE-SET,Paypal,FINANCE",
  "  - RULE-SET,Wise,FINANCE",
  "  - RULE-SET,Monzo,FINANCE",
  "  - RULE-SET,Revolut,FINANCE",
  "  - RULE-SET,HomeIPJP,HOME-IP",
  "  - RULE-SET,HomeIPUS,HOME-IP",
  "  - RULE-SET,FakeLocationBiliBili,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationDouBan,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationDouYin,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationKuaiShou,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationTieBa,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationWeiBo,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationXiGua,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationXianYu,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationXiaoHongShu,FAKE-LOCATION",
  "  - RULE-SET,FakeLocationZhiHu,FAKE-LOCATION",
  "  - RULE-SET,GeoRouting_Asia_China_ccTLD_Domain,DIRECT",
  "  - RULE-SET,GeoRouting_Asia_China_GeoIP,DIRECT",
  "  - RULE-SET,GeoRouting_America_North_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_America_South_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Europe_West_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Europe_East_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Oceania_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Antarctica_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Asia_East_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Asia_EastSouth_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Asia_South_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Asia_Central_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Asia_West_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Africa_North_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Africa_South_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Africa_West_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Africa_East_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_Africa_Central_ccTLD_Domain,PROXY",
  "  - RULE-SET,GeoRouting_America_North_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_America_South_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Europe_West_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Europe_East_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Oceania_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Antarctica_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Asia_East_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Asia_EastSouth_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Asia_South_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Asia_Central_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Asia_West_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Africa_North_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Africa_South_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Africa_West_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Africa_East_GeoIP,PROXY",
  "  - RULE-SET,GeoRouting_Africa_Central_GeoIP,PROXY",
  "  - RULE-SET,GeositeCN_Domain,DIRECT",
  "  - RULE-SET,China_Domain,DIRECT",
  "  - RULE-SET,ChinaMax_Domain,DIRECT",
  "  - GEOIP,CN,DIRECT",
  "  - MATCH,FINAL"
].join('\n');

// ==================== [模块二] 微创级解析引擎 ====================

function safeB64Decode(str) {
  if (!str) return '';
  str = String(str).replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
  while (str.length % 4) { str += '='; }
  try {
    const bin = atob(str);
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) { bytes[i] = bin.charCodeAt(i); }
    return new TextDecoder('utf-8').decode(bytes);
  } catch (e) { return ''; }
}

function parseNodeUri(uri) {
  try {
    if (!uri) return null;
    uri = uri.trim();
    if (!uri) return null;
    if (uri.startsWith('vmess://')) {
      let raw = safeB64Decode(uri.replace('vmess://', ''));
      let json = JSON.parse(raw);
      let name = (json.ps || 'VMess 节点').replace(/["'\\]/g, '');
      let res = `  - name: "${name}"\n    type: vmess\n    server: "${json.add}"\n    port: ${json.port}\n    uuid: "${json.id}"\n    alterId: ${json.aid || 0}\n    cipher: auto\n    tls: ${json.tls === 'tls'}\n    network: ${json.net || 'tcp'}\n    ws-opts:\n      path: "${json.path || '/'}"`;
      if (json.host) res += `\n      headers:\n        Host: "${json.host}"`;
      return res;
    }
    if (uri.startsWith('hysteria2://') || uri.startsWith('hy2://')) {
        let parts = uri.split('#');
        let name = parts[1] ? decodeURIComponent(parts[1]).replace(/["'\\]/g, '') : "Hy2 节点";
        let main = parts[0].replace(/^(hysteria2|hy2):\/\//, '');
        let [password, serverPortWithQuery] = main.split('@');
        let [serverPort, query] = (serverPortWithQuery || '').includes('?') ? serverPortWithQuery.split('?') : [serverPortWithQuery, ''];
        if (!serverPort) return null;
        let [server, port] = serverPort.split(':');
        let params = new URLSearchParams(query || '');
        let sni = params.get('sni') || '';
        let insecure = params.get('insecure') === '1' || params.get('allowInsecure') === '1';
        let res = `  - name: "${name}"\n    type: hysteria2\n    server: "${server}"\n    port: ${port}\n    password: "${password}"`;
        if (sni) res += `\n    sni: "${sni}"`;
        if (insecure) res += `\n    skip-cert-verify: true`;
        return res;
    }
    if (uri.startsWith('vless://') || uri.startsWith('trojan://') || uri.startsWith('ss://')) {
      let type = uri.split('://')[0].toLowerCase();
      let parts = uri.split('#');
      let name = parts[1] ? decodeURIComponent(parts[1]).replace(/["'\\]/g, '') : `${type.toUpperCase()} 节点`;
      let main = parts[0].replace(new RegExp(`^${type}:\\/\\/`, 'i'), '');
      if (type === 'ss' && !main.includes('@')) {
          let decodedMain = safeB64Decode(main);
          if (decodedMain && decodedMain.includes('@')) main = decodedMain;
      }
      let credentials = '', serverPortWithQuery = '';
      if (main.includes('@')) {
        let atIndex = main.lastIndexOf('@');
        credentials = main.substring(0, atIndex);
        serverPortWithQuery = main.substring(atIndex + 1);
        if (type === 'ss' && !credentials.includes(':')) credentials = safeB64Decode(credentials);
      } else { serverPortWithQuery = main; }
      let [serverPort, query] = (serverPortWithQuery || '').includes('?') ? serverPortWithQuery.split('?') : [serverPortWithQuery, ''];
      if (!serverPort) return null;
      let [server, port] = serverPort.split(':');
      let params = new URLSearchParams(query || '');
      let security = params.get('security') || 'none';
      let tls = security === 'tls' || security === 'reality' || params.get('tls') === 'true' || type === 'trojan';
      let network = params.get('type') || 'tcp';
      let path = params.get('path') || '/';
      let sni = params.get('sni') || '';
      let host = params.get('host') || '';
      let fp = params.get('fp') || '';
      let pbk = params.get('pbk') || '';
      let sid = params.get('sid') || '';
      let flow = params.get('flow') || '';
      let res = `  - name: "${name}"\n    type: ${type}\n    server: "${server}"\n    port: ${port}`;
      if (type === 'vless') { res += `\n    uuid: "${credentials}"`; if (flow) res += `\n    flow: ${flow}`; } 
      else if (type === 'trojan') { res += `\n    password: "${credentials}"`; } 
      else if (type === 'ss') { let [method, pwd] = credentials.split(':'); res += `\n    cipher: ${method || 'auto'}\n    password: "${pwd || credentials}"`; }
      if (type !== 'ss') {
          res += `\n    tls: ${tls}\n    network: ${network}`;
          if (sni) res += `\n    servername: "${sni}"`;
          if (fp) res += `\n    client-fingerprint: ${fp}`;
          if (security === 'reality') { res += `\n    reality-opts:\n      public-key: "${pbk}"`; if (sid) res += `\n      short-id: "${sid}"`; }
          if (network === 'ws') { res += `\n    ws-opts:\n      path: "${path}"`; if (host || sni) res += `\n      headers:\n        Host: "${host || sni}"`; }
      }
      return res;
    }
  } catch (e) { return null; }
  return null;
}

function formatProxyBlock(blockLines) {
    if (!blockLines || blockLines.length === 0) return '';
    let firstLine = blockLines[0];
    let matchIndent = firstLine.match(/^\s*/);
    let originalIndent = matchIndent ? matchIndent[0].length : 0; 
    let formatted = [];
    for (let i = 0; i < blockLines.length; i++) {
        let line = blockLines[i];
        if (!line.trim()) continue;
        let currentIndentMatch = line.match(/^\s*/);
        let currentIndent = currentIndentMatch ? currentIndentMatch[0].length : 0;
        let trimmed = line.trim();
        if (i === 0) {
            if (trimmed.startsWith('-')) trimmed = trimmed.substring(1).trim();
            formatted.push(`  - ${trimmed}`);
        } else {
            let relativeIndent = currentIndent - originalIndent;
            if (relativeIndent <= 0) relativeIndent = 2; 
            let spaces = "  " + " ".repeat(relativeIndent);
            formatted.push(spaces + trimmed);
        }
    }
    return formatted.join('\n');
}

function parseRawNodesIntoBlocks(text, options = {}) {
  try {
    const allowDefault = options.allowDefault !== false;
    if (Array.isArray(text)) text = text.join('\n\n');
    if (text === undefined || text === null) text = '';
    text = String(text).replace(/^\uFEFF/, '');

    if (!text.trim()) {
      return allowDefault ? parseRawNodesIntoBlocks(DEFAULT_PROXIES, { allowDefault: false }) : [];
    }

    let blocks = extractProxiesAsBlocks(text);
    if (blocks.length > 0) return blocks;

    const compact = text.replace(/\s+/g, '');
    if (compact && compact.length >= 16 && !compact.includes('://') && !compact.includes('name:') && /^[A-Za-z0-9+/=_-]+$/.test(compact)) {
      const decoded = safeB64Decode(compact);
      if (decoded && decoded !== text) {
        blocks = parseRawNodesIntoBlocks(decoded, { allowDefault: false });
        if (blocks.length > 0) return blocks;
      }
    }

    let uriBlocks = [];
    for (let line of String(text).split('\n')) {
      const t = line.trim();
      if (!t) continue;
      if (/^(vmess|vless|trojan|ss|hysteria2|hy2):\/\//i.test(t)) {
        const yamlBlock = parseNodeUri(t);
        if (yamlBlock) uriBlocks.push(...extractProxiesAsBlocks(yamlBlock));
        continue;
      }
      if (!t.includes('://') && !t.includes('name:') && /^[A-Za-z0-9+/=_-]{16,}$/.test(t)) {
        const decoded = safeB64Decode(t);
        if (decoded && decoded !== t) {
          const decodedBlocks = parseRawNodesIntoBlocks(decoded, { allowDefault: false });
          if (decodedBlocks.length > 0) uriBlocks.push(...decodedBlocks);
        }
      }
    }
    return uriBlocks;
  } catch (e) {
    return [];
  }
}

function extractProxiesAsBlocks(text) {
  try {
    if (!text) return [];
    let lines = String(text).split('\n');
    let proxiesLines = [];
    let inProxies = false;
    let hasProxies = /^proxies:|^Proxy:/im.test(String(text));

    for (let line of lines) {
      let t = line.trim();
      if (t.toLowerCase() === 'proxies:' || t.toLowerCase() === 'proxy:') { inProxies = true; continue; }
      if (inProxies && /^[a-zA-Z0-9-]+:/.test(line) && !line.startsWith(' ') && !/^(vmess|vless|trojan|ss|hysteria2|hy2):\/\//i.test(t)) break;
      if (hasProxies ? inProxies : true) {
         if (t && !t.startsWith('#')) proxiesLines.push(line);
      }
    }

    let blocks = [];
    let currentBlock = [];
    let currentName = '';
    const uriLineRe = /^(?:-\s*)?(vmess|vless|trojan|ss|hysteria2|hy2):\/\//i;

    const flushCurrentBlock = () => {
      if (currentBlock.length > 0 && currentName) {
        const formatted = formatProxyBlock(currentBlock);
        blocks.push({ originalName: currentName, lines: formatted, rawYaml: formatted });
      }
      currentBlock = [];
      currentName = '';
    };

    proxiesLines.forEach(line => {
      let t = line.trim();
      if (uriLineRe.test(t)) {
         flushCurrentBlock();
         const uri = t.replace(/^-+\s*/, '');
         const yamlBlock = parseNodeUri(uri);
         if (yamlBlock) {
           const uriLines = String(yamlBlock).split('\n');
           const formatted = formatProxyBlock(uriLines);
           const m = formatted.match(/name:\s*(?:'([^']+)'|"([^"]+)"|([^,{}#\n\r]+))/);
           const uriName = m ? (m[1] || m[2] || m[3]).trim() : '未命名节点';
           blocks.push({ originalName: uriName, lines: formatted, rawYaml: formatted });
         }
         return;
      }
      if (t.startsWith('- name:') || (t.startsWith('-') && t.includes('name:'))) {
         flushCurrentBlock();
         currentBlock = [line];
         let m = t.match(/name:\s*(?:'([^']+)'|"([^"]+)"|([^,{}#\n\r]+))/);
         currentName = m ? (m[1] || m[2] || m[3]).trim() : '未命名节点';
      } else if (currentBlock.length > 0) {
         currentBlock.push(line);
      }
    });
    flushCurrentBlock();
    return blocks;
  } catch (e) { return []; }
}

async function buildUnifiedNodeBlocks(manualNodesArray, subUrlsArray, manualSourcesArray = []) {
  let allBlocks = [];
  for (let url of subUrlsArray) {
    if (!url || !url.trim()) continue;
    try {
      let res = await fetch(url.trim(), { headers: { 'User-Agent': 'ClashMetaForAndroid/2.9.8' } });
      let text = await res.text();
      let blocks = parseRawNodesIntoBlocks(text, { allowDefault: false });
      blocks.forEach(b => { b.source = url.trim(); });
      allBlocks.push(...blocks);
    } catch(e) {}
  }

  if(manualNodesArray && Array.isArray(manualNodesArray)) {
     manualNodesArray.forEach((raw, i) => {
        let t = raw.trim();
        if (!t) return;
        let sourceKey = Array.isArray(manualSourcesArray) ? (manualSourcesArray[i] || '手动录入') : '手动录入';
        let blocks = parseRawNodesIntoBlocks(raw, { allowDefault: false });
        blocks.forEach(b => { b.source = sourceKey; b.manualIndex = i; b.manualSource = sourceKey; });
        allBlocks.push(...blocks);
     });
  }
  return allBlocks;
}

// ==================== [模块三] 编译器系统 ====================

const RESERVED_BASE_GROUPS = ['PROXY', 'Emby代理', 'TG', 'AI', 'YOUTUBE', 'FINAL', 'BLOCK', 'APPLE', 'AQARA', 'BANK', 'FINANCE', 'HOME-IP', 'FAKE-LOCATION', '🚀 节点选择', '♻️ 自动测速', 'DIRECT', 'REJECT'];

async function generateFinalConfig(env, requestBody = null) {
  try {
    const KV = (env && env.CLASH_KV) ? env.CLASH_KV : null;
    let custom_proxies_arr = [];
    let manual_node_sources_arr = [];
    let sub_urls = '';
    let clash_rules = ACCADEMIA_TEMPLATE;
    let node_map_str = '{}';
    let visual_groups_str = '[]';
    let visual_rules_str = '[]';
    let manual_node_sources_str = '[]';

    let fallback_custom_proxies = DEFAULT_PROXIES;

    if (KV) {
        try {
            let cp = await KV.get('custom_proxies');
            if (cp !== null) {
                // 🚑 核心自愈逻辑：检测并粉碎因为误操作存入的超长 Base64 乱码块
                if (cp.trim() !== '' && !cp.includes(' ') && !cp.includes('\n') && cp.length > 300 && !cp.includes('vless://') && !cp.includes('name:')) {
                    fallback_custom_proxies = DEFAULT_PROXIES;
                } else {
                    fallback_custom_proxies = cp.trim() === '' ? DEFAULT_PROXIES : cp;
                }
            }
            custom_proxies_arr = parseRawNodesIntoBlocks(fallback_custom_proxies).map(b => b.rawYaml);
            sub_urls = await KV.get('sub_urls') || '';
            clash_rules = await KV.get('clash_rules') || ACCADEMIA_TEMPLATE;
            node_map_str = await KV.get('node_map') || '{}';
            visual_groups_str = await KV.get('visual_groups') || '[]';
            visual_rules_str = await KV.get('visual_rules') || '[]';
            manual_node_sources_str = await KV.get('manual_node_sources') || '[]';
        } catch(e) {}
    }

    if (requestBody) {
        if (requestBody.custom_proxies !== undefined) {
             if(Array.isArray(requestBody.custom_proxies)) custom_proxies_arr = requestBody.custom_proxies;
             else custom_proxies_arr = parseRawNodesIntoBlocks(requestBody.custom_proxies).map(b => b.rawYaml);
        }
        if (requestBody.manual_node_sources !== undefined) {
             manual_node_sources_str = Array.isArray(requestBody.manual_node_sources)
               ? JSON.stringify(requestBody.manual_node_sources)
               : requestBody.manual_node_sources;
        }
        if (requestBody.sub_urls !== undefined) sub_urls = requestBody.sub_urls;
        if (requestBody.clash_rules !== undefined) clash_rules = requestBody.clash_rules;
        if (requestBody.node_map !== undefined) node_map_str = requestBody.node_map;
        if (requestBody.visual_groups !== undefined) visual_groups_str = requestBody.visual_groups;
        if (requestBody.visual_rules !== undefined) visual_rules_str = requestBody.visual_rules;
    }
    
    let nodeMap = {}, visualGroups = [], visualRules = [];
    if (Array.isArray(manual_node_sources_str)) {
      manual_node_sources_arr = manual_node_sources_str;
    } else {
      try { manual_node_sources_arr = JSON.parse(manual_node_sources_str); } catch(e) {}
    }
    try { nodeMap = JSON.parse(node_map_str); } catch(e) {}
    try { visualGroups = JSON.parse(visual_groups_str); } catch(e) {}
    try { visualRules = JSON.parse(visual_rules_str); } catch(e) {}

    if (!Array.isArray(manual_node_sources_arr)) manual_node_sources_arr = [];
    while (manual_node_sources_arr.length < custom_proxies_arr.length) manual_node_sources_arr.push('手动录入');
    if (manual_node_sources_arr.length > custom_proxies_arr.length) manual_node_sources_arr = manual_node_sources_arr.slice(0, custom_proxies_arr.length);
    if (!Array.isArray(visualGroups)) visualGroups = [];
    if (!Array.isArray(visualRules)) visualRules = [];
    if (!nodeMap || typeof nodeMap !== 'object') nodeMap = {};

    let safeVisualGroups = visualGroups.filter(g => g && g.name && !RESERVED_BASE_GROUPS.includes(g.name));

    if (requestBody && requestBody.parse_url) {
      let tempBlocks = await buildUnifiedNodeBlocks([], [requestBody.parse_url]);
      return { parsedNodes: tempBlocks.map((b) => ({ name: b.originalName, rawYaml: b.rawYaml, source: b.source })) };
    }

    let urlsArray = String(sub_urls).split('\n').filter(u => u.trim());
    let blocks = await buildUnifiedNodeBlocks(custom_proxies_arr, urlsArray, manual_node_sources_arr);

    if (requestBody && requestBody.extract_only) {
      return { 
        originalNodes: blocks.map(b => b.originalName),
        nodeSources: blocks.map(b => b.source || '手动输入'),
        rawBlocks: blocks.map(b => b.rawYaml),
        manualNodesArray: custom_proxies_arr,
        manualNodeSources: manual_node_sources_arr
      };
    }

    let nameSet = new Set();
    let activeConfigs = [];
    
    blocks.forEach((b, index) => {
      let mapInfo = nodeMap[b.originalName];
      if (mapInfo && mapInfo.deleted) return; 
      
      let baseName = (mapInfo && mapInfo.newName) ? mapInfo.newName : b.originalName;
      baseName = String(baseName).replace(/["'\\]/g, '').trim() || '未命名节点';

      let finalName = baseName;
      let counter = 1;
      while(nameSet.has(finalName)) { finalName = `${baseName} ${counter}`; counter++; }
      nameSet.add(finalName);
      
      let finalYaml = b.rawYaml.replace(/(name:\s*)(?:'[^']+'|"[^"]+"|[^,{}#\n\r]+)/, '$1"' + finalName + '"');
      
      activeConfigs.push({
          order: mapInfo && mapInfo.order !== undefined ? mapInfo.order : index,
          yamlText: finalYaml,
          finalName: finalName
      });
    });
    
    activeConfigs.sort((a, b) => a.order - b.order);

    let proxiesText = activeConfigs.map(c => {
         let t = c.yamlText.replace(/[\n\r]*$/, ''); 
         if(t.trim().startsWith('-')) {
             if(t.match(/^\s*-/)) return t; 
             return '  ' + t;
         }
         return '  - ' + t;
    }).join('\n');
    
    if (!proxiesText.trim()) proxiesText = '  - name: "无有效节点"\n    type: ss\n    server: 127.0.0.1\n    port: 8388\n    cipher: aes-256-gcm\n    password: dummy';

    let allNodeNamesLines = activeConfigs.map(c => `      - "${c.finalName}"`).join('\n') || '      - "无有效节点"';
    let finalRulesText = clash_rules;

    if (safeVisualGroups.length > 0) {
        let extraGroups = "";
        safeVisualGroups.forEach(g => {
          extraGroups += `\n  - name: "${g.name}"\n    type: ${g.type}\n`;
          if (g.type === 'url-test') extraGroups += `    url: http://www.google.com/blank.html\n    interval: 300\n    tolerance: 50\n    proxies:\n      - "PROXY"\n      - "DIRECT"\n      - "[ALL_NODES]"\n`;
          else extraGroups += `    proxies:\n      - "PROXY"\n      - "DIRECT"\n      - "[ALL_NODES]"\n`;
        });
        if (finalRulesText.includes('proxy-groups:')) finalRulesText = finalRulesText.split('proxy-groups:').join(`proxy-groups:${extraGroups}`);
    }

    if (visualRules.length > 0) {
        let extraRules = "";
        visualRules.forEach(r => {
          if (r && r.type && r.value && r.target) extraRules += `\n  - ${String(r.type).trim()},${String(r.value).trim()},${String(r.target).trim()}`;
        });
        if (finalRulesText.includes('rules:')) finalRulesText = finalRulesText.split('rules:').join(`rules:${extraRules}`);
    }

    finalRulesText = finalRulesText.split('      - \'[ALL_NODES]\'').join(allNodeNamesLines);
    finalRulesText = finalRulesText.split('      - "[ALL_NODES]"').join(allNodeNamesLines);
    finalRulesText = finalRulesText.split('      - [ALL_NODES]').join(allNodeNamesLines);
    finalRulesText = finalRulesText.split('[ALL_NODES]').join(allNodeNamesLines.trim());

    let finalYaml = [
      "mixed-port: 7890",
      "allow-lan: false",
      "bind-address: \"*\"",
      "mode: rule",
      "log-level: info",
      "ipv6: false",
      "unified-delay: true",
      "tcp-concurrent: true",
      "external-controller: 127.0.0.1:9090",
      "",
      "profile:",
      "  store-selected: true",
      "  store-fake-ip: true",
      "",
      "dns:",
      "  enable: true",
      "  listen: 0.0.0.0:1053",
      "  ipv6: false",
      "  enhanced-mode: fake-ip",
      "  fake-ip-range: 198.18.0.1/16",
      "  fake-ip-filter:",
      "    - \"*.lan\"",
      "    - \"*.local\"",
      "    - localhost.ptlogin2.qq.com",
      "  default-nameserver:",
      "    - 223.5.5.5",
      "    - 119.29.29.29",
      "  nameserver:",
      "    - https://dns.alidns.com/dns-query",
      "    - https://doh.pub/dns-query",
      "  proxy-server-nameserver:",
      "    - 223.5.5.5",
      "    - 119.29.29.29",
      "",
      "proxies:",
      proxiesText,
      "",
      finalRulesText
    ].join('\n');

    return { config: finalYaml };
  } catch (globalError) { return { config: `# 核心编译器崩溃: ${globalError.message}\n# Stack: ${globalError.stack}` }; }
}

// ==================== [模块四] 边缘网关控制器路由 ====================

function escapeHtml(unsafe) {
    return String(unsafe || '').replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function safeEncode(str) { return encodeURIComponent(String(str || '')).replace(/'/g, "%27"); }
function encodeBase64Auth(user, pass) {
    let str = `${user}:${pass}`;
    try { return btoa(str); } catch(e) { return btoa(unescape(encodeURIComponent(str))); }
}

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const ADMIN_USER = (env && env.ADMIN_USER) ? env.ADMIN_USER : 'admin';
      const ADMIN_PASS = (env && env.ADMIN_PASS) ? env.ADMIN_PASS : 'admin';
      const KV = (env && env.CLASH_KV) ? env.CLASH_KV : null;

      if (url.pathname !== '/sub') {
        const authHeader = request.headers.get('Authorization');
        const expectedAuth = `Basic ${encodeBase64Auth(ADMIN_USER, ADMIN_PASS)}`;
        if (!authHeader || authHeader !== expectedAuth) {
          return new Response('Unauthorized - Access Denied', {
            status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Clash Matrix Studio"', 'Content-Type': 'text/plain; charset=utf-8' }
          });
        }
      }

      if (url.pathname === '/') { url.pathname = '/panel'; }

      if (url.pathname === '/sub') {
        const result = await generateFinalConfig(env);
        return new Response(result.config, { headers: { "Content-Type": "text/yaml; charset=utf-8", "Content-Disposition": 'attachment; filename="clash_config.yaml"' } });
      }

      if (url.pathname === '/api/action' && request.method === 'POST') {
        let body = await request.json();
        const result = await generateFinalConfig(env, body);
        return new Response(JSON.stringify(result), { headers: { "Content-Type": "application/json" } });
      }

      if (url.pathname === '/api/save' && request.method === 'POST') {
        if (!KV) throw new Error('KV 数据库未就绪 (请检查环境变量绑定)');
        let body = await request.json();
        
        let cpStr = '';
        if (Array.isArray(body.custom_proxies)) {
             cpStr = body.custom_proxies.join('\n\n');
        } else {
             cpStr = body.custom_proxies || '';
        }

        await KV.put('custom_proxies', cpStr);
        await KV.put('manual_node_sources', Array.isArray(body.manual_node_sources) ? JSON.stringify(body.manual_node_sources) : (body.manual_node_sources || '[]'));
        await KV.put('sub_urls', body.sub_urls || '');
        await KV.put('clash_rules', body.clash_rules || '');
        await KV.put('node_map', body.node_map || '{}');
        await KV.put('visual_groups', body.visual_groups || '[]');
        await KV.put('visual_rules', body.visual_rules || '[]');
        return new Response(JSON.stringify({ success: true }), { headers: { "Content-Type": "application/json" } });
      }

      let custom_proxies = DEFAULT_PROXIES;
      let sub_urls = '';
      let clash_rules = ACCADEMIA_TEMPLATE;
      let node_map_init = '{}';
      let visual_groups_init = '[]';
      let visual_rules_init = '[]';
      let manual_node_sources_init = '[]';

      if (KV) {
          try {
              let cp = await KV.get('custom_proxies');
              if (cp !== null) {
                  // 🏥 自愈网关：粉碎遗留的无空格超长 Base64 乱码缓存
                  if (cp.trim() !== '' && !cp.includes(' ') && !cp.includes('\n') && cp.length > 300 && !cp.includes('vless://') && !cp.includes('name:')) {
                      custom_proxies = DEFAULT_PROXIES;
                  } else if (cp.trim() === '') {
                      custom_proxies = DEFAULT_PROXIES; 
                  } else {
                      custom_proxies = cp;
                  }
              }
              sub_urls = await KV.get('sub_urls') || '';
              clash_rules = await KV.get('clash_rules') || ACCADEMIA_TEMPLATE;
              node_map_init = await KV.get('node_map') || '{}';
              visual_groups_init = await KV.get('visual_groups') || '[]';
              visual_rules_init = await KV.get('visual_rules') || '[]';
              manual_node_sources_init = await KV.get('manual_node_sources') || '[]';
          } catch(e) {}
      }

      let customProxiesArr = [];
      if (typeof custom_proxies === 'string') {
          let lines = custom_proxies.split('\n');
          let curr = [];
          for (let l of lines) {
              let t = l.trim();
              if (!t && curr.length === 0) continue;
              if (/^(vmess|vless|trojan|ss|hysteria2|hy2):\/\//i.test(t)) {
                  if (curr.length > 0) { customProxiesArr.push(curr.join('\n').trim()); curr = []; }
                  customProxiesArr.push(t);
              } else if (t.startsWith('- name:') || (t.startsWith('-') && t.includes('name:'))) {
                  if (curr.length > 0) { customProxiesArr.push(curr.join('\n').trim()); curr = []; }
                  curr.push(l);
              } else {
                  curr.push(l);
              }
          }
          if (curr.length > 0) {
              let joined = curr.join('\n').trim();
              if (joined) customProxiesArr.push(joined);
          }
      }

      const htmlLines = [
        "<!DOCTYPE html>",
        "<html lang=\"zh-CN\">",
        "<head>",
        "  <meta charset=\"UTF-8\">",
        "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "  <title>Clash Matrix Studio V5</title>",
        "  <link href=\"https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css\" rel=\"stylesheet\">",
        "  <script src=\"https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js\"></script>",
        "  <style>",
        "    body { background-color: #030303; color: #d4d4d4; font-family: ui-sans-serif, system-ui, sans-serif; min-height: 100vh; }",
        "    .panel { background: #0a0a0a; border: 1px solid #1f1f1f; border-radius: 10px; }",
        "    .btn-action { background: #e5e5e5; color: #000; font-weight: 700; border-radius: 6px; transition: all 0.2s; }",
        "    .btn-action:hover { background: #ffffff; box-shadow: 0 0 12px rgba(255,255,255,0.2); }",
        "    .tab-btn.active { color: #ffffff; border-bottom: 2px solid #ffffff; }",
        "    .tab-btn { color: #525252; padding-bottom: 6px; border-bottom: 2px solid transparent; transition: all 0.2s; font-weight: 600; }",
        "    .tab-btn:hover { color: #a3a3a3; }",
        "    textarea { background: #020202; border: 1px solid #262626; color: #ffffff; font-family: ui-monospace, monospace; resize: none; scroll-behavior: smooth; }",
        "    textarea:focus { border-color: #525252; outline: none; }",
        "    select, input[type=\"text\"] { background: #020202; border: 1px solid #262626; color: #ffffff; border-radius: 6px; padding: 8px 12px; }",
        "    select:focus, input[type=\"text\"]:focus { border-color: #525252; outline: none; }",
        "    ::-webkit-scrollbar { width: 5px; height: 5px; }",
        "    ::-webkit-scrollbar-track { background: transparent; }",
        "    ::-webkit-scrollbar-thumb { background: #262626; border-radius: 3px; }",
        "    .drag-handle, .manual-drag-handle { cursor: grab; }",
        "    .drag-handle:active, .manual-drag-handle:active { cursor: grabbing; }",
        "    .sortable-ghost { opacity: 0.1; background: #fff; }",
        "    ::selection { background-color: #2563eb; color: #fff; }",
        "    .flash-highlight { animation: flashBg 2s ease-out forwards; }",
        "    @keyframes flashBg { 0% { background-color: rgba(59, 130, 246, 0.5); box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); } 100% { background-color: #111111; box-shadow: none; } }",
        "  </style>",
        "</head>",
        "<body class=\"p-4 lg:p-6\">",
        "  <div class=\"w-full max-w-[2000px] mx-auto flex flex-col gap-5\">",
        "    <header class=\"panel p-5 flex flex-col xl:flex-row justify-between items-center gap-4\">",
        "      <div>",
        "        <h1 class=\"text-xl font-bold tracking-tight text-white flex items-center gap-2\">🌐 Clash Matrix Studio <span class=\"text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded\">V5 终极自愈版</span></h1>",
        "        <p class=\"text-[10px] text-green-500 font-mono mt-0.5\">STATUS: __DB_STATUS__ | AUTO-HEAL ACTIVE</p>",
        "      </div>",
        "      <div class=\"flex-1 max-w-3xl w-full\">",
        "        <input type=\"text\" readonly value=\"__ORIGIN__/sub\" onclick=\"this.select(); document.execCommand('copy'); alert('已复制订阅链接，可导入代理软件');\" class=\"w-full text-xs font-mono p-3 rounded-lg bg-black border border-gray-800 text-blue-400 cursor-pointer hover:border-gray-600 transition text-center\" />",
        "      </div>",
        "      <div class=\"flex gap-3 w-full xl:w-auto\">",
        "        <button onclick=\"factoryReset()\" class=\"btn-action bg-red-900 hover:bg-red-800 text-red-200 px-4 py-3 text-xs tracking-wider uppercase shadow-md flex-1 xl:flex-none\">🧨 恢复出厂设置</button>",
        "        <button onclick=\"saveAllToKV()\" class=\"btn-action px-8 py-3 text-xs tracking-wider uppercase shadow-md flex-1 xl:flex-none\">💾 全局固化并部署生效</button>",
        "      </div>",
        "    </header>",
        "    <div class=\"grid grid-cols-1 xl:grid-cols-2 gap-6 min-h-[82vh]\">",
        "      <div class=\"panel p-5 flex flex-col h-full\">",
        "        <div class=\"flex gap-6 mb-5 border-b border-gray-800\">",
        "          <button onclick=\"switchLeftTab('ltab-nodes')\" id=\"btn-ltab-nodes\" class=\"tab-btn active text-xs uppercase tracking-wider\">📦 节点提取与积木编辑</button>",
        "          <button onclick=\"switchLeftTab('ltab-rules')\" id=\"btn-ltab-rules\" class=\"tab-btn text-xs uppercase tracking-wider text-blue-400\">🛡️ 路由规则与策略组</button>",
        "        </div>",
        "        <div id=\"ltab-nodes\" class=\"flex-1 flex flex-col gap-4 ltab-content relative\">",
        "          <div class=\"flex flex-col gap-3 bg-blue-900 bg-opacity-20 border border-blue-800 border-opacity-40 p-4 rounded-xl\">",
        "             <div>",
        "                <span class=\"text-sm text-blue-400 font-bold block mb-1\">🔍 订阅在线化验提取舱</span>",
        "                <span class=\"text-xs text-gray-400 block\">输入庞大的机场订阅链接，解析后在此“挑选”极品节点并提取到下方。</span>",
        "             </div>",
        "             <div class=\"flex gap-2\">",
        "                <input type=\"text\" id=\"temp_parse_url\" class=\"flex-1 bg-black text-xs p-2.5 rounded border border-blue-900 text-white focus:border-blue-500 outline-none transition\" placeholder=\"https://... 填入机场订阅链接\" />",
        "                <button onclick=\"parseAndPick()\" class=\"px-5 py-2.5 bg-blue-700 hover:bg-blue-600 text-white text-xs font-bold rounded transition shadow-lg whitespace-nowrap\">⚡ 解析订阅</button>",
        "             </div>",
        "             <div id=\"parse-result-bucket\" class=\"max-h-[220px] overflow-y-auto space-y-1.5 hidden bg-black p-2 rounded-lg border border-gray-800\"></div>",
        "          </div>",
        "          <div class=\"flex-1 flex flex-col mt-2\" style=\"min-height: 400px;\">",
        "             <div class=\"flex justify-between items-center mb-2\">",
        "               <label class=\"text-[11px] text-gray-400 font-bold tracking-wider\">🧱 个人积木节点库 (可拖拽，双向同步)</label>",
        "               <button onclick=\"clearManualNodes()\" class=\"text-red-500 hover:text-white text-[10px] font-bold border border-red-900 hover:bg-red-800 px-2 py-0.5 rounded transition\">清空全部积木</button>",
        "             </div>",
        "             <div class=\"flex gap-2 mb-3\">",
        "                <textarea id=\"bulk_add_manual\" class=\"flex-1 bg-black text-xs p-2.5 rounded border border-gray-700 text-white focus:border-gray-500 outline-none transition resize-none\" style=\"min-height: 44px;\" placeholder=\"在此批量粘贴 vless:// 链接 或 Base64 乱码，点击录入自动解密...\"></textarea>",
        "                <button onclick=\"addManualNodes()\" class=\"px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded transition shadow\">➕ 录入</button>",
        "             </div>",
        "             <div id=\"manual-nodes-list\" class=\"flex-1 overflow-y-auto space-y-3 pb-4 pr-2\">",
        "                 ",
        "             </div>",
        "          </div>",
        "          <details class=\"group bg-gray-900 rounded-lg border border-gray-800\">",
        "             <summary class=\"text-[11px] text-gray-400 font-bold cursor-pointer p-2.5 select-none outline-none\">⚠️ 全量混入高级设置 (粗暴合并完整订阅，慎用)</summary>",
        "             <div class=\"p-2 pt-0\">",
        "                 <textarea id=\"sub_urls\" class=\"w-full p-3 rounded text-xs min-h-[80px] bg-black border border-gray-700 text-gray-500\">__SUB_URLS__</textarea>",
        "             </div>",
        "          </details>",
        "        </div>",
        "        <div id=\"ltab-rules\" class=\"hidden flex-1 flex flex-col gap-4 ltab-content\">",
        "           <div class=\"flex flex-col gap-4 bg-blue-900 bg-opacity-20 border border-blue-800 border-opacity-40 p-4 rounded-xl\">",
        "              <div class=\"flex items-center justify-between\">",
        "                 <div>",
        "                    <span class=\"text-sm text-blue-400 font-bold block mb-1\">💎 专属高定路由架构 (Accademia 增强版)</span>",
        "                    <span class=\"text-xs text-gray-400 block\">集成：Accademia 全套分流规则矩阵、四大应用细分策略、独立域名路由插槽。</span>",
        "                 </div>",
        "                 <button onclick=\"loadPersonalizedTemplate()\" class=\"px-5 py-2.5 bg-blue-700 hover:bg-blue-600 rounded text-sm font-bold text-white shadow-lg transition\">一键重置为 Accademia 框架</button>",
        "              </div>",
        "              <div class=\"w-full h-px bg-blue-800 bg-opacity-40 my-1\"></div>",
        "              <div class=\"flex flex-col sm:flex-row gap-3 items-end\">",
        "                  <div class=\"flex-1\">",
        "                    <label class=\"block text-xs text-blue-300 font-bold mb-1.5\">新建策略组名称</label>",
        "                    <input type=\"text\" id=\"new-group-name\" class=\"w-full text-xs\" placeholder=\"例如：🎬 我的流媒体\" />",
        "                  </div>",
        "                  <div>",
        "                    <label class=\"block text-xs text-blue-300 font-bold mb-1.5\">选路类型</label>",
        "                    <select id=\"new-group-type\" class=\"w-full text-xs\">",
        "                       <option value=\"select\">select (手动选择)</option>",
        "                       <option value=\"url-test\">url-test (自动测速)</option>",
        "                    </select>",
        "                  </div>",
        "                  <button onclick=\"addCustomGroup()\" class=\"px-5 py-2 bg-purple-900 hover:bg-purple-800 text-xs font-bold rounded-md text-white transition whitespace-nowrap\">➕ 创生策略组</button>",
        "              </div>",
        "              <div class=\"flex flex-col sm:flex-row gap-3 items-end mt-2\">",
        "                 <div>",
        "                    <label class=\"block text-xs text-blue-300 font-bold mb-1.5\">匹配类型</label>",
        "                    <select id=\"new-rule-type\" class=\"w-full text-xs\">",
        "                       <option value=\"DOMAIN-SUFFIX\">DOMAIN-SUFFIX (后缀)</option>",
        "                       <option value=\"DOMAIN\">DOMAIN (全拼)</option>",
        "                       <option value=\"DOMAIN-KEYWORD\">DOMAIN-KEYWORD (关键词)</option>",
        "                    </select>",
        "                 </div>",
        "                 <div class=\"flex-1\">",
        "                    <label class=\"block text-xs text-blue-300 font-bold mb-1.5\">目标域名/核心关键词</label>",
        "                    <input type=\"text\" id=\"new-rule-value\" class=\"w-full text-xs\" placeholder=\"例如：emby.media\" />",
        "                 </div>",
        "                 <div class=\"w-48\">",
        "                    <label class=\"block text-xs text-blue-300 font-bold mb-1.5\">路由去向</label>",
        "                    <select id=\"new-rule-target\" class=\"w-full text-xs text-blue-300 font-bold\"></select>",
        "                 </div>",
        "                 <button onclick=\"addCustomRule()\" class=\"px-5 py-2 bg-blue-900 hover:bg-blue-800 text-xs font-bold rounded-md text-white transition whitespace-nowrap\">➕ 写入</button>",
        "              </div>",
        "              <div class=\"text-xs text-gray-500 font-bold mt-2\">目前你已建立的可视化【策略与路由】，部署时会自动注入下方源码最高层：</div>",
        "              <div class=\"grid grid-cols-2 gap-4\">",
        "                 <div id=\"visual-groups-list\" class=\"overflow-y-auto space-y-1.5 max-h-[120px] bg-black p-2 border border-gray-800 rounded\"></div>",
        "                 <div id=\"visual-rules-list\" class=\"overflow-y-auto space-y-1.5 max-h-[120px] bg-black p-2 border border-gray-800 rounded\"></div>",
        "              </div>",
        "           </div>",
        "           <div class=\"flex-1 flex flex-col mt-2\">",
        "             <label class=\"text-[11px] text-gray-500 mb-1.5 font-mono uppercase\">CORE_ROUTING_SOURCE (核心路由源码，支持手写覆写)</label>",
        "             <textarea id=\"clash_rules\" class=\"w-full flex-1 p-4 rounded-lg text-xs font-mono min-h-[400px] border border-gray-700 text-gray-300\">__CLASH_RULES__</textarea>",
        "           </div>",
        "        </div>",
        "      </div>",
        "      <div class=\"panel p-5 flex flex-col h-full\">",
        "        <div class=\"flex justify-between items-center border-b border-gray-800 pb-3 mb-4\">",
        "          <div class=\"flex gap-6\">",
        "            <button onclick=\"switchRightView('view-nodes')\" id=\"btn-view-nodes\" class=\"tab-btn active text-xs uppercase tracking-wider\">⚙️ 综合拓扑列表 (全局调度)</button>",
        "            <button onclick=\"switchRightView('view-yaml')\" id=\"btn-view-yaml\" class=\"tab-btn text-xs uppercase tracking-wider text-green-500\">🎯 实时内存编译全景 (YAML)</button>",
        "          </div>",
        "        </div>",
        "        <div id=\"view-nodes\" class=\"view-content flex-1 flex flex-col relative overflow-hidden\">",
        "          <div class=\"mb-4 flex flex-col xl:flex-row justify-between items-start xl:items-center bg-gray-900 p-3 rounded-lg border border-gray-700 gap-3\">",
        "            <span class=\"text-xs text-gray-400 leading-relaxed\">",
        "              📌 左侧与右侧的拖拽排序已达成 <span class=\"text-blue-400 font-bold bg-blue-900 bg-opacity-40 px-1 rounded\">双向数据流绑定</span>。<br>",
        "              ✨ 点击 <span class=\"text-blue-400 font-bold\">📍积木溯源</span> 可触发闪烁定位。<br>",
        "              🗑️ 点 <span class=\"text-red-400 font-bold\">删除</span> 丢入黑名单（全局生效）。",
        "            </span>",
        "            <div class=\"flex gap-2 w-full xl:w-auto\">",
        "              <button onclick=\"toggleDeletedMode()\" id=\"btn-toggle-del\" class=\"px-3 py-2 bg-gray-800 hover:bg-gray-700 text-[11px] font-bold text-gray-300 rounded border border-gray-600 transition\">👁️ 显隐黑名单</button>",
        "              <button onclick=\"resetNodeMap()\" class=\"px-3 py-2 bg-gray-800 hover:bg-gray-700 text-[11px] font-bold text-gray-300 rounded border border-gray-600 transition\">🧹 恢复默认重置</button>",
        "              <button onclick=\"pullFreshNodes()\" class=\"px-5 py-2 bg-gray-700 hover:bg-gray-600 text-xs font-bold text-white rounded border border-gray-500 transition shadow\">🔄 刷新拓扑数据</button>",
        "            </div>",
        "          </div>",
        "          <div id=\"nodes-render-bucket\" class=\"flex-1 overflow-y-auto space-y-2 pr-2 pb-4\">",
        "            <div class=\"h-full flex items-center justify-center text-gray-500 text-xs font-mono\">Initializing UI Architecture...</div>",
        "          </div>",
        "        </div>",
        "        <div id=\"view-yaml\" class=\"hidden view-content flex-1 flex flex-col relative\">",
        "          <div class=\"mb-4 flex justify-end\">",
        "            <button onclick=\"compilePipelineAndPreview()\" class=\"px-5 py-2 bg-gray-800 hover:bg-gray-700 text-xs font-bold text-white rounded border border-gray-600 transition\">🚀 触发内存编译输出测试</button>",
        "          </div>",
        "          <textarea id=\"preview_box\" readonly class=\"flex-1 w-full p-4 rounded-lg text-xs text-green-500 bg-black border border-gray-800 font-mono\"></textarea>",
        "        </div>",
        "      </div>",
        "    </div>",
        "  </div>",
        "  <script>",
        "    // STATE V5",
        "    function safeJsonDecode(encoded, fallback) {",
        "      try {",
        "        const raw = decodeURIComponent(encoded || '');",
        "        const parsed = JSON.parse(raw);",
        "        return parsed === null ? fallback : parsed;",
        "      } catch (e) {",
        "        return fallback;",
        "      }",
        "    }",
        "    window.globalNodeMap = safeJsonDecode('__NODE_MAP_ENCODED__', {});",
        "    window.visualGroups = safeJsonDecode('__VISUAL_GROUPS_ENCODED__', []);",
        "    window.visualRules = safeJsonDecode('__VISUAL_RULES_ENCODED__', []);",
        "    const ADVANCED_TEMPLATE = decodeURIComponent('__ADVANCED_TEMPLATE_ENCODED__');",
        "    const RESERVED_BASE_GROUPS = ['PROXY', 'Emby代理', 'TG', 'AI', 'YOUTUBE', 'FINAL', 'BLOCK', 'APPLE', 'AQARA', 'BANK', 'FINANCE', 'HOME-IP', 'FAKE-LOCATION', '🚀 节点选择', '♻️ 自动测速', 'DIRECT', 'REJECT'];",
        "    if (!window.globalNodeMap || Array.isArray(window.globalNodeMap) || typeof window.globalNodeMap !== 'object') window.globalNodeMap = {};",
        "    if (!Array.isArray(window.visualGroups)) window.visualGroups = [];",
        "    if (!Array.isArray(window.visualRules)) window.visualRules = [];",
        "    window.visualGroups = window.visualGroups.filter(g => g && g.name && !RESERVED_BASE_GROUPS.includes(g.name));",
        "    ",
        "    let sortableNodes;",
        "    let sortableRules;",
        "    let sortableManual;",
        "    window.showDeletedMode = false;",
        "    window.tempExtractedNodes = []; ",
        "    window.manualNodesArray = safeJsonDecode('__MANUAL_NODES_ARRAY_ENCODED__', []);",
        "    window.manualNodeSources = safeJsonDecode('__MANUAL_NODE_SOURCES_ENCODED__', []);",
        "    if (!Array.isArray(window.manualNodesArray)) window.manualNodesArray = [];",
        "    if (!Array.isArray(window.manualNodeSources)) window.manualNodeSources = [];",
        "    while (window.manualNodeSources.length < window.manualNodesArray.length) window.manualNodeSources.push('手动录入');",
        "    if (window.manualNodeSources.length > window.manualNodesArray.length) window.manualNodeSources = window.manualNodeSources.slice(0, window.manualNodesArray.length);",
        "    function escapeHtmlFront(unsafe) {",
        "      return String(unsafe || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '&quot;').replace(/'/g, '&#039;');",
        "    }",
        "    ",
        "    function safeB64DecodeFront(str) {",
        "      if (!str) return '';",
        "      str = String(str).replace(/-/g, '+').replace(/_/g, '/').replace(/\\s/g, '');",
        "      while (str.length % 4) { str += '='; }",
        "      try {",
        "        const bin = atob(str);",
        "        const bytes = new Uint8Array(bin.length);",
        "        for (let i = 0; i < bin.length; i++) { bytes[i] = bin.charCodeAt(i); }",
        "        return new TextDecoder('utf-8').decode(bytes);",
        "      } catch (e) { return ''; }",
        "    }",
        "    ",
        "    function getManualNodeName(raw) {",
        "        try {",
        "           let t = raw.trim();",
        "           if (/^(vmess|vless|trojan|ss|hysteria2|hy2):\\/\\//i.test(t)) {",
        "                let parts = t.split('#');",
        "                if(parts[1]) return decodeURIComponent(parts[1]).replace(/[\\\"\\'\\\\\\\\\\/]/g, '').trim();",
        "                return '未命名URI节点';",
        "           } else {",
        "                let match = raw.match(/name:\\s*(?:\\'([^']+)\\'|\\\"([^\"]+)\\\"|([^,{}\\#\\n\\r]+))/);",
        "                return match ? (match[1]||match[2]||match[3]).trim() : '未命名YAML节点';",
        "           }",
        "        } catch(e) { return '解析异常节点'; }",
        "    }",
        "    ",
        "    function renderManualNodesLeft() {",
        "        const container = document.getElementById('manual-nodes-list');",
        "        container.innerHTML = '';",
        "        if(window.manualNodesArray.length === 0) {",
        "            container.innerHTML = '<div class=\"text-xs text-gray-500 p-6 text-center border border-dashed border-gray-700 rounded-lg\">您还没有积木库。请从上方提取，或直接粘贴导入。</div>';",
        "            return;",
        "        }",
        "        ",
        "        let mapped = window.manualNodesArray.map((raw, idx) => {",
        "             let parsedName = getManualNodeName(raw);",
        "             let gMap = window.globalNodeMap[parsedName];",
        "             let order = (gMap && gMap.order !== undefined) ? gMap.order : idx + 99999;",
        "             let source = window.manualNodeSources[idx] || '手动录入';",
        "             return { idx, raw, source, parsedName, order };",
        "        });",
        "        mapped.sort((a, b) => a.order - b.order);",
        "        window.manualNodesArray = mapped.map(m => m.raw); ",
        "        window.manualNodeSources = mapped.map(m => m.source || '手动录入');",
        "        ",
        "        window.manualNodesArray.forEach((raw, newIdx) => {",
        "             const div = document.createElement('div');",
        "             div.className = 'flex items-stretch gap-2 bg-[#111111] p-3 rounded-lg border border-gray-700 manual-node-box transition-all duration-300 shadow-sm';",
        "             div.id = 'manual-box-' + newIdx;",
        "             div.dataset.idx = newIdx;",
        "             ",
        "             let sourceValue = window.manualNodeSources[newIdx] || '手动录入';",
        "             let sourceDisplay = sourceValue;",
        "             if (sourceDisplay.startsWith('http')) {",
        "               try {",
        "                 let u = new URL(sourceDisplay);",
        "                 sourceDisplay = u.hostname + (u.pathname.length > 18 ? u.pathname.substring(0, 18) + '...' : u.pathname);",
        "               } catch(e) {}",
        "             }",
        "             let isUri = /^(vmess|vless|trojan|ss|hysteria2|hy2):\\/\\//i.test(raw.trim());",
        "             let rows = isUri ? 2 : Math.max(4, Math.min(15, raw.split('\\n').length));",
        "             let height = isUri ? '52px' : '80px';",
        "             let blockType = isUri ? '🔗 URL链接模式' : '📝 YAML源码模式';",
        "             ",
        "             div.innerHTML = '<div class=\"flex flex-col items-center justify-start gap-1 mt-1 cursor-grab manual-drag-handle text-gray-500 hover:text-white px-1 w-8\">' +",
        "                             '<span class=\"text-xs font-bold bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded shadow-inner\">#' + (newIdx + 1) + '</span>' +",
        "                             '<span class=\"text-xl leading-none mt-1\">⠿</span>' +",
        "                             '</div>' +",
        "                             '<div class=\"flex-1 flex flex-col gap-1.5 w-full overflow-hidden\">' +",
        "                             '  <div class=\"flex justify-between items-center px-1\">' +",
        "                             '      <span class=\"text-[10px] text-green-500 font-bold bg-green-900 bg-opacity-20 px-2 py-0.5 rounded border border-green-800 border-opacity-50\">' + blockType + '</span>' +",
        "                             '  </div>' +",
        "                             '  <textarea onchange=\"updateManualNode(' + newIdx + ', this.value)\" class=\"w-full bg-black text-white text-xs font-mono p-2.5 rounded border border-gray-600 focus:border-blue-500 focus:bg-gray-900 outline-none transition-all break-all\" style=\"min-height: ' + height + '; resize: vertical;\" spellcheck=\"false\" rows=\"' + rows + '\">' + escapeHtmlFront(raw) + '</textarea>' +",
        "                             '  <div class=\"flex items-center justify-between gap-2 mt-1 px-1\">' +",
        "                             '    <button type=\"button\" class=\"manual-source-btn text-blue-400 bg-blue-900 bg-opacity-20 hover:bg-opacity-40 px-2 py-1 rounded font-bold truncate max-w-full border border-blue-800 border-opacity-40 shadow-sm transition text-[10px]\">📍 源: ' + escapeHtmlFront(sourceDisplay) + '</button>' +",
        "                             '  </div>' +",
        "                             '</div>' +",
        "                             '<button onclick=\"deleteManualNode(' + newIdx + ')\" class=\"text-red-400 hover:text-white bg-red-900 bg-opacity-40 hover:bg-opacity-80 px-3 rounded-md font-bold transition ml-1 flex flex-col items-center justify-center border border-red-900\"><span>🗑️</span><span class=\"text-[10px] mt-1\">删除</span></button>';",
        "             const sourceBtn = div.querySelector('.manual-source-btn');",
        "             if (sourceBtn) sourceBtn.addEventListener('click', () => highlightSource(sourceValue, getManualNodeName(raw)));",
        "             container.appendChild(div);",
        "        });",
        "        ",
        "        if(sortableManual) sortableManual.destroy();",
        "        sortableManual = new Sortable(container, {",
        "            animation: 150, handle: '.manual-drag-handle', ghostClass: 'sortable-ghost',",
        "            onEnd: () => {",
        "                let newArr = [];",
        "                let newSources = [];",
        "                document.querySelectorAll('.manual-node-box').forEach(el => {",
        "                    let oldIdx = parseInt(el.dataset.idx);",
        "                    newArr.push(window.manualNodesArray[oldIdx]);",
        "                    newSources.push(window.manualNodeSources[oldIdx] || '手动录入');",
        "                });",
        "                window.manualNodesArray = newArr;",
        "                window.manualNodeSources = newSources;",
        "                window.manualNodesArray.forEach((raw, idx) => {",
        "                    let name = getManualNodeName(raw);",
        "                    if (!window.globalNodeMap[name]) window.globalNodeMap[name] = {};",
        "                    window.globalNodeMap[name].order = idx;",
        "                });",
        "                renderManualNodesLeft();",
        "                pullFreshNodes(); ",
        "            }",
        "        });",
        "    }",
        "    function addManualNodes() {",
        "        let ta = document.getElementById('bulk_add_manual');",
        "        let val = ta.value.trim();",
        "        if(!val) return;",
        "        ",
        "        // 🧠 前端智能拦截：自动解密粘贴进来的纯 Base64 乱码块",
        "        if (!val.includes(' ') && !val.includes('proxies:') && !/^(vmess|vless|trojan|ss|hysteria2|hy2):\\/\\//i.test(val)) {",
        "            let decoded = safeB64DecodeFront(val);",
        "            if (decoded && (decoded.includes('proxies:') || /^(vmess|vless|trojan|ss|hysteria2|hy2):\\/\\//i.test(decoded) || decoded.includes('- name:'))) {",
        "                val = decoded;",
        "                alert('✨ 已为您自动识别并解密了 Base64 密文格式！');",
        "            }",
        "        }",
        "        ",
        "        let lines = val.split('\\n');",
        "        let curr = [];",
        "        for(let l of lines) {",
        "            let t = l.trim();",
        "            if(!t && curr.length === 0) continue;",
        "            if(/^(vmess|vless|trojan|ss|hysteria2|hy2):\\/\\//i.test(t)) {",
        "                if(curr.length > 0) { window.manualNodesArray.push(curr.join('\\n').trim()); window.manualNodeSources.push('手动录入'); curr = []; }",
        "                window.manualNodesArray.push(t);",
        "                window.manualNodeSources.push('手动录入');",
        "            } else if(t.startsWith('- name:') || (t.startsWith('-') && t.includes('name:'))) {",
        "                if(curr.length > 0) { window.manualNodesArray.push(curr.join('\\n').trim()); window.manualNodeSources.push('手动录入'); curr = []; }",
        "                curr.push(l);",
        "            } else {",
        "                curr.push(l);",
        "            }",
        "        }",
        "        if(curr.length > 0) { window.manualNodesArray.push(curr.join('\\n').trim()); window.manualNodeSources.push('手动录入'); }",
        "        ta.value = '';",
        "        renderManualNodesLeft();",
        "        pullFreshNodes();",
        "    }",
        "    function updateManualNode(idx, val) {",
        "        window.manualNodesArray[idx] = val;",
        "        pullFreshNodes();",
        "    }",
        "    function deleteManualNode(idx) {",
        "        if(confirm('🗑️ 确定从库中粉碎这块积木吗？')) {",
        "            window.manualNodesArray.splice(idx, 1);",
        "            window.manualNodeSources.splice(idx, 1);",
        "            renderManualNodesLeft();",
        "            pullFreshNodes();",
        "        }",
        "    }",
        "    function clearManualNodes() {",
        "        if(confirm('🚨 危险警告：这会瞬间清空所有的积木节点，且无法撤销！确定执行吗？')) {",
        "            window.manualNodesArray = [];",
        "            window.manualNodeSources = [];",
        "            renderManualNodesLeft();",
        "            pullFreshNodes();",
        "        }",
        "    }",
        "    ",
        "    function toggleDeletedMode() {",
        "        window.showDeletedMode = !window.showDeletedMode;",
        "        pullFreshNodes();",
        "    }",
        "    function switchLeftTab(id) {",
        "      document.querySelectorAll('.ltab-content').forEach(el => el.classList.add('hidden'));",
        "      document.querySelectorAll('#btn-ltab-nodes, #btn-ltab-rules').forEach(el => el.classList.remove('active'));",
        "      document.getElementById(id).classList.remove('hidden');",
        "      document.getElementById('btn-' + id).classList.add('active');",
        "      if(id === 'ltab-rules') refreshTargetDropdown();",
        "    }",
        "    function switchRightView(id) {",
        "      document.querySelectorAll('.view-content').forEach(el => el.classList.add('hidden'));",
        "      document.querySelectorAll('#btn-view-nodes, #btn-view-yaml').forEach(el => el.classList.remove('active'));",
        "      document.getElementById(id).classList.remove('hidden');",
        "      document.getElementById('btn-' + id).classList.add('active');",
        "    }",
        "    async function requestGateway(payload) {",
        "      const res = await fetch('/api/action', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });",
        "      if(!res.ok) throw new Error('网关拒绝应答');",
        "      return await res.json();",
        "    }",
        "    async function parseAndPick() {",
        "        const url = document.getElementById('temp_parse_url').value.trim();",
        "        if(!url) return alert('请先贴入机场的订阅链接');",
        "        const bucket = document.getElementById('parse-result-bucket');",
        "        bucket.classList.remove('hidden');",
        "        bucket.innerHTML = '<div class=\"text-blue-400 text-xs p-2 animate-pulse\">⚡ 正在穿透解析订阅，请稍候...</div>';",
        "        try {",
        "            const data = await requestGateway({ parse_url: url });",
        "            if(!data.parsedNodes || data.parsedNodes.length === 0) {",
        "                bucket.innerHTML = '<div class=\"text-red-400 text-xs p-2 leading-relaxed\">❌ 解析失败！<br>原因分析：可能是机场开启了强力防爬虫，或者屏蔽了 Cloudflare 节点。<br><br>💡 <b>终极避障法：</b><br>请在您的浏览器里直接打开上方那段链接，把网页里满屏的乱码（Base64 密文或 YAML 源码）全选复制，直接到下方的「批量录入」框粘贴，点【➕ 录入】，前端系统会自动为您完美解密并转为积木入库！</div>';",
        "                return;",
        "            }",
        "            bucket.innerHTML = '';",
        "            window.tempExtractedNodes = data.parsedNodes; ",
        "            data.parsedNodes.forEach((n, idx) => {",
        "                const div = document.createElement('div');",
        "                div.className = 'flex justify-between items-center bg-gray-900 p-2 rounded border border-gray-700 hover:border-gray-500 transition';",
        "                let safeN = n.name.replace(/</g, '&lt;').replace(/>/g, '&gt;');",
        "                div.innerHTML = '<span class=\"text-xs text-gray-300 truncate pr-2 flex-1\">' + safeN + '</span>' +",
        "                                '<button id=\"btn-extract-' + idx + '\" onclick=\"importSingleNode(' + idx + ')\" class=\"px-3 py-1.5 bg-blue-900 hover:bg-blue-700 text-blue-300 hover:text-white text-[11px] rounded font-bold transition whitespace-nowrap shadow border border-blue-800\">➕ 提取入库</button>';",
        "                bucket.appendChild(div);",
        "            });",
        "        } catch(e) {",
        "            bucket.innerHTML = '<div class=\"text-red-400 text-xs p-2\">连接错误: ' + e.message + '</div>';",
        "        }",
        "    }",
        "    function importSingleNode(idx) {",
        "        const n = window.tempExtractedNodes[idx];",
        "        if (!n) return;",
        "        const btn = document.getElementById('btn-extract-' + idx);",
        "        window.manualNodesArray.push(n.rawYaml);",
        "        window.manualNodeSources.push(n.source || document.getElementById('temp_parse_url').value.trim() || '手动录入');",
        "        if (btn) {",
        "            btn.innerText = '✅ 已收录';",
        "            btn.className = 'px-3 py-1.5 bg-gray-800 text-gray-500 text-[11px] rounded font-bold transition whitespace-nowrap shadow-inner border border-gray-700';",
        "            btn.disabled = true;",
        "        }",
        "        renderManualNodesLeft();",
        "        pullFreshNodes();",
        "    }",
        "    function loadPersonalizedTemplate() {",
        "      if(confirm('⚠️ 这将覆盖现有的路由源码，植入 Accademia 全能策略框架，确定执行吗？')) {",
        "         document.getElementById('clash_rules').value = ADVANCED_TEMPLATE;",
        "      }",
        "    }",
        "    function renderVisualGroups() {",
        "      const container = document.getElementById('visual-groups-list');",
        "      container.innerHTML = '';",
        "      if(window.visualGroups.length === 0) {",
        "         container.innerHTML = '<span class=\"text-gray-500 text-[10px]\">无额外可视策略组</span>';",
        "         return;",
        "      }",
        "      window.visualGroups.forEach((g, idx) => {",
        "        const div = document.createElement('div');",
        "        div.className = 'flex justify-between items-center text-[10px] text-gray-300 bg-gray-900 p-1.5 rounded border border-gray-700';",
        "        div.innerHTML = '<span><b class=\"text-purple-400\">' + g.name + '</b> (' + g.type + ')</span><button onclick=\"removeGroup(' + idx + ')\" class=\"text-red-500 hover:text-white font-bold\">删</button>';",
        "        container.appendChild(div);",
        "      });",
        "      refreshTargetDropdown();",
        "    }",
        "    function addCustomGroup() {",
        "      const name = document.getElementById('new-group-name').value.trim();",
        "      const type = document.getElementById('new-group-type').value;",
        "      if(!name) { alert('请填写名称'); return; }",
        "      if(window.visualGroups.some(g => g.name === name) || RESERVED_BASE_GROUPS.includes(name)) {",
        "        alert('名称与系统默认框架冲突或已存在！'); return;",
        "      }",
        "      window.visualGroups.push({ name: name, type: type });",
        "      document.getElementById('new-group-name').value = '';",
        "      renderVisualGroups();",
        "    }",
        "    function removeGroup(idx) {",
        "      const deleted = window.visualGroups.splice(idx, 1)[0];",
        "      window.visualRules = window.visualRules.filter(r => r.target !== deleted.name);",
        "      renderVisualGroups();",
        "      renderVisualRules();",
        "    }",
        "    function refreshTargetDropdown() {",
        "      const select = document.getElementById('new-rule-target');",
        "      select.innerHTML = '';",
        "      const baseTargets = ['DIRECT', 'REJECT', 'PROXY', 'Emby代理', 'TG', 'AI', 'YOUTUBE', 'FINAL', 'BLOCK', 'APPLE', 'AQARA', 'BANK', 'FINANCE', 'HOME-IP', 'FAKE-LOCATION', '🚀 节点选择', '♻️ 自动测速'];",
        "      const userTargets = window.visualGroups.map(g => g.name);",
        "      [...userTargets, ...baseTargets].forEach(t => {",
        "         let opt = document.createElement('option');",
        "         opt.value = t; opt.innerText = t;",
        "         select.appendChild(opt);",
        "      });",
        "    }",
        "    function renderVisualRules() {",
        "      const container = document.getElementById('visual-rules-list');",
        "      container.innerHTML = '';",
        "      if(window.visualRules.length === 0) {",
        "         container.innerHTML = '<span class=\"text-gray-500 text-[10px]\">无可视域分流规则</span>';",
        "         return;",
        "      }",
        "      window.visualRules.forEach((r, idx) => {",
        "         const div = document.createElement('div');",
        "         div.className = 'rule-item flex justify-between items-center text-[10px] text-gray-300 bg-gray-900 p-1.5 rounded border border-gray-700';",
        "         div.dataset.idx = idx;",
        "         div.innerHTML = '<span class=\"drag-handle text-gray-500 hover:text-white px-1 cursor-grab\">⠿</span><span class=\"truncate pr-2 flex-1\">- ' + r.type + ',' + r.value + ',<b class=\"text-blue-400\">' + r.target + '</b></span><button onclick=\"removeRule(' + idx + ')\" class=\"text-red-500 hover:text-white font-bold px-2\">删</button>';",
        "         container.appendChild(div);",
        "      });",
        "      if(sortableRules) sortableRules.destroy();",
        "      sortableRules = new Sortable(container, {",
        "         animation: 150, handle: '.drag-handle',",
        "         onEnd: () => {",
        "            let newArray = [];",
        "            document.querySelectorAll('.rule-item').forEach(el => {",
        "               newArray.push(window.visualRules[parseInt(el.dataset.idx)]);",
        "            });",
        "            window.visualRules = newArray;",
        "            renderVisualRules();",
        "         }",
        "      });",
        "    }",
        "    function addCustomRule() {",
        "      const value = document.getElementById('new-rule-value').value.trim();",
        "      if(!value) { alert('请输入域名后缀或关键词'); return; }",
        "      window.visualRules.unshift({",
        "        type: document.getElementById('new-rule-type').value, ",
        "        value: value,",
        "        target: document.getElementById('new-rule-target').value",
        "      });",
        "      document.getElementById('new-rule-value').value = '';",
        "      renderVisualRules();",
        "    }",
        "    function removeRule(idx) {",
        "      window.visualRules.splice(idx, 1);",
        "      renderVisualRules();",
        "    }",
        "    function syncNodeMapFromUI() {",
        "       document.querySelectorAll('.node-row').forEach((item, index) => {",
        "          let orig = item.dataset.orig;",
        "          let newName = item.querySelector('.node-input-text').value.trim();",
        "          if(!window.globalNodeMap[orig]) window.globalNodeMap[orig] = {};",
        "          window.globalNodeMap[orig].newName = newName || orig;",
        "          window.globalNodeMap[orig].order = index;",
        "          window.globalNodeMap[orig].deleted = window.globalNodeMap[orig].deleted || false;",
        "       });",
        "    }",
        "    function deleteNode(btn) {",
        "       if(confirm('确定将该节点丢入黑名单？（上方可开启显示黑名单并随时还原）')) {",
        "          const item = btn.closest('.node-row');",
        "          const orig = item.dataset.orig;",
        "          item.remove();",
        "          if(!window.globalNodeMap[orig]) window.globalNodeMap[orig] = {};",
        "          window.globalNodeMap[orig].deleted = true;",
        "          syncNodeMapFromUI();",
        "          pullFreshNodes();",
        "       }",
        "    }",
        "    function restoreNode(btn) {",
        "        const item = btn.closest('.node-row');",
        "        const orig = item.dataset.orig;",
        "        if(!window.globalNodeMap[orig]) window.globalNodeMap[orig] = {};",
        "        window.globalNodeMap[orig].deleted = false;",
        "        syncNodeMapFromUI();",
        "        pullFreshNodes();",
        "    }",
        "    function resetNodeMap() {",
        "       if(confirm('⚠️ 警告：重置将丢失所有的节点更名、重排和黑名单设定，回到原貌！')) {",
        "           window.globalNodeMap = {};",
        "           pullFreshNodes();",
        "           renderManualNodesLeft();",
        "       }",
        "    }",
        "    async function factoryReset() {",
        "        if(confirm('🚨 危险操作：此操作将彻底清空您所有的高级规则、黑名单和个人节点，让面板如同新装的一样！确定吗？')) {",
        "            try {",
        "               const res = await fetch('/api/save', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({",
        "                 custom_proxies: '',",
        "                 sub_urls: '',",
        "                 node_map: '{}',",
        "                 visual_groups: '[]',",
        "                 visual_rules: '[]',",
        "                 clash_rules: ADVANCED_TEMPLATE",
        "               })});",
        "               if(res.ok) { alert('重置成功！页面即将刷新。'); location.reload(); }",
        "            } catch(e) { alert('网络错误，请稍后再试'); }",
        "        }",
        "    }",
        "    function highlightSource(sourceKey, nodeName) {",
        "       switchLeftTab('ltab-nodes');",
        "       setTimeout(() => {",
        "           if (sourceKey.startsWith('manual_')) {",
        "               let foundIdx = window.manualNodesArray.findIndex(raw => getManualNodeName(raw) === nodeName);",
        "               if(foundIdx !== -1) {",
        "                   let box = document.getElementById('manual-box-' + foundIdx);",
        "                   if(box) {",
        "                       box.scrollIntoView({behavior: 'smooth', block: 'center'});",
        "                       box.classList.add('flash-highlight');",
        "                       setTimeout(() => box.classList.remove('flash-highlight'), 2000);",
        "                       box.querySelector('textarea').focus();",
        "                   }",
        "               }",
        "           } else {",
        "              const textarea = document.getElementById('sub_urls');",
        "              const text = textarea.value;",
        "              const index = text.indexOf(sourceKey);",
        "              if (index !== -1) {",
        "                 textarea.focus();",
        "                 textarea.setSelectionRange(index, index + sourceKey.length);",
        "                 const lineHeight = 18;",
        "                 const currentLines = text.substring(0, index).split('\\n').length;",
        "                 textarea.scrollTop = Math.max(0, (currentLines - 2) * lineHeight);",
        "              }",
        "           }",
        "       }, 50);",
        "    }",
        "    async function pullFreshNodes() {",
        "      const bucket = document.getElementById('nodes-render-bucket');",
        "      bucket.innerHTML = '<div class=\"text-blue-500 text-xs p-4 font-bold animate-pulse\">⚡ 正在同步并解析全局拓扑...</div>';",
        "      try {",
        "        const data = await requestGateway({",
        "          extract_only: true,",
        "          custom_proxies: window.manualNodesArray,",
        "          manual_node_sources: JSON.stringify(window.manualNodeSources),",
        "          sub_urls: document.getElementById('sub_urls').value",
        "        });",
        "        let originalNodes = data.originalNodes || [];",
        "        let nodeSources = data.nodeSources || [];",
        "        let rawBlocks = data.rawBlocks || [];",
        "        let nodesArray = originalNodes.map((orig, idx) => {",
        "           let mapped = window.globalNodeMap[orig];",
        "           return {",
        "             orig: orig,",
        "             source: nodeSources[idx] || '手动输入',",
        "             rawYaml: rawBlocks[idx] || '',",
        "             currentName: mapped && mapped.newName ? mapped.newName : orig,",
        "             isDeleted: mapped && mapped.deleted ? true : false,",
        "             order: mapped && mapped.order !== undefined ? mapped.order : idx + 99999",
        "           };",
        "        }).sort((a, b) => a.order - b.order);",
        "        bucket.innerHTML = '';",
        "        let activeRenderCount = 0;",
        "        nodesArray.forEach(n => {",
        "           if (n.isDeleted && !window.showDeletedMode) return; ",
        "           activeRenderCount++;",
        "           const div = document.createElement('div');",
        "           let rowClass = n.isDeleted ? 'node-row flex items-center gap-3 bg-black p-2.5 rounded-lg border border-gray-800 transition cursor-default shadow-sm opacity-40 grayscale' : 'node-row flex items-center gap-3 bg-black p-2.5 rounded-lg border border-gray-800 hover:border-gray-600 transition cursor-default shadow-sm';",
        "           div.className = rowClass;",
        "           div.dataset.orig = n.orig;",
        "           div.dataset.source = n.source;",
        "           div.dataset.raw = encodeURIComponent(n.rawYaml);",
        "           let displaySource = n.source;",
        "           if (displaySource.startsWith('manual_')) {",
        "                displaySource = `积木溯源`;",
        "           } else if (displaySource.startsWith('http')) {",
        "              try {",
        "                let urlObj = new URL(displaySource);",
        "                displaySource = urlObj.hostname + (urlObj.pathname.length > 8 ? urlObj.pathname.substring(0, 8) + '...' : urlObj.pathname);",
        "              } catch(e) {}",
        "           }",
        "           let safeName = n.currentName.replace(/\"/g, '&quot;');",
        "           ",
        "           let actionBtns = '';",
        "           if (n.isDeleted) {",
        "               actionBtns = '<button onclick=\"restoreNode(this)\" class=\"px-3.5 py-2 bg-green-950 hover:bg-green-800 text-green-500 hover:text-white text-[10px] rounded font-bold transition whitespace-nowrap ml-1 border border-green-900 border-opacity-50 shadow\">♻️ 还原</button>';",
        "           } else {",
        "               let delBtn = '<button onclick=\"deleteNode(this)\" class=\"px-3.5 py-2 bg-red-950 hover:bg-red-800 text-red-500 hover:text-white text-[10px] rounded font-bold transition whitespace-nowrap ml-1 border border-red-900 border-opacity-50 shadow\">🗑️ 删除</button>';",
        "               actionBtns = delBtn;",
        "           }",
        "           ",
        "           div.innerHTML = '<span class=\"drag-handle text-gray-600 hover:text-white px-1 text-lg cursor-grab\">⠿</span>' +",
        "           '<div class=\"flex-1 flex flex-col min-w-0 pr-2 border-r border-gray-800\">' +",
        "           '  <input type=\"text\" class=\"node-input-text bg-transparent text-[13px] font-bold text-gray-200 focus:outline-none border-b border-transparent focus:border-blue-500 pb-0.5 w-full\" value=\"' + safeName + '\">' +",
        "           '  <div class=\"flex items-center justify-between mt-1 text-[10px]\">' +",
        "           '    <button onclick=\"highlightSource(\\'' + n.source + '\\', \\'' + n.orig.replace(/\\'/g, \"\\\\'\") + '\\')\" class=\"text-blue-400 bg-blue-900 bg-opacity-20 hover:bg-opacity-40 px-1.5 py-0.5 rounded font-bold truncate max-w-[60%] border border-blue-800 border-opacity-40 shadow-sm transition\">📍源: ' + displaySource + '</button>' +",
        "           '  </div>' +",
        "           '</div>' + actionBtns;",
        "           bucket.appendChild(div);",
        "        });",
        "        if (activeRenderCount === 0) {",
        "           bucket.innerHTML = '<div class=\"text-gray-500 text-xs p-4\">当前拓扑没有任何节点，请在左侧添加。</div>'; ",
        "        }",
        "        if(sortableNodes) sortableNodes.destroy();",
        "        sortableNodes = new Sortable(bucket, { ",
        "           animation: 150, handle: '.drag-handle', ghostClass: 'sortable-ghost', ",
        "           onEnd: () => {",
        "               syncNodeMapFromUI(); ",
        "               renderManualNodesLeft(); // 双向同步：右侧排序后，左侧积木重新对齐",
        "           }",
        "        });",
        "        document.querySelectorAll('.node-input-text').forEach(i => { i.addEventListener('input', syncNodeMapFromUI); });",
        "      } catch(e) { bucket.innerHTML = '<div class=\"text-red-500 text-xs p-4\">' + e.message + '</div>'; }",
        "    }",
        "    async function compilePipelineAndPreview() {",
        "      const box = document.getElementById('preview_box');",
        "      box.value = '⚡ 编译器就绪，正在编译生成...';",
        "      try {",
        "        const data = await requestGateway({",
        "          custom_proxies: window.manualNodesArray,",
        "          manual_node_sources: JSON.stringify(window.manualNodeSources),",
        "          sub_urls: document.getElementById('sub_urls').value,",
        "          node_map: JSON.stringify(window.globalNodeMap),",
        "          visual_groups: JSON.stringify(window.visualGroups),",
        "          visual_rules: JSON.stringify(window.visualRules),",
        "          clash_rules: document.getElementById('clash_rules').value",
        "        });",
        "        box.value = data.config || '输出空白';",
        "      } catch(e) { box.value = '❌ 编译失败：' + e.message; }",
        "    }",
        "    async function saveAllToKV() {",
        "      const btn = document.querySelector('button[onclick=\"saveAllToKV()\"]');",
        "      btn.innerText = '云端固化中...';",
        "      try {",
        "        const res = await fetch('/api/save', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({",
        "          custom_proxies: window.manualNodesArray.join('\\n\\n'),",
        "          manual_node_sources: JSON.stringify(window.manualNodeSources),",
        "          sub_urls: document.getElementById('sub_urls').value,",
        "          node_map: JSON.stringify(window.globalNodeMap),",
        "          visual_groups: JSON.stringify(window.visualGroups),",
        "          visual_rules: JSON.stringify(window.visualRules),",
        "          clash_rules: document.getElementById('clash_rules').value",
        "        })});",
        "        if(res.ok) {",
        "          alert('🎉 全景状态保存成功！订阅已实时更新！');",
        "          renderVisualGroups();",
        "        } else {",
        "          alert('❌ 同步中断');",
        "        }",
        "      } catch(e) { alert('无法连接边缘网关'); }",
        "      btn.innerText = '💾 全局固化并部署生效';",
        "    }",
        "    // 🚀 大轴初始化指令",
        "    refreshTargetDropdown();",
        "    renderVisualGroups();",
        "    renderVisualRules();",
        "    renderManualNodesLeft();",
        "    pullFreshNodes();",
        "  </script>",
        "</body>",
        "</html>"
      ];

      return new Response(htmlLines.join('\n')
          .replace('__ORIGIN__', () => url.origin)
          .replace('__DB_STATUS__', () => KV ? '✅ Database Online' : '❌ Database Offline')
          .replace('__SUB_URLS__', () => escapeHtml(sub_urls))
          .replace('__MANUAL_NODES_ARRAY_ENCODED__', () => safeEncode(JSON.stringify(customProxiesArr)))
          .replace('__CLASH_RULES__', () => escapeHtml(clash_rules))
          .replace('__NODE_MAP_ENCODED__', () => safeEncode(node_map_init))
          .replace('__VISUAL_GROUPS_ENCODED__', () => safeEncode(visual_groups_init))
          .replace('__VISUAL_RULES_ENCODED__', () => safeEncode(visual_rules_init))
          .replace('__MANUAL_NODE_SOURCES_ENCODED__', () => safeEncode(manual_node_sources_init))
          .replace('__ADVANCED_TEMPLATE_ENCODED__', () => safeEncode(ACCADEMIA_TEMPLATE)), 
      { headers: { "Content-Type": "text/html; charset=utf-8" } });

    } catch (globalCrash) {
      return new Response(`🚨 Worker Crash 🚨\n${globalCrash.message}\n${globalCrash.stack}`, { status: 500, headers: { 'Content-Type': 'text/plain;charset=utf-8' } });
    }
  }
};
