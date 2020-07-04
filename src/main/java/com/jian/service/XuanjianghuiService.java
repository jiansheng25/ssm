package com.jian.service;

import com.jian.pojo.Xuanjianghui;

import java.util.List;

public interface XuanjianghuiService {
    List<Xuanjianghui> findAllXjhByPage(int pageIndex);

    Xuanjianghui findXjhById(int xuanjiangId);

    int postXuanjianghui(Xuanjianghui xjh);

    int deleteXuan(int xuanjiangId);
}
