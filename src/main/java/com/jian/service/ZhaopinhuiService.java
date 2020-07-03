package com.jian.service;

import com.jian.pojo.Zhaopinhui;
import com.jian.pojo.Zph_company;

import java.util.List;

public interface ZhaopinhuiService {
    public List<Zhaopinhui> findAllZphByPage(int pageIndex);
    public List<Zhaopinhui> findAllCompanyByZphId(int zphId);
}
