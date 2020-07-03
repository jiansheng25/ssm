package com.jian.service;

import com.jian.pojo.Xuanjianghui;

import java.util.List;

public interface XuanjianghuiService {
    public List<Xuanjianghui> findAllXjhByPage(int pageIndex);

    public Xuanjianghui findXjhById(int xuanjiangId);

    public int postXuanjianghui(Xuanjianghui xjh);

    public int deleteXuan(int xuanjiangId);
}
