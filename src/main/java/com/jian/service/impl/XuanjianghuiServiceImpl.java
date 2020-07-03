package com.jian.service.impl;

import com.jian.dao.IXuanjianghuiDao;
import com.jian.pojo.Xuanjianghui;
import com.jian.service.XuanjianghuiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class XuanjianghuiServiceImpl implements XuanjianghuiService {
    @Autowired
    IXuanjianghuiDao xuanjianghuiDao;

    @Override
    public List<Xuanjianghui> findAllXjhByPage(int pageIndex) {
        return xuanjianghuiDao.findAllXjhByPage((pageIndex-1)*9);
    }

    @Override
    public Xuanjianghui findXjhById(int xuanjiangId) {
        return xuanjianghuiDao.findXjhById(xuanjiangId);
    }

    @Override
    public int postXuanjianghui(Xuanjianghui xjh) {
        return xuanjianghuiDao.postXuanjianghui(xjh);
    }

    @Override
    public int deleteXuan(int xuanjiangId) {
        return xuanjianghuiDao.deleteXuan(xuanjiangId);
    }
}
