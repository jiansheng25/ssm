package com.jian.service.impl;

import com.jian.dao.IZhaopinhuiDao;
import com.jian.pojo.Zhaopinhui;
import com.jian.pojo.Zph_company;
import com.jian.service.ZhaopinhuiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZhaopinhuiServiceImpl implements ZhaopinhuiService {
    @Autowired
    IZhaopinhuiDao zhaopinhuiDao;


    @Override
    public List<Zhaopinhui> findAllZphByPage(int pageIndex) {
        return zhaopinhuiDao.findAllZphByPage((pageIndex-1)*9);
    }

    @Override
    public List<Zhaopinhui> findAllCompanyByZphId(int zphId) {
        return zhaopinhuiDao.findAllCompanyByZphId(zphId);
    }

}
